<template>
  <div :style="{backgroundColor:changeColor(backgroundColor)}">
    <el-menu
      ref="menu"
      :defaultActive="localActiveIndex + ''"
      :style="{border:'none','text-align':'left',width: menuWidth}"
      :mode="mode"
      :backgroundColor="changeColor(backgroundColor+'')"
      :textColor="changeColor(textColor)"
      :activeTextColor="changeColor(activeTextColor)"
      :collapse="isCollapse"
      :unique-opened="uniqueOpened"
      :router="routerTo"
      :default-openeds="defaultOpeneds"
      :menu-trigger="menuTrigger"
      :collapse-transition="collapseTransition"
      @open="open"
      @select="select"
      @close="close"
    >
      <template v-for="(item,index) in menuItems">
        <el-menu-item
          :key="index +'$' + item.value"
          :index="item.value + ''"
          v-if="!item.subItems"
          :disabled="item.disabled"
          @click.native="click($event,item.value+'',item)"
        >
          <i :class="item.icon" v-if="item.icon" style="margin-right:4px;"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <jm-el-submenu :key="index" :menuIndex="index + ''" :value="item" @itemClick="click" v-else></jm-el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Vue from "vue";
import jmElSubmenu from "./jm-el-submenu";
import jimu from "@/uikits/jimu/packages/jimu";

