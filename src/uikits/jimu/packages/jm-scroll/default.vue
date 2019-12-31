<template>
  <div class="wrap">
    <div id="box" ref="box">
      <div
        id="marquee"
        ref="marquee"
        :style="{
          'white-space': isNowrap ? 'normal' : 'nowrap','word-break':isNowrap?'break-all':'normal','overflow': 'hidden',
          'text-overflow':'ellipsis','line-clamp': lineClamp,'-webkit-box-orient': 'vertical','font-family':font,
          'font-size':fontSize + 'px','color':color,'font-weight':fontWeight,'text-align':textAlign,'letter-spacing':letterSpacing + 'px',
          'line-height':newLineHeight + 'px','background-color':backgroundColor,'opacity':opacity/100,
          'font-style':fontStyle,'text-decoration':textDecoration}"
        :value="value"
        :duration="duration"
      >{{text}}</div>
    </div>
  </div>
</template>

     <script>
export default {
  name: "jm-scroll",
  props: {
    font: {
      default: "PingFang SC"
    },
    value: {
      default: "双击可编辑"
    },
    duration: {
      default: 50
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
      default: 1
    },
    textAlign: {
      default: "right"
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
    fontStyle: {
      default: "normal"
    },
    textDecoration: {
      default: "none"
    }
  }, // 父组件传入数据， 数组形式 [ "连雨不知春去"，"一晴方觉夏深"]
  data() {
    return {
      timer: null,
      text: "" // 数组文字转化后的字符串
    };
  },
  methods: {
    move() {
      let _this = this;
      // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
      let width = _this.$refs.marquee.getBoundingClientRect().width;
      let box = _this.$refs.box;
      let boxWidth = box.getBoundingClientRect().width;
      let distance = 10; // 位移距离
      // 设置位移
      _this.timer = setInterval(function() {
        distance = distance - 1;
        // 如果位移超过文字宽度，则回到起点
        if (-distance >= width) {
          _this.$emit("leave", _this.value);
          distance = boxWidth;
        }
        box.style.transform = "translateX(" + distance + "px)";
      }, _this.duration);
    }
  },
  // 把父组件传入的arr转化成字符串
  mounted: function() {
    this.text = this.value;
  },
  // 更新的时候运动
  updated: function() {
    clearInterval(this.timer);
    // this.text = ''
    this.text = this.value;
    this.move();
  }
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
  color: #333;
  width: 100% !important;
}
#box {
  width: 100%;
  height: 100%;
}
#box div {
  float: left;
}
#marquee {
  margin: 0px 16px 0 20px;
  overflow: hidden;
  white-space: nowrap;
}
</style>

