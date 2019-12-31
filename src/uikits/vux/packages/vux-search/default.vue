<template>
  <search
    :cancel-text="cancelText"
    :placeholder="placeholder"
    v-model="propModel"
    position="absolute"
    auto-scroll-to-top
    top="46px"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    @on-clear="onClear"
    ref="search"
  ></search>
</template>

<script>
import Search from "vux/src/components/search";
export default {
  components: {
    Search
  },
  computed: {
    propModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  props: {
    placeholder: {
      default: "请输入搜索内容"
    },
    cancelText: {
      default: "取消"
    },
    value: {
      default: ""
    }
  },
  methods: {
    onSubmit: function(content) {
      this.$emit("submit", content);
    },
    onCancel: function() {
      this.$emit("cancel");
    },
    onClear: function() {
      this.$emit("clear");
    }
  }
};
</script>
