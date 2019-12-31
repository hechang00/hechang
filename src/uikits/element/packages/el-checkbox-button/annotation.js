import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'el-checkbox-button',
        name: '复选',
        img: 'base_rechoose',
        link:"https://element.eleme.io/#/zh-CN/component/checkbox",
        grouptype:"表单组件",
        template: {},
        props: {
            value: {
                default: '',
                des: '当前选值',
                type: String
            },
            label: {
                default: '',
                des: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
                prefix: ':',
                type: String
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            checked: {
                default: false,
                des: '当前是否勾选',
                type: Boolean
            },
            name: {
                default: '',
                des: '原生 name 属性',
                type: String
            },
            trueLabel: {
                default: '',
                des: '选中时的值',
                type: String
            },
            falseLabel: {
                default: '',
                des: '没有选中时的值',
                type: String
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
            class: 'el-checkbox-button',
            props: {
                label: '选中文字',
                innerText: '备选项'
            }
        },
        {
            name: '禁用状态',
            class: 'el-checkbox-button',
            props: {
                label: '选中文字',
                innerText: '备选项',
                disabled: true
            }
        }
    ]
}