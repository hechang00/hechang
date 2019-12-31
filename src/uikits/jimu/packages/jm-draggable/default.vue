<template>
  <div class="dragg-list">
    <div class="dragg-item dragg-right" v-for="(item,itemIndex) in lists" :key="itemIndex+'$'">
      <draggable
        tag="ul"
        class="list-group"
        :group="group"
        :list="item.data"
        v-bind="dragOptions"
        :move="onMove"
        @start="isDragging=true"
        @end="change($event,itemIndex)"
      >
        <li
          class="list-group-item"
          :style="{'height':height}"
          v-for="(element,index) in item.data"
          :key="index+'$'+element.name"
        >{{element.name}}</li>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "hello",
  components: {
    draggable
  },
  props: {
    height: {
      default: "40px"
    },
    group: {
      default: "items"
    },
    list: {
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      lists: this.list,
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    change(e, itemIndex) {
      this.isDragging = false;
      // console.log("wangling--end:",this.lists,e,itemIndex,this.lists[itemIndex]);
      // console.log("wangling--end:",this.lists);
      this.$emit("change", this.lists);
    },
    onMove({ relatedContext, draggedContext }) {
      // console.log("move:",this.lists,relatedContext,draggedContext)
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    },
    list: {
      handler(curVal) {
        this.lists = curVal;
      },
      deep: true
    }
  }
};
</script>

<style>
.dragg-list ul {
  min-height: 400px;
}
.dragg-list li {
  list-style: none;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.dragg-item {
  width: 300px;
  min-height: 400px;
  float: left;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.dragg-right {
  margin-right: 20px;
}

.list-group {
  min-height: 20px;
  margin-bottom: 0;
}

.list-group span {
  width: 100%;
  min-height: 400px;
  display: inline-block;
}
.list-group-item {
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: move;
  position: relative;
  display: block;
  padding: 8px 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  text-align: left;
}
.list-group-item:last-child {
  margin-bottom: 0;
}
</style>
