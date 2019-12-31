import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-el-tag',
        name: '标签',
        needRegis: true,
        grouptype: '数据组件',
        priority:930,
        link:"https://element.eleme.io/#/zh-CN/component/tag",
        img: 'base_tag',
        icon:'',
        props: {
            size: {
                default: 'mini',
                des: '尺寸',
                type: String,
                enumValue: [{
                        value: 'mini',
                        des: '迷你'
                    },
                    {
                        value: 'small',
                        des: '小尺寸'
                    },
                    {
                        value: 'medium',
                        des: '中等'
                    }
                ]
            },
            type: {
                default: '',
                des: '主题',
                type: String,
                enumValue: [{
                        value: '',
                        des: '默认'
                    },
                    {
                        value: 'success',
                        des: '成功'
                    },
                    {
                        value: 'info',
                        des: '信息'
                    },
                    {
                        value: 'warning',
                        des: '告警'
                    },
                    {
                        value: 'danger',
                        des: '危险'
                    }
                ]
            },
            addTag: {
                default: false,
                des: '是否可动态编辑',
                type: Boolean
            },
            closable: {
                default: false,
                des: '是否可移除',
                type: Boolean
            },
            hit: {
                default: false,
                des: '是否有边框描边',
                type: Boolean
            },
            color: {
                default: '',
                des: '背景色',
                type: Color
            },
            disableTransitions: {
                default: true,
                des: '是否禁用渐变动画',
                type: Boolean
            },
            value: {
                default: [],
                des: '显示数据',
                model: true,
                type: Array
            }
        },
        events: {
            tagClick: {
                des: '点击Tag时触发的事件',
                args: ['tag']
            },
            tagClose: {
                des: '关闭Tag时触发的事件',
                args: ['tag']
            }
        }
    },
    examples: [{
            name: '基本用法',
            props: {
                type: '',
                closable: false,
                addTag: false,
                value: ['标签1', '标签2']
            }
        },
        {
            name: '可移除标签',
            props: {
                type: 'success',
                closable: true,
                addTag: false,
                value: ['标签1', '标签2']
            }
        },
        {
            name: '移除时带动画',
            props: {
                type: 'info',
                closable: true,
                disableTransitions: false,
                addTag: false,
                value: ['标签1', '标签2']
            }
        },
        {
            name: '是否有边框描边',
            props: {
                type: 'danger',
                addTag: false,
                hit: true,
                value: ['标签1', '标签2']
            }
        },
        {
            name: '迷你',
            props: {
                type: 'warning',
                closable: true,
                value: ['标签1', '标签2'],
                size: 'mini'
            }
        },
        {
            name: '动态编辑',
            props: {
                type: '',
                closable: true,
                addTag: true,
                disableTransitions: false,
                value: ['标签1']
            }
        }
    ]
}