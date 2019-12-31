import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-panel',
        needRegis: true,
        name: '列表',
        grouptype: '基础组件',
        img: 'xpanel',
        icon:'',
        props: {
            type: {
                default: '1',
                des: '布局类型',
                type: String
            },
            align: {
                default: 'left',
                des: '对齐方式',
                type: String,
                enumValue: [{
                        value: 'left'
                    },
                    {
                        value: 'center'
                    },
                    {
                        value: 'right'
                    }
                ]
            },
            list: {
                default: {},
                des: '列表设置',
                type: Object
            },
            footer: {
                default: {},
                des: '列表底部设置',
                type: Object
            }
        },
        events: {
            click: {
                des: 'Item点击函数',
                args: ['item']
            }
        }
    },
    examples: [{
        name: '列表',
        img: 'xpanel',
        props: {
            style_width: '100%',
            type: '1',
            footer: {
                title: '下拉刷新',
                url: ''
            },
            list: [{
                    src: '',
                    fallbackSrc: '',
                    title: '标题一',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
                },
                {
                    src: '',
                    title: '标题二',
                    desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
                    meta: {
                        source: '来源信息',
                        date: '时间',
                        other: '其他信息'
                    }
                }
            ]
        }
    }]
}