import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-checkbox-group-pop',
        needRegis: true,
        name: '弹出多选框',
        registID: true,
        grouptype: '表单组件',
        img: 'select_checkbox_pop',
        icon:'',
        props: {
            title: {
                default: '请选择',
                des: '按钮标题',
                type: String
            },
            placement: {
                default: 'bottom',
                des: '出现位置',
                type: String,
                enumValue: [{
                        value: 'bottom'
                    },
                    {
                        value: 'bottom-start'
                    },
                    {
                        value: 'bottom-end'
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
                    },
                    {
                        value: 'top'
                    },
                    {
                        value: 'top-start'
                    },
                    {
                        value: 'top-end'
                    }
                ]
            },
            value: {
                default: [],
                des: '多选框配置',
                fieldConfig: {
                    title: '多选框配置',
                    config: [{
                            name: 'label',
                            chinaName: '标签名',
                            type: 'String',
                            default: ''
                        },
                        {
                            name: 'selected',
                            chinaName: '是否选择',
                            type: 'Boolean',
                            default: false
                        }
                    ]
                },
                model: true,
                type: Array
            }
        },
        events: {}
    },
    examples: [{
        name: '基本用法',
        props: {
            title: '请选择',
            value: [{
                    label: '选项1',
                    selected: true
                },
                {
                    label: '选项2',
                    selected: true
                },
                {
                    label: '选项3',
                    selected: false
                },
                {
                    label: '选项4',
                    selected: false
                },
                {
                    label: '选项5',
                    selected: false
                },
                {
                    label: '选项6',
                    selected: false
                }
            ]
        }
    }]
}