import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-scatter',
        needRegis: true,
        link:"https://v-charts.js.org/#/scatter",
        name: '散点图',
        grouptype: '图表组件',
        img: 'f_sandian',
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
                default: ['日期', '访问用户', '下单用户', '年龄'],
                des: '图表分类',
                type: Array
            },
            rows: {
                default: [],
                des: '图表数据',
                type: Array
            },
            xAxisType: {
                default: '',
                des: '横轴数据类型',
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
            xAxisName: {
                default: '',
                des: '横轴标题',
                type: String
            },
            yAxisName: {
                default: '',
                des: '纵轴标题',
                type: String
            },
            axisVisible: {
                default: true,
                des: '是否显示坐标轴',
                type: Boolean
            },
            symbolSizeMax: {
                default: 50,
                des: '气泡最大值',
                type: Number
            },
            min: {
                default: 0,
                des: '纵轴最小值',
                type: Number
            },
            max: {
                default: 0,
                des: '纵轴最大值',
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
            name: '单维散点图',
            img: 'sandian1',
            props: {
                global_position: 'relative',
                columns: ['日期', '访问用户', '下单用户', '年龄'],
                rows: [{
                        '日期': '1/1',
                        '访问用户': 123,
                        '年龄': 3,
                        '下单用户': 1244
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 1223,
                        '年龄': 6,
                        '下单用户': 2344
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 7123,
                        '年龄': 9,
                        '下单用户': 3245
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 4123,
                        '年龄': 12,
                        '下单用户': 4355
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3123,
                        '年龄': 15,
                        '下单用户': 4564
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 2323,
                        '年龄': 20,
                        '下单用户': 6537
                    }
                ]
            }
        },
        {
            name: '双维散点图',
            img: 'sandian1',
            props: {
                global_position: 'relative',
                columns: ['日期', '访问用户', '下单用户', '年龄'],
                rows: {
                    '上海': [{
                            '日期': '1/1',
                            '访问用户': 123,
                            '年龄': 3,
                            '下单用户': 1244
                        },
                        {
                            '日期': '1/2',
                            '访问用户': 1223,
                            '年龄': 6,
                            '下单用户': 2344
                        },
                        {
                            '日期': '1/3',
                            '访问用户': 7123,
                            '年龄': 9,
                            '下单用户': 3245
                        },
                        {
                            '日期': '1/4',
                            '访问用户': 4123,
                            '年龄': 12,
                            '下单用户': 4355
                        },
                        {
                            '日期': '1/5',
                            '访问用户': 3123,
                            '年龄': 15,
                            '下单用户': 4564
                        },
                        {
                            '日期': '1/6',
                            '访问用户': 2323,
                            '年龄': 20,
                            '下单用户': 6537
                        }
                    ],
                    '北京': [{
                            '日期': '1/1',
                            '访问用户': 123,
                            '年龄': 3,
                            '下单用户': 1244
                        },
                        {
                            '日期': '1/2',
                            '访问用户': 1273,
                            '年龄': 6,
                            '下单用户': 2344
                        },
                        {
                            '日期': '1/3',
                            '访问用户': 3123,
                            '年龄': 15,
                            '下单用户': 4564
                        },
                        {
                            '日期': '1/4',
                            '访问用户': 2123,
                            '年龄': 9,
                            '下单用户': 3245
                        },
                        {
                            '日期': '1/5',
                            '访问用户': 4103,
                            '年龄': 12,
                            '下单用户': 4355
                        },
                        {
                            '日期': '1/6',
                            '访问用户': 7123,
                            '年龄': 10,
                            '下单用户': 3567
                        }
                    ],
                    '广州': [{
                            '日期': '1/1',
                            '访问用户': 123,
                            '年龄': 3,
                            '下单用户': 1244
                        },
                        {
                            '日期': '1/2',
                            '访问用户': 1223,
                            '年龄': 6,
                            '下单用户': 2344
                        },
                        {
                            '日期': '1/3',
                            '访问用户': 2123,
                            '年龄': 30,
                            '下单用户': 3245
                        },
                        {
                            '日期': '1/5',
                            '访问用户': 4123,
                            '年龄': 12,
                            '下单用户': 4355
                        },
                        {
                            '日期': '1/4',
                            '访问用户': 5123,
                            '年龄': 18,
                            '下单用户': 4564
                        },
                        {
                            '日期': '1/6',
                            '访问用户': 3843,
                            '年龄': 30,
                            '下单用户': 4850
                        }
                    ]
                }
            }
        }
    ]
}