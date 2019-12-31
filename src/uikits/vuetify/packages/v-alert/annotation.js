import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'v-alert', 
    name: '弹窗', 
    grouptype: '基础组件',
    img: 'base_alert', 
    link:"https://vuetifyjs.com/zh-Hans/components/alerts",
    icon:'',
    props: {
      innerText: {
        default: "i m alert",
        title: '文本内容',
        type: String
      },
      color: {
        default: undefined, 
        type: Color, 
        title: '颜色'
      }, 
      elevation: {
        default: 1, 
        type: [
          Number, 
          String
        ], 
        title: '相对深度'
      }, 
      height: {
        default: undefined, 
        type: [
          Number, 
          String
        ], 
        title: '高度'
      }, 
      maxHeight: {
        default: undefined, 
        type: [
          Number, 
          String
        ], 
        title: '最大高度'
      }, 
      maxWidth: {
        default: undefined, 
        type: [
          Number, 
          String
        ], 
        title: '最大宽度'
      }, 
      minHeight: {
        default: undefined, 
        type: [
          Number, 
          String
        ], 
        title: '最小高度'
      }, 
      minWidth: {
        default: undefined, 
        type: [
          Number, 
          String
        ], 
        title: '最小宽度'
      }, 
      width: {
        default: undefined, 
        type: [
          Number, 
          String
        ], 
        title: '宽度'
      }, 
      dark: {
        default: false, 
        type: Boolean, 
        title: '暗黑主题'
      }, 
      light: {
        default: false, 
        type: Boolean, 
        title: '明亮主题'
      }, 
      tag: {
        default: 'div', 
        type: String, 
        title: '标签'
      }, 
      tile: {
        default: false, 
        type: Boolean, 
        title: '正方形（无边框半径）'
      }, 
      value: {
        default: true, 
        type: Boolean, 
        title: '值',
        model: true
      }, 
      show: {
        default: false, 
        type: Boolean, 
        title: '是否显示',
        model: true
      }, 
      mode: {
        default: "out-in", 
        type: String, 
        title: '过渡模式',
        enumValue: [{
          value: 'out-in',
          des: 'out-in'
        },
        {
          value: 'in-out',
          des: 'in-out'
        }]
      }, 
      origin: {
        default: undefined, 
        type: String, 
        title: '过渡原点'
      }, 
      transition: {
        default: 'center', 
        type: String, 
        title: '过渡'
      }, 
      border: {
        default: undefined, 
        type: String, 
        title: '边框',
        enumValue: [{
          value: 'top',
          des: '上边框'
        },
        {
          value: '下边框',
          des: 'in-out'
        },{
          value: '左边框',
          des: 'out-in'
        },
        {
          value: 'right',
          des: '右边框'
        }]
      }, 
      closeLabel: {
        default: '$vuetify.close', 
        type: String, 
        title: '关闭图标'
      }, 
      coloredBorder: {
        default: false, 
        type: Boolean, 
        title: '有色边框'
      }, 
      dense: {
        default: false, 
        type: Boolean, 
        title: '密集'
      }, 
      dismissible: {
        default: false, 
        type: Boolean, 
        title: '可取消'
      }, 
      icon: {
        default: undefined, 
        type: [
          String,
          Boolean 
        ], 
        title: '图标'
      }, 
      outlined: {
        default: false, 
        type: Boolean, 
        title: '轮廓'
      }, 
      prominent: {
        default: false, 
        type: Boolean, 
        title: '松散（较大图标）'
      }, 
      text: {
        default: false, 
        type: Boolean, 
        title: '定义的顏色应用于文本和文本的低透明度背景'
      }, 
      type: {
        default: 'success', 
        type: String, 
        title: '类型',
        enumValue: [
        {
          value: 'success',
          des: '成功'
        },
        {
          value: 'warning',
          des: '告警'
        },
        {
          value: 'error',
          des: '错误'
        },
        {
          value: 'info',
          des: '信息'
        }]
      }
    }, 
    events: {
      input: {
        des: "被绑定模型的更新",
        args: ["value"]
      }
    },
    slots: {
      default: {
        des: '默认插槽', 
        title: '默认', 
        components: []
      },
      append: {
        des: '插入', 
        title: '插入', 
        components: []
      },
      close: {
        des: '关闭', 
        title: '关闭', 
        hasProps:true,
        components: []
      },
      prepend: {
        des: '前插入', 
        title: '前插入', 
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_alert_succ', 
      name: '基本用法',
      props: {
        dense: true, 
        outlined: true, 
      }, 
    }, 
    {
      img: 'v_alert_succ', 
      name: '成功弹窗', 
      props: {type: 'success', innerText: "I'm a success alert."}, 
    }, 
    {
      img: 'v_alert_info', 
      name: '信息弹窗', 
      props: {type: 'info', innerText: "I'm a info alert."}, 
    }, 
    {
      img: 'v_alert_warn', 
      name: '警告状态', 
      props: {type: 'warning', innerText: "I'm a warning alert."}, 
    }
  ]
}
