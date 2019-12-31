<template>
  <div :multi-select="multiSelect" style="position: relative;" ref="rtxSearch">
    <div class="jm-linkman" @mouseenter="inputHovering = true" @mouseleave="inputHovering = false">
      <el-input
        type="text"
        :size="size"
        :placeholder="placeholder"
        required
        v-model="searchStaff"
        @focus="inputrtx"
        style="width:100%"
        ref="rtxInput"
      />
      <span
        style="position: absolute;right:1px;height: 100%;text-align: center;width: 16px;line-height: 40px;"
      >
        <i
          v-if="showClose"
          class="el-icon-circle-close"
          style="color: #409eff"
          @click="handleClearClick"
        ></i>
      </span>
    </div>
    <div
      class="alertrtxs"
      :class="[isBeyond ? 'beyondRtx':'',isRightBeyond ? 'beyondRightRtx':'']"
      ref="rtxResult"
      v-show="inputchoise"
    >
      <div class="search-con pr" style="width: 100%;">
        <el-input
          ref="searchInput"
          autofocus="true"
          size="mini"
          type="search"
          placeholder="英文名/中文名"
          v-model="searchResult.searchStr"
          @keyup.native="valueChange"
          clearable
          style="width:90%;margin:6px"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="selectPanel" :class="multiSelect?'multiSelect':''" style="text-align:left;">
        <div class="selected" v-show="multiSelect && searchResult.selectedResults.length>0">
          <span class="selectedTitle">已选人员</span>
          <ul class="clearfix">
            <li
              class="pr fl"
              :key="index+'_'+staff.FullName"
              v-for="(staff,index) in searchResult.selectedResults"
              @click="delstaff(staff)"
            >
              <a href="javascript:;" class="fl">
                <img
                  v-if="hasHead"
                  class="headImg"
                  :src="getAvatar(staff.engName)"
                  alt
                  @error.once="imgLoadErr($event)"
                >
                <span class="fl textover">{{staff.FullName}}</span>
              </a>
              <a href="javascript:;" class="delete-btn rightBtn">取消</a>
            </li>
          </ul>
          <a class="conf-sure" @click="confirm">确 定</a>
        </div>
        <div class="result">
          <div
            :class="multiSelect?'result-tit':''"
            class="clearfix border-line-bottom"
            v-if="searching"
          >
            <span class="fl">搜索中...</span>
          </div>
          <div
            :class="multiSelect?'result-tit':''"
            class="clearfix border-line-bottom"
            v-else-if="!searching && (searchResult.searchStr!='' && searchResult.resultList.length == 0)"
          >
            <span class="fl">没有匹配结果</span>
          </div>
          <div v-else-if="searchResult.searchStr!=''">
            <div :class="multiSelect?'result-tit':''" class="clearfix border-line-bottom">
              <span class="selectedTitle">可能找的人</span>
            </div>
            <div>
              <ul class="clearfix ulStaff">
                <li
                  class="pr fl border-line-bottom"
                  :key="index"
                  v-for="(result,index) in searchResult.resultList"
                  @mousedown.prevent="selectResult(result)"
                >
                  <span>
                    <img v-if="hasHead" class="headImg" :src="getAvatar(result.engName)">
                    <span class="textover">{{result.FullName}}</span>
                    <span
                      v-show="multiSelect"
                      aria-checked="mixed"
                      class="el-checkbox__input rightBtn"
                      :class="result.select ? 'is-checked':''"
                    >
                      <span class="el-checkbox__inner"></span>
                    </span>
                    <!-- <el-checkbox v-show="multiSelect" v-model="result.select" class="rightBtn" @change="selectChange(result)"></el-checkbox> -->
                    <!-- <input type="checkbox" v-model="result.select" class="rightBtn"/> -->
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layer-cover" :style="{display:inputchoise ? '':'none'}" @click="hideSelectPanel"></div>
    <!-- <remote-js src="http://tapd.oa.com/js/userspinyin.js"></remote-js> -->
  </div>
