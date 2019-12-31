import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vfor',
        needRegis: true,
        isContainer: true,
        img: 'xunhuan',
        temp: '<span>循环布局</span>',
        name: '动态列表',
        grouptype:'布局组件',
        icon:'',
        props: {
            forData: {
                default: [{}],
                des: 'v-for数据',
                trigger: 'forDataTrigger',
                type: Array
            },
            forDataTrigger: {
                default: false,
                des: 'forData的触发器',
                hideInPropsPanel: true,
                noCompile: true,
                type: Boolean
            },
            forRenderChilds: {
                default: [],
                des: 'for循环渲染时候的ID',
                type: Array,
                hideInPropsPanel: true,
                noCompile: true,
                noBindToTemp: true,
                subType: String
            },
            editMode: {
                default: true,
                des: '模板编辑模式',
                noCompile: true,
                type: Boolean
            },
            vforDirection: {
                default: 'column',
                des: '列表排列方向',
                type: String,
                enumValue: [{
                        value: 'column',
                        des: '垂直排列'
                    },
                    {
                        value: 'row',
                        des: '水平排列'
                    }
                ]
            },
            vforWrap: {
                default: 'wrap',
                des: '列表项自动换行方式',
                type: String,
                enumValue: [{
                        value: 'nowrap',
                        des: '不换行'
                    },
                    {
                        value: 'wrap',
                        des: '换行'
                    },
                    {
                        value: 'wrap-reverse',
                        des: '反向换行'
                    }
                ]
            },
            justify: {
                default: 'row',
                des: '子组件排列方向',
                type: String,
                enumValue: [{
                        value: 'column',
                        des: '垂直排列'
                    },
                    {
                        value: 'column-reverse',
                        des: '反向垂直排列'
                    },
                    {
                        value: 'row',
                        des: '水平排列'
                    },
                    {
                        value: 'row-reverse',
                        des: '反向水平排列'
                    }
                ]
            },
            wrap: {
                default: 'wrap',
                des: '自动换行方式',
                type: String,
                enumValue: [{
                        value: 'nowrap',
                        des: '不换行'
                    },
                    {
                        value: 'wrap',
                        des: '换行'
                    },
                    {
                        value: 'wrap-reverse',
                        des: '反向换行'
                    }
                ]
            },
            direction: {
                default: 'flex-start',
                des: '水平对齐',
                type: String,
                enumValue: [{
                        value: 'flex-start',
                        des: '起点'
                    },
                    {
                        value: 'flex-end',
                        des: '末尾'
                    },
                    {
                        value: 'center',
                        des: '居中'
                    },
                    {
                        value: 'space-between',
                        des: '两端对齐'
                    },
                    {
                        value: 'space-around',
                        des: '间隔对齐'
                    }
                ]
            },
            align: {
                default: 'center',
                des: '垂直对齐',
                type: String,
                enumValue: [{
                        value: 'flex-start',
                        des: '起点'
                    },
                    {
                        value: 'flex-end',
                        des: '末尾'
                    },
                    {
                        value: 'center',
                        des: '居中'
                    },
                    {
                        value: 'baseline',
                        des: '基线'
                    },
                    {
                        value: 'stretch',
                        des: '伸展'
                    }
                ]
            },
            bgcolor: {
                default: '#ffffff',
                des: '背景颜色',
                type: Color
            },
            minWidth: {
                default: '59.9',
                des: '最小宽度',
                type: String,
                classifyType:'style',
                priority:993
            },
            minHeight: {
                default: '59.9',
                des: '最小高度',
                type: String,
                classifyType:'style',
                priority:992
            },
            border: {
                default: false,
                des: '是否显示边框',
                type: Boolean
            },
            alignContent: {
                default: 'flex-start',
                des: '垂直对齐(整体)',
                type: String,
                enumValue: [{
                        value: 'flex-start',
                        des: '起点'
                    },
                    {
                        value: 'flex-end',
                        des: '末尾'
                    },
                    {
                        value: 'center',
                        des: '居中'
                    },
                    {
                        value: 'space-around',
                        des: '四周分开'
                    },
                    {
                        value: 'space-between',
                        des: '两边分开'
                    },
                    {
                        value: 'stretch',
                        des: '伸展'
                    }
                ]
            },
            width: {
                default: '',
                des: '宽度',
                type: String,
                classifyType:'style',
                priority:1000
            },
            height: {
                default: '',
                des: '高度',
                type: String,
                classifyType:'style',
                priority:1000
            },
            paddingLeft: {
                default: '4px',
                des: '左内边距',
                title: '左',
                type: String
            },
            paddingRight: {
                default: '4px',
                des: '右内边距',
                title: '右',
                type: String
            },
            paddingTop: {
                default: '4px',
                des: '上内边距',
                title: '上',
                type: String
            },
            paddingBottom: {
                default: '4px',
                des: '下内边距',
                title: '下',
                type: String
            },
            flexShrink: {
                default: '1',
                des: '是否缩放',
                type: String,
                enumValue: [{
                        value: 0,
                        des: '不缩放'
                    },
                    {
                        value: 1,
                        des: '缩放'
                    }
                ]
            },
            flexBasis: {
                default: 'auto',
                des: '主轴空间',
                type: String,
                enumValue: [{
                        value: '0',
                        des: '均分'
                    },
                    {
                        value: 'auto',
                        des: '自适应'
                    }
                ]
            },
            isFlex: {
                default: false,
                des: 'undefined',
                hideInPropsPanel: true,
                type: Boolean
            },
            notBorderHint: {
                default: false,
                des: 'undefined',
                hideInPropsPanel: true,
                type: Boolean
            }
        },
        events: {
            click: {
                des: '点击事件',
                args: ['event']
            }
        }
    },
    examples: [{
        name: '普通vfor',
        img: 'xunhuan',
        class: 'jm-vfor',
        props: {
            editMode: true,
            needChangeHeight: true,
            justify: 'row',
            align: 'flex-start',
            direction: 'flex-start',
            style_flex: 1
        }
    }]
}