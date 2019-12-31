import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'x-button',
        name: '按钮',
        grouptype: '基础组件',
        img: 'base_btn',
        icon:'',
        props: {
            text: {
                default: '',
                des: 'text',
                type: String
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            type: {
                default: 'default',
                des: '类型',
                type: String,
                enumValue: [{
                        value: 'default'
                    },
                    {
                        value: 'primary'
                    },
                    {
                        value: 'warn'
                    }
                ]
            }
        },
        events: {}
    },
    examples: [{
        name: '按钮',
        props: {
            text: 'text',
            type: 'default',
            disabled: false
        }
    }]
}