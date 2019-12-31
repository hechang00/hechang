<template >
  <el-tree
    v-if="show"
    :data="data"
    :props="defaultProps"
    @node-click="handleNodeClick"
    @check-change="checkChange"
    @check="check"
    @node-drop="handleDrop"
    @node-expand="nodeExpand"
    :accordion="accordion"
    :show-checkbox="showCheckBox"
    :draggable="draggable"
    :highlight-current="highlight"
    :default-expand-all="openAll"
    :check-on-click-node="checkNode"
    :indent="indent"
    :node-key="nodeKey"
    :default-expanded-keys="expanded"
    :default-checked-keys="checked"
    :current-node-key="currentKey"
    ref="tree"
    class="eltree"
    style="text-align:left"
  >
    <span class="span-ellipsis" slot-scope="{ node, data }">
      <span :title="node.label">{{ node.label }}</span>
      <span style="display:none;">{{data}}</span>
    </span>
  </el-tree>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      }
    };
  },
  props: {
    defaultProps: {
      default: function() {
        return {
          children: "children",
          label: "label"
        };
      }
    },
    data: {
      default: function() {
        return [];
      }
    },
    accordion: {
      default: false
    },
    showCheckBox: {
      default: false
    },
    draggable: {
      default: false
    },
    highlight: {
      default: false
    },
    openAll: {
      default: false
    },
    checkNode: {
      default: false
    },
    indent: {
      default: 16
    },
    nodeKey: {
      default: "id"
    },
    expanded: {
      default: function() {
        return [];
      }
    },
    checked: {
      default: function() {
        return [];
      }
    },
    currentKey: {
      default: ""
    }
  },
  methods: {
    handleNodeClick(data, node, key) {
      this.$emit("handleNodeClick", this.$refs.tree, data, node, key);
      let refs = this.$refs.tree;
      if (refs) {
        refs.$forceUpdate();
      }
    },
    checkChange(data, node, key) {
      this.$emit("checkChange", this.$refs.tree, data, node, key);
    },
    check(data, state) {
      this.$emit("check", this.$refs.tree, data, state);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      this.$emit(
        "handleDrop",
        this.$refs.tree,
        draggingNode,
        dropNode,
        dropType,
        ev
      );
    },
    nodeExpand(data, node, e) {
      this.$emit("nodeExpand", this.$refs.tree, data, node, e);
    },
    Initialization() {
      this.$emit("Initialization", this.$refs.tree);
    }
  },
  watch: {
    accordion() {
      this.show = false;
      this.$nextTick(function() {
        this.show = true;
      });
    },
    showCheckBox() {
      this.show = false;
      this.$nextTick(function() {
        this.show = true;
      });
    }
  },
  mounted() {
    this.Initialization();
  }
};
</script>
<style >
.span-ellipsis {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.eltree .el-checkbox {
  margin-bottom: 0 !important;
}
.eltree .el-tree-node__content > .el-checkbox {
  margin-right: 8px !important;
}
</style>
