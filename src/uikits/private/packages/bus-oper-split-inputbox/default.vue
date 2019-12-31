<template>
  <base-el-select
    @modify-options="modifyloacalOptions"
    v-model="modelValue"
    @change="change"
    @clear="clear"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :multiple="multiple"
    :splitChar="splitChar"
    :allow-create="allowCreate"
    :size="size"
    filterable
    :filter-method="filterMethod"
    :remote="remote"
    :loading="loading"
    :remote-method="remoteMethod"
    @focus="focus"
    @blur="blur"
    @visible-change="visibleChange"
    :orgOptions="options||[]"
  >
    <el-option
      v-for="(item,index) in optionData"
      :key="(item.label || '') + index + ''"
      :label="item.label + ''"
      :value="item.value + ''"
      :disabled="item.disabled || false"
    >
      <span v-if="item.custom" style="float: left">{{ item.label }}</span>
      <span
        v-if="item.custom"
        style="float: right; color: #8492a6; font-size: 13px"
      >{{ item.value }}</span>
    </el-option>
    <el-button type="text" v-if="hasMore" @click="hasMoreClick" style="margin-left:20px">加载更多</el-button>
  </base-el-select>
</template>

<script>
import baseElSelect from "./src/select.vue";
export default {
  data() {
    return {
      localOptions: this.options || [], // 本地选项
      spliIndex: 1,
      searchData: undefined,
      hasMore: false,
      extraMapIndex: 0,
      extraMap: {} //搜索缓存
    };
  },
  props: {
    splitChar: {
      default: "|"
    },
    maxLinesNum: {
      default: 20
    },
    placeholder: {
      default: "输入关键词"
    },
    options: {
      default: function() {
        return [
          {
            value: "选项1",
            label: "黄金糕"
          }
        ];
      }
    },
    disabled: {
      default: false
    },
    clearable: {
      default: false
    },
    multiple: {
      default: false
    },
    value: {
      default: ""
    },
    size: {
      default: "small"
    }
  },
  components: {
    baseElSelect
  },
  computed: {
    optionData: {
      get() {
        var _hasMore = false;
        if (this.searchData) {
          this.hasMore = _hasMore;
          return this.searchData;
        }
        let whole = [];
        // for(let index in this.options){
        for (let index in this.localOptions) {
          if (
            Object.prototype.toString.call(this.localOptions[index]) ===
            "[object Object]"
          ) {
            whole.push(this.localOptions[index]);
          }
        }

        var _options = whole;
        if (_options.length > this.maxLinesNum) {
          if (this.spliIndex * this.maxLinesNum < whole.length) {
            _options = whole.slice(0, this.spliIndex * this.maxLinesNum);
            _hasMore = true;
          }
        }

        var extraIndex = -1;
        if (this.modelValue != "" && _options.length != whole.length) {
          if (this.extraMap[this.modelValue] != undefined) {
            extraIndex = this.extraMap[this.modelValue] || -1;
          } else {
            extraIndex = -1;
            for (var i = this.extraMapIndex; i < whole.length; i++) {
              if (
                Object.prototype.toString.call(whole[i]) === "[object Object]"
              ) {
                this.extraMap[whole[i].value] = i;
                if (whole[i].value == this.modelValue) {
                  extraIndex = i;
                  this.extraMapIndex = i + 1;
                  break;
                }
              }
            }
          }
        }

        if (
          extraIndex != -1 &&
          _options.length <= extraIndex &&
          extraIndex < whole.length
        ) {
          _options.push(whole[extraIndex]);
          _hasMore = _options.length != whole.length;
        }

        this.hasMore = _hasMore;
        return _options;
      }
    },
    modelValue: {
      get() {
        if (this.multiple) {
          return this.keyArray(this.value);
        } else {
          return this.value + "";
        }
      },
      set(curVal) {
        var val = curVal;
        if (this.multiple) {
          val = JSON.stringify(val || []);
        } else {
          val = curVal + "";
        }
        this.$emit("input", val);
      }
    }
  },
  watch: {
    options: {
      handler(curVal, oldVal) {
        this.extraMap = {};
        this.extraMapIndex = 0;
        this.searchData = undefined;
        // options变化时，更新localOptions
        this.localOptions = this.options;
      },
      deep: true
    }
  },
  methods: {
    /**
     * 增加选项，选项从select组件传来
     */
    modifyloacalOptions(selfOpt) {
      selfOpt.label = selfOpt.value;
      selfOpt.currentLabel = selfOpt.label;
      let optIdx = Number.parseInt(this.localOptions.length, 10) + 1;
      // selfOpt.value = '选项'+ optIdx;
      selfOpt.currentValue = "选项" + optIdx;
      this.localOptions.push(selfOpt);
      if (this.value.indexOf(selfOpt.value) == -1) {
        let arr = this.modelValue;
        arr.push(selfOpt.value);
        this.modelValue = arr;
      }
    },

    keyArray(newValue) {
      if (typeof newValue == "undefined") {
        return [];
      } else if (typeof newValue == "string") {
        try {
          var temp = JSON.parse(newValue);
          if (temp instanceof Array) {
            return temp;
          }
          return [];
        } catch (_) {
          return [];
        }
      } else if (newValue instanceof Array) {
        return newValue;
      } else {
        return new Array(newValue);
      }
    },
    change(curVal) {
      this.$emit("change", curVal);
    },
    filterMethod(input) {
      if (!this.multiple) {
        this.modelValue = input;
      }
      if (input == "") {
        this.searchData = undefined;
        return;
      }
      var filter = this.localOptions.filter(item => {
        if (Object.prototype.toString.call(item) === "[object Object]") {
          return item.label.toLowerCase().indexOf(input.toLowerCase()) > -1;
        } else {
          return false;
        }
      });
      if (filter && filter.length === 1) {
        this.$emit("change", input);
      }
      this.searchData = filter;
    },
    clear() {
      this.searchData = undefined;
    },
    hasMoreClick() {
      this.spliIndex += 1;
      this.$forceUpdate();
    },
    focus(el) {
      this.$emit("focus", el);
    },
    blur(el) {
      this.$emit("blur", el);
    },
    visibleChange(visible) {
      this.$emit("visibleChange", visible);
    }
  }
};
</script>