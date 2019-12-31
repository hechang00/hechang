<template>
  <el-upload
    :action="action"
    :name="filesKey"
    :data="data"
    :multiple="multiple"
    :disabled="disabled"
    :limit="limit"
    :file-list="fileList"
    :show-file-list="showFileList"
    auto-upload
    :on-change="handleChange"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-exceed="handleExceed"
    :on-success="handleSuccess"
    :before-upload="handleUploadBefore"
    :on-error="handleError"
    :on-progress="handleProgress"
  >
    <div v-if="isCompExist(btnSlot)" v-bind="uploadButton">
      <component
        :is="slotPageName(btnSlot)"
        :slotData="btnSlotData"
        slotDataType="el-upload-btn"
        v-bind="uploadButton"
      ></component>
    </div>
    <div v-else>
      <el-button v-bind="uploadButton">{{uploadButton["innerText"]}}</el-button>
    </div>
    <div v-if="isCompExist(desSlot)">
      <component :is="slotPageName(desSlot)" :slotData="desSlotData" slotDataType="el-upload-des"></component>
    </div>
    <div v-else>
      <div slot="tip" class="el-upload__tip" v-if="showFileList && showTip">{{tipText}}</div>
    </div>
  </el-upload>
</template>

<script>
import slotCompMixin from "../slotCompMixin";
export default {
  mixins: [slotCompMixin],
  props: {
    action: {
      default: ""
    },
    filesKey: {
      default: "file"
    },
    data: {
      default: function() {
        return {};
      }
    },
    limit: {
      default: 3
    },
    multiple: {
      default: false
    },
    fileList: {
      default: function() {
        return [];
      }
    },
    showFileList: {
      default: false
    },
    disabled: {
      default: false
    },
    showTip: {
      default: true
    },
    tipText: {
      default: "只能上传jpg/png文件"
    },
    uploadButton: {
      default: function() {
        return {};
      }
    },
    btnSlot: {
      default: ""
    },
    btnSlotData: {
      default: function() {
        return {};
      }
    },
    desSlot: {
      default: ""
    },
    desSlotData: {
      default: function() {
        return {};
      }
    }
  },
  methods: {
    handlePreview(file) {
      this.$emit("handlePreview", file);
    },
    handleRemove(file, fileList) {
      this.$emit("handleRemove", file, fileList);
    },
    beforeRemove(file, fileList) {
      this.$emit("beforeRemove", file, fileList);
    },
    handleSuccess(response, file, fileList) {
      this.$emit("handleSuccess", response, file, fileList);
    },
    handleError(err, file, fileList) {
      this.$emit("handleError", err, file, fileList);
    },
    handleProgress(event, file, fileList) {
      this.$emit("handleProgress", event, file, fileList);
    },
    handleExceed(files, fileList) {
      this.$emit("handleExceed", files, fileList);
    },
    handleUploadBefore(files) {
      this.$emit("handleUploadBefore", files);
    },
    handleChange(file, fileList) {
      this.$emit("handleChange", file, fileList);
    }
  }
};
</script>