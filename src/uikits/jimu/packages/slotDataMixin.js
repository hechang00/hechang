/*
 混入的符号重名，会优先使用组件的，所以混入的符号最好增加一个前缀
 */
let prefix = "m_slotData_";
let scopedDataPrefix = "m_scopedData_";

let slotDataMixin = {
  data() {
    return {
      slotDataMixinUnwatch: null,
    }
  },
  props: ['slotData', 'scopedData'],
  mounted() {
    this.mixin_reloadData(this.slotData, null, prefix)
    this.mixin_reloadData(this.scopedData, null, scopedDataPrefix)
  },
  beforeDestroy() {
    if (this.slotDataMixinUnwatch) {
      this.slotDataMixinUnwatch()
    };
  },
  watch: {
    slotData: {
      handler(curVal, oldVal) {
        // console.log("表格插槽数据变化>>>curVal=", curVal);
        let tableCurRow = curVal.row
        let tableOldRow = oldVal.row
        if (tableCurRow && tableOldRow) {
          if (JSON.stringify(tableCurRow) !== JSON.stringify(tableOldRow)) {
            this.mixin_reloadData(curVal, oldVal, prefix)
          }
        } else {
          this.mixin_reloadData(curVal, oldVal, prefix)
        }
      }
    },
    scopedData: {
      handler(curVal, oldVal) {
        if (JSON.stringify(curVal) !== JSON.stringify(oldVal)) {
          this.mixin_reloadData(curVal, oldVal, scopedDataPrefix)
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    deepCopy(obj) {
      if (typeof obj !== 'object') {
        return obj
      }
      var result = Array.isArray(obj) ? [] : {}
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
            result[key] = this.deepCopy(obj[key]) // 递归复制
          } else {
            result[key] = obj[key]
          }
        }
      }
      return result
    },
    mixin_unbind: function(pageName, keyMapType, prefix) {
      if (!window.isEditor || !pageName || !keyMapType) return
      for (let key in keyMapType) {
        let bind = prefix + key.replace(/-/g, '_')
        this.$store.dispatch('bindsDeleteValue', {
          bind: bind,
          pageName: pageName,
          global: false
        })
      }
    },
    mixin_bind: function(pageName, keyMapType, prefix) {
      if (!window.isEditor || !pageName || !keyMapType) return
      for (let key in keyMapType) {
        let bind = prefix + key.replace(/-/g, '_')
        let keyType = keyMapType[key];
        this.$store.dispatch('bindsAddNewValue', {
          bind: bind,
          type: keyType,
          nocheck: true,
          pageName: pageName,
          global: false
        })

        // 生成的页面变量绑定slotData
        this.slotDataMixinUnwatch = this.$watch(bind, function (val) {
          let subKeys = key.split('.');
          if (subKeys.length == 0) return;
          let lastSubKey = subKeys.pop();
          let target = this.slotData;
          for (let subKey of subKeys) {
            target = target[subKey];
          }
          target[lastSubKey] = val;
        });
      }
    },
    mixin_bind_var: function (pageName, curSlotData, oldSlotData, prefix) {
      console.log("当前插槽数据>>>", curSlotData);

      let oldKeyMapType = this.mixin_genKeyMapType(oldSlotData)
      let curKeyMapType = this.mixin_genKeyMapType(curSlotData)
      // debugger;
      // return;

      /* 解绑：当前不存在的才需要解绑 */
      let unbindKeyMapType = Object.assign({}, oldKeyMapType)
      for (let key in curKeyMapType) {
        // 存在则删除
        if (
          unbindKeyMapType[key] &&
          unbindKeyMapType[key] == curKeyMapType[key]
        )
          delete unbindKeyMapType[key]
      }
      this.mixin_unbind(pageName, unbindKeyMapType, prefix)
      console.log(`${pageName}解绑>>`, unbindKeyMapType);

      /* 绑定：过去不存在的才需要绑定 */
      let bindKeyMapType = Object.assign({}, curKeyMapType)
      for (let key in oldKeyMapType) {
        // 存在则删除
        if (bindKeyMapType[key] && bindKeyMapType[key] == oldKeyMapType[key])
          delete bindKeyMapType[key]
      }

      this.mixin_bind(pageName, bindKeyMapType, prefix)
      console.log(`${pageName}绑定>>`, bindKeyMapType);
    },
    mixin_reloadData: function(curVal, oldVal, prefix) {
      let pageName = this._data._currentPage
      let curSlotData = curVal || {}
      let oldSlotData = oldVal || {}
      this.mixin_bind_var(pageName, curSlotData, oldSlotData, prefix);

      let copySlotData = this.deepCopy(curSlotData)
      let assignObj = {}
      for (let key in copySlotData) {
        assignObj[prefix + key.replace(/-/g, '_')] = copySlotData[key]
      }
      Object.assign(this, assignObj)
    },

    mixin_genKeyMapType: function(slotData) {
      let keyMapType = {}
      if (!slotData) return keyMapType

      // let firstLetterUpper = str => {
      //   return str.charAt(0).toUpperCase() + str.slice(1)
      // }
      let getType = function(value) {
        if (value === undefined) {
          return 'null'
        }
        return Object.prototype.toString
          .call(value)
          .replace(/\[object|\s|\]/g, '')
      }

      let flattenObject = (obj, prefix = '') => {
        return Object.keys(obj)
          .filter(k => obj[k] !== null)
          .reduce((acc, k) => {
            const pre = prefix.length ? prefix + '.' : ''
            if (typeof obj[k] === 'object' && !Array.isArray(obj[k]))
              Object.assign(acc, flattenObject(obj[k], pre + k))
            else acc[pre + k] = obj[k]
            return acc
          }, {})
      }

      let flatObj = flattenObject(slotData)
      for (let key in flatObj) {
        let value = flatObj[key]
        if (value === undefined) continue // 初始值为undefind则忽略
        let keyType = getType(value)
        keyMapType[key] = keyType
      }

      return keyMapType
    }
  }
}

export default slotDataMixin;