</template>
<script>
import axios from "axios";
var qs = require("qs");
var allMemberList = [];
export default {
  name: "linkman",
  props: {
    placeholder: {
      default: "请输入关键词"
    },
    value: {
      default: ""
    },
    multiSelect: {
      default: true
    },
    hasHead: {
      default: true
    },
    size: {
      default: "large"
    }
  },
  data() {
    return {
      searchResult: {
        searchStr: "", //用户搜索字符
        selectedResults: [], //选中的员工
        resultList: [] //搜索结果列表
      },
      //  searchStaff: "",
      isBeyond: false,
      isRightBeyond: false,
      pause: 300,
      searchTimer: false,
      inputchoise: false,
      searching: false,
      screenHeight: 580,
      screenWidth: 1098,
      avatarUrl: "http://tapd.oa.com/0/users/avatar/{engName}/jpg/0/small",
      inputHovering: false
      // allMemberList:[],
    };
  },
  directives: {
    autofocus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  computed: {
    searchStaff: {
      get() {
        return this.value;
      },
      set(curVal) {
        this.$emit("input", curVal);
        this.$emit("change", curVal);
      }
    },
    showClose() {
      return this.inputHovering && this.searchStaff;
    }
  },
  mounted() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://tapd.oa.com/js/userspinyin.js";
    s.onload = function() {
      allMemberList = _arruserspinyin.map(function(rtxArray) {
        let newRtxArray = {
          StaffID: rtxArray[3],
          FullName: rtxArray[0] + "(" + rtxArray[2] + ")",
          engName: rtxArray[0],
          select: false
        };
        return newRtxArray;
      });
    };
    document.body.appendChild(s);
    //原生获取屏幕高度
    // var screenHeight = document.body.offsetHeight
    this.screenHeight = document.documentElement.clientHeight;
    this.screenWidth = document.documentElement.clientWidth;
  },
  beforeDestroy() {
    if (this.searchTimer) {
      window.clearTimeout(this.searchTimer);
    }
    this.searchTimer = null;
  },
  methods: {
    handleClearClick(event) {
      event.stopPropagation();
      this.searchStaff = "";
      this.$set(this.searchResult, "searchStr", "");
      this.$set(this.searchResult, "selectedResults", []);
      for (let i in allMemberList) {
        this.$set(allMemberList[i], "select", false);
      }
    },
    hideSelectPanel: function() {
      this.inputchoise = false;
      let selectedResults = this.searchResult.selectedResults;
      if (Array.isArray(selectedResults) && selectedResults.length == 0) {
        this.searchResult.selectedResults = [];
        this.searchStaff = "";
      }
    },
    getAvatar: function(rtx) {
      //获取员工头像地址
      rtx = rtx.replace(/\(.+\)/, "");
      var url = this.avatarUrl.replace("{engName}", rtx);
      return url;
    },
    inputrtx: function() {
      //是否显示搜索遮罩层
      const offTop = this.$refs.rtxSearch.offsetTop;
      const offLeft = this.$refs.rtxSearch.offsetLeft;
      const offBottom = this.screenHeight - offTop;
      const offRight = this.screenWidth - offLeft;
      this.isBeyond = offBottom < 300 ? true : false;
      this.isRightBeyond = offRight < 300 ? true : false;
      this.inputchoise = true;
      this.$refs.rtxInput.blur();
      if (this.searchStaff && this.multiSelect) {
        //回显输入框的rtx
        let searchStaff = this.searchStaff;
        let selectedResults = this.searchResult.selectedResults || [];
        if (searchStaff.indexOf(";") > -1) {
          let staffArr = searchStaff.split(";");
          let results = [];
          for (let index = 0; index < staffArr.length; index++) {
            let staffObj = {
              FullName: staffArr[index],
              engName: staffArr[index]
            };
            let reStaff = [];
            if (Array.isArray(selectedResults) && selectedResults.length > 0) {
              reStaff = selectedResults.filter(item => {
                return item.FullName == staffArr[index];
              });
            }
            if (reStaff.length == 0) {
              results.push(staffObj);
            }
          }
          this.searchResult.selectedResults = [...selectedResults, ...results];
        } else {
          let reStaff = [];
          if (Array.isArray(selectedResults) && selectedResults.length > 0) {
            reStaff = selectedResults.filter(item => {
              return item.FullName == searchStaff;
            });
          }
          if (reStaff.length == 0) {
            this.searchResult.selectedResults.push({
              FullName: searchStaff,
              engName: searchStaff
            });
          }
        }
      }
    },
    showinputrtx: function(data) {
      //获取子组件传值，并向父组件传递选中员工
      this.inputchoise = data;
      if (this.searchResult.selectedResults.length > 0) {
        var names = [];
        for (var i = 0; i < this.searchResult.selectedResults.length; i++) {
          names.push(this.searchResult.selectedResults[i].FullName);
        }
        this.searchStaff = names.join(";"); // searchStaff根据selectedResults得到
      } else {
        this.searchStaff = "";
      }
    },
    classStyle: function(resultList, result) {
      //为搜索结果列表中的选中员工添加样式
      var classValue = "";
      for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].StaffID == result.StaffID) {
          classValue = "current";
        }
      }
      return classValue;
    },
    valueChange: function(e) {
      if (this.searchTimer) {
        window.clearTimeout(this.searchTimer);
        this.searchTimer = null;
      }
      this.searching = true;
      let _this = this;
      this.searchTimer = setTimeout(() => {
        //默认300ms请求API返回匹配员工
        _this.searchTimerComplete(_this.searchResult.searchStr);
        _this = null;
      }, this.pause);
    },
    searchTimerComplete: function(str) {
      var self = this;
      self.searching = false;
      let index = 0;
      str = str.toLowerCase();
      this.searchResult.resultList = allMemberList.filter(item => {
        if (item.FullName.indexOf(str) > -1 && index < 10) {
          index++;
          return item;
        } else if (index >= 10) {
          return;
        }
      });
    },
    selectChange: function(result) {
      if (!result.select) {
        //取消选中
        var pos = this.searchResult.selectedResults.indexOf(result);
        this.searchResult.selectedResults.splice(pos, 1);
      } else {
        this.searchResult.selectedResults.push(result);
      }
    },
    selectResult: function(result) {
      //debugger;
      if (this.multiSelect) {
        //多选
        // if (result.select) { //取消选中
        //   result.select = false;
        //   var pos = this.searchResult.selectedResults.indexOf(result);
        //   this.searchResult.selectedResults.splice(pos, 1);
        // } else {
        //   result.select = true;
        //   this.searchResult.selectedResults.push(result);
        // }
        result.select = !result.select;
        this.selectChange(result);
      } else {
        //单选
        this.searchResult.selectedResults.length = 0;
        this.searchResult.selectedResults.push(result);
        this.inputchoise = false;
        this.showinputrtx(this.inputchoise);
      }
    },
    delstaff: function(staff) {
      //多选模式删除已选人员
      staff.select = false;
      var pos = this.searchResult.selectedResults.indexOf(staff);
      this.searchResult.selectedResults.splice(pos, 1);
    },
    confirm: function() {
      //多选确认
      this.inputchoise = false;
      this.showinputrtx(this.inputchoise);
    },
    //图片请求失败处理
    imgLoadErr: function(e) {
      e.target.src = this.imgSrc;
    }
  }
};
</script>
<style scoped>
div,
ul,
li {
  font-size: 12px;
  list-style: none;
}

