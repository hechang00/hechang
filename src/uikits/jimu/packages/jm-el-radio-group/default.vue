<template>
  <div>
    <el-radio-group v-model="modelValue" @change="change" v-if="type == 'normal'">
      <el-radio
        v-for="(item,index) in items"
        :key="index"
        :disabled="item.disabled"
        :label="item.value + ''"
      >{{item.label}}</el-radio>
    </el-radio-group>
    <el-radio-group v-model="modelValue" @change="change" v-else>
      <el-radio-button
        v-for="(item,index) in items"
        :key="index"
        :disabled="item.disabled"
        :label="item.value + ''"
      >{{item.label}}</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: "normal"
    },
    items: {
      default: function() {
        return [];
      }
    },
    value: {
      default: ""
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value + "";
      },
      set(curVal) {
        this.$emit("input", curVal);
      }
    }
  },
  methods: {
    change(curVal) {
      this.$emit("change", curVal);
    }
  }
};
</script>
