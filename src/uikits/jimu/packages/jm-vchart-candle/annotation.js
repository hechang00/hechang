import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-candle',
        needRegis: true,
        name: 'K线图',
        link:"https://v-charts.js.org/#/candle",
        grouptype: '图表组件',
        img: 'f_kxian',
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
                des: '数据展示格式',
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
            upColor: {
                default: '#00da3c',
                des: '上升颜色',
                type: Color
            },
            downColor: {
                default: '#ec0000',
                des: '下降颜色',
                type: Color
            },
            showMA: {
                default: false,
                des: '是否展示移动平均线指标',
                type: Boolean
            },
            start: {
                default: 50,
                des: 'dataZoom 控件的起始位置',
                type: Number
            },
            end: {
                default: 100,
                des: 'dataZoom 控件的结束位置',
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
        name: '默认K线图',
        img: 'kxian',
        props: {
            global_position: 'relative',
            columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
            rows: [{
                    '日期': '2004-01-05',
                    open: 10411.85,
                    close: 10544.07,
                    lowest: 10411.85,
                    highest: 10575.92,
                    vol: 221290000
                },
                {
                    '日期': '2004-01-06',
                    open: 10543.85,
                    close: 10538.66,
                    lowest: 10454.37,
                    highest: 10584.07,
                    vol: 191460000
                },
                {
                    '日期': '2004-01-07',
                    open: 10535.46,
                    close: 10529.03,
                    lowest: 10432.12,
                    highest: 10587.55,
                    vol: 225490000
                },
                {
                    '日期': '2004-01-08',
                    open: 10530.07,
                    close: 10592.44,
                    lowest: 10480.59,
                    highest: 10651.99,
                    vol: 237770000
                },
                {
                    '日期': '2004-01-09',
                    open: 10589.25,
                    close: 10458.89,
                    lowest: 10420.52,
                    highest: 10603.48,
                    vol: 223250000
                },
                {
                    '日期': '2004-01-12',
                    open: 10461.55,
                    close: 10485.18,
                    lowest: 10389.85,
                    highest: 10543.03,
                    vol: 197960000
                },
                {
                    '日期': '2004-01-13',
                    open: 10485.18,
                    close: 10427.18,
                    lowest: 10341.19,
                    highest: 10539.25,
                    vol: 197310000
                },
                {
                    '日期': '2004-01-14',
                    open: 10428.67,
                    close: 10538.37,
                    lowest: 10426.89,
                    highest: 10573.85,
                    vol: 186280000
                },
                {
                    '日期': '2004-01-15',
                    open: 10534.52,
                    close: 10553.85,
                    lowest: 10454.52,
                    highest: 10639.03,
                    vol: 260090000
                },
                {
                    '日期': '2004-01-16',
                    open: 10556.37,
                    close: 10600.51,
                    lowest: 10503.71,
                    highest: 10666.88,
                    vol: 254170000
                },
                {
                    '日期': '2004-01-20',
                    open: 10601.42,
                    close: 10528.66,
                    lowest: 10447.92,
                    highest: 10676.96,
                    vol: 224300000
                },
                {
                    '日期': '2004-01-21',
                    open: 10522.77,
                    close: 10623.62,
                    lowest: 10453.11,
                    highest: 10665.72,
                    vol: 214920000
                },
                {
                    '日期': '2004-01-22',
                    open: 10624.22,
                    close: 10623.18,
                    lowest: 10545.03,
                    highest: 10717.41,
                    vol: 219720000
                },
                {
                    '日期': '2004-01-23',
                    open: 10625.25,
                    close: 10568.29,
                    lowest: 10490.14,
                    highest: 10691.77,
                    vol: 234260000
                },
                {
                    '日期': '2004-01-26',
                    open: 10568.12,
                    close: 10702.51,
                    lowest: 10510.44,
                    highest: 10725.18,
                    vol: 186170000
                },
                {
                    '日期': '2004-01-27',
                    open: 10701.11,
                    close: 10609.92,
                    lowest: 10579.33,
                    highest: 10748.81,
                    vol: 206560000
                },
                {
                    '日期': '2004-01-28',
                    open: 10610.07,
                    close: 10468.37,
                    lowest: 10412.44,
                    highest: 10703.25,
                    vol: 247660000
                },
                {
                    '日期': '2004-01-29',
                    open: 10467.41,
                    close: 10510.29,
                    lowest: 10369.92,
                    highest: 10611.56,
                    vol: 273970000
                },
                {
                    '日期': '2004-01-30',
                    open: 10510.22,
                    close: 10488.07,
                    lowest: 10385.56,
                    highest: 10551.03,
                    vol: 208990000
                },
                {
                    '日期': '2004-02-02',
                    open: 10487.78,
                    close: 10499.18,
                    lowest: 10395.55,
                    highest: 10614.44,
                    vol: 224800000
                },
                {
                    '日期': '2004-02-03',
                    open: 10499.48,
                    close: 10505.18,
                    lowest: 10414.15,
                    highest: 10571.48,
                    vol: 183810000
                },
                {
                    '日期': '2004-02-04',
                    open: 10503.11,
                    close: 10470.74,
                    lowest: 10394.81,
                    highest: 10567.85,
                    vol: 227760000
                },
                {
                    '日期': '2004-02-05',
                    open: 10469.33,
                    close: 10495.55,
                    lowest: 10399.92,
                    highest: 10566.37,
                    vol: 187810000
                },
                {
                    '日期': '2004-02-06',
                    open: 10494.89,
                    close: 10593.03,
                    lowest: 10433.74,
                    highest: 10634.81,
                    vol: 182880000
                },
                {
                    '日期': '2004-02-09',
                    open: 10592.41,
                    close: 10579.03,
                    lowest: 10433.72,
                    highest: 10634.81,
                    vol: 160720000
                },
                {
                    '日期': '2004-02-10',
                    open: 10578.74,
                    close: 10613.85,
                    lowest: 10511.18,
                    highest: 10667.03,
                    vol: 160590000
                },
                {
                    '日期': '2004-02-11',
                    open: 10605.48,
                    close: 10737.72,
                    lowest: 10561.55,
                    highest: 10779.41,
                    vol: 277850000
                },
                {
                    '日期': '2004-02-12',
                    open: 10735.18,
                    close: 10694.07,
                    lowest: 10636.44,
                    highest: 10775.03,
                    vol: 197560000
                },
                {
                    '日期': '2004-02-13',
                    open: 10696.22,
                    close: 10627.85,
                    lowest: 10578.66,
                    highest: 10755.47,
                    vol: 208340000
                },
                {
                    '日期': '2004-02-17',
                    open: 10628.88,
                    close: 10714.88,
                    lowest: 10628.88,
                    highest: 10762.07,
                    vol: 169730000
                },
                {
                    '日期': '2004-02-18',
                    open: 10706.68,
                    close: 10671.99,
                    lowest: 10623.62,
                    highest: 10764.36,
                    vol: 164370000
                },
                {
                    '日期': '2004-02-19',
                    open: 10674.59,
                    close: 10664.73,
                    lowest: 10626.44,
                    highest: 10794.95,
                    vol: 219890000
                },
                {
                    '日期': '2004-02-20',
                    open: 10666.29,
                    close: 10619.03,
                    lowest: 10559.11,
                    highest: 10722.77,
                    vol: 220560000
                },
                {
                    '日期': '2004-02-23',
                    open: 10619.55,
                    close: 10609.62,
                    lowest: 10508.89,
                    highest: 10711.84,
                    vol: 229950000
                },
                {
                    '日期': '2004-02-24',
                    open: 10609.55,
                    close: 10566.37,
                    lowest: 10479.33,
                    highest: 10681.41,
                    vol: 225670000
                },
                {
                    '日期': '2004-02-25',
                    open: 10566.59,
                    close: 10601.62,
                    lowest: 10509.42,
                    highest: 10660.73,
                    vol: 192420000
                },
                {
                    '日期': '2004-02-26',
                    open: 10598.14,
                    close: 10580.14,
                    lowest: 10493.71,
                    highest: 10652.96,
                    vol: 223230000
                },
                {
                    '日期': '2004-02-27',
                    open: 10581.55,
                    close: 10583.92,
                    lowest: 10519.03,
                    highest: 10689.55,
                    vol: 200050000
                }
            ]
        }
    }]
}