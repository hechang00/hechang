import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-transfer',
    needRegis: true,
    name: '穿梭框',
    priority:985,
    link:"https://element.eleme.io/#/zh-CN/component/transfer",
    grouptype: '表单组件',
    img: 'transfer',
    icon: '',
    props: {
      data: {
        default: [],
        des: '穿梭框元素列表',
        fieldConfig: {
          title: '穿梭框元素列表配置',
          config: [{
              name: 'key',
              chinaName: '键',
              type: 'String',
              default: ''
            },
            {
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
      titles: {
        default: ['列表1', '列表2'],
        des: '列表title',
        type: Array
      },
      filterable: {
        default: false,
        des: '是否开启搜索模式',
        type: Boolean
      },
      value: {
        default: [],
        des: '当前选择的数据',
        model: true,
        type: Array
      }
    },
    events: {
      change: {
        des: '右侧列表元素变化时触发',
        args: ['value']
      },
      rightCheckChange: {
        des: '右侧列表元素被用户选中 / 取消选中时触发',
        args: ['key']
      },
      leftCheckChange: {
        des: '左侧列表元素被用户选中 / 取消选中时触发',
        args: ['key']
      }
    }
  },
  examples: [{
    name: '基础用法',
    img: 'transfer',
    props: {
      data: [{
          key: 1,
          label: '备选项1',
          disabled: true
        },
        {
          key: 2,
          label: '备选项2',
          disabled: false
        },
        {
          key: 3,
          label: '备选项3',
          disabled: false
        }
      ]
    }
  }]
}
