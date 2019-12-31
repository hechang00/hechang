import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-sankey',
        needRegis: true,
        name: '桑基图',
        link:"https://v-charts.js.org/#/sankey",
        grouptype: '图表组件',
        img: 'sankey',
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
            links: {
                default: [],
                des: '节点关系数据',
                type: Array
            },
            dataType: {
                default: [],
                des: '数据类型（第一项为item数据类型，第二项为line数据类型）',
                type: Array
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
        name: '桑基图',
        img: 'sankey',
        props: {
            global_position: 'relative',
            columns: ['页面', '访问量'],
            rows: [{
                    '页面': '首页',
                    '访问量': 100000
                },
                {
                    '页面': '列表页a',
                    '访问量': 20000
                },
                {
                    '页面': '列表页b',
                    '访问量': 80000
                },
                {
                    '页面': '内容页a-1',
                    '访问量': 10000
                },
                {
                    '页面': '内容页a-2',
                    '访问量': 10000
                },
                {
                    '页面': '内容页b-1',
                    '访问量': 60000
                },
                {
                    '页面': '内容页b-2',
                    '访问量': 20000
                }
            ],
            links: [{
                    source: '首页',
                    target: '列表页a',
                    value: 0.5
                },
                {
                    source: '首页',
                    target: '列表页b',
                    value: 0.5
                },
                {
                    source: '列表页a',
                    target: '内容页a-1',
                    value: 0.1
                },
                {
                    source: '列表页a',
                    target: '内容页a-2',
                    value: 0.4
                },
                {
                    source: '列表页b',
                    target: '内容页b-1',
                    value: 0.2
                },
                {
                    source: '列表页b',
                    target: '内容页b-2',
                    value: 0.3
                }
            ],
            dataType: ['KMB', 'percent']
        }
    }]
}