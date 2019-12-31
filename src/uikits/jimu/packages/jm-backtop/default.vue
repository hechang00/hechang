<template>
  <div class="cover">
    <el-backtop
      @click.capture="click"
      :target="target"
      :bottom="bottom"
      :right="right"
      :visibility-height="visibilityHeight"
      class="back-top"
    >
      <div v-if="isCompExist(contentSlot)" @click.capture="clickOnContentSlot">
        <component :is="slotPageName(contentSlot)" :slotData="contentSlotData"></component>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import slotCompMixin from "@/uikits/jimu/packages/slotCompMixin";
export default {
  mixins: [slotCompMixin],
  props: {
    target: {
      default: ".text"
    },
    visibilityHeight: {
      default: 200
    },
    right: {
      default: 40
    },
    bottom: {
      default: 40
    },
    contentSlot: {
      default: ""
    },
    contentSlotData: {
      default: function() {
        return {};
      }
    }
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
    clickOnContentSlot(e) {
      // 在这里触发click on backtop
      document.getElementsByClassName("back-top")[0].click();
    }
  }
};
</script>

<style scoped>
</style>
