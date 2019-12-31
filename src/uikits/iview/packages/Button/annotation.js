import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'Button',
        name: '按钮',
        grouptype: '基础组件',
        img: 'base_btn',
        icon:'',
        props: {
            type: {
                default: 'default',
                des: '类型',
                type: String,
                enumValue: [{
                        value: 'default',
                        des: '默认'
                    },
                    {
                        value: 'primary',
                        des: '主要'
                    },
                    {
                        value: 'dashed',
                        des: '虚线'
                    },
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
                        des: '危险'
                    },
                    {
                        value: 'info',
                        des: '信息'
                    },
                    {
                        value: 'text',
                        des: '文本'
                    }
                ]
            },
            size: {
                default: 'small',
                des: '尺寸',
                type: String,
                enumValue: [{
                        value: 'default',
                        des: '默认'
                    },
                    {
                        value: 'small',
                        des: '小的'
                    },
                    {
                        value: 'large',
                        des: '最大'
                    }
                ]
            },
            loading: {
                default: false,
                des: '是否加载中状态',
                type: Boolean
            },
            disabled: {
                default: false,
                des: '是否禁用状态',
                type: Boolean
            },
            innerText: {
                default: '示例按钮',
                des: '标题',
                type: String
            }
        },
        events: {}
    },
    examples: [{
        name: '主要按钮',
        class: 'el-button',
        props: {
            type: 'primary',
            innerText: '主要按钮'
        }
    }]
}