import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'el-input-number',
        name: '计数器',
        grouptype: '表单组件',
        link:"https://element.eleme.io/#/zh-CN/component/input-number",
        img: 'base_number',
        icon:'',
        props: {
            step: {
                default: 1,
                des: '计数器步长',
                type: Number
            },
            max: {
                default: 100,
                des: '最大值',
                type: Number
            },
            min: {
                default: 1,
                des: '最小值',
                type: Number
            },
            value: {
                default: 0,
                des: '当前值',
                model: true,
                autoConvert: true,
                type: Number
            },
            disabled: {
                default: false,
                des: '禁用计数器',
                type: Boolean
            },
            size: {
                default: '',
                des: '计数器尺寸',
                type: String,
                enumValue: [{
                        value: 'medium',
                        des: '中号'
                    },
                    {
                        value: 'small',
                        des: '小号'
                    },
                    {
                        value: 'mini',
                        des: '迷你'
                    }
                ]
            },
            controls: {
                default: true,
                des: '是否显示控制器',
                type: Boolean
            },
            name: {
                default: '',
                des: '原生属性',
                type: String
            },
            label: {
                default: '',
                des: '输入框关联文字',
                type: String
            },
            precision: {
                default: 1,
                des: '数值精度',
                type: Number
            },
            placeholder: {
                default: '',
                des: '输入框占位文本',
                type: String
            },
            controlsPosition: {
                default: '',
                des: '控制按钮位置',
                type: String,
                enumValue: [{
                        value: '',
                        des: '默认'
                    },
                    {
                        value: 'right',
                        des: '右侧'
                    }
                ]
            }
        },
        events: {
            change: {
                des: '数值变化函数',
                args: ['value']
            },
            blur: {
                des: '失去焦点函数',
                args: ['event']
            },
            focus: {
                des: '获得焦点函数',
                args: ['event']
            }
        }
    },
    examples: [{
            name: '基础用法',
            props: {
                label: '描述文字',
                min: 1,
                max: 10,
                value: 1
            }
        },
        {
            name: '禁用状态',
            props: {
                disabled: true,
                value: 1
            }
        },
        {
            name: '步数增减',
            props: {
                step: 2,
                value: 5
            }
        },
        {
            name: '小数点精度',
            props: {
                value: 1,
                max: 10,
                step: 0.1,
                precision: 2
            }
        },
        {
            name: '小号尺寸',
            props: {
                value: 1,
                size: 'small',
                precision: 0
            }
        },
        {
            name: '迷你尺寸',
            props: {
                value: 1,
                size: 'mini',
                precision: 0
            }
        },
        {
            name: '右侧按钮',
            props: {
                value: 1,
                controlsPosition: 'right'
            }
        }
    ]
}