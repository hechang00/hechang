<template>
  <div :style="{ backgroundColor: changeColor(backgroundColor) }">
    <el-menu
      ref="menu"
      :defaultActive="localActiveIndex + ''"
      :style="{ border: 'none', 'text-align': 'left', width: menuWidth }"
      :mode="mode"
      :backgroundColor="changeColor(backgroundColor + '')"
      :textColor="changeColor(textColor)"
      :activeTextColor="changeColor(activeTextColor)"
      :collapse="isCollapse"
      :unique-opened="true"
      :router="routerTo"
      @open="open"
      @select="select"
      @close="close"
    >
      <template v-for="(item, index) in menuItems">
        <el-menu-item
          :key="index + '$' + item.value"
          :index="item.value + ''"
          v-if="!item.subItems"
          :disabled="item.disabled"
          @click.native="click($event, item.value + '', item)"
        >
          <i :class="item.icon" v-if="item.icon" style="margin-right:4px;"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <jm-el-submenu
          :key="index"
          :menuIndex="index + ''"
          :value="item"
          @itemClick="click"
          v-else
        ></jm-el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import jmElSubmenu from "./jm-el-submenu";
import axios from "axios"

export default {
  components: { jmElSubmenu },
  props: {
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
    baseUrl: {
      default: "https://power.cf.com"
    },
    router: {
      default: false
    },
    openNetReq: {
      default: true
    },
    useUsername: {
      default:false
    },
    systemId:{
      default: 259
    },
  },
  data() {
    return {
      menuItems: this.items,
      localActiveIndex: this.activeIndex
    };
  },
  computed: {
    routerTo() {
      return !window.isEditor && this.router;
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
    systemId(){
      if (this.openNetReq) {
        this.getMenu();
      }
    },
    useUsername(){
      if (this.openNetReq) {
        this.getMenu();
      }
    },
    items: {
      handler(curVal, oldVal) {
        if (Array.isArray(curVal)) {
          this.menuItems = curVal;
        }
      },
      deep: true,
      immediate: true
    },
    activeIndex() {
      this.localActiveIndex = this.activeIndex;
    }
  },
  mounted() {
    if (this.openNetReq) {
        this.getMenu();
    }
    let vm = this.$refs.menu;
    this.$emit("instance", vm);
  },
  methods: {
    getCookie: function (name) {
      let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
      else
        return null;
    },
    getApiUrl(path) {
      return this.baseUrl.replace(/\/$/,'') + path;
    },
    parseMenuList(data,result) {
      let rootArray = data.children;
      for (let i = 0; i < rootArray.length; i++) {
        let element =  rootArray[i];
        let temp = {};
        temp.title = element.name;
        if (element.children&&!element.url) {
          temp.subItems = [];
          temp.value = element.id;
          this.parseMenuList(element,temp.subItems)
        } else {
          temp.value = element.url;
        }
        if (element.icon) {
          temp.icon = element.icon;
        }
        result.push(temp);
      }
      return result;
    },
    getMenu() {
      let url = this.getApiUrl('/api/menu')
      axios.get(url, {
        params: {
           systemId: this.systemId, // 系统ID
           username: this.useUsername ? this.getCookie("bk_uid"):null
        }
      })
      .then((response) => {
        if (response.data && response.data.statusCode == 20000) {
            let menuItems = this.parseMenuList(response.data.result,[]);
            this.menuItems = menuItems;
          }
      })
      .catch(function (error) {
        console.log(error);
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
    getSubItems(data) {
      let result = [];
      let _mode = this.mode;
      data.forEach(element => {
        let temp = {};
        temp.title = element.text;
        if (element.leaf === 0) {
          temp.value = element.id;
          temp.subItems = [];
        } else {
          temp.value = element.linkurl;
        }   
        if (element.icon) {
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
      if (this.openNetReq) {
        this.localActiveIndex = null;
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
