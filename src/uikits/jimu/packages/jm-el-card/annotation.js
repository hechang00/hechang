import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-el-card',
        needRegis: true,
        name: '卡片',
        link:"https://element.eleme.io/#/zh-CN/component/card",
        grouptype: '其他',
        img: 'nav_tags',
        icon:'',
        props: {
            bodyStyle: {
                default: {
                    padding: '20px'
                },
                des: '设置 body 的样式',
                notArray: true,
                type: Object
            },
            shadow: {
                default: 'always',
                des: '设置阴影显示时机',
                type: String,
                enumValue: [{
                        value: 'always'
                    },
                    {
                        value: 'hover'
                    },
                    {
                        value: 'never'
                    }
                ]
            },
            headerSlot: {
                default: '',
                des: '头部插槽',
                isSlotArray: true,
                type: String,
                enumValue: [{
                    value: ''
                }]
            },
            headerSlotData: {
                default: {},
                des: '头部插槽数据',
                type: Object
            },
            bodySlot: {
                default: '',
                des: '主体插槽',
                isSlotArray: true,
                type: String,
                enumValue: [{
                    value: ''
                }]
            },
            bodySlotData: {
                default: {},
                des: '主体插槽数据',
                type: Object
            }
        },
        events: {}
    },
    examples: [{
        name: '卡片',
        props: {
            style_width: '200px',
            style_height: '300px',
            shadow:"hover"
        }
    }]
}