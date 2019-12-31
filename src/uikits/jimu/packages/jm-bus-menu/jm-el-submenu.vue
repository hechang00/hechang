<template>
  <el-submenu :index="typeof value.value !== 'undefined' ? value.value+'':'sub_'+menuIndex" :disabled="value.disabled" @click.native="submenuClick">
    <template slot="title">
      <i :class="value.icon" style="margin-right:4px;" v-if="value.icon"></i>
      <span slot="title">{{value.title}}</span>
    </template>
    <template v-for="(item,subIndex) in value.subItems">
      <el-menu-item
        v-if="!item.subItems"
        :key="menuIndex + '_' + subIndex +'_' + item.value"
        :index="item.value + ''"
        :disabled="item.disabled"
        @click.native="click($event,item.value+'',item)"
      >
        <i :class="item.icon" style="margin-right:4px;" v-if="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
      <jm-el-submenu :key="menuIndex + '_' + subIndex" :menuIndex="menuIndex + '_' + subIndex" :value="item" @itemClick="click" v-else></jm-el-submenu>
    </template>
  </el-submenu>
</template>
<script>
export default {
  props: ["value", "menuIndex"],
  name: "jm-el-submenu",
  data() {
    return {};
  },
  methods:{
    click(e, index,item) {
      this.$emit("itemClick", e,index,item);
    },
    submenuClick(){
      this.$emit("submenuClick")
    }
  }
};
</script>
<style>
.v-application ol, .v-application ul{
  padding-left: 0px !important;
}
.v-application .el-menu{
  padding-left: 0px !important;
}
</style>
 