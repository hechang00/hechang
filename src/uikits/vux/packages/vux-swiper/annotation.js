import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-swiper',
        needRegis: true,
        name: 'swiper',
        grouptype: '基础组件',
        img: 'xbanner',
        icon:'',
        props: {
            lists: {
                default: {},
                des: 'swiper设置',
                type: Object
            },
            index: {
                default: '',
                des: '默认页面Index',
                type: String
            },
            showDots: {
                default: true,
                des: '是否显示页面提示点',
                type: Boolean
            },
            auto: {
                default: true,
                des: '是否自动轮播',
                type: Boolean
            },
            loop: {
                default: true,
                des: '是否循环',
                type: Boolean
            },
            dotsPosition: {
                default: 'left',
                des: '提示点位置',
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
            }
        },
        events: {
            change: {
                des: '页面切换回调函数',
                args: ['index']
            }
        }
    },
    examples: [{
        name: 'swipper',
        img: 'xbanner',
        props: {
            style_width: '100%',
            index: 1,
            lists: [{
                    url: 'javascript:',
                    img: '',
                    title: '送你一朵fua'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一辆车'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一次旅行',
                    fallbackImg: ''
                }
            ]
        }
    }]
}