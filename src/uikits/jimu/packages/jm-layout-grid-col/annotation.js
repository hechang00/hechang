import {
    Color
} from '../../../type';
export default {
    what: {
        isContainer: true,
        id: 'jm-layout-grid-col',
        name: '栅格列',
        needRegis: true,
        link:"https://element.eleme.io/#/zh-CN/component/layout",
        img: 'layout2000',
        noChangeMargin: true,
        props: {
            minHeight: {
                default: 59.9,
                des: '最小高度',
                model: true,
                type: Number
            },
            paddingLeft: {
                default: '0px',
                des: '左内边距',
                title: '左',
                type: String
            },
            paddingRight: {
                default: '0px',
                des: '右内边距',
                title: '右',
                type: String
            },
            paddingTop: {
                default: '0px',
                des: '上内边距',
                title: '上',
                type: String
            },
            paddingBottom: {
                default: '0px',
                des: '下内边距',
                title: '下',
                type: String
            },
            colWidth: {
                default: '1',
                des: '宽屏占位比',
                type: String,
                enumValue: [{
                        value: '1'
                    },
                    {
                        value: '1/2'
                    },
                    {
                        value: '1/3'
                    },
                    {
                        value: '2/3'
                    },
                    {
                        value: '1/4'
                    },
                    {
                        value: '1/6'
                    },
                    {
                        value: '1/8'
                    },
                    {
                        value: '1/12'
                    }
                ]
            },
            span: {
                default: 8,
                des: '占据的列数',
                hideInPropsPanel: true,
                type: Number,
                enumValue: [{
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    },
                    {
                        value: 13
                    },
                    {
                        value: 14
                    },
                    {
                        value: 15
                    },
                    {
                        value: 16
                    },
                    {
                        value: 17
                    },
                    {
                        value: 18
                    },
                    {
                        value: 19
                    },
                    {
                        value: 20
                    },
                    {
                        value: 21
                    },
                    {
                        value: 22
                    },
                    {
                        value: 23
                    },
                    {
                        value: 24
                    }
                ]
            },
            offset: {
                default: 0,
                des: '左侧的间隔格数',
                type: Number,
                enumValue: [{
                        value: 0
                    },
                    {
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    }
                ]
            },
            push: {
                default: 0,
                des: '右移动格数',
                type: Number,
                enumValue: [{
                        value: 0
                    },
                    {
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    }
                ]
            },
            pull: {
                default: 0,
                des: '左移动格数',
                type: Number,
                enumValue: [{
                        value: 0
                    },
                    {
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    }
                ]
            },
            xs: {
                default: 8,
                des: '<768px栅格数',
                hideInPropsPanel: true,
                type: Number,
                enumValue: [{
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    },
                    {
                        value: 13
                    },
                    {
                        value: 14
                    },
                    {
                        value: 15
                    },
                    {
                        value: 16
                    },
                    {
                        value: 17
                    },
                    {
                        value: 18
                    },
                    {
                        value: 19
                    },
                    {
                        value: 20
                    },
                    {
                        value: 21
                    },
                    {
                        value: 22
                    },
                    {
                        value: 23
                    },
                    {
                        value: 24
                    }
                ]
            },
            sm: {
                default: 8,
                des: '≥768px栅格数',
                hideInPropsPanel: true,
                type: Number,
                enumValue: [{
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    },
                    {
                        value: 13
                    },
                    {
                        value: 14
                    },
                    {
                        value: 15
                    },
                    {
                        value: 16
                    },
                    {
                        value: 17
                    },
                    {
                        value: 18
                    },
                    {
                        value: 19
                    },
                    {
                        value: 20
                    },
                    {
                        value: 21
                    },
                    {
                        value: 22
                    },
                    {
                        value: 23
                    },
                    {
                        value: 24
                    }
                ]
            },
            md: {
                default: 8,
                des: '≥992px栅格数',
                hideInPropsPanel: true,
                type: Number,
                enumValue: [{
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    },
                    {
                        value: 13
                    },
                    {
                        value: 14
                    },
                    {
                        value: 15
                    },
                    {
                        value: 16
                    },
                    {
                        value: 17
                    },
                    {
                        value: 18
                    },
                    {
                        value: 19
                    },
                    {
                        value: 20
                    },
                    {
                        value: 21
                    },
                    {
                        value: 22
                    },
                    {
                        value: 23
                    },
                    {
                        value: 24
                    }
                ]
            },
            lg: {
                default: 8,
                des: '≥1200px栅格数',
                hideInPropsPanel: true,
                type: Number,
                enumValue: [{
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    },
                    {
                        value: 13
                    },
                    {
                        value: 14
                    },
                    {
                        value: 15
                    },
                    {
                        value: 16
                    },
                    {
                        value: 17
                    },
                    {
                        value: 18
                    },
                    {
                        value: 19
                    },
                    {
                        value: 20
                    },
                    {
                        value: 21
                    },
                    {
                        value: 22
                    },
                    {
                        value: 23
                    },
                    {
                        value: 24
                    }
                ]
            },
            xl: {
                default: 8,
                des: '≥1920px栅格数',
                hideInPropsPanel: true,
                type: Number,
                enumValue: [{
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    },
                    {
                        value: 4
                    },
                    {
                        value: 5
                    },
                    {
                        value: 6
                    },
                    {
                        value: 7
                    },
                    {
                        value: 8
                    },
                    {
                        value: 9
                    },
                    {
                        value: 10
                    },
                    {
                        value: 11
                    },
                    {
                        value: 12
                    },
                    {
                        value: 13
                    },
                    {
                        value: 14
                    },
                    {
                        value: 15
                    },
                    {
                        value: 16
                    },
                    {
                        value: 17
                    },
                    {
                        value: 18
                    },
                    {
                        value: 19
                    },
                    {
                        value: 20
                    },
                    {
                        value: 21
                    },
                    {
                        value: 22
                    },
                    {
                        value: 23
                    },
                    {
                        value: 24
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
                        des: '四周分开'
                    },
                    {
                        value: 'space-around',
                        des: '两边分开'
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
            padding: {
                default: '0px 0px 0px 0px',
                des: '内边距',
                hideInPropsPanel: true,
                type: String
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
            borderShow: {
                default: false,
                des: '是否显示边框',
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
        name: '栅格列',
        img: 'layout2000',
        props: {
            justify: 'row',
            bgcolor: '#ffffff'
        }
    }]
}