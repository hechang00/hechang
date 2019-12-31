import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-el-tooltip',
        needRegis: true,
        name: '文字提示',
        link:"https://element.eleme.io/#/zh-CN/component/tooltip",
        grouptype: '其他',
        img: 'tooltip',
        icon:'',
        props: {
            content: {
                default: '',
                des: 'tooltip文字',
                type: String
            },
            effect: {
                default: 'dark',
                des: '显示效果',
                type: String,
                enumValue: [{
                        value: 'dark'
                    },
                    {
                        value: 'light'
                    }
                ]
            },
            placement: {
                default: 'bottom',
                des: '出现位置',
                type: String,
                enumValue: [{
                        value: 'bottom'
                    },
                    {
                        value: 'bottom-start'
                    },
                    {
                        value: 'bottom-end'
                    },
                    {
                        value: 'top'
                    },
                    {
                        value: 'top-start'
                    },
                    {
                        value: 'top-end'
                    },
                    {
                        value: 'left'
                    },
                    {
                        value: 'left-start'
                    },
                    {
                        value: 'left-end'
                    },
                    {
                        value: 'right'
                    },
                    {
                        value: 'right-start'
                    },
                    {
                        value: 'right-end'
                    }
                ]
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
        events: {}
    },
    examples: [{
        name: '基础用法',
        props: {
            content: '这是提示文字'
        }
    }]
}