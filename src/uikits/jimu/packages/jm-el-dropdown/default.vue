<template>
  <el-dropdown
    :size="size"
    :split-button="splitButton"
    :type="type"
    :trigger="trigger"
    @click="click"
    @command="command"
    @visible-change="visibleChange"
  >
    <el-button v-if="!splitButton" :size="size" @click="click" :type="type">
      {{title}}
      <i v-if="iconShow" class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <span v-else>{{title}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item,index) in items"
        :key="item.name + '_' + index"
        :disabled="item.disabled"
        :command="index"
      >{{item.name}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    items: {
      default: function() {
        return [];
      }
    },
    splitButton: {
      default: false
    },
    trigger: {
      default: "hover"
    },
    size: {
      default: "medium"
    },
    title: {
      default: "下拉菜单"
    },
    iconShow: {
      default: false
    },
    type: {
      default: "default"
    }
  },
  methods: {
    click(event) {
      this.$emit("click", event);
    },
    command(command) {
      this.$emit("command", command);
    },
    visibleChange(event) {
      this.$emit("visibleChange", event);
    }
  }
};
</script>
