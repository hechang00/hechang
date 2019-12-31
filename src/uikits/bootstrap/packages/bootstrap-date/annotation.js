import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'bootstrap-date',
        name: '日期选择',
        needRegis: true,
        grouptype: '基础组件',
        img:'select_date',
        icon:'',
        props: {
            value: {
                default: '',
                des: '当前选择数据',
                model: true,
                type: String
            },
            format: {
                default: 'YYYY-MM-DD',
                des: '返回值日期格式',
                model: true,
                type: String,
                enumValue: [{
                        value: 'YYYY-MM-DD'
                    },
                    {
                        value: 'YYYY-MM-DD HH:mm'
                    },
                    {
                        value: 'YYYY-MM-DD HH:mm:ss'
                    },
                    {
                        value: 'DD/MM/YYYY'
                    },
                    {
                        value: 'LT'
                    },
                    {
                        value: 'LLL'
                    },
                    {
                        value: 'LTS'
                    },
                    {
                        value: 'L'
                    },
                    {
                        value: 'l'
                    },
                    {
                        value: 'LL'
                    },
                    {
                        value: 'll'
                    },
                    {
                        value: '	lll'
                    },
                    {
                        value: 'LLLL'
                    },
                    {
                        value: 'llll'
                    }
                ]
            },
            useCurrent: {
                default: true,
                des: '当前 date/time',
                hideInPropsPanel: true,
                type: Boolean
            },
            allowInputToggle: {
                default: false,
                des: 'allowInputToggle',
                hideInPropsPanel: true,
                type: Boolean
            },
            wrap: {
                default: false,
                des: 'wrap',
                hideInPropsPanel: true,
                type: Boolean
            },
            inline: {
                default: false,
                des: '是否直接展示',
                hideInPropsPanel: true,
                type: Boolean
            },
            isInline: {
                default: false,
                des: '是否直接展示',
                hideInPropsPanel: true,
                type: Boolean
            },
            sideBySide: {
                default: false,
                des: '是否侧边展示',
                type: Boolean
            },
            showTodayButton: {
                default: false,
                des: '显示当前日期按钮',
                type: Boolean
            },
            iconType: {
                default: 'fa-calendar',
                des: 'icon类型',
                type: String,
                enumValue: [{
                        value: 'fa-calendar'
                    },
                    {
                        value: 'fa-clock'
                    },
                    {
                        value: 'fa-calendar-check'
                    }
                ]
            },
            locale: {
                default: 'zh-cn',
                des: '显示语音',
                type: String,
                enumValue: [{
                        value: 'zh-cn',
                        des: '中文'
                    },
                    {
                        value: 'en-nz',
                        des: '英文'
                    }
                ]
            },
            placeholder: {
                default: '',
                des: 'placeholder',
                type: String
            }
        },
        events: {}
    },
    examples: [{
            name: '基础样式',
            props: {
                format: 'DD/MM/YYYY',
                iconType: 'none'
            }
        },
        {
            name: '带icon日期',
            props: {
                format: 'YYYY-MM-DD HH:mm:ss',
                iconType: 'fa-calendar',
                allowInputToggle: true,
                wrap: true
            }
        },
        {
            name: '时间选择',
            props: {
                format: 'LT',
                iconType: 'fa-clock',
                placeholder: 'select-time',
                useCurrent: false,
                allowInputToggle: true,
                wrap: true
            }
        },
        {
            name: '直接选择',
            img: 'bootstrapDate',
            props: {
                format: 'LLL',
                inline: true,
                sideBySide: true,
                isInline: true
            }
        }
    ]
}