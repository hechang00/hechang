import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'jm-linkman',
    needRegis: true,
    name: '人员选择器',
    grouptype: '公司业务组件',
    img: 'linkman',
    icon: '',
    props: {
      placeholder: {
        default: '请输入关键词',
        des: '提示',
        type: String
      },
      value: {
        default: '',
        des: '当前选择人员',
        model: true,
        type: String
      },
      multiSelect: {
        default: true,
        des: '是否多选',
        type: Boolean
      },
      hasHead: {
        default: true,
        des: '是否显示头像',
        type: Boolean
      },
      size: {
        default: 'large',
        des: '输入框尺寸',
        type: String,
        enumValue: [
          {
            value: 'large',
            des: '大号'
          },
          {
            value: 'medium',
            des: '中号'
          },
          {
            value: 'small',
            des: '小号'
          },
          {
            value: 'mini',
            des: '迷你'
          }
        ]
      }
    },
    events: {
      change:{
        des:'人员选择变化时触发',
        args:['result']
      }
    }
  },
  examples: [
    {
      name: '默认单选模式',
      img: 'linkman',
      props: {
        multiSelect: false,
        hasHead: true
      }
    },
    {
      name: '多选模式',
      img: 'mutilLinkman',
      props: {
        multiSelect: true,
        hasHead: true
      }
    },
    {
      name: '无头像模式',
      img: 'unHeadLinkman',
      props: {
        multiSelect: false,
        hasHead: false
      }
    }
  ]
}