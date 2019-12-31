<template>
  <el-breadcrumb :separator="separator" :separator-class="separatorClass">
    <el-breadcrumb-item
      v-for="(item,index) in localData"
      :key="item.name+index"
      v-if="item.name"
      :to="!isEditor&&router?item.path:undefined"
    ><a v-if="!item.disabled" :style="item.style" @click="click($event,item.name,item.path,index,item.disabled)" v-html="item.name"></a><span v-else :style="item.style" v-html="item.name"></span></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    value: {
      default: 0
    },
    separator: {
      default: "/"
    },
    fontSize: {
      default: "14px"
    },
    space: {
      default: "40px"
    },
    separatorClass: {
      default: "el-icon-arrow-right"
    },
    data: {
      default: function() {
        return [];
      }
    },
    router:{
      default:false
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    click: function(event, name, path, index, disabled) {
      if (!disabled) {
        this.$emit("input", index);
        this.$emit("click", event, name, path, index);
      }
    },
    isObject(obj) {
      return (
        typeof obj !== "string" &&
        typeof obj !== "number" &&
        typeof obj !== "undefined" &&
        typeof obj !== "boolean" &&
        !(obj instanceof Array)
      );
    }
  },
  computed:{
    isEditor(){
      return window.isEditor
    },
    localData:{
      get(){
        let result = [];
        let data = this.data;
        if (data && data.length > 0) {
          for (let index = 0; index < data.length; index++) {
            let item = data[index];
            let dataItem = {};
            let style = {};
            style["padding-left"] =
              index === 0 ? "auto" : this.dealUnit(this.space, "auto");
            style["padding-right"] = this.dealUnit(this.space, "auto");
            style["font-size"] = this.dealUnit(this.fontSize, "auto");
            for (let key in item) {
              if (key === "color") {
                style["color"] = item[key];
              }
              if (key === "style") {
                if (this.isObject(item[key])) {
                  Object.assign(style, item[key]);
                }
              } else {
                dataItem[key] = item[key];
              }
            }
            dataItem.style = style;
            result.push(dataItem);
          }
        }
        return result;
      }
    }
  }
};
</script>

<style>
.el-breadcrumb__item:last-child {
  display: inline;
}
/* .el-breadcrumb__inner {
    color: "";
} */
</style>
