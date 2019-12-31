<template>
  <el-tooltip :disabled="!disabled" :content="showValue">
    <div
      class="wrap"
      @click="edit"
      :style="{'white-space': isNowrap ? 'normal' : 'nowrap','word-break':isNowrap?'break-all':'normal','overflow': 'hidden','text-overflow':'ellipsis','line-clamp': lineClamp,'-webkit-box-orient': 'vertical','font-family':font,'font-size':fontSize + 'px','color':color,'font-weight':fontWeight,'text-align':textAlign,'letter-spacing':letterSpacing + 'px','line-height':newLineHeight + 'px','background-color':backgroundColor,'opacity':opacity/100,'text-shadow':(x==0&&y==0&&blurValue==0)?'none':(x+'px '+y+'px '+blurValue+'px '+shadowColor),'font-style':fontStyle,'text-decoration':textDecoration}"
      :value="value"
      v-html="showValue"
    ></div>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    font: {
      default: "PingFang SC"
    },
    value: {
      default: ""
    },
    fontSize: {
      default: 18
    },
    color: {
      default: "#303133"
    },
    fontWeight: {
      default: "normal"
    },
    isNowrap: {
      default: true
    },
    lineClamp: {
      default: 2
    },
    textAlign: {
      default: "center"
    },
    letterSpacing: {
      default: 1
    },
    newLineHeight: {
      default: 32
    },
    backgroundColor: {
      default: ""
    },
    opacity: {
      default: 100
    },
    x: {
      default: 0
    },
    y: {
      default: 0
    },
    blurValue: {
      default: 0
    },
    shadowColor: {
      default: ""
    },
    fontStyle: {
      default: "normal"
    },
    textDecoration: {
      default: "none"
    },
    disabled: {
      default: false
    },
    url: {
      default: ""
    },
    windowName: {
      default: "_self"
    }
  },
  data() {
    return {
      editable: false,
      firstClick: false,
      showValue: this.value
    };
  },
  watch: {
    value() {
      this.showValue =
        typeof this.value === "number" ? this.value : this.value || "";
    }
  },
  methods: {
    isURL(str_url) {
      // 验证url
      var strRegex =
        "^((https|http|ftp|rtsp|mms)?://)" +
        "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
        "(([0-9]{1,3}.){3}[0-9]{1,3}" + // IP形式的URL- 199.194.52.184
        "|" + // 允许IP和DOMAIN（域名）
        "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
        "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + // 二级域名
        "[a-z]{2,6})" + // first level domain- .com or .museum
        "(:[0-9]{1,4})?" + // 端口- :80
        "((/?)|" + // a slash isn't required if there is no file name
        "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
      var re = new RegExp(strRegex);
      return re.test(str_url);
    },
    edit(e) {
      if (this.url && this.isURL(this.url)) {
        window.open(this.url, this.windowName);
      }
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.wrap {
  display: inline-block;
}
</style>

