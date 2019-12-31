<template>
  <el-steps
    :direction="direction"
    :active="active"
    :simple="simple"
    :space="space"
    :align-center="alignCenter"
    :finish-status="finishStatus"
  >
    <el-step
      v-for="(item,index) in items"
      :key="item.title + '_' + index"
      :title="item.title"
      :icon="item.icon"
      :status="item.status"
      :description="item.description"
    >
      <template slot="icon" v-if="item.iconSlot">
        <component :is="slotPageName(item.iconSlot)"></component>
      </template>
      <template slot="title" v-if="item.titleSlot">
        <component :is="slotPageName(item.titleSlot)"></component>
      </template>
      <template slot="description" v-if="item.descriptionSlot">
        <component :is="slotPageName(item.descriptionSlot)"></component>
      </template>
    </el-step>
  </el-steps>
</template>
<script>
import slotCompMixin from '../slotCompMixin'
export default {
  mixins: [slotCompMixin],  
  props: {
    direction: {
      default: "horizontal"
    },
    active: {
      default: 0
    },
    space: {
      default: 180
    },
    simple: {
      default: false
    },
    alignCenter: {
      default: false
    },
    finishStatus: {
      default: "success"
    },
    items: {
      default: function() {
        return [];
      }
    },
    iconSlotData:{
      default: function() {
        return {};
      }
    },
    titleSlotData:{
      default: function() {
        return {};
      }
    },
    descriptionSlotData:{
      default: function() {
        return {};
      }
    }
  },
  methods: {}
};
</script>
<style>
.el-step__title {
  font-size: 14px;
}
.el-steps {
  text-align: left;
}
.el-step.is-simple .el-step__title {
  font-size: 14px;
}
</style>