.conf-btn {
  width: 100%;
  height: 36px;
  box-shadow: 0 2px 6px black;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 99;
}
.conf-sure {
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  background-color: #007aff;
  width: 100%;
}
.selectPanel {
  max-height: 300px;
  overflow-y: auto;
}
.selected {
  padding: 5px 0;
}
.selectedTitle {
  font-size: 12px;
  margin-left: 5px;
  padding-top: 6px;
  display: block;
  color: #b0bac5;
}
.fl {
  height: 38px;
  line-height: 38px;
}
.clearfix .pr,
.ulStaff .pr {
  position: relative;
}
.pr a {
  display: inline-block;
  line-height: 38px;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
}
.pr span {
  color: #000;
  font-size: 12px;
}
.headImg {
  height: 28px;
  width: 28px;
  border-radius: 100%;
  vertical-align: -10px;
  margin: 2px 0px 2px 8px;
}
.textover {
  margin-left: 8px;
}
.delete-btn {
  font-size: 12px;
  color: red;
}
.rightBtn {
  position: absolute;
  right: 12px;
}
.alertrtxs {
  position: absolute;
  border: #fff;
  min-width: 300px;
  border: 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  z-index: 2000;
  margin-top: 2px;
}
.beyondRtx {
  top: auto;
  bottom: 0;
}
.beyondRightRtx {
  left: auto;
  right: 0;
}
.alertrtxs .f1 {
  height: 28px;
  line-height: 28px;
}
.layer-cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1998;
}
::-webkit-scrollbar {
  width: 5px;
}
:horizontal {
  height: 5px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
}
.jm-linkman {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
</style>
