<template>
  <div>
    <grid v-for="(index, row) in rows" :key="index">
      <grid-item
        @on-item-click="getItem(lists[row*columns+index-1])"
        label="Grid"
        v-for="(index, column) in columns"
        :key="index+column"
      >
        <img slot="icon" :src="lists[row*columns+index-1].img">
        <span slot="label" v-if="lists[row*columns+index-1]">{{lists[row*columns+index-1].title}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import Grid from "vux/src/components/grid/grid.vue";
import GridItem from "vux/src/components/grid/grid-item.vue";
export default {
  components: {
    Grid,
    GridItem
  },
  computed: {
    propModel: {
      get() {
        return this.index;
      },
      set(value) {
        this.$emit("index", value);
      }
    }
  },
  props: {
    lists: {
      default: function() {
        return {};
      }
    },
    rows: {
      default: 3
    },
    columns: {
      default: 2
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    getItem: function(val) {
      this.$emit("click", val);
    }
  }
};
</script>
