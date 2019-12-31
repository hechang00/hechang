<template>
  <el-card class="box-card" :shadow="shadow">
    <div slot="header" v-if="isCompExist(headerSlot)">
      <component
        :is="slotPageName(headerSlot)"
        :slotData="headerSlotData"
        slotDataType="el-card-header"
      ></component>
    </div>
    <div v-if="isCompExist(bodySlot)">
      <component :is="slotPageName(bodySlot)" :slotData="bodySlotData" slotDataType="el-card-body"></component>
    </div>
  </el-card>
</template>

<script>
import slotCompMixin from "../slotCompMixin";
export default {
  mixins: [slotCompMixin],
  props: {
    currentID:String,
    bodyStyle: {
      default: function() {
        return {
          padding: "20px"
        };
      }
    },
    shadow: {
      default: "always"
    },
    headerSlot: {
      default: ""
    },
    headerSlotData: {
      default: function() {
        return {};
      }
    },
    bodySlot: {
      default: ""
    },
    bodySlotData: {
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style lang="css" rel="stylesheet/css">
.box-card {
  width: 480px;
}
</style>