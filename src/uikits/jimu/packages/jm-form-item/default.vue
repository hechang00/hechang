<template>
  <el-col :span="span">
    <el-form-item
      v-if="useSelfLabelWidth"
      :prop="prop"
      :rules="rules"
      :label-width="labelWidth+'px'"
      align="left"
      :label="label"
      :size="size"
      :style="{width:dealUnit(width,'auto'),height:dealUnit(height,'auto')}"
    >
      <div
        class="list"
        :style="{
      'flex-direction':justify,
      'justify-content':direction,
      'flex-wrap': wrap,
      'background-color':bgcolor,
      'align-items':align,
      'height':dealUnit(height,'auto'),
      'min-height':dealUnit(minHeight,0),
      'min-width':dealUnit(minWidth,0),
      'align-content':alignContent
      }"
      >
        <!-- <div v-for="(item) in childIDs" :key="item" :style="'display:flex;flex:'+($store.state.views[item]?$store.state.views[item].flex:0)"> -->
        <slot></slot>
      </div>
    </el-form-item>
    <el-form-item
      v-if="!useSelfLabelWidth"
      :prop="prop"
      :rules="rules"
      align="left"
      :label="label"
      :size="size"
      :style="{width:dealUnit(width,'auto'),height:dealUnit(height,'auto')}"
    >
      <div
        class="list"
        :style="{
      'flex-direction':justify,
      'justify-content':direction,
      'flex-wrap': wrap,
      'background-color':bgcolor,
      'align-items':align,
      'height':dealUnit(height,'auto'),
      'min-height':dealUnit(minHeight,0),
      'min-width':dealUnit(minWidth,0),
      'align-content':alignContent
      }"
      >
        <!-- <div v-for="(item) in childIDs" :key="item" :style="'display:flex;flex:'+($store.state.views[item]?$store.state.views[item].flex:0)"> -->
        <slot></slot>
      </div>
    </el-form-item>
  </el-col>
</template>


<script>
export default {
  data() {
    return {
      // itemStyle: {display: 'flex', flex: '1'},
    };
  },
  props: {
    currentID:String,
    justify: {
      default: "row"
    },
    wrap: {
      default: "wrap"
    },
    direction: {
      default: "flex-start"
    },
    align: {
      default: "center"
    },
    bgcolor: {
      default: "#ffffff"
    },
    minWidth: {
      default: 99.9
    },
    minHeight: {
      default: 59.9
    },
    border: {
      default: false
    },
    alignContent: {
      default: "flex-start"
    },
    span: {
      default: 24
    },
    label: {
      default: ""
    },
    needChangeHeight: {
      default: true
    },
    rules: {
      default: function() {
        return [];
      }
    },
    labelWidth: {
      default: 100
    },
    useSelfLabelWidth: {
      default: false
    },
    width: {
      default: ""
    },
    height: {
      default: ""
    },
    prop: {
      default: ""
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    }
  },

  mounted() {}
};
</script>

<style scoped>
/*布局组件容器的样式*/
.list {
  /* width: 100%;
  height: 100%; */
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  /* height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 10px; */
}
</style>
