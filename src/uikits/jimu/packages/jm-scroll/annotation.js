import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-scroll',
        name: '文字滚动',
        grouptype: '其他',
        img: 'base_text',
        needRegis: true,
        icon:'',
        props: {
            font: {
                default: 'PingFang SC',
                des: '字体',
                type: String,
                enumValue: [{
                        value: 'PingFang SC'
                    },
                    {
                        value: 'Microsoft YaHei'
                    },
                    {
                        value: 'Helvetica Neue'
                    },
                    {
                        value: 'Arial'
                    }
                ]
            },
            value: {
                default: '双击可编辑',
                des: '显示文案',
                multiline: true,
                model: true,
                type: String
            },
            duration:{
                default: 50,
                des: '滚动速度',
                type: Number
            },
            fontSize: {
                default: 18,
                des: '字体大小',
                type: Number
            },
            color: {
                default: '#303133',
                des: '字体颜色',
                type: Color
            },
            fontWeight: {
                default: 'normal',
                des: '字体样式',
                type: String,
                enumValue: [{
                        value: 'normal',
                        des: '正常'
                    },
                    {
                        value: 'bold',
                        des: '加粗'
                    },
                    {
                        value: 'lighter',
                        des: '较轻'
                    }
                ]
            },
            isNowrap: {
                default: true,
                des: '文本是否换行',
                type: Boolean
            },
            lineClamp: {
                default: 1,
                des: '显示行数',
                type: Number
            },
            textAlign: {
                default: 'right',
                des: '文字对齐方式',
                type: String,
                enumValue: [{
                        value: 'left',
                        des: '左对齐'
                    },
                    {
                        value: 'center',
                        des: '居中'
                    },
                    {
                        value: 'right',
                        des: '右对齐'
                    },
                    {
                        value: 'justify',
                        des: '版面对齐'
                    }
                ]
            },
            letterSpacing: {
                default: 1,
                des: '字间距',
                type: Number
            },
            newLineHeight: {
                default: 32,
                des: '行高度',
                type: Number
            },
            backgroundColor: {
                default: '',
                des: '背景色',
                type: Color
            },
            opacity: {
                default: 100,
                des: '不透明度',
                min: 0,
                max: 100,
                type: Number
            },
            fontStyle: {
                default: 'normal',
                des: '斜体',
                type: String,
                enumValue: [{
                        value: 'normal',
                        des: '正常'
                    },
                    {
                        value: 'italic',
                        des: '斜体'
                    },
                    {
                        value: 'oblique',
                        des: '倾斜'
                    }
                ]
            },
            textDecoration: {
                default: 'none',
                des: '划线',
                type: String,
                enumValue: [{
                        value: 'none',
                        des: '无'
                    },
                    {
                        value: 'blink',
                        des: '闪烁'
                    },
                    {
                        value: 'underline',
                        des: '下划线'
                    },
                    {
                        value: 'line-through',
                        des: '中划线'
                    },
                    {
                        value: 'overline',
                        des: '跨线'
                    }
                ]
            },
        },
        events: {
            leave: {
                des: '文本滚动出左侧时触发',
                args: ['text']
            }
        }
    },
    examples: [{
            name: '基本用法',
            props: {
                value: '滚动文字',
                duration:50,
                fontSize: 20,
                fontWeight: 'bold'
            }
        }
    ]
}