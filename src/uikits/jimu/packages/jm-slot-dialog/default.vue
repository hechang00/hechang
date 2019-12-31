<template>
  <el-dialog
    :visible.sync="visible"
    :before-close="beforeClose"
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
    @open="eventEmit('open')"
    @opened="eventEmit('opened')"
    @close="eventEmit('close')"
    @closed="eventEmit('closed')"
  >
    <template v-if="isCompExist(titleSlot)">
      <component slot="title" :is="slotPageName(titleSlot)" :slotData="titleSlotData"></component>
    </template>
    <template v-if="isCompExist(contentSlot)">
      <component :is="slotPageName(contentSlot)" :slotData="contentSlotData"></component>
    </template>
    <template v-if="isCompExist(footerSlot)">
      <component slot="footer" :is="slotPageName(footerSlot)" :slotData="footerSlotData"></component>
    </template>
  </el-dialog>
</template>

<script>
import slotCompMixin from "../slotCompMixin";
export default {
  mixins: [slotCompMixin],
  data() {
    return {};
  },
  props: {
    currentID:String,
    path:null,
    value: {
        default: false
    },
    title: {
        default: ''
    },
    width: {
        default: '50%'
    },
    fullscreen: {
        default: false
    },
    top: {
        default: '15vh'
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
    customClass: {
        default: ''
    },
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
    },
    beforeClose: Function,
    titleSlot: {
        default: ''
    },
    titleSlotData: {
        default: function() {
            return {}
        }
    },
    contentSlot: {
        default: ''
    },
    contentSlotData: {
        default: function() {
            return {}
        }
    },
    footerSlot: {
        default: ''
    },
    footerSlotData: {
        default: function() {
            return {}
        }
    }
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    }
  },
  methods: {
    eventEmit(eventName) {
      this.$emit(eventName);
    }
  }
};
</script>
