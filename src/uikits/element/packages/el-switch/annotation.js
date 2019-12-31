import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'el-switch',
        name: '开关',
        link:"https://element.eleme.io/#/zh-CN/component/switch",
        grouptype: '基础组件',
        priority:940,
        img: 'base_switch',
        icon:'',
        props: {
            value: {
                default: false,
                des: '是否开启',
                model: true,
                type: Boolean
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            width: {
                default: 40,
                des: 'switch 的宽度',
                type: Number
            },
            activeText: {
                default: '',
                des: 'switch打开时的描述',
                type: String
            },
            inactiveText: {
                default: '',
                des: 'switch关闭时的描述',
                type: String
            },
            activeColor: {
                default: '#409EFF',
                des: 'switch打开时背景色',
                type: Color
            },
            inactiveColor: {
                default: '#C0CCDA',
                des: 'switch关闭时背景色',
                type: Color
            },
            name: {
                default: '',
                des: 'switch的name属性',
                type: String
            }
        },
        events: {
            change: {
                des: '数值变化函数',
                args: ['event']
            }
        }
    },
    examples: [{
            name: '基本用法',
            props: {
                value: true,
                activeColor: '#13ce66',
                inactiveColor: '#ff4949'
            }
        },
        {
            name: '带文字描述',
            props: {
                value: true,
                activeColor: '#13ce66',
                inactiveColor: '#ff4949',
                activeText: '开',
                inactiveText: '关'
            }
        },
        {
            name: '配置开关对应值',
            props: {
                value: '100',
                activeColor: '#13ce66',
                inactiveColor: '#ff4949',
                activeText: '100',
                inactiveText: '0'
            }
        },
        {
            name: '禁用状态',
            props: {
                value: true,
                disabled: true
            }
        }
    ]
}