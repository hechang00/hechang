import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-popover',
    needRegis: true,
    name: '弹出框',
    grouptype: '其他',
    link:"https://element.eleme.io/#/zh-CN/component/popover",
    img: 'select_checkbox_pop',
    icon: '',
    props: {
      btnTitle: {
        default: '',
        des: '按钮标题',
        type: String
      },
      title: {
        default: '',
        des: '标题文字',
        type: String
      },
      value: {
        default: false,
        des: '状态是否可见',
        type: Boolean,
        model: true
      },
      width: {
        default: '200',
        des: '宽度(px)',
        type: String
      },
      trigger: {
        default: 'click',
        des: '触发方式',
        type: String,
        enumValue: [
          {
            value: 'click'
          },
          {
            value: 'focus'
          },
          {
            value: 'hover'
          },
          {
            value: 'manual'
          }
        ]
      },
      content: {
        default: '',
        des: '内容文字',
        type: String
      },
      referenceSlot: {
        default: '',
        des: '引用插槽',
        isSlotArray: true,
        type: String,
        enumValue: [
          {
            value: ''
          }
        ]
      },
      contentSlot: {
        default: '',
        des: '内部插槽',
        isSlotArray: true,
        type: String,
        enumValue: [
          {
            value: ''
          }
        ]
      },
      contentSlotData: {
        default: {},
        des: '内容插槽数据',
        type: Object
      },
      placement: {
        default: 'bottom',
        des: '出现位置',
        type: String,
        enumValue: [
          {
            value: 'bottom'
          },
          {
            value: 'bottom-start'
          },
          {
            value: 'bottom-end'
          },
          {
            value: 'top'
          },
          {
            value: 'top-start'
          },
          {
            value: 'top-end'
          },
          {
            value: 'left'
          },
          {
            value: 'left-start'
          },
          {
            value: 'left-end'
          },
          {
            value: 'right'
          },
          {
            value: 'right-start'
          },
          {
            value: 'right-end'
          }
        ]
      }
    },
    events: {}
  },
  examples: [
    {
      name: '基础用法',
      props: {
        content:'这是一段内容,这是一段内容,这是一段内容,这是一段内容。',
        title:'这是标题',
        btnTitle:'这是按钮'
      }
    }
  ]
}