import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-tree',
        link:"https://v-charts.js.org/#/tree",
        needRegis: true,
        name: '树图',
        grouptype: '图表组件',
        img: 'f_treetu',
        icon:'',
        props: {
            width: {
                default: '100%',
                des: '宽度',
                type: String,
                classifyType:'style',
                priority:1000
            },
            height: {
                default: '400',
                des: '高度',
                type: String,
                classifyType:'style',
                priority:1000
            },
            theme: {
                default: 'light',
                des: '主题设置',
                type: String,
                enumValue: [{
                        value: 'light'
                    },
                    {
                        value: 'dark'
                    }
                ]
            },
            columns: {
                default: [],
                des: '图表分类',
                type: Array
            },
            rows: {
                default: [],
                des: '图表数据',
                type: Array
            },
            dataType: {
                default: 'percent',
                des: '数据类型',
                type: String,
                enumValue: [{
                        value: ''
                    },
                    {
                        value: 'KMB'
                    },
                    {
                        value: 'normal'
                    },
                    {
                        value: 'percent'
                    }
                ]
            },
            orient: {
                default: 'horizontal',
                des: '布局方向',
                type: String,
                enumValue: [{
                        value: 'horizontal'
                    },
                    {
                        value: 'vertical'
                    }
                ]
            },
            layout: {
                default: 'default',
                des: '式样',
                type: String,
                enumValue: [{
                        value: 'default'
                    },
                    {
                        value: 'radial'
                    }
                ]
            },
            extend: {
                default: {},
                des: 'echarts基础属性',
                notArray: true,
                type: Object
            },
            markLine: {
                default: {},
                type: Object,
                des: '标线'
            },
            markPoint: {
                default: {},
                type: Object,
                des: '标点'
            },
            markArea: {
                default: {},
                type: Object,
                des: '标志区域'
            },
            loading: {
                default: false,
                type: Boolean,
                des: '加载状态'
            },
            dataEmpty: {
                default: false,
                type: Boolean,
                des: '暂无数据状态'
            },
            beforeConfig: {
                default: '',
                type: String,
                selectFromMethods: true,
                des: '数据转化为配置前触发',
                args: ['data']
            },
            afterConfig: {
                default: '',
                type: String,
                selectFromMethods: true,
                des: '数据转化为配置后触发',
                args: ['options']
            },
            afterSetConfig: {
                default: '',
                type: String,
                selectFromMethods: true,
                des: '生成图后获取echarts实例',
                args: ['echarts']
            },
            afterSetOptionOnce: {
                default: '',
                type: String,
                selectFromMethods: true,
                des: '生成图后获取echarts实例(只执行一次)',
                args: ['echarts']
            },
            settings: {
                default: {},
                type: Object,
                des: "详情请参考v-charts官网：https://v-charts.js.org/#/",
                title: "v-charts属性设置"
            }
        },
        events: {
            ready: {
                des: '图表渲染完成后触发',
                args: ['echart', 'options', 'echartsLib']
            },
            readyOnce: {
                des: '首次渲染完成后触发',
                args: ['echart', 'options', 'echartsLib']
            },
            click: {
                des: '点击事件',
                args: ['echart', 'param']
            },
            dblclick: {
                des: '双击事件',
                args: ['echart', 'param']
            },
            mousedown: {
                des: '鼠标按下',
                args: ['echart', 'param']
            },
            mousemove: {
                des: '鼠标移动',
                args: ['echart', 'param']
            },
            mouseup: {
                des: '鼠标释放',
                args: ['echart', 'param']
            },
            mouseover: {
                des: '鼠标停留',
                args: ['echart', 'param']
            },
            mouseout: {
                des: '鼠标移出',
                args: ['echart', 'param']
            }
        }
    },
    examples: [{
        name: '默认树图',
        img: 'tree1',
        props: {
            global_position: 'relative',
            columns: ['name', 'value'],
            rows: [{
                name: 'tree1',
                value: [{
                    name: 'f',
                    value: 1,
                    link: 'https://ele.me',
                    children: [{
                            name: 'a',
                            value: 1,
                            link: 'https://ele.me',
                            children: [{
                                    name: 'a-a',
                                    link: 'https://ele.me',
                                    value: 2
                                },
                                {
                                    name: 'a-b',
                                    link: 'https://ele.me',
                                    value: 2
                                }
                            ]
                        },
                        {
                            name: 'b',
                            value: 1,
                            link: 'https://ele.me',
                            children: [{
                                    name: 'b-a',
                                    link: 'https://ele.me',
                                    value: 2
                                },
                                {
                                    name: 'b-b',
                                    link: 'https://ele.me',
                                    value: 2
                                }
                            ]
                        },
                        {
                            name: 'c',
                            value: 3,
                            link: 'https://ele.me',
                            children: [{
                                    name: 'c-a',
                                    link: 'https://ele.me',
                                    value: 4
                                },
                                {
                                    name: 'c-b',
                                    link: 'https://ele.me',
                                    value: 2
                                }
                            ]
                        },
                        {
                            name: 'd',
                            value: 3,
                            link: 'https://ele.me',
                            children: [{
                                    name: 'd-a',
                                    link: 'https://ele.me',
                                    value: 4
                                },
                                {
                                    name: 'd-b',
                                    link: 'https://ele.me',
                                    value: 2
                                }
                            ]
                        }
                    ]
                }]
            }],
            layout: 'radial'
        }
    }]
}