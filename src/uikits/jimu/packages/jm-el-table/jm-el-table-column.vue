<template>
        <!-- 有头部与内容插槽 -->
          <el-table-column :fixed="column.fixed" :key="'normal_'+keyIndex" :render-header="renderHeader" :formatter="formatter" :type="column.type" :sortable="column.sortable?column.sortable:false" :show-overflow-tooltip="column['show-overflow-tooltip']"  v-if="isCompExist(column.headerSlot) && isCompExist(column.contentSlot)" :prop="column.prop" :label="column.label" :header-align="column.headerAlign?column.headerAlign:''" :align="column.align?column.align:''" :width="column.width" :min-width="column.minWidth">
             <jm-el-table-column v-for="(subItem,index) in filterValue(column.subColumns)" :renderHeader="renderHeader" :formatter="formatter" @handleOperate="handleOperate" :key="'datacol_sub' + keyIndex +'_'+index" :keyIndex="keyIndex+'_'+index" :column="subItem"></jm-el-table-column>
              <!-- 头部插槽 -->
              <template slot='header' slot-scope="scope">
                <component :is="slotPageName(column.headerSlot)" :slotData="{index:scope.$index, row:scope.row}"></component>
              </template>
              <!-- 内容插槽 -->
             <template slot-scope="scope">
               <component :is="slotPageName(column.contentSlot)" :slotData="{index:scope.$index, row:scope.row}"></component>
            </template>
          </el-table-column>

        <!-- 仅有内容插槽 注意key要不同名 -->
          <el-table-column :fixed="column.fixed" :key="'normal1_'+keyIndex" :render-header="renderHeader" :formatter="formatter" :type="column.type" :sortable="column.sortable?column.sortable:false" :show-overflow-tooltip="column['show-overflow-tooltip']"  v-else-if="isCompExist(column.contentSlot)" :prop="column.prop" :label="column.label" :header-align="column.headerAlign?column.headerAlign:''" :align="column.align?column.align:''" :width="column.width" :min-width="column.minWidth">
             <jm-el-table-column v-for="(subItem,index) in filterValue(column.subColumns)" :renderHeader="renderHeader" :formatter="formatter" @handleOperate="handleOperate" :key="'datacol_sub1' + keyIndex +'_'+index" :keyIndex="keyIndex+'_'+index" :column="subItem"></jm-el-table-column>
              <!-- 内容插槽 -->
             <template slot-scope="scope">
               <component :is="slotPageName(column.contentSlot)" :slotData="{index:scope.$index, row:scope.row}"></component>
            </template>
          </el-table-column>
          
        <!-- 仅有头部插槽 注意key要不同名 -->
          <el-table-column :fixed="column.fixed" :key="'normal2_'+keyIndex" :render-header="renderHeader" :formatter="formatter" :type="column.type" :sortable="column.sortable?column.sortable:false" :show-overflow-tooltip="column['show-overflow-tooltip']"  v-else-if="isCompExist(column.headerSlot)" :prop="column.prop" :label="column.label" :header-align="column.headerAlign?column.headerAlign:''" :align="column.align?column.align:''" :width="column.width" :min-width="column.minWidth">
             <jm-el-table-column v-for="(subItem,index) in filterValue(column.subColumns)" :renderHeader="renderHeader" :formatter="formatter" @handleOperate="handleOperate" :key="'datacol_sub2' + keyIndex +'_'+index" :keyIndex="keyIndex+'_'+index" :column="subItem"></jm-el-table-column>
              <!-- 头部插槽 -->
              <template slot='header' slot-scope="scope">
                <component :is="slotPageName(column.headerSlot)" :slotData="{index:scope.$index, row:scope.row}"></component>                
              </template>
          </el-table-column>

        <!-- 无插槽 注意key要不同名 -->
          <el-table-column :fixed="column.fixed" :key="'normal3_'+keyIndex" :render-header="renderHeader" :formatter="formatter" :type="column.type" :sortable="column.sortable?column.sortable:false" :show-overflow-tooltip="column['show-overflow-tooltip']"  v-else-if="formatColumn._simpleMode==='simple'" :prop="column.prop" :label="column.label" :header-align="column.headerAlign?column.headerAlign:''" :align="column.align?column.align:''" :width="column.width" :min-width="column.minWidth">
             <jm-el-table-column v-for="(subItem,index) in filterValue(column.subColumns)" :renderHeader="renderHeader" :formatter="formatter" @handleOperate="handleOperate" :key="'datacol_sub3' + keyIndex +'_'+index" :keyIndex="keyIndex+'_'+index" :column="subItem"></jm-el-table-column>
          </el-table-column>          


          <el-table-column :fixed="column.fixed" :key="'slot_'+keyIndex" :type="column.type" :sortable="column.sortable?column.sortable:false" :show-overflow-tooltip="column['show-overflow-tooltip']"  v-else-if="formatColumn._simpleMode==='complex'" :label="column.label" :width="column.width" :header-align="column.headerAlign?column.headerAlign:''" :align="column.align?column.align:''" :min-width="column.minWidth">
              <template slot-scope="scope">
                <el-tooltip :disabled="!getIsShow(column,name,'icon')" v-for="(name,index) of column.operate" :key="name+index" :content="formatColumn._hasProp?scope.row[column.config[name].prop]:name" placement="bottom" effect="light">
                  <el-button v-if="getIsShow(column,name,'icon')" :style="{'margin-right':'4px','margin-bottom':'4px',color:configValue(column,name,'color',false)}" :disabled="isConfigHasValue(column,name,'disabledProp')?scope.row[column.config[name].disabledProp]:false"  :icon="configValue(column,name,'icon','')" :type="configValue(column,name,'type','')"  size="mini" @click="handleOperate(scope.row,name)"></el-button>
                  <el-button v-else-if="getIsShow(column,name,'static')" :style="{'margin-right':'4px','margin-bottom':'4px',color:configValue(column,name,'color',false)}"  :icon="configValue(column,name,'icon','')" :disabled="isConfigHasValue(column,name,'disabledProp')?scope.row[column.config[name].disabledProp]:false" :type="configValue(column,name,'type','')"  size="mini" @click="handleOperate(scope.row,name)">{{name}}</el-button>
                  <el-button v-else-if="scope.row[column.config[name].prop]!==''&&typeof scope.row[column.config[name].prop] !== 'undefined'" :style="{'margin-right':'4px','margin-bottom':'4px',color:configValue(column,name,'color',false)}" :icon="configValue(column,name,'icon','')" :disabled="isConfigHasValue(column,name,'disabledProp')?scope.row[column.config[name].disabledProp]:false" :type="configValue(column,name,'type','')"  size="mini" @click="handleOperate(scope.row,name)">{{scope.row[column.config[name].prop]}}</el-button>    
                </el-tooltip>
                <template v-for="(item,index) of column.tag">
                  <el-tag style="margin-right:4px" :type="item.type" size="mini" disable-transitions :key="item.prop+index" v-if="item.prop&&(typeof(scope.row[item.prop])!=='undefined'&&scope.row[item.prop]!==''||column.parentProp&&typeof(scope.row[column.parentProp][item.prop])!=='undefined'&&scope.row[column.parentProp][item.prop]!=='')">{{column.parentProp?scope.row[column.parentProp][item.prop]:scope.row[item.prop]}}</el-tag>
                </template>
                <div v-if="column.customTemplate&&column.prop" v-html="scope.row[column.prop]"></div>
              </template>
              <jm-el-table-column v-for="(subItem,index) in filterValue(column.subColumns)"  :key="'tapcol'+keyIndex+'_'+index" :keyIndex="keyIndex+'_'+index" :column="subItem" :formatter="formatter" :renderHeader="renderHeader" @handleOperate="handleOperate"></jm-el-table-column>
        </el-table-column>
