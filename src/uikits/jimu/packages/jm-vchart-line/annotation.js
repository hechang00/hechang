import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-line',
        needRegis: true,
        name: '折线图',
        link:"https://v-charts.js.org/#/line",
        grouptype: '图表组件',
        img: 'f_yuansheng',
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
            multipleYAxis: {
                default: false,
                des: '多y轴',
                type: Boolean
            },
            yAxisName: {
                default: '',
                des: 'y轴标题(仅单y轴生效)',
                type: String
            },
            xAxisType: {
                default: '',
                des: 'x轴数据类型',
                type: String,
                enumValue: [{
                        value: ''
                    },
                    {
                        value: 'category'
                    },
                    {
                        value: 'value'
                    },
                    {
                        value: 'time'
                    },
                    {
                        value: 'log'
                    }
                ]
            },
            yAxisType: {
                default: [],
                des: 'y轴数据类型',
                type: Array
            },
            area: {
                default: false,
                des: '是否展示为面积图',
                type: Boolean
            },
            minMax: {
                default: [],
                des: 'y轴最小最大值',
                type: Array
            },
            yAxisPosition: {
                default: [],
                des: 'y轴位置',
                type: Array
            },
            digit: {
                default: 2,
                des: 'percent类型保留小数位数',
                type: Number
            },
            extend: {
                default: {},
                des: 'echarts基础属性',
                notArray: true,
                type: Object
            },
            tooltipFormatter: {
                default: '',
                des: '提示框浮层内容格式器',
                type: Function,
                args: ['data']
            },
            xAxisFormatter: {
                default: '',
                des: 'x轴刻度标签格式器',
                type: Function,
                args: ['data', 'index']
            },
            yAxisFormatter: {
                default: '',
                des: 'y轴刻度标签格式器',
                type: Function,
                args: ['data', 'index', 'type']
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
            },
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
            name: '默认折线图',
            img: 'zhexian1',
            props: {
                global_position: 'relative',
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [{
                        '日期': '1/1',
                        '访问用户': 1393,
                        '下单用户': 1093,
                        '下单率': 0.32
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 3530,
                        '下单用户': 3230,
                        '下单率': 0.26
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 2923,
                        '下单用户': 2623,
                        '下单率': 0.76
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 1723,
                        '下单用户': 1423,
                        '下单率': 0.49
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3792,
                        '下单用户': 3492,
                        '下单率': 0.323
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 4593,
                        '下单用户': 4293,
                        '下单率': 0.78
                    }
                ],
                yAxisType: ['normal', 'normal', 'percent'],
                minMax: [{
                        min: 0,
                        max: 5000
                    },
                    {
                        min: 0,
                        max: 5000
                    },
                    {
                        min: 0.1,
                        max: 1
                    }
                ],
                yAxisPosition: ['left', 'left', 'right']
            }
        },
        {
            name: '堆叠面积图',
            img: 'zhexian2',
            props: {
                global_position: 'relative',
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [{
                        '日期': '1/1',
                        '访问用户': 1393,
                        '下单用户': 1093,
                        '下单率': 0.32
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 3530,
                        '下单用户': 3230,
                        '下单率': 0.26
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 2923,
                        '下单用户': 2623,
                        '下单率': 0.76
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 1723,
                        '下单用户': 1423,
                        '下单率': 0.49
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3792,
                        '下单用户': 3492,
                        '下单率': 0.323
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 4593,
                        '下单用户': 4293,
                        '下单率': 0.78
                    }
                ],
                area: true,
                yAxisType: ['normal', 'normal', 'percent'],
                minMax: [{
                        min: 0,
                        max: 5000
                    },
                    {
                        min: 0,
                        max: 5000
                    },
                    {
                        min: 0.1,
                        max: 1
                    }
                ],
                yAxisPosition: ['left', 'left', 'right']
            }
        }
    ]
}