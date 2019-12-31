<template>
  <el-select
    v-model="modelValue"
    @change="change"
    @clear="clear"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    :multiple="multiple"
    :allow-create="allowCreate"
    :collapse-tags="collapseTags"
    :size="size"
    filterable
    :filter-method="filterMethod"
    :remote="remote"
    :loading="loading"
    :remote-method="remoteMethod"
    :no-data-text="noDataText"
    :no-match-text="noMatchText"
    :loading-text="loadingText"
    @focus="focus"
    @blur="blur"
    @visible-change="visibleChange"
  >
    <el-option
      v-for="(item,index) in optionData"
      :key="(item.label || '') + index + ''"
      :label="item.label + ''"
      :value="item.value + ''"
      :disabled="item.disabled || false"
    >
      <span v-if="item.custom" style="float: left">{{ item.label }}</span>
      <span
        v-if="item.custom"
        style="float: right; color: #8492a6; font-size: 13px"
      >{{ item.value }}</span>
    </el-option>
    <el-button type="text" v-if="hasMore" @click="hasMoreClick" style="margin-left:20px">加载更多</el-button>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      spliIndex: 1,
      searchData: undefined,
      hasMore: false,
      extraMapIndex: 0,
      extraMap: {} //搜索缓存
    };
  },
  props: {
    maxLinesNum: {
      default: 50
    },
    placeholder: {
      default: "输入关键词"
    },
    options: {
      default: function() {
        return [];
      }
    },
    disabled: {
      default: false
    },
    clearable: {
      default: false
    },
    multiple: {
      default: false
    },
    value: {
      default: ""
    },
    size: {
      default: "small"
    },
    allowCreate: {
      default: false
    },
    collapseTags: {
      default: false
    },
    remote: {
      default: false
    },
    remoteMethod: Function,
    loading: {
      default: false
    },
    autoChange: {
      default: true
    },
    noDataText: {
      default:"无数据"
    },
    noMatchText: {
      default:"无匹配数据"
    },
    loadingText: {
      default:"加载中"
    }
  },
  computed: {
    optionData: {
      get() {
        let _hasMore = false;
        if (this.searchData) {
          this.hasMore = _hasMore;
          return this.searchData;
        }
        let whole = [];
        for (let index in this.options) {
          if (
            Object.prototype.toString.call(this.options[index]) ===
            "[object Object]"
          ) {
            whole.push(this.options[index]);
          }
        }

        let _options = whole;
        if (_options.length > this.maxLinesNum) {
          if (this.spliIndex * this.maxLinesNum < whole.length) {
            _options = whole.slice(0, this.spliIndex * this.maxLinesNum);
            _hasMore = true;
          }
        }

        let extraIndex = -1;
        if (this.modelValue != "" && _options.length != whole.length) {
          if (this.extraMap[this.modelValue] != undefined) {
            extraIndex = this.extraMap[this.modelValue] || -1;
          } else {
            extraIndex = -1;
            for (let i = this.extraMapIndex; i < whole.length; i++) {
              if (
                Object.prototype.toString.call(whole[i]) === "[object Object]"
              ) {
                this.extraMap[whole[i].value] = i;
                if (whole[i].value == this.modelValue) {
                  extraIndex = i;
                  this.extraMapIndex = i + 1;
                  break;
                }
              }
            }
          }
        }

        if (
          extraIndex != -1 &&
          _options.length <= extraIndex &&
          extraIndex < whole.length
        ) {
          _options.push(whole[extraIndex]);
          _hasMore = _options.length != whole.length;
        }

        this.hasMore = _hasMore;
        return _options;
      }
    },
    modelValue: {
      get() {
        if (this.multiple) {
          return this.keyArray(this.value);
        } else {
          return this.value + "";
        }
      },
      set(curVal) {
        let val = curVal;
        if (this.multiple) {
          val = JSON.stringify(val || []);
        } else {
          val = curVal + "";
        }
        this.$emit("input", val);
      }
    }
  },
  watch: {
    options: {
      handler(curVal, oldVal) {
        this.extraMap = {};
        this.extraMapIndex = 0;
        this.searchData = undefined;
      },
      deep: true
    }
  },
  methods: {
    keyArray(newValue) {
      if (typeof newValue == "undefined") {
        return [];
      } else if (typeof newValue == "string") {
        try {
          let temp = JSON.parse(newValue);
          if (temp instanceof Array) {
            return temp;
          }
          return [];
        } catch (_) {
          return [];
        }
      } else if (newValue instanceof Array) {
        return newValue;
      } else {
        return new Array(newValue);
      }
    },
    change(curVal) {
      this.$emit("change", curVal);
    },
    filterMethod(input) {
      // if(!this.multiple){
      //   this.modelValue = input;
      // }
      if (input == "") {
        this.searchData = undefined;
        return;
      }
      let filter = this.options.filter(item => {
        if (Object.prototype.toString.call(item) === "[object Object]") {
          return item.label.toLowerCase().indexOf(input.toLowerCase()) > -1;
        } else {
          return false;
        }
      });
      if (this.autoChange && filter && filter.length === 1) {
        if (filter[0].label === input) {
          this.modelValue = filter[0].value;
          this.$emit("change", input);
        }
      }
      this.searchData = filter;
    },
    clear() {
      this.searchData = undefined;
    },
    hasMoreClick() {
      this.spliIndex += 1;
      this.$forceUpdate();
    },
    focus(el) {
      this.$emit("focus", el);
    },
    blur(el) {
      this.$emit("blur", el);
    },
    visibleChange(visible) {
      this.searchData = undefined;
      this.$emit("visibleChange", visible);
    }
  }
};
</script>
