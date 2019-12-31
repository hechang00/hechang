import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'jm-oa-userinfo',
    needRegis: true,
    name: '用户OA信息',
    grouptype: '公司业务组件',
    icon: 'ivu-icon ivu-icon-ios-contact-outline',
    img: 'nav_tags',
    props: {
      size: {
        default: '64px',
        des: '头像大小',
        type: String
      },
      mode: {
        default: 'vertical',
        des: '布局',
        type: String,
        enumValue: [{
          value: 'horizontal',
          des: '水平'
        },
        {
          value: 'vertical',
          des: '垂直'
        }
        ]
      },
      gap: {
        default: '0px',
        des: '头像昵称间距',
        type: String
      },
      font: {
        default: 'PingFang SC',
        des: '字体',
        type: String,
        enumValue: [{
          value: 'PingFang SC'
        },
        {
          value: 'Microsoft YaHei'
        },
        {
          value: 'Helvetica Neue'
        },
        {
          value: 'Arial'
        }
        ]
      },
      fontSize: {
        default: 18,
        des: '字体大小',
        type: Number
      },
      color: {
        default: '#303133',
        des: '字体颜色',
        type: Color
      },
      fontWeight: {
        default: 'normal',
        des: '字体样式',
        type: String,
        enumValue: [{
          value: 'normal',
          des: '正常'
        },
        {
          value: 'bold',
          des: '加粗'
        },
        {
          value: 'lighter',
          des: '较轻'
        }
        ]
      },
      isNowrap: {
        default: true,
        des: '文本是否换行',
        type: Boolean
      },
      lineClamp: {
        default: 2,
        des: '显示行数',
        type: Number
      },
      letterSpacing: {
        default: 1,
        des: '字间距',
        type: Number
      },
      newLineHeight: {
        default: 32,
        des: '行高度',
        type: Number
      },
      backgroundColor: {
        default: '',
        des: '背景色',
        type: Color
      },
      opacity: {
        default: 100,
        des: '不透明度',
        min: 0,
        max: 100,
        type: Number
      },
      x: {
        default: 0,
        des: '水平阴影的位置',
        type: Number
      },
      y: {
        default: 0,
        des: '垂直阴影的位置',
        type: Number
      },
      blurValue: {
        default: 0,
        des: '阴影模糊的距离',
        type: Number
      },
      shadowColor: {
        default: '',
        des: '阴影的颜色',
        type: Color
      },
      fontStyle: {
        default: 'normal',
        des: '斜体',
        type: String,
        enumValue: [{
          value: 'normal',
          des: '正常'
        },
        {
          value: 'italic',
          des: '斜体'
        },
        {
          value: 'oblique',
          des: '倾斜'
        }
        ]
      },
      textDecoration: {
        default: 'none',
        des: '划线',
        type: String,
        enumValue: [{
          value: 'none',
          des: '无'
        },
        {
          value: 'blink',
          des: '闪烁'
        },
        {
          value: 'underline',
          des: '下划线'
        },
        {
          value: 'line-through',
          des: '中划线'
        },
        {
          value: 'overline',
          des: '跨线'
        }
        ]
      },
      disabled: {
        default: false,
        des: '文字提示',
        type: Boolean
      },
    },
    events: {
      click: {
        des: '点击事件',
        args: []
      }
    },
  },
  examples: [{
    name: '用户OA信息',
    props: {
      mode: 'vertical',
      size: '48px',
      fontSize: 14,
      newLineHeight: 20
    }
  },]
}