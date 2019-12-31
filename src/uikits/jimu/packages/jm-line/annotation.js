import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-line',
        name: '线条',
        grouptype: '基础组件',
        priority:960,
        img: 'line',
        needRegis: true,
        icon:'',
        props: {
            width: {
                default: '1',
                des: '横线长度',
                type: String
            },
            height: {
                default: '1',
                des: '竖线高度',
                type: String
            },
            size: {
                default: '1',
                des: '线条粗细',
                type: String
            },
            type: {
                default: 'solid',
                des: '线条类型',
                type: String,
                enumValue: [{
                        value: 'solid',
                        des: '单实线'
                    },
                    {
                        value: 'double',
                        des: '双实线'
                    },
                    {
                        value: 'dotted',
                        des: '点线'
                    },
                    {
                        value: 'dashed',
                        des: '虚线'
                    },
                    {
                        value: 'groove',
                        des: '沟线'
                    },
                    {
                        value: 'ridge',
                        des: '脊线'
                    },
                    {
                        value: 'inset',
                        des: '内陷'
                    },
                    {
                        value: 'outset',
                        des: '外凸'
                    }
                ]
            },
            lineColor: {
                default: 'rgb(85, 85, 85)',
                des: '线条颜色',
                type: Color
            },
            horizontal: {
                default: true,
                des: '是否横向',
                type: Boolean
            }
        },
        events: {}
    },
    examples: [{
            name: '单实线',
            img: 'line',
            props: {
                width: '100%',
                size: '1',
                type: 'solid',
                lineColor: 'rgb(85, 85, 85)',
                horizontal: true
            }
        },
        {
            name: '竖线',
            img: 'line_horizontal',
            props: {
                height: '24',
                size: '1',
                type: 'solid',
                lineColor: 'rgb(85, 85, 85)',
                horizontal: false
            }
        },
        {
            name: '双实线',
            img: 'line_double',
            props: {
                style_flex: 1,
                width: '100%',
                size: '2',
                type: 'double',
                lineColor: 'rgb(85, 85, 85)',
                horizontal: true
            }
        },
        {
            name: '点线',
            img: 'line_dotted',
            props: {
                width: '100%',
                size: '2',
                type: 'dotted',
                lineColor: 'rgb(85, 85, 85)',
                horizontal: true
            }
        },
        {
            name: '虚线',
            img: 'line_dashed',
            props: {
                width: '100%',
                size: '2',
                type: 'dashed',
                lineColor: 'rgb(85, 85, 85)',
                horizontal: true
            }
        },
        {
            name: '沟线',
            img: 'line_groove',
            props: {
                width: '100%',
                size: '6',
                type: 'groove',
                lineColor: 'rgb(85, 85, 85)',
                horizontal: true
            }
        }
    ]
}