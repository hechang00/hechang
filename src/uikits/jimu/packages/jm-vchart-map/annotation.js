import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-vchart-map',
        needRegis: true,
        name: '地图',
        link:"https://v-charts.js.org/#/map",
        grouptype: '图表组件',
        img: 'f_ditu',
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
            position: {
                default: 'china',
                des: '位置',
                type: String,
                enumValue: [{
                        value: 'china',
                        des: '中国'
                    },
                    {
                        value: 'province/beijing',
                        des: '北京'
                    },
                    {
                        value: 'province/guangdong',
                        des: '广东'
                    },
                    {
                        value: 'province/guangxi',
                        des: '广西'
                    },
                    {
                        value: 'province/fujian',
                        des: '福建'
                    },
                    {
                        value: 'province/hunan',
                        des: '湖南'
                    },
                    {
                        value: 'province/hubei',
                        des: '湖北'
                    },
                    {
                        value: 'province/heilongjiang',
                        des: '黑龙江'
                    },
                    {
                        value: 'province/jilin',
                        des: '吉林'
                    },
                    {
                        value: 'province/liaoning',
                        des: '辽宁'
                    },
                    {
                        value: 'province/tianjin',
                        des: '天津'
                    },
                    {
                        value: 'province/shandong',
                        des: '山东'
                    },
                    {
                        value: 'province/hebei',
                        des: '河北'
                    },
                    {
                        value: 'province/shanxi',
                        des: '山西'
                    },
                    {
                        value: 'province/shanxi1',
                        des: '陕西'
                    },
                    {
                        value: 'province/henan',
                        des: '河南'
                    },
                    {
                        value: 'province/anhui',
                        des: '安徽'
                    },
                    {
                        value: 'province/jiangsu',
                        des: '江苏'
                    },
                    {
                        value: 'province/shanghai',
                        des: '上海'
                    },
                    {
                        value: 'province/zhejiang',
                        des: '浙江'
                    },
                    {
                        value: 'province/jiangxi',
                        des: '江西'
                    },
                    {
                        value: 'province/guizhou',
                        des: '贵州'
                    },
                    {
                        value: 'province/yunnan',
                        des: '云南'
                    },
                    {
                        value: 'province/hainan',
                        des: '海南'
                    },
                    {
                        value: 'province/sichuan',
                        des: '四川'
                    },
                    {
                        value: 'province/chongqing',
                        des: '重庆'
                    },
                    {
                        value: 'province/neimenggu',
                        des: '内蒙古'
                    },
                    {
                        value: 'province/ningxia',
                        des: '宁夏'
                    },
                    {
                        value: 'province/gansu',
                        des: '甘肃'
                    },
                    {
                        value: 'province/qinghai',
                        des: '青海'
                    },
                    {
                        value: 'province/xinjiang',
                        des: '新疆'
                    },
                    {
                        value: 'province/xizang',
                        des: '西藏'
                    },
                    {
                        value: 'province/xianggang',
                        des: '香港'
                    },
                    {
                        value: 'province/aomen',
                        des: '澳门'
                    },
                    {
                        value: 'province/taiwan',
                        des: '台湾'
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
            zoom: {
                default: 1,
                des: '视角的缩放比例',
                type: Number
            },
            digit: {
                default: 2,
                des: 'percent类型保留小数位数',
                type: Number
            },
            aspectScale: {
                default: 0.75,
                des: '地图的长宽比',
                type: Number
            },
            label: {
                default: true,
                des: '文本标签',
                type: Boolean
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
        name: '默认地图',
        img: 'ditu',
        props: {
            global_position: 'relative',
            columns: ['位置', '人口'],
            rows: [{
                    '位置': '吉林',
                    '人口': 123
                },
                {
                    '位置': '北京',
                    '人口': 1223
                },
                {
                    '位置': '上海',
                    '人口': 2123
                },
                {
                    '位置': '浙江',
                    '人口': 4123
                }
            ]
        }
    }]
}