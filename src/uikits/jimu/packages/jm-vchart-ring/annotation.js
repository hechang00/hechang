import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-ring',
        needRegis: true,
        link:"https://v-charts.js.org/#/ring",
        name: '环图',
        grouptype: '图表组件',
        img: 'f_huantu',
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
            selectedMode: {
                default: '',
                des: '选中模式',
                type: String,
                enumValue: [{
                        value: ''
                    },
                    {
                        value: 'single'
                    },
                    {
                        value: 'multiple'
                    }
                ]
            },
            hoverAnimation: {
                default: true,
                des: '是否显示点击动画',
                type: Boolean
            },
            limitShowNum: {
                default: 0,
                des: '最大显示数量',
                type: Number
            },
            digit: {
                default: 2,
                des: 'percent类型保留小数位数',
                type: Number
            },
            radius: {
                default: [80, 100],
                des: '半径',
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
            name: '默认环图',
            img: 'huantu',
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
                ]
            }
        },
        {
            name: '自定义图例环图',
            img: 'huantu1',
            props: {
                global_position: 'relative',
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                extend: {
                    legend: {
                        orient: 'vertical',
                        top: '30%',
                        left: '65%'
                    }
                },
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
                ]
            }
        }
    ]
}