export default {
  components: { jmElSubmenu },
  props: {
    currentID:String,
    items: {
      default: function() {
        return [];
      }
    },
    mode: {
      default: "horizontal"
    },
    isCollapse: {
      default: false
    },
    activeIndex: {
      default: ""
    },
    backgroundColor: {
      default: "#ffffff"
    },
    textColor: {
      default: "#303133"
    },
    activeTextColor: {
      default: "#409EFF"
    },
    modelName: {
      default: "jumi_test1"
    },
    lazy: {
      default: false
    },
    pid: {
      default: "0"
    },
    baseUrl:{
      default:'http://app.cf.com/api/user/menu'
    },
    router:{
      default:false
    },
    uniqueOpened:{
      default:true
    },
    defaultOpeneds:{
      default:function(){
        return [];
      }
    },
    menuTrigger:{
      default: "hover"
    },
    collapseTransition:{
      default: true
    }
  },
  data() {
    return {
      menuItems: this.items,
      localActiveIndex:this.activeIndex
    };
  },
  computed: {
    routerTo(){
      return !window.isEditor&&this.router
    },
    menuWidth: {
      get() {
        if (this.mode == "horizontal") {
          return "100%";
        } else {
          return "100%";
        }
      }
    }
  },
  watch: {
    items: {
      handler(curVal, oldVal) {
        if (Array.isArray(curVal)) {
          this.menuItems = curVal;
        }
      },
      deep: true,
      immediate: true
    },
    activeIndex(){
      this.localActiveIndex = this.activeIndex
    },
    pid() {
      let _this = this;
      if (this.lazy && this.pid !== "") {
        this.getMenuById({
          id: _this.pid,
          successBlock: function(data) {
            let menu = _this.getSubItems(data);
            _this.menuItems = menu;
            _this = null;
          }
        });
      }
    }
  },
  mounted() {
    let vm = this.$refs.menu;
    let _this = this;
    if (this.lazy && this.pid !== "") {
      this.getMenuById({
        id: _this.pid,
        successBlock: function(data) {
          let menu = _this.getSubItems(data);
          _this.menuItems = menu;
          _this = null;
        }
      });
    } else {
      this.getMenu();
    }
    this.$emit("instance", vm);
  },
  methods: {
    getRootEl(data) {
      let root = undefined;
      data.forEach(element => {
        if (element.parent === 0) {
          root = element.id;
        }
      });
      return root;
    },
    getRootArray(data, id) {
      let rootArray = [];
      data.forEach(element => {
        if (element.parent === id) {
          let item = {};
          item.title = element.text;
          if (element.leaf === 0) {
            item.value = element.id;
          } else {
            item.value = element.linkurl;
          }
          if(element.icon){
            item.icon = element.icon;
          }
          item._id = element.id;
          rootArray.push(item);
        }
      });
      return rootArray;
    },
    getTreeList(data, id, item) {
      for (let i = 0; i < data.length; i++) {
        let element = data[i];
        if (element.parent === id) {
          if (!item.subItems) {
            item.subItems = [];
          }
          let temp = {};
          temp.title = element.text;
          if (element.leaf === 0) {
            temp.value = element.id;
          } else {
            temp.value = element.linkurl;
          }
          if(element.icon){
            temp.icon = element.icon;
          }
          temp._id = element.id;
          if (element.leaf != 1) {
            this.getTreeList(data, temp._id, temp);
          }
          item.subItems.push(temp);
        }
      }
    },
    parseMenuList(data) {
      let rootArray = this.getRootArray(data, this.getRootEl(data));
      let menuItems = [];
      for (let i = 0; i < rootArray.length; i++) {
        let item = JSON.parse(JSON.stringify(rootArray[i]));
        this.getTreeList(data, rootArray[i]._id, item);
        menuItems.push(item);
      }
      return menuItems;
    },
    getMenu() {
      let _this = this;
      jimu.request.get({
        data: {},
        failBlock: function(error) {},
        successBlock: function(data) {
          let menuItems = _this.parseMenuList(data);
          _this.menuItems = menuItems;
          _this = null;
        },
        url: _this.baseUrl+"?module=" + _this.modelName
      });
    },
    /**
     * 统一将颜色值使用16进制形式表示
     * @name changeColor
     * @grammar changeColor(value) => value
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    changeColor(value) {
      if (/rgba?/.test(value)) {
        var array = value.split(",");
        if (array.length > 4) return value;
        value = "#";
        for (var i = 0, color; (color = array[i++]), i < 4; ) {
          color = parseInt(color.replace(/[^\d]/gi, ""), 10).toString(16);
          value += color.length == 1 ? "0" + color : color;
        }
        value = value.toUpperCase();
      }
      return value;
    },

    getMenuById(options) {
      let _this = this;
      let id = options.id;
      let _successBlock = options.successBlock;
      let _failBlock = options.failBlock;
      jimu.request.get({
        data: {},
        failBlock: function(error) {
          if (_failBlock) {
            _failBlock(error);
          }
          _successBlock = null;
          _failBlock = null;
        },
        successBlock: function(data) {
          if (_successBlock) {
            _successBlock(data);
          }
          _successBlock = null;
          _failBlock = null;
        },
        url:
          _this.baseUrl+"?module=" +
          _this.modelName +
          "&pid=" +
          id
      });
    },
    getSubItems(data) {
      let result = [];
      let _lazy = this.lazy;
      let _mode = this.mode;
      data.forEach(element => {
        let temp = {};
        temp.title = element.text;
        if (_lazy && _mode === "horizontal") {
          temp.value = element.id;
        } else {
          if (element.leaf === 0) {
            temp.value = element.id;
            temp.subItems = [];
          } else {
            temp.value = element.linkurl;
          }
        }
        if(element.icon){
            temp.icon = element.icon;
          }
        temp._id = element.id;
        result.push(temp);
      });
      return result;
    },
    setSubItems(indexPath, items) {
      let source = this.menuItems;
      indexPath.forEach((item, index) => {
        for (let i = 0; i < source.length; i++) {
          if (item === source[i].value) {
            source = source[i].subItems;
            break;
          }
        }
      });
      source = items;
    },
    findIndexInObj(index, menuItems) {
      for (let i = 0; i < menuItems.length; i++) {
        if (index == menuItems[i].value) {
          return menuItems[i];
        }
      }
      return null;
    },
    open(index, indexPath) {
      if (this.lazy) {
        let _this = this;
        this.localActiveIndex = null;
        if (this.mode === "vertical") {
          this.getMenuById({
            id: index,
            successBlock: function(data) {
              let subMenu = _this.getSubItems(data);
              let obj = _this.menuItems;
              let param = obj;
              for (let i = 0; i < indexPath.length; i++) {
                obj = _this.findIndexInObj(indexPath[i], param);
                param = obj.subItems;
              }
              obj.subItems = subMenu;
              _this = null;
            }
          });
        }
      }
      this.$emit("open", index, indexPath);
    },
    select(index, indexPath) {
      this.localActiveIndex = index;
      this.$emit("select", index, indexPath);
    },
    close(index, indexPath) {
      this.$emit("close", index, indexPath);
    },
    click(e, index, item) {
      this.$emit("itemClick", e, index, item);
    }
  }
};
</script>
<style>
.v-application ol,
.v-application ul {
  padding-left: 0px !important;
}
.v-application .el-menu {
  padding-left: 0px !important;
}
</style>
