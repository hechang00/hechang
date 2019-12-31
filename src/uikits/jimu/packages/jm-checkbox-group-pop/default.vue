<template>
  <el-popover :placement="placement" trigger="click">
    <el-row
      v-for="(column,index) of checkboxDataValue"
      :key="column.label+index"
      style="margin-top:4px"
    >
      <el-checkbox
        class="item"
        v-bind:value="column.selected"
        v-on:input="oninput(!column.selected,index)"
        :label="column.label"
        size="mini"
      ></el-checkbox>
    </el-row>
    <el-button class="left" slot="reference">{{title}}</el-button>
  </el-popover>
</template>

<script>
export default {
  watch: {
    value: function() {
      this.checkboxDataValue = this.value;
    }
  },
  computed: {
    checkboxDataValue: {
      get() {
        let retData = this.value || [];
        for (let i = 0; i < retData.length; i++) {
          if (typeof retData[i].selected === "undefined") {
            retData[i].selected = true;
          }
        }
        return retData;
      },
      set(value) {}
    }
  },
  methods: {
    oninput(val, index) {
      this.checkboxDataValue[index].selected = val;
      this.$set(this.checkboxDataValue, index, this.checkboxDataValue[index]);
      this.$emit("input", this.checkboxDataValue);
    }
  },
  props: {
    title: {
      default: "请选择"
    },
    placement: {
      default: "bottom"
    },
    value: {
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>


