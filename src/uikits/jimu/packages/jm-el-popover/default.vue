<template disabled=false width=40 active-icon-class="" inactive-icon-class="" active-text="" inactive-text="" active-value inactive-value=false active-color=#409EFF inactive-color=#C0CCDA name="" @change="change">
  <!-- <el-popover v-if="isCompExist(referenceSlot)"
    :placement="placement"
    :title="title"
    :width="width"
    :trigger="trigger"
    :content="content"    
    >
    <component v-if="isCompExist(contentSlot)" :is="slotPageName(contentSlot)" :slotData="contentSlotData"></component>      
    <component slot='reference' :is="slotPageName(referenceSlot)"></component>
  </el-popover>-->
  <el-popover
    :placement="placement"
    :title="title"
    :width="width"
    :trigger="trigger"
    :content="content"
    v-model="modelValue"
  >
    <component
      v-if="isCompExist(contentSlot)"
      :is="slotPageName(contentSlot)"
      :slotData="contentSlotData"
    ></component>
    <component v-if="isCompExist(referenceSlot)" slot="reference" :is="slotPageName(referenceSlot)"></component>
    <el-button v-else slot="reference">{{btnTitle}}</el-button>
  </el-popover>
</template>

<script>
import slotCompMixin from "../slotCompMixin";
export default {
  mixins: [slotCompMixin],
  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(curVal) {
        this.$emit("input", curVal);
      }
    }
  },  
  props: {
    btnTitle: {
      default: ""
    },
    title: {
      default: ""
    },
    width: {
      default: "200"
    },
    value: {
      default: false,
    },    
    trigger: {
      default: "click"
    },
    content: {
      default: ""
    },
    referenceSlot: {
      default: ""
    },
    contentSlot: {
      default: ""
    },
    contentSlotData: {
      default: function() {
        return {};
      }
    },
    placement: {
      default: "bottom"
    }
  }
};
</script>