import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-pie',
        needRegis: true,
        name: '饼图',
        link:"https://v-charts.js.org/#/pie",
        grouptype: '图表组件',
        img: 'f_bingtu',
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
            radius: {
                default: 80,
                des: '饼图半径',
                type: Number
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
            name: '默认饼图',
            img: 'bingtu',
            props: {
                global_position: 'relative',
                dataType: 'percent',
                columns: ['日期', '访问用户'],
                rows: [{
                        '日期': '1/1',
                        '访问用户': 1393
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 3530
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 2923
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 1723
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3792
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 4593
                    }
                ]
            }
        },
        {
            name: '自定义图例饼图',
            img: 'bingtu1',
            props: {
                global_position: 'relative',
                dataType: 'percent',
                columns: ['日期', '访问用户'],
                extend: {
                    legend: {
                        orient: 'vertical',
                        top: '30%',
                        left: '65%'
                    }
                },
                rows: [{
                        '日期': '1/1',
                        '访问用户': 1393
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 3530
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 2923
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 1723
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3792
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 4593
                    }
                ]
            }
        }
    ]
}