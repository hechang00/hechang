import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'el-slider',
        name: '滑动条',
        grouptype: '表单组件',
        link:"https://element.eleme.io/#/zh-CN/component/slider",
        img: 'base_slide',
        icon:'',
        props: {
            min: {
                default: 0,
                des: '最小值',
                type: Number
            },
            max: {
                default: 100,
                des: '最大值',
                type: Number
            },
            step: {
                default: 1,
                des: '步长',
                type: Number
            },
            value: {
                default: 0,
                des: '当前值',
                model: true,
                type: Number
            },
            showInput: {
                default: false,
                des: '是否显示输入框，仅在非范围选择时有效',
                type: Boolean
            },
            showInputControls: {
                default: true,
                des: '在显示输入框的情况下，是否显示输入框的控制按钮',
                type: Boolean
            },
            inputSize: {
                default: 'small',
                des: '输入框的尺寸',
                type: String,
                enumValue: [{
                        value: 'large',
                        des: '大号'
                    },
                    {
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
            showStops: {
                default: false,
                des: '是否显示间断点',
                type: Boolean
            },
            showTooltip: {
                default: true,
                des: '是否显示tooltip',
                type: Boolean
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            range: {
                default: false,
                des: '是否为范围选择',
                type: Boolean
            },
            vertical: {
                default: false,
                des: '是否竖向模式',
                type: Boolean
            },
            debounce: {
                default: 300,
                des: '输入时的去抖延迟，毫秒，仅在show-input等于true时有效',
                type: Number
            },
            label: {
                default: '',
                des: '屏幕阅读器标签',
                type: String
            }
        },
        events: {
            change: {
                des: '选中数值变化函数',
                args: ['value']
            }
        }
    },
    examples: [{
            name: '默认',
            img: 'slide1',
            props: {
                value: 0,
                style_flex: 1
            }
        },
        {
            name: '自定义初始值',
            img: 'slide2',
            props: {
                value: 50,
                style_flex: 1
            }
        },
        {
            name: '隐藏Tooltip',
            img: 'slide3',
            props: {
                value: 50,
                showTooltip: false,
                style_flex: 1
            }
        },
        {
            name: '禁用',
            img: 'slide4',
            props: {
                value: 50,
                disabled: true,
                style_flex: 1
            }
        },
        {
            name: '不显示间断点',
            img: 'slide4',
            props: {
                value: 0,
                step: 10,
                style_flex: 1
            }
        },
        {
            name: '显示间断点',
            img: 'slide5',
            props: {
                value: 0,
                step: 10,
                showStops: true,
                style_flex: 1
            }
        },
        {
            name: '带有输入框',
            img: 'slide6',
            props: {
                value: 0,
                showInput: true,
                style_flex: 1
            }
        },
        {
            name: '范围选择',
            img: 'slide2',
            props: {
                value: 0,
                max: 10,
                showStops: true,
                range: true,
                style_flex: 1
            }
        },
        {
            name: '竖向模式',
            img: 'slide7',
            props: {
                value: 0,
                vertical: true,
                height: '200px',
                style_flex: 1
            }
        }
    ]
}