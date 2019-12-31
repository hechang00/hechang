import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-funnel',
        needRegis: true,
        name: '漏斗图',
        link:"https://v-charts.js.org/#/funnel",
        grouptype: '图表组件',
        img: 'f_loudou',
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
            metrics: {
                default: '',
                des: '指标',
                type: String
            },
            dataType: {
                default: 'normal',
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
            sequence: {
                default: [],
                des: '数据显示顺序',
                type: Array
            },
            ascending: {
                default: false,
                des: '是否显示为金字塔',
                type: Boolean
            },
            useDefaultOrder: {
                default: false,
                des: '是否自动按照数值大小排序',
                type: Boolean
            },
            filterZero: {
                default: false,
                des: '是否过滤指标为0的数据',
                type: Boolean
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
            name: '默认漏斗图',
            img: 'funnel1',
            props: {
                global_position: 'relative',
                columns: ['状态', '数值'],
                rows: [{
                        '状态': '展示',
                        '数值': 900
                    },
                    {
                        '状态': '访问',
                        '数值': 600
                    },
                    {
                        '状态': '点击',
                        '数值': 300
                    },
                    {
                        '状态': '订单',
                        '数值': 100
                    }
                ],
                sequence: ['订单', '点击', '访问', '展示']
            }
        },
        {
            name: '金字塔漏斗图',
            img: 'funnel2',
            props: {
                global_position: 'relative',
                columns: ['状态', '数值'],
                rows: [{
                        '状态': '展示',
                        '数值': 900
                    },
                    {
                        '状态': '访问',
                        '数值': 600
                    },
                    {
                        '状态': '点击',
                        '数值': 300
                    },
                    {
                        '状态': '订单',
                        '数值': 100
                    }
                ],
                ascending: true,
                sequence: ['订单', '点击', '访问', '展示']
            }
        }
    ]
}