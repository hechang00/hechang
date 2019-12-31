<template>
  <el-row
    :style="{'background-color': bgcolor,'padding':gridPadding}"
    :type="type"
    :justify="justify"
    :align="align"
  >
    <slot></slot>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      gridPadding: this.padding
    };
  },
  props: {
    currentID:String,
    type:null,
    showSelect:null,
    disableSelect:null,
    padding:null,
    columnSpace: {
      default: "16"
    },
    justify: {
      default: "start"
    },
    align: {
      default: "顶部"
    },
    bgcolor: {
      default: "#ffffff"
    },
    padding: {
      default: "0px 0px 0px 0px"
    }
  }
};
</script>

<style scoped>
.el-row-class {
  background: lightblue;
  min-height: 64px;
}

.hb-class {
  display: inline;
}
/*布局组件容器的样式*/
.list {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
