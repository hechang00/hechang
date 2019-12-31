<template>
    <div style="overflow-x:hidden;width:100%;" v-if="tableShow" v-loading="loading"  :element-loading-text="loadingText" :element-loading-background="loadingBackground">
      <el-table v-if='rowKey' ref="table" :row-class-name="tableRowClassName" :default-sort = "{prop: prop, order: order}" style="width:99.9%;" :data="isNormal?(isBgPage?fullData:fullData.slice((currentPage-1)*pageSize,currentPage*pageSize)):fullData" :show-summary="showSummary" :sum-text="showText" :highlight-current-row="highlightCurrentRow" :show-header="showHeader" :size="size" :fit="fit" :stripe="stripe" :border="border" :empty-text="emptyText" :select-on-indeterminate="selectOnIndeterminate" :span-method="spanFunc" :row-style="rowStyle" :cell-style="cellStyle||localCellStyle" :header-row-style="headerRowStyle" :header-cell-style="headerCellStyle||localHeaderCellStyle" :summary-method="summaryFunc"
        :default-expand-all="defaultExpandAll" :expand-row-keys="expandRowKeys" @selection-change="handleSelectionChange" @sort-change="sortChange" :row-key="rowKey" lazy :load="load" :height="fixHeader!==''?fixHeader:undefined">
          <template v-for="(column,index) of columnDataValue">
            <jm-el-table-column v-if="column.visible" :renderHeader="renderHeader" :formatter="formatter" :column="column" :keyIndex="index+''" :key="column.label+'_first_'+index" @handleOperate="handleOperate"></jm-el-table-column>
          </template>
          <slot specified name=append>插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。</slot>
      </el-table>
      <el-table v-else ref="table" :row-class-name="tableRowClassName" :default-sort = "{prop: prop, order: order}" style="width:99.9%;" :data="isNormal?(isBgPage?fullData:fullData.slice((currentPage-1)*pageSize,currentPage*pageSize)):fullData" :show-summary="showSummary" :sum-text="showText" :highlight-current-row="highlightCurrentRow" :show-header="showHeader" :size="size" :fit="fit" :stripe="stripe" :border="border" :empty-text="emptyText" :select-on-indeterminate="selectOnIndeterminate" :span-method="spanFunc" :row-style="rowStyle" :cell-style="cellStyle||localCellStyle" :header-row-style="headerRowStyle" :header-cell-style="headerCellStyle||localHeaderCellStyle" :summary-method="summaryFunc"
        :default-expand-all="defaultExpandAll" @selection-change="handleSelectionChange" @sort-change="sortChange" :height="fixHeader!==''?fixHeader:undefined">
          <template v-for="(column,index) of columnDataValue">
            <jm-el-table-column v-if="column.visible" :renderHeader="renderHeader" :formatter="formatter" :column="column" :keyIndex="index+''" :key="column.label+'_first_'+index" @handleOperate="handleOperate"></jm-el-table-column>
          </template>
          <slot specified name=append>插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。</slot>
      </el-table>

      <el-popover
        v-if="isShowFiled"
        placement="right"
        trigger="click">
        <div class="table-popover">
          <el-row v-for="(column,index) of columnDataValue" :key="column.label+index" style="margin-top:4px">
            <el-checkbox class="item" v-bind:value="column.visible" @input="oninput(!column.visible,index)" size="mini" :label="column.label" ></el-checkbox>
          </el-row>
        </div>
        <el-button class="left" slot="reference">字段</el-button>
      </el-popover>
      <div v-if="isNormal">
            <el-pagination
            :style="paginationStyle"
            class="right"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="c_pageSizes"
            :page-size="pageSize"
            :layout="loaclLayout"
            :total="isNormal&&isBgPage?totalCount:fullData.length">
          </el-pagination>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import jmElTableColumn from "./jm-el-table-column";