</template>

<script>
import slotCompMixin from '../slotCompMixin'
export default {
    mixins: [slotCompMixin],    
    props:["column","keyIndex","formatter","renderHeader"],
    computed:{
      /**
         * {
         *    _simpleMode:"simple",simple:简单模式, complex:复杂模式, none:未知
         *    _hasProp:true, true:有prop属性，false：没有prop属性
         * }
         */
      formatColumn:{
        get(){
          let column = this.column;
          let result = {};
          result._simpleMode = column&&!column.operate&&!column.tag&&!column.customTemplate?"simple"
          :column?"complex":"none";

          result._hasProp = column.config&&column.config[name]&&column.config[name].prop?true:false;

          return result;
        }
      }
    },
    methods:{
      handleOperate: function(row, name) {
        this.$emit("handleOperate",row,name );
      },
      filterValue(value){
          if(!(value instanceof Array)){
              return [];
          }
          return value;        
      },
      getIsShow(column,name,compareValue){
        let _hasProp = column.config&&column.config[name]&&column.config[name].prop;
        let showType = column.config&&column.config[name]&&column.config[name].showType==='iconTip'?"icon"
          :_hasProp?"dynamic":"static";
          return showType===compareValue;
      },
      isConfigHasValue(column,name,prop){
        let result = column.config&&column.config[name]&&column.config[name][prop]?true:false;
        return result;
      },
      configValue(column,name,prop,defaultValue){
        let result = column.config&&column.config[name]&&column.config[name][prop]?column.config[name][prop]:defaultValue;
        return result;
      }  
    }

}
</script>

<style>

</style>