import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-checkbox-group',
    name: '多选框组合',
    link:"https://element.eleme.io/#/zh-CN/component/checkbox",
    grouptype: '表单组件',
    priority:990,
    img: 'select_checkbox',
    needRegis: true,
    template: {},
    icon: '',
    props: {
      value: {
        default: [],
        des: '当前选择值',
        model: true,
        type: Array
      },
      flexDirection: {
        default: 'row',
        des: '排列方式',
        type: String,
        enumValue: [{
            value: 'row',
            des: '水平'
          },
          {
            value: 'column',
            des: '垂直'
          }
        ]
      },
      items: {
        default: [],
        des: '多选框元素列表',
        fieldConfig: {
          title: '多选框元素列表配置',
          config: [{
              name: 'label',
              chinaName: '标签名',
              type: 'String',
              default: ''
            },
            {
              name: 'disabled',
              chinaName: '禁用',
              type: 'Boolean',
              default: false
            }
          ]
        },
        type: Array
      },
      min: {
        default: 0,
        des: '可勾选的最小个数',
        type: Number
      },
      max: {
        default: 2,
        des: '可勾选的最大个数',
        type: Number
      },
      size: {
        default: 'small',
        des: '多选框组尺寸',
        type: String,
        enumValue: [{
            value: 'medium',
            des: '中等'
          },
          {
            value: 'small',
            des: '小的'
          },
          {
            value: 'mini',
            des: '迷你'
          }
        ]
      },
      border: {
        default: false,
        des: '是否带边框',
        type: Boolean
      }
    },
    events: {
      change: {
        des: '当绑定值变化时触发的事件',
        args: ['value']
      }
    }
  },
  examples: [{
      name: '基础用法',
      class: 'el-checkbox-group',
      props: {
        items: [{
            label: '选项 1',
            checked: true
          },
          {
            label: '选项 2',
            disable: true
          }
        ]
      }
    },
    {
      name: '限制可选项的个数',
      class: 'el-checkbox-group',
      props: {
        items: [{
            label: '广州'
          },
          {
            label: '浙江'
          },
          {
            label: '新疆'
          },
          {
            label: '北京'
          }
        ],
        min: 0,
        max: 2
      }
    },
    {
      name: '带边框',
      class: 'el-checkbox-group',
      props: {
        items: [{
          label: '广州'
        }],
        border: true
      }
    }
  ]
}
