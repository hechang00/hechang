import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-listscroll',
        name: '动态滚动',
        grouptype: '其他',
        img: 'listscroll',
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
                default: '',
                des: '当前数值',
                model: true,
                type: String,
                disable:true
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
            backgroundColor: {
                default: '',
                des: '背景色',
                type: Color
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
                value: '123',
            }
        }
    ]
}