<template>
  <el-dialog
    :visible.sync="visible"
    :before-close="handleClose"
    :title="title"
    :width="width"
    :append-to-body="appendToBody"
    :fullscreen="fullscreen"
    :top="top"
    :modal="modal"
    :modal-append-to-body="modalAppendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :center="center"
  >
    <router-view/>
  </el-dialog>
</template>

<script>
import routable from "../routable";
export default {
  data() {
    return {
      visible: true
    };
  },
  watch: {
    visible(val) {
      this.visible = val;
    }
  },
  props: {
    title: null,
    path: null,
    width: {
      default: "50%"
    },
    fullscreen: {
      default: false
    },
    top: {
      default: "15vh"
    },
    modal: {
      default: true
    },
    modalAppendToBody: {
      default: true
    },
    appendToBody: {
      default: true
    },
    lockScroll: {
      default: true
    },
    customClass: null,
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    showClose: {
      default: true
    },
    center: {
      default: false
    }
  },
  methods: {
    handleClose: function(done) {
      if (this == routable.top()) {
        routable.pop();
        this.$destroy();
      }
      done();
    }
  }
};
</script>