<template >
  <el-time-picker
    v-if="!fixedModel"
    v-model="modelValue"
    :arrow-control="arrowControl"
    :picker-options="pickerOptions"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :editable="editable"
    :clearable="clearable"
    :size="size"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :is-range="isRange"
    :align="align"
    :range-separator="rangeSeparator"
    :value-format="valueFormat"
    :default-value="defaultValue"
    :prefix-icon="prefixIcon"
    :clear-icon="clearIcon"
  ></el-time-picker>
  <el-time-select
    v-else
    v-model="modelValue"
    :picker-options="pickerOptions"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :editable="editable"
    :clearable="clearable"
    :size="size"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :align="align"
    :range-separator="rangeSeparator"
    :value-format="valueFormat"
    :default-value="defaultValue"
    :prefix-icon="prefixIcon"
    :clear-icon="clearIcon"
  ></el-time-select>
</template>

<script>
export default {
  props: {
    value: {
      default: "2016-10-10T10:40:00.000Z"
    },
    pickerOptions: {
      default: function() {
        return {};
      }
    },
    arrowControl: {
      default: false
    },
    fixedModel: {
      default: false
    },
    readonly: {
      default: false
    },
    disabled: {
      default: false
    },
    editable: {
      default: true
    },
    clearable: {
      default: true
    },
    size: {
      default: "large"
    },
    startPlaceholder: {
      default: ""
    },
    endPlaceholder: {
      default: ""
    },
    placeholder: {
      default: "选择日期"
    },
    isRange: {
      default: false
    },
    align: {
      default: "left"
    },
    rangeSeparator: {
      default: "-"
    },
    valueFormat: {
      default: ""
    },
    defaultValue: {
      default: ""
    },
    prefixIcon: {
      default: "el-icon-time"
    },
    clearIcon: {
      default: "el-icon-circle-close"
    }
  },
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
  methods: {}
};
</script>