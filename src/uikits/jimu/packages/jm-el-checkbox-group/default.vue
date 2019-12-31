<template>
  <el-checkbox-group
    class="check_gr"
    v-model="selected"
    :min="min"
    :max="max"
    :size="size"
    @change="change"
    :style="{'flex-direction':flexDirection}"
  >
    <el-checkbox
      v-for="(item) in items"
      :border="border"
      :key="item.label"
      :disabled="item.disabled"
      :checked="item.checked"
      :label="item.label"
    >{{item.label}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    value: {
      default: function() {
        return [];
      }
    },
    flexDirection: {
      default: "row"
    },
    items: {
      default: function() {
        return [];
      }
    },
    min: {
      default: 0
    },
    max: {
      default: 2
    },
    size: {
      default: "small"
    },
    border: {
      default: false
    }
  },
  computed:{
    selected:{
      get(){
        return this.value instanceof Array ? this.value:[]
      },
      set(curVal){
        if(curVal instanceof Array){
            this.$emit('input', curVal);
          }
      }
    }
  },
  methods: {
    change(value) {
      var tempSelected = this.selected;
      if (value instanceof Array) tempSelected = value;
      this.$emit("change", tempSelected);
    }
  }
};
</script>
<style>
.check_gr {
  display: flex;
}
.check_gr .el-checkbox {
  margin-right: 0;
  text-align: left;
  min-width: 100px;
}
</style>