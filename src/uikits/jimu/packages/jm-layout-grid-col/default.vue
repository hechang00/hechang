<template>
  <el-col
    :span="span"
    :offset="offset"
    :push="push"
    :pull="pull"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <div
      :class="[boxShadowAniamtion&&boxShadowSize?shadowAnimotion:'']"
      :style="{      
      'display': 'flex',
      'flex-direction':justify,
      'justify-content':direction,
      'flex-wrap': wrap,
      'background-color': bgcolor,
      'align-items':align,
      'align-content':alignContent,
      'min-height':dealUnit(minHeight,0),
      'height':'100%',
      'padding-left':dealUnit(paddingLeft,0),
      'padding-right':dealUnit(paddingRight,0),
      'padding-top':dealUnit(paddingTop,0),
      'padding-bottom':dealUnit(paddingBottom,0),
      'margin-left':dealUnit(style_marginLeft,0),
      'margin-right':dealUnit(style_marginRight,0),
      'margin-top':dealUnit(style_marginTop,0),
      'margin-bottom':dealUnit(style_marginBottom,0),
      'box-shadow':boxShadow,
      'border':borderShow?borderStyle+' '+borderWidth+'px '+borderColor:'',
      'border-radius':dealUnit(borderRaduis,0)
      }"
      @click="click"
    >
      <slot></slot>
    </div>
  </el-col>
