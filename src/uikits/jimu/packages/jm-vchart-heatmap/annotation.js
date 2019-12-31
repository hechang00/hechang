import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-heatmap',
        needRegis: true,
        name: '热力图',
        link:"https://v-charts.js.org/#/heatmap",
        grouptype: '图表组件',
        img: 'f_reli',
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
                default: '',
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
            min: {
                default: 0,
                des: '默认取指标中最小的数据',
                type: Number
            },
            max: {
                default: 0,
                des: '默认取指标中最大的数据',
                type: Number
            },
            pointSize: {
                default: 10,
                des: '点大小',
                type: Number
            },
            blurSize: {
                default: 5,
                des: '模糊大小',
                type: Number
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
        name: '默认热力图',
        img: 'reli',
        props: {
            global_position: 'relative',
            columns: ['时间', '地点', '人数'],
            rows: [{
                    '时间': '星期一',
                    '地点': '北京',
                    '人数': 1000
                },
                {
                    '时间': '星期二',
                    '地点': '上海',
                    '人数': 400
                },
                {
                    '时间': '星期三',
                    '地点': '杭州',
                    '人数': 800
                },
                {
                    '时间': '星期二',
                    '地点': '深圳',
                    '人数': 200
                },
                {
                    '时间': '星期三',
                    '地点': '长春',
                    '人数': 100
                },
                {
                    '时间': '星期五',
                    '地点': '南京',
                    '人数': 300
                },
                {
                    '时间': '星期四',
                    '地点': '江苏',
                    '人数': 800
                },
                {
                    '时间': '星期一',
                    '地点': '北京',
                    '人数': 700
                },
                {
                    '时间': '星期三',
                    '地点': '上海',
                    '人数': 300
                },
                {
                    '时间': '星期二',
                    '地点': '杭州',
                    '人数': 500
                }
            ]
        }
    }]
}