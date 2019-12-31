<template>
  <!-- <div v-for="(item) in childIDs" :key="item" :style="'display:flex;flex:'+($store.state.views[item]?$store.state.views[item].flex:0)"> -->
  <el-form
    ref="ruleForm"
    v-if="value"
    :model="ruleForm"
    :label-position="labelPosition"
    :label-width="labelWidth+'px'"
    :size="size"
    :style="{
              'min-height':dealUnit(minHeight,0),
              'min-width':dealUnit(minWidth,0),
              'height':height,
              'background-color':bgcolor
              }"
  >
    <el-row style="height:100%">
      <slot></slot>
    </el-row>

    <el-row v-for="(item,index) in dataValue" :key="index">
      <el-col
        v-for="(labelItem,labelIdex) in labelValue"
        :key="labelItem.label+index+labelIdex"
        :span="labelIdex+1!==labelValue.length?Math.floor(24/addSpan):22-Math.floor(24/addSpan)*labelIdex"
      >
        <el-form-item :label="labelItem.label" align="left">
          <!-- <div :id="item"></div> -->
          <el-input
            style="width:100%"
            v-model="item[labelItem.prop]"
            v-if="labelItem.type=='input'"
            :placeholder="labelItem.placeholder"
            @change="change"
          ></el-input>
          <el-select
            style="width:100%"
            v-model="item[labelItem.prop]"
            v-if="labelItem.type=='select'"
            :placeholder="labelItem.placeholder"
            @change="change"
          >
            <template v-for="option in labelItem.componetParam.options">
              <el-option
                v-if="labelItem.componetParam"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              ></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <jm-icon
          v-if="iconMode&&index+1===dataValue.length"
          @click.native="addValue"
          type="el-icon-circle-plus-outline"
          color="#303133"
          size="24"
        ></jm-icon>
      </el-col>
      <el-col :span="1">
        <a v-if="!iconMode&&labelValue&&labelValue.length>0" @click="deleteValue(index)">删除</a>
        <jm-icon
          v-if="iconMode&&dataValue.length>1"
          @click.native="deleteValue(index)"
          type="el-icon-remove-outline"
          color="#303133"
          size="24"
        ></jm-icon>
      </el-col>
    </el-row>
    <el-button
      v-if="!iconMode&&labelValue&&labelValue.length>0"
      class="btn"
      @click="addValue"
      style="width: 100%; margin-top: 8px; margin-bottom: 8px;"
    >新增{{labelValue[0].label}}</el-button>
  </el-form>
</template>


<script>
export default {
  data() {
    return {
      dataValue: this.value || [],
      ruleForm: this.formData || {}
      // itemStyle: {display: 'flex', flex: '1'},
    };
  },
  props: {
    currentID:String,
    bgcolor: {
      default: "#ffffff"
    },
    minWidth: {
      default: 99.9
    },
    minHeight: {
      default: 59.9
    },
    border: {
      default: false
    },
    labelWidth: {
      default: 100
    },
    labelPosition: {
      default: "right"
    },
    span: {
      default: 1
    },
    addSpan: {
      default: 2
    },
    labelValue: {
      default: function() {
        return [];
      }
    },
    value: {
      default: function() {
        return [];
      }
    },
    iconMode: {
      default: false
    },
    size: {
      default: "small"
    },
    formData: {
      default: function() {
        return {};
      }
    }
  },

  watch: {
    formData() {
      this.ruleForm = this.formData;
    },
    dataValue: {
      handler(curVal, oldVal) {
        this.$emit("input", this.dataValue);
      },
      deep: true,
      immediate: true
    },
    value: {
      handler(curVal, oldVal) {
        this.dataValue = curVal || [];
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    },
    getVm() {
      return this.$refs.ruleForm;
    },
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    addValue() {
      if (this.labelValue) {
        let value = this.labelValue;
        let addObject = {};
        for (let i = 0; i < value.length; i++) {
          addObject[value[i].prop] = "";
        }
        this.dataValue.push(addObject);
      }
      // if(this.dataValue&&this.dataValue.length>0){
      //     this.dataValue.push(this.dataValue[this.dataValue.length-1])
      // }
      this.$emit("input", this.dataValue);
      this.$emit("change", this.dataValue);
    },
    deleteValue(index) {
      if (this.dataValue) {
        this.dataValue.splice(index, 1);
      }
      this.$emit("input", this.dataValue);
      this.$emit("change", this.dataValue);
    }
  },

  mounted() {
    let vm = this.$refs.ruleForm;
    this.$emit("instance", vm);
  }
};
</script>

<style scoped>
/*布局组件容器的样式*/
.list {
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  /* height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 10px; */
}
.btn {
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
}

.btn:hover {
  color: #1890ff;
  border-color: #1890ff;
}
a {
  color: #1890ff;
  background-color: transparent;
}
</style>
