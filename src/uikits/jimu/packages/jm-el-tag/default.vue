<template>
  <div>
    <el-tag
      v-for="(tag,index) in dataValue"
      :key="tag + '_' + index"
      :type="type"
      :hit="hit"
      :closable="closable"
      :disable-transitions="disableTransitions"
      :size="size"
      :value="value"
      :color="color"
      @click="handleClick(tag)"
      @close="handleClose(tag)"
    >{{tag}}</el-tag>
    <span v-if="isAddTag" :addTag="addTag">
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataValue: this.value || [],
      inputVisible: false,
      isAddTag: this.addTag,
      inputValue: ""
    };
  },
  computed: {},
  watch: {
    value() {
      this.dataValue = this.value || [];
    },
    dataValue: {
      handler(curVal, oldVal) {
        this.$emit("input", this.dataValue);
      }
    }
  },
  props: {
    size: {
      default: "mini"
    },
    type: {
      default: ""
    },
    addTag: {
      default: false
    },
    closable: {
      default: false
    },
    hit: {
      default: false
    },
    color: {
      default: ""
    },
    disableTransitions: {
      default: true
    },
    value: {
      default: function() {
        return [];
      }
    }
  },
  methods: {
    handleClick(tag) {
      this.$emit("tagClick", tag);
    },
    handleClose(tag) {
      this.$emit("tagClose", tag);
      this.dataValue.splice(this.dataValue.indexOf(tag), 1);
      //this.value = this.dataValue;
      this.$emit("input", this.dataValue);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dataValue.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