import slotDataMixin from '../slotDataMixin'
import slotCompMixin from '../slotCompMixin'
Vue.component("jm-el-table-column", jmElTableColumn);
const paginationList = [
  "prev",
  "pager",
  "next",
  "jumper",
  "->",
  "total",
  "sizes",
  "slot"
];
export default {
  mixins: [slotCompMixin, slotDataMixin],    
  data() {
    return {
      currentPage: this.curPage || 1,
      showData: [],
      pageSize: this.pageNum || 20,
      selectList: [],
      tableShow:true,
      hasSubColumns:false
    };
  },
  watch: {
    curPage: function() {
      this.currentPage = this.curPage;
    },
    value: {
      handler(curVal) {
        this.columnDataValue = curVal;
        if(this.isShowFiled&&this.hasSubColumns){
          this.tableShow = false;
          this.$nextTick(function(){
            this.tableShow = true;
          })
        }
      },
      deep: true,
      immediate: true
    },
    pageNum() {
      this.pageSize = this.pageNum;
      // this.$emit("loadData",this.currentPage,this.pageSize);
    },
    contentData: {
      handler(curVal, oldVal) {
        console.log("contentData变化", curVal);
        // 如果打开了expand
        if (!curVal) return;
        if (this.columnDataValue && this.columnDataValue.length <= 0) return;
        let firstColumn = this.columnDataValue[0];
        if (firstColumn.type !== 'expand') return;
        let slotPageName = firstColumn.contentSlot;
        if (!this.isCompExist(slotPageName)) return;
        console.log("设置了expand和插槽");
        let rowData = {};
        for (let row of curVal) {
          Object.assign(rowData, row);
        }
        // 此时仅仅为了生成变量，值并不重要
        this.mixin_bind_var(slotPageName, {index: 0, row: rowData}, {}, 'm_slotData_');
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    loaclLayout: {
      get() {
        let result = "";
        if (typeof this.layout === "string") {
          let pagination = this.layout.split(",");
          let resultList = [];
          for (let i = 0; i < pagination.length; i++) {
            if (
              typeof pagination[i] === "string" &&
              paginationList.includes(pagination[i].trim())
            ) {
              resultList.push(pagination[i]);
            }
          }
          result = resultList.join(",");
        }
        return result;
      }
    },
    fullData: {
      get() {
        if (this.isNormal && !this.isBgPage) {
          //当为前端分页时，数据变化时重置当前页为1
          this.currentPage = 1;
        }
        let fullData = Array.isArray(this.contentData) ? this.contentData : [];
        return fullData;
      }
    },
    c_pageSizes: {
      get() {
        return Array.isArray(this.pageSizes) ? this.pageSizes : [];
      }
    },
    columnDataValue: {
      get() {
        let retData = Array.isArray(this.value) ? this.value : [];
        var arr = [];
        for (let i = 0; i < retData.length; i++) {
          if(retData[i].hasOwnProperty("subColumns")){
            this.hasSubColumns = true
          }
          if (typeof retData[i].visible === "undefined") {
            retData[i].visible = true;
          }
          arr.push(retData[i]);
        }
        return arr;
      },
      set(value) {}
    }
  },
  props: {
    currentID: String,
    rowKey:{
      default:''
    },
    totalCount: {
      default: 0
    },
    curPage: {
      default: 1
    },
    value: {
      default: function() {
        return [];
      }
    },
    contentData: {
      default: function() {
        return [];
      }
    },
    pageSizes: {
      default: function() {
        return [10, 20, 50, 100];
      }
    },
    pageNum: {
      default: 20
    },
    size: {
      default: "small"
    },
    fit: {
      default: true
    },
    stripe: {
      default: false
    },
    border: {
      default: false
    },
    prop: {
      default: "date"
    },
    order: {
      default: "ascending"
    },
    isNormal: {
      default: false
    },
    isShowFiled: {
      default: false
    },
    showSummary: {
      default: false
    },
    showText: {
      default: "合计"
    },
    highlightCurrentRow: {
      default: false
    },
    showHeader: {
      default: true
    },
    emptyText: {
      default: "暂无数据"
    },
    selectOnIndeterminate: {
      default: true
    },
    spanFunc: Function,
    rowStyle: Function,
    cellStyle: Function,
    headerRowStyle: Function,
    headerCellStyle: Function,
    summaryFunc: Function,
    isBgPage: {
      default: false
    },
    formatter: Function,
    renderHeader: Function,
    layout: {
      default: ""
    },
    fixHeader: {
      default: ""
    },
    paginationStyle: {
      default: function() {
        return {};
      }
    },
    defaultExpandAll: {
      default: false
    },
    expandRowKeys: {
      default: function() {
        return [];
      }
    },
    isLoadData:{
      default:true
    },
    headerCellStyleWay:{
      default:''
    },
    cellStyleWay:{
      default:''
    },
    loading:{
      default:false
    },
    loadingText:{
      default:""
    },
    loadingBackground:String
  },
  mounted() {
    let vm = this.$refs.table;
    this.$emit("instance", vm);
    if(this.isLoadData){
      this.$emit("loadData", this.currentPage, this.pageSize);
    }
  },
  methods: {


    localHeaderCellStyle({rowIndex, columnIndex}){
      if(this.headerCellStyleWay === "center"){
        return 'text-align: center'
      }else if(this.headerCellStyleWay === "left"){
        return 'text-align: left'
      }else if(this.headerCellStyleWay === "right"){
        return 'text-align: right'
      } 
    },
    localCellStyle({rowIndex, columnIndex}){
      if(this.cellStyleWay === "center"){
        return 'text-align: center'
      }else if(this.cellStyleWay === "left"){
        return 'text-align: left'
      }else if(this.cellStyleWay === "right"){
        return 'text-align: right'
      } 
    },
    tableRowClassName({ row, rowIndex }) {
      if(Object.prototype.toString.call(row) === "[object Object]"){
        row._rowIndex = rowIndex+1;
      }
    },
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    handleOperate: function(row, name) {
      this.$emit("handleOperate", row, name);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.$emit("loadData", this.currentPage, this.pageSize);
    },
    load: function(tree, treeNode, resolve) {
      this.$emit("load", tree, treeNode, resolve);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit("loadData", this.currentPage, this.pageSize);
    },
    oninput(val, index) {
      this.columnDataValue[index].visible = val;
      this.$set(this.columnDataValue, index, this.columnDataValue[index]);
      this.$emit("input", this.columnDataValue);
    },
    sortChange(data = {}) {
      this.$emit("sortChange", data.column, data.prop, data.order);
    }
  }
};
</script>

<style scoped>
.table-popover {
  overflow: auto;
  max-height: 80vh;
}

.left {
  float: left;
}

.right {
  float: right;
}

.el-table__header {
  table-layout: auto !important;
}

.el-button + .el-button {
  margin-left: 0px;
}
</style>
