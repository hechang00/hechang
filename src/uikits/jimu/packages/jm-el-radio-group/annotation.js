import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-el-radio-group',
        name: '单选框组合',
        priority: 987,
        link:"https://element.eleme.io/#/zh-CN/component/radio",
        needRegis: true,
        grouptype: '表单组件',
        img: 'radio_group',
        icon:'',
        template: {},
        props: {
            type: {
                default: 'normal',
                des: '单选框样式',
                type: String,
                enumValue: [{
                        value: 'normal',
                        des: '正常'
                    },
                    {
                        value: 'button',
                        des: '按钮'
                    }
                ]
            },
            items: {
                default: [],
                des: '单选框元素列表',
                fieldConfig: {
                    title: '选择项配置',
                    config: [{
                            name: 'value',
                            chinaName: '值',
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
            value: {
                default: '',
                des: '当前选择value',
                model: true,
                type: String
            }
        },
        events: {
            change: {
                des: '选择修改函数',
                args: ['value']
            }
        }
    },
    examples: [{
            name: '基础用法',
            props: {
                type: 'normal',
                items: [{
                        value: '1',
                        label: '选项1'
                    },
                    {
                        value: '2',
                        label: '选项2',
                        disabled: true
                    }
                ]
            }
        },
        {
            name: '按钮样式',
            props: {
                type: 'button',
                items: [{
                        value: '1',
                        label: '选项1'
                    },
                    {
                        value: '2',
                        label: '选项1',
                        disabled: true
                    }
                ]
            }
        }
    ]
}