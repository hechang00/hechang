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
      <template v-for="(item,index) in items">
        <el-menu-item
          :key="index +'$' + item.value"
          :index="item.value+''"
          v-if="!item.subItems"
          :disabled="item.disabled"
          @click.native="click($event,item.value+'',item)"
        >
          <img
            :src="item.icon"
            v-if="item.icon&&/^https?:\/\//.test(item.icon)"
            style="width: 12px;height: 12px"
          >
          <i :class="item.icon" v-else-if="item.icon" style="margin-right:4px;"></i>
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
Vue.component("jm-el-submenu", jmElSubmenu);
export default {
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
    flex: {
      default: 1
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
    lazy: {
      default: false
    },
    associationId:{
      default:""
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
      hidden: false,
      isRes: true,
      localActiveIndex: this.activeIndex
      // localisCollapse: this.isCollapse
    };
  },
  watch:{
    activeIndex(){
      this.localActiveIndex = this.activeIndex
    },
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
  /* */
  methods: {
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
    open(index, indexPath) {
      if(this.lazy){
        this.localActiveIndex = null
      }
      this.$emit("open", index, indexPath);
    },
    select(index, indexPath) {
      this.localActiveIndex = index;  
      this.$emit("select", index, indexPath);
      if(this.associationId){
        let dom = document.getElementById(this.associationId);
        if(dom&&dom.__vue__){
          let pageVm=null;
          if(dom.__vue__.$options.name === "jm-page"){
            pageVm = dom.__vue__;
          }else{
            let childrens = dom.__vue__.$children;
            for(let index in childrens){
              if(childrens[index].$options.name === "jm-page"){
                pageVm = childrens[index];
                break;
              }
            }
          }
          if(pageVm){
            pageVm.localPath = index;
          }
        }
      }
    },
    close(index, indexPath) {
      this.$emit("close", index, indexPath);
    },
    click(e, index, item) {
      this.$emit("itemClick", e, index, item);
    }
  },
  mounted() {
    let vm = this.$refs.menu;
    this.$emit("instance", vm);
  }
};
</script>
