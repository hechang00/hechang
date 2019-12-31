import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-layout-position',
        needRegis: true,
        isContainer: true,
        img: 'jmLayoutPosition_bg',
        icon:'',
        link:"http://jimudev.oa.com/ops/docs/guide/page-layout.html#%E8%87%AA%E7%94%B1%E5%B8%83%E5%B1%80",
        needChangeHeight: true,
        temp: '<span>自由布局</span>',
        name: '自由布局',
        grouptype:'布局组件',
        icon:'',
        props: {
            bgcolor: {
                default: '#ffffff',
                des: '背景颜色',
                type: Color
            },
            minWidth: {
                default: 199.9,
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
            borderShow: {
                default: false,
                des: '是否显示边框',
                type: Boolean
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
            },
            needChangeHeight: {
                default: true,
                des: '是否自适应高度',
                hideInPropsPanel: true,
                type: Boolean
            },
            isFixedWidth: {
                default: false,
                des: '是否固定宽度',
                hideInPropsPanel: true,
                type: Boolean
            },
            borderStyle: {
                default: 'dashed',
                des: '边框样式',
                type: String,
                enumValue: [{
                        value: 'none',
                        des: '无'
                    },
                    {
                        value: 'dashed',
                        des: '虚线'
                    },
                    {
                        value: 'solid',
                        des: '实线'
                    },
                    {
                        value: 'dotted',
                        des: '点状'
                    },
                    {
                        value: 'double',
                        des: '双线'
                    },
                    {
                        value: 'groove',
                        des: '3D凹槽'
                    },
                    {
                        value: 'ridge',
                        des: '3D垄状'
                    },
                    {
                        value: 'inset',
                        des: '3D inset'
                    },
                    {
                        value: 'outset',
                        des: '3D outset'
                    },
                    {
                        value: 'initial',
                        des: '继承父样式'
                    },
                    {
                        value: 'inherit',
                        des: 'hidden'
                    },
                    {
                        value: 'hidden'
                    }
                ]
            },
            borderColor: {
                default: '#ffffff',
                des: '边框颜色',
                type: Color
            },
            borderWidth: {
                default: 1,
                des: '边框宽度',
                type: Number
            },
            boxShadowSize: {
                default: '',
                des: '效果',
                type: String,
                enumValue: [{
                        value: '',
                        des: '无'
                    },
                    {
                        value: 'mini',
                        des: '迷你'
                    },
                    {
                        value: 'small',
                        des: '小'
                    },
                    {
                        value: 'medium',
                        des: '中'
                    },
                    {
                        value: 'large',
                        des: '大'
                    }
                ]
            },
            boxShawdowColor: {
                default: 'rgba(232,232,232,1)',
                des: '颜色',
                type: Color
            },
            boxShadowAniamtion: {
                default: false,
                des: '动画',
                type: Boolean
            },
            topBoxShadow: {
                default: false,
                des: '上',
                posotion: '1',
                type: Boolean
            },
            bottomBoxShadow: {
                default: false,
                des: '下',
                posotion: '1',
                type: Boolean
            },
            leftBoxShadow: {
                default: false,
                des: '左',
                posotion: '1',
                type: Boolean
            },
            rightBoxShadow: {
                default: false,
                des: '右',
                posotion: '1',
                type: Boolean
            },
            borderRaduis: {
                default: '0',
                des: '圆角',
                type: String
            },
            dragGroup: {
                default: 'topGroup',
                des: '组',
                hideInPropsPanel: true,
                type: String
            }
        },
        events: {
            click: {
                des: '点击事件',
                args: ['event']
            },
            created: {
                des: 'created生命周期函数',
                args: ['context']
            },
            mounted: {
                des: 'mounted生命周期函数',
                args: ['context']
            },
            updated: {
                des: 'updated生命周期函数',
                args: ['context']
            },
            destroyed: {
                des: 'destroyed生命周期函数',
                args: ['context']
            }
        }
    },
    examples: [{
        name: '基本用法',
        img: 'layout1_1',
        props: {
            global_position: 'relative',
            width:'100%',
            height:'200px',
            style_flex:1

        }
    }]
}