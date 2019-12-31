<template disabled=false width=40 active-icon-class="" inactive-icon-class="" active-text="" inactive-text="" active-value inactive-value=false active-color=#409EFF inactive-color=#C0CCDA name="" @change="change">
  <el-tooltip :effect="effect" :placement="placement">
    <div slot="content"><jm-v-html :html="content"></jm-v-html></div>
    <div v-if="isCompExist(contentSlot)">
      <component :is="slotPageName(contentSlot)" :slotData="contentSlotData"></component>
    </div>
    <div v-else>
      <label>tooltip</label>
    </div>
  </el-tooltip>
</template>

<script>
import slotCompMixin from "@/uikits/jimu/packages/slotCompMixin";
export default {
  mixins: [slotCompMixin],
  props: {
    content: {
      default: ""
    },
    effect: {
      default: "dark"
    },
    placement: {
      default: "bottom"
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