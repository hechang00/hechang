import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-wordcloud',
        needRegis: true,
        name: '词云图',
        link:"https://v-charts.js.org/#/wordcloud",
        grouptype: '图表组件',
        img: 'f_ciyun',
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
            sizeMin: {
                default: 12,
                des: '最小字体大小',
                type: Number
            },
            sizeMax: {
                default: 60,
                des: '最大字体大小',
                type: Number
            },
            shape: {
                default: 'circle',
                des: '诗云图形状',
                type: String,
                enumValue: [{
                        value: 'circle'
                    },
                    {
                        value: 'cardioid'
                    },
                    {
                        value: 'diamond'
                    },
                    {
                        value: 'triangle-forward'
                    },
                    {
                        value: 'triangle'
                    },
                    {
                        value: 'pentagon'
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
        name: '默认诗云图',
        img: 'wordcloud',
        props: {
            global_position: 'relative',
            columns: ['word', 'count'],
            rows: [{
                    word: 'visualMap',
                    count: 22199
                },
                {
                    word: 'continuous',
                    count: 10288
                },
                {
                    word: 'contoller',
                    count: 620
                },
                {
                    word: 'series',
                    count: 274470
                },
                {
                    word: 'gauge',
                    count: 12311
                },
                {
                    word: 'detail',
                    count: 1206
                },
                {
                    word: 'piecewise',
                    count: 4885
                },
                {
                    word: 'gridIndex',
                    count: 5146
                },
                {
                    word: 'normal',
                    count: 49487
                },
                {
                    word: 'itemStyle',
                    count: 33837
                },
                {
                    word: 'min',
                    count: 4500
                },
                {
                    word: 'silent',
                    count: 5744
                },
                {
                    word: 'animation',
                    count: 4840
                },
                {
                    word: 'offsetCenter',
                    count: 232
                },
                {
                    word: 'inverse',
                    count: 3706
                },
                {
                    word: 'borderColor',
                    count: 4812
                },
                {
                    word: 'markLine',
                    count: 16578
                },
                {
                    word: 'line',
                    count: 76970
                },
                {
                    word: 'radiusAxis',
                    count: 6704
                },
                {
                    word: 'radar',
                    count: 15964
                },
                {
                    word: 'data',
                    count: 60679
                },
                {
                    word: 'dataZoom',
                    count: 24347
                },
                {
                    word: 'tooltip',
                    count: 43420
                },
                {
                    word: 'toolbox',
                    count: 25222
                }
            ]
        }
    }]
}