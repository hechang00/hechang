<template>
  <el-badge
    :value="showValue"
    :max="max"
    :is-dot="isDot"
    :hidden="hidden"
    :type="type"
  >
    <component
      v-if="isCompExist(contentSlot)"
      :is="slotPageName(contentSlot)"
      :slotData="contentSlotData"
    ></component>
    <el-button v-else>{{btnTitle}}</el-button>
  </el-badge>
</template>

<script>
import slotCompMixin from "../slotCompMixin";
export default {
  mixins: [slotCompMixin],
  props: {
    btnTitle: {
      type:String,
      default: "按钮"
    },
    showValue: {
      type:[String,Number],
      default: ""
    },
    max: {
      type:Number,
      default: undefined
    },
    isDot: {
      type:Boolean,
      default: false
    },
    hidden: {
      type:Boolean,
      default: false
    },
    type: {
      type:String,
      default: undefined
    },
    contentSlot: {
      default: ""
    },
    contentSlotData: {
      default: function() {
        return {};
      }
    }
  }
};
</script>