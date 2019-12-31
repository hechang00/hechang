import {
  Color
} from '../../../type';
export default {
  what: {
    id: "jm-layout",
    needRegis: true,
    isContainer: true,
    link: "https://element.eleme.io/#/zh-CN/component/layout",
    temp: "<span>单列布局</span>",
    name: "布局",
    props: {
      justify: {
        default: "row",
        des: "子组件排列方向",
        type: String,
        enumValue: [
          {
            value: "column",
            des: "垂直排列"
          },
          {
            value: "column-reverse",
            des: "反向垂直排列"
          },
          {
            value: "row",
            des: "水平排列"
          },
          {
            value: "row-reverse",
            des: "反向水平排列"
          }
        ]
      },
      wrap: {
        default: "wrap",
        des: "自动换行方式",
        type: String,
        enumValue: [
          {
            value: "nowrap",
            des: "不换行"
          },
          {
            value: "wrap",
            des: "换行"
          },
          {
            value: "wrap-reverse",
            des: "反向换行"
          }
        ]
      },
      direction: {
        default: "flex-start",
        des: "水平对齐",
        type: String,
        enumValue: [
          {
            value: "flex-start",
            des: "起点"
          },
          {
            value: "flex-end",
            des: "末尾"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "space-between",
            des: "两端对齐"
          },
          {
            value: "space-around",
            des: "间隔对齐"
          }
        ]
      },
      align: {
        default: "center",
        des: "垂直对齐",
        type: String,
        enumValue: [
          {
            value: "flex-start",
            des: "起点"
          },
          {
            value: "flex-end",
            des: "末尾"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "baseline",
            des: "基线"
          },
          {
            value: "stretch",
            des: "伸展"
          }
        ]
      },
      bgcolor: {
        default: "#ffffff",
        des: "背景颜色",
        type: Color
      },
      minWidth: {
        default: "59.9",
        des: "最小宽度",
        type: String,
        priority: 997,
        classifyType: "style"
      },
      minHeight: {
        default: "59.9",
        des: "最小高度",
        type: String,
        priority: 997,
        classifyType: "style"
      },
      borderShow: {
        default: false,
        des: "是否显示边框",
        type: Boolean
      },
      alignContent: {
        default: "flex-start",
        des: "垂直对齐(整体)",
        type: String,
        enumValue: [
          {
            value: "flex-start",
            des: "起点"
          },
          {
            value: "flex-end",
            des: "末尾"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "space-around",
            des: "四周分开"
          },
          {
            value: "space-between",
            des: "两边分开"
          },
          {
            value: "stretch",
            des: "伸展"
          }
        ]
      },
      width: {
        default: "",
        des: "宽度",
        type: String,
        priority: 1000,
        classifyType: "style"
      },
      height: {
        default: "",
        des: "高度",
        type: String,
        priority: 1000,
        classifyType: "style"
      },
      paddingLeft: {
        default: "4px",
        des: "左内边距",
        title: "左",
        type: String
      },
      paddingRight: {
        default: "4px",
        des: "右内边距",
        title: "右",
        type: String
      },
      paddingTop: {
        default: "4px",
        des: "上内边距",
        title: "上",
        type: String
      },
      paddingBottom: {
        default: "4px",
        des: "下内边距",
        title: "下",
        type: String
      },
      flexShrink: {
        default: "1",
        des: "是否缩放",
        type: String,
        enumValue: [
          {
            value: 0,
            des: "不缩放"
          },
          {
            value: 1,
            des: "缩放"
          }
        ]
      },
      flexBasis: {
        default: "auto",
        des: "主轴空间",
        type: String,
        enumValue: [
          {
            value: "0",
            des: "均分"
          },
          {
            value: "auto",
            des: "自适应"
          }
        ]
      },
      isFlex: {
        default: false,
        des: "undefined",
        hideInPropsPanel: true,
        type: Boolean
      },
      notBorderHint: {
        default: false,
        des: "undefined",
        hideInPropsPanel: true,
        type: Boolean
      },
      needChangeHeight: {
        default: true,
        des: "是否自适应高度",
        hideInPropsPanel: true,
        type: Boolean
      },
      isFixedWidth: {
        default: false,
        des: "是否固定宽度",
        hideInPropsPanel: true,
        type: Boolean
      },
      borderStyle: {
        default: "dashed",
        des: "边框样式",
        type: String,
        enumValue: [
          {
            value: "none",
            des: "无"
          },
          {
            value: "dashed",
            des: "虚线"
          },
          {
            value: "solid",
            des: "实线"
          },
          {
            value: "dotted",
            des: "点状"
          },
          {
            value: "double",
            des: "双线"
          },
          {
            value: "groove",
            des: "3D凹槽"
          },
          {
            value: "ridge",
            des: "3D垄状"
          },
          {
            value: "inset",
            des: "3D inset"
          },
          {
            value: "outset",
            des: "3D outset"
          },
          {
            value: "initial",
            des: "继承父样式"
          },
          {
            value: "inherit",
            des: "hidden"
          },
          {
            value: "hidden"
          }
        ]
      },
      borderColor: {
        default: "#ffffff",
        des: "边框颜色",
        type: Color
      },
      borderWidth: {
        default: 1,
        des: "边框宽度",
        type: Number
      },
      boxShadowSize: {
        default: "",
        des: "效果",
        type: String,
        enumValue: [
          {
            value: "",
            des: "无"
          },
          {
            value: "mini",
            des: "迷你"
          },
          {
            value: "small",
            des: "小"
          },
          {
            value: "medium",
            des: "中"
          },
          {
            value: "large",
            des: "大"
          }
        ]
      },
      boxShawdowColor: {
        default: "rgba(232,232,232,1)",
        des: "颜色",
        type: Color
      },
      boxShadowAniamtion: {
        default: false,
        des: "动画",
        type: Boolean
      },
      topBoxShadow: {
        default: false,
        des: "上",
        posotion: "1",
        type: Boolean
      },
      bottomBoxShadow: {
        default: false,
        des: "下",
        posotion: "1",
        type: Boolean
      },
      leftBoxShadow: {
        default: false,
        des: "左",
        posotion: "1",
        type: Boolean
      },
      rightBoxShadow: {
        default: false,
        des: "右",
        posotion: "1",
        type: Boolean
      },
      borderRaduis: {
        default: "0",
        des: "圆角",
        type: String
      },
      dragGroup: {
        default: "topGroup",
        des: "组",
        hideInPropsPanel: true,
        type: String
      }
    },
    events: {
      click: {
        des: "点击事件",
        args: ["event"]
      },
      created: {
        des: "created生命周期函数",
        args: ["context"]
      },
      mounted: {
        des: "mounted生命周期函数",
        args: ["context"]
      },
      updated: {
        des: "updated生命周期函数",
        args: ["context"]
      },
      destroyed: {
        des: "destroyed生命周期函数",
        args: ["context"]
      }
    }
  },
  examples: []
};
