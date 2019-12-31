import {
    Color
} from '../../../type';
export default {
    what: {
        isContainer: true,
        id: 'jm-form',
        link:"https://element.eleme.io/#/zh-CN/component/form",
        name: 'form表单',
        img: 'form',
        needRegis: true,
        props: {
            bgcolor: {
                default: '#ffffff',
                des: '背景颜色',
                type: Color
            },
            minWidth: {
                default: 99.9,
                des: '最小宽度',
                type: Number,
                classifyType:'style',
                priority:993
            },
            minHeight: {
                default: 59.9,
                des: '最小高度',
                type: Number,
                classifyType:'style',
                priority:992
            },
            border: {
                default: false,
                des: '是否显示边框',
                type: Boolean
            },
            labelWidth: {
                default: 100,
                des: '标签的宽度',
                type: Number
            },
            labelPosition: {
                default: 'right',
                des: '标签的位置',
                type: String,
                enumValue: [{
                        value: 'right',
                        des: '右边'
                    },
                    {
                        value: 'left',
                        des: '左边'
                    },
                    {
                        value: 'top',
                        des: '顶部'
                    }
                ]
            },
            span: {
                default: 1,
                des: '全局列数设置',
                min: 1,
                max: 6,
                type: Number
            },
            addSpan: {
                default: 2,
                des: '新增列数设置',
                min: 1,
                max: 6,
                type: Number
            },
            labelValue: {
                default: [],
                des: '标签配置',
                type: Array
            },
            value: {
                default: [],
                des: '显示数据',
                model: true,
                type: Array
            },
            iconMode: {
                default: false,
                des: '图标操作模式',
                type: Boolean
            },
            size: {
                default: 'small',
                des: '尺寸',
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
            formData: {
                default: {},
                des: '表单数据结构',
                notArray: true,
                hideInPropsPanel: true,
                type: Object
            }
        },
        events: {
            instance: {
                args: ['vm'],
                des: '初始化获取表单实例'
            },
            change: {
                args: ['value'],
                des: '动态表单内容变化触发'
            }
        }
    },
    examples: [{
            name: 'form表单',
            img: 'form',
            props: {
                style_flex: 1,
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px'
            }
        },
        {
            name: '动态增减表单',
            img: 'form',
            props: {
                style_flex: 1,
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                labelValue: [{
                        label: '动态1',
                        type: 'input',
                        prop: 'errcode_id',
                        placeholder: '请输入'
                    },
                    {
                        label: '动态2',
                        type: 'select',
                        prop: 'is_change',
                        placeholder: '请选择',
                        componetParam: {
                            options: [{
                                    value: '选项1',
                                    label: '停用'
                                },
                                {
                                    value: '选项2',
                                    label: '正常'
                                }
                            ]
                        }
                    }
                ],
                value: [{
                    errcode_id: '1351235123',
                    is_change: '正常'
                }]
            }
        }
    ]
}