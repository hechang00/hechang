import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-backtop',
        needRegis: true,
        name: '回到顶部',
        link:"https://element.eleme.io/#/zh-CN/component/backtop",
        grouptype: '其他',
        img: 'toTop',
        icon:'',
        props: {
            target: {
                default: '.text',
                des: '触发滚动的对象',
                type: String
            },
            visibilityHeight: {
                default: 200,
                des: '滚动高度到此参数值才出现',
                type: Number
            },
            right: {
                default: 40,
                des: '距离页面右边距',
                type: Number
            },
            bottom: {
                default: 40,
                des: '距离页面底部距离',
                type: Number
            },
            contentSlot: {
                default: '',
                des: '内部插槽',
                isSlotArray: true,
                type: String,
                enumValue: [{
                    value: ''
                }]
            },
            contentSlotData: {
                default: {},
                des: '内容插槽数据',
                notArray: true,
                type: Object
            }
        },
        events: {
            click: {
                des: '点击函数',
                args: ['value']
            }
        }
    },
    examples: [{
        name: '基础用法',
        img: 'toTop',
        props: {
            target: ''
        }
    }]
}