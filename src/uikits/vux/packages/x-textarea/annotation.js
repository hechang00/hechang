import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'x-textarea',
        name: '文本框',
        grouptype: '基础组件',
        img: 'base_input',
        icon:'',
        props: {
            title: {
                default: '',
                des: '标题',
                type: String
            },
            value: {
                default: '',
                des: '值',
                model: true,
                type: String
            },
            placeholder: {
                default: '',
                des: '提示',
                type: String
            },
            max: {
                default: '',
                des: '最大字符限制',
                type: String
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            showCounter: {
                default: false,
                des: '是否显示计数',
                type: Boolean
            },
            type: {
                default: 'text',
                des: '数据类型',
                type: String,
                enumValue: [{
                        value: 'text'
                    },
                    {
                        value: 'number'
                    },
                    {
                        value: 'email'
                    },
                    {
                        value: 'password'
                    },
                    {
                        value: 'tel'
                    }
                ]
            }
        },
        events: {}
    },
    examples: [{
        name: '输入框',
        props: {
            title: '标题',
            value: '内容',
            type: 'number',
            placeholder: '请输入提示',
            max: 10,
            disabled: false
        }
    }]
}