</template>
<script>
const shadowStyle = {
  top: {
    mini: ["0 -1px 0 0"],
    small: ["0 -8px 10px 0"],
    medium: ["0 -15px 25px 0"],
    large: ["0 -25px 40px 0"]
  },
  bottom: {
    mini: ["0 1px 0 0"],
    small: ["0 8px 10px 0"],
    medium: ["0 15px 25px 0"],
    large: ["0px 25px 40px 0"]
  },
  left: {
    mini: ["-1px 0 0 0"],
    small: ["-8px 0 10px 0"],
    medium: ["-15px 0 25px 0"],
    large: ["-25px 0 40px 0"]
  },
  right: {
    mini: ["1px 0 0 0"],
    small: ["8px 0 10px 0"],
    medium: ["15px 0 25px 0"],
    large: ["25px 0 40px 0"]
  }
};
export default {
  data() {
    return {
      hoverState: false,
      animotionShadow: "",
      transform: "",
      transition: ""
    };
  },
  addFlexRow: false,
  props: {
    currentID:String,
    minHeight: {
      default: 59.9
    },
    paddingLeft: {
      default: "0px"
    },
    paddingRight: {
      default: "0px"
    },
    paddingTop: {
      default: "0px"
    },
    paddingBottom: {
      default: "0px"
    },
    colWidth: {
      default: "1"
    },
    span: {
      default: 8
    },
    offset: {
      default: 0
    },
    push: {
      default: 0
    },
    pull: {
      default: 0
    },
    xs: {
      default: 8
    },
    sm: {
      default: 8
    },
    md: {
      default: 8
    },
    lg: {
      default: 8
    },
    xl: {
      default: 8
    },
    justify: {
      default: "row"
    },
    wrap: {
      default: "wrap"
    },
    direction: {
      default: "flex-start"
    },
    align: {
      default: "center"
    },
    bgcolor: {
      default: "#ffffff"
    },
    alignContent: {
      default: "flex-start"
    },
    padding: {
      default: "0px 0px 0px 0px"
    },
    boxShadowSize: {
      default: ""
    },
    boxShawdowColor: {
      default: "rgba(232,232,232,1)"
    },
    boxShadowAniamtion: {
      default: false
    },
    topBoxShadow: {
      default: false
    },
    bottomBoxShadow: {
      default: false
    },
    leftBoxShadow: {
      default: false
    },
    rightBoxShadow: {
      default: false
    },
    borderRaduis: {
      default: "0"
    },
    showSelect:null,
    disableSelect:null,
    borderShow: {
      default: false
    },
    borderStyle: {
      default: "dashed"
    },
    borderColor: {
      default: "#ffffff"
    },
    borderWidth: {
      default: 1
    },
    notBorderHint: {
      default: false
    }
  },
  computed: {
    shadowAnimotion: {
      get() {
        if (this.boxShadowAniamtion && this.boxShadowSize) {
          return this.getShadowHovorStyle();
        } else {
          return "";
        }
      }
    },
    boxShadow: {
      get() {
        let boxShadow = "";
        if (this.boxShadowSize) {
          let ShawdowColor = this.boxShawdowColor;
          var rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
          let rgbaArray = [];
          if (ShawdowColor) {
            rgbaArray = ShawdowColor.match(rgbaRegex);
          }
          if (rgbaArray && rgbaArray.length === 5) {
            if (this.boxShadowSize === "mini") {
              ShawdowColor =
                "rgba(" +
                rgbaArray[1] +
                "," +
                rgbaArray[2] +
                "," +
                rgbaArray[3] +
                "," +
                "0.9)";
            } else {
              ShawdowColor =
                "rgba(" +
                rgbaArray[1] +
                "," +
                rgbaArray[2] +
                "," +
                rgbaArray[3] +
                "," +
                "0.6)";
            }
          }
          if (this.topBoxShadow) {
            let topGroup = shadowStyle["top"][this.boxShadowSize];
            for (let i = 0; i < topGroup.length; i++) {
              boxShadow += topGroup[i] + " " + ShawdowColor + ",";
            }
          }
          if (this.bottomBoxShadow) {
            let bottomGroup = shadowStyle["bottom"][this.boxShadowSize];
            for (let i = 0; i < bottomGroup.length; i++) {
              boxShadow += bottomGroup[i] + " " + ShawdowColor + ",";
            }
          }
          if (this.leftBoxShadow) {
            let leftGroup = shadowStyle["left"][this.boxShadowSize];
            for (let i = 0; i < leftGroup.length; i++) {
              boxShadow += leftGroup[i] + " " + ShawdowColor + ",";
            }
          }
          if (this.rightBoxShadow) {
            let rightGroup = shadowStyle["right"][this.boxShadowSize];
            for (let i = 0; i < rightGroup.length; i++) {
              boxShadow += rightGroup[i] + " " + ShawdowColor + ",";
            }
          }
          if (boxShadow !== "") {
            boxShadow = boxShadow.substring(0, boxShadow.length - 1);
          }
        }
        return boxShadow;
      }
    }
  },
  watch: {
    updateHoverState(isHover) {
      this.hoverState = isHover;
    },
    getShadowHovorStyle() {
      let ShawdowColor = this.boxShawdowColor;
      var rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
      let rgbaArray = [];
      if (ShawdowColor) {
        rgbaArray = ShawdowColor.match(rgbaRegex);
      }
      let cssText = ``;
      switch (this.boxShadowSize) {
        case "mini":
          this.animotionShadow = `2px 2px 10px 0 ${ShawdowColor},-2px -2px 10px 0 ${ShawdowColor}`;
          this.transform = "";
          this.transition = "all .3s cubic-bezier(.2, .5, .3, 1)";
          break;
        case "small":
          if (rgbaArray && rgbaArray.length === 5) {
            ShawdowColor =
              "rgba(" +
              rgbaArray[1] +
              "," +
              rgbaArray[2] +
              "," +
              rgbaArray[3] +
              "," +
              "0.5)";
          }
          this.animotionShadow = `0px 8px 25px ${ShawdowColor},0px -2px 15px ${ShawdowColor}`;
          this.transform = "translate3d(0,-1px,0)";
          this.transition = "all .3s cubic-bezier(.2, .5, .3, 1)";
          break;
        case "medium":
          if (rgbaArray && rgbaArray.length === 5) {
            ShawdowColor =
              "rgba(" +
              rgbaArray[1] +
              "," +
              rgbaArray[2] +
              "," +
              rgbaArray[3] +
              "," +
              "0.5)";
          }
          this.animotionShadow = `0px 15px 30px ${ShawdowColor},0px -3px 25px ${ShawdowColor}`;
          this.transform = "translate3d(0,-2px,0)";
          this.transition = "all .3s cubic-bezier(.2, .5, .3, 1)";
          break;
        case "large":
          if (rgbaArray && rgbaArray.length === 5) {
            ShawdowColor =
              "rgba(" +
              rgbaArray[1] +
              "," +
              rgbaArray[2] +
              "," +
              rgbaArray[3] +
              "," +
              "0.5)";
          }
          this.animotionShadow = `0px 40px 80px ${ShawdowColor},0px -4px 30px ${ShawdowColor}`;
          this.transform = "translate3d(0,-4px,0)";
          this.transition = "all .3s cubic-bezier(.2, .5, .3, 1)";
          break;
        default:
          this.animotionShadow = "";
          this.transform = "";
          this.transition = "";
          break;
      }
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    click(e) {
      this.$emit("click", e);
    },
    getShadowHovorStyle() {
      let className = "shadow" + "_" + this.currentID;
      let head = document.head;
      let style = document.getElementById("jm-layoutshadow-style");
      if (!style) {
        style = document.createElement("style");
        style.id = "jm-layoutshadow-style";
        style.type = "text/css";
        head.appendChild(style);
      }
      let ShawdowColor = this.boxShawdowColor;
      var rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
      let rgbaArray = [];
      if (ShawdowColor) {
        rgbaArray = ShawdowColor.match(rgbaRegex);
      }
      let cssText = ``;
      switch (this.boxShadowSize) {
        case "mini":
          if (rgbaArray && rgbaArray.length === 5) {
            let r = rgbaArray[1];
            let g = rgbaArray[2];
            let b = rgbaArray[3];
            if (r >= 10) {
              r = parseFloat(r) - 10;
            }
            if (g >= 10) {
              g = parseFloat(g) - 10;
            }
            if (b >= 10) {
              b = parseFloat(b) - 10;
            }
            ShawdowColor = "rgba(" + r + "," + g + "," + b + "," + "1)";
          }
          cssText = `.${className}:hover{
                    box-shadow: 1px 2px 10px 0 ${ShawdowColor},-2px -1px 10px 0 ${ShawdowColor}!important;
                    transition: all .3s cubic-bezier(.2, .5, .3, 1);
                    position: relative;
                    z-index: 999;
                  }`;
          break;
        case "small":
          if (rgbaArray && rgbaArray.length === 5) {
            ShawdowColor =
              "rgba(" +
              rgbaArray[1] +
              "," +
              rgbaArray[2] +
              "," +
              rgbaArray[3] +
              "," +
              "0.5)";
          }
          cssText = `.${className}:hover{
                  box-shadow: 0px 8px 25px ${ShawdowColor},0px -2px 15px ${ShawdowColor}!important;
                  transform:translate3d(0,-1px,0);
                  transition: all .3s cubic-bezier(.2, .5, .3, 1);
                  position: relative;
                  z-index: 999;
                }`;

          break;
        case "medium":
          if (rgbaArray && rgbaArray.length === 5) {
            ShawdowColor =
              "rgba(" +
              rgbaArray[1] +
              "," +
              rgbaArray[2] +
              "," +
              rgbaArray[3] +
              "," +
              "0.5)";
          }
          cssText = `.${className}:hover{
                  box-shadow: 0px 15px 30px ${ShawdowColor},0px -3px 25px ${ShawdowColor}!important;
                  transform:translate3d(0,-2px,0);
                  transition: all .3s cubic-bezier(.2, .5, .3, 1);
                  position: relative;
                  z-index: 999;
                }`;
          break;
        case "large":
          if (rgbaArray && rgbaArray.length === 5) {
            ShawdowColor =
              "rgba(" +
              rgbaArray[1] +
              "," +
              rgbaArray[2] +
              "," +
              rgbaArray[3] +
              "," +
              "0.5)";
          }
          cssText = `.${className}:hover{
                  box-shadow: 0px 40px 80px 0 ${ShawdowColor},0px -4px 30px 0 ${ShawdowColor}!important;
                  transform: translate3d(0px, -4px, 0px);
                  transition: all .3s cubic-bezier(.2, .5, .3, 1);
                  transition-property: all;
                  position: relative;
                  z-index: 999;
                }`;
          break;
        default:
          break;
      }

      if (!this.findShadowStyle(style.sheet, className)) {
        if (style.sheet.insertRule) {
          style.sheet.insertRule(cssText);
        } else if (sheet.addRule) {
          style.sheet.addRule(cssText);
        }
      }

      return className;
    },
    findShadowStyle(sheet, className) {
      let result = false;
      let selectorText = `.${className}:hover`;
      let cssRules = sheet.cssRules;
      for (let i = 0; i < cssRules.length; i++) {
        if (selectorText === cssRules[i].selectorText) {
          result = true;
          break;
        }
      }
      return result;
    }
  },
  created() {
    this.$emit("created", this);
  },
  mounted() {
    this.$emit("mounted", this);
  },
  updated() {
    this.$emit("updated", this);
  },
  destroyed() {
    this.$emit("destroyed", this);
  }
};
</script>

<style scoped>
</style>
