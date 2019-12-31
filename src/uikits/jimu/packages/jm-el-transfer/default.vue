<template>
  <el-transfer
    class="transfer"
    style="text-align: left;"
    v-model="modelValue"
    :data="data"
    @change="change"
    :titles="titles"
    @left-check-change="leftCheckChange"
    @right-check-change="rightCheckChange"
    :filterable="filterable"
  ></el-transfer>
</template>
   
<script>
export default {
  props: {
    data: {
      default: function() {
        return [];
      }
    },
    titles: {
      default: function() {
        return ["列表1", "列表2"];
      }
    },
    filterable: {
      default: false
    },
    value: {
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    modelValue: {
      get() {
        return this.value || [];
      },
      set(curVal) {
        var val = curVal;
        // val = JSON.stringify(val || []);
        this.$emit("input", val);
      }
    }
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    },
    leftCheckChange(key) {
      this.$emit("leftCheckChange", key);
    },
    rightCheckChange(key) {
      this.$emit("rightCheckChange", key);
    }
  }
};
</script>
<style>
.transfer .el-transfer-panel {
  min-width: 230px;
}
.transfer .el-transfer__buttons {
  padding: 0 15px !important;
}
.transfer .el-checkbox:last-child {
  margin-right: 30px !important;
}
.transfer .el-checkbox {
  margin-bottom: 0 !important;
}
</style>
