import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'el-button',
        name: '按钮',
        grouptype: '基础组件',
        priority:970,
        img: 'base_btn',
        link:"https://element.eleme.io/#/zh-CN/component/button",
        icon:'',
        props: {
            type: {
                default: '',
                des: '类型',
                type: String,
                enumValue: [{
                        value: 'default',
                        des: '默认'
                    },
                    {
                        value: 'primary',
                        des: '主要'
                    },
                    {
                        value: 'success',
                        des: '成功'
                    },
                    {
                        value: 'warning',
                        des: '告警'
                    },
                    {
                        value: 'danger',
                        des: '危险'
                    },
                    {
                        value: 'info',
                        des: '信息'
                    },
                    {
                        value: 'text',
                        des: '文本'
                    }
                ]
            },
            size: {
                default: '',
                des: '尺寸',
                type: String,
                enumValue: [{
                        value: 'medium',
                        des: '中等'
                    },
                    {
                        value: 'small',
                        des: '小的'
                    },
                    {
                        value: 'mini',
                        des: '最小'
                    }
                ]
            },
            icon: {
                default: '',
                des: '图标类名',
                needIcon: true,
                type: String,
                enumValue: [{
                        value: ''
                    },
                    {
                        value: 'el-icon-circle-close-outline'
                    },
                    {
                        value: 'el-icon-circle-check-outline'
                    },
                    {
                        value: 'el-icon-zoom-out'
                    },
                    {
                        value: 'el-icon-zoom-in'
                    },
                    {
                        value: 'el-icon-edit'
                    },
                    {
                        value: 'el-icon-edit-outline'
                    },
                    {
                        value: 'el-icon-info'
                    },
                    {
                        value: 'el-icon-error'
                    },
                    {
                        value: 'el-icon-success'
                    },
                    {
                        value: 'el-icon-warning'
                    },
                    {
                        value: 'el-icon-question'
                    },
                    {
                        value: 'el-icon-mobile-phone'
                    },
                    {
                        value: 'el-icon-service'
                    },
                    {
                        value: 'el-icon-view'
                    },
                    {
                        value: 'el-icon-location-outline'
                    },
                    {
                        value: 'el-icon-location'
                    },
                    {
                        value: 'el-icon-search'
                    },
                    {
                        value: 'el-icon-setting'
                    },
                    {
                        value: 'el-icon-loading'
                    },
                    {
                        value: 'el-icon-download'
                    },
                    {
                        value: 'el-icon-upload'
                    },
                    {
                        value: 'el-icon-share'
                    },
                    {
                        value: 'el-icon-refresh'
                    },
                    {
                        value: 'el-icon-delete'
                    },
                    {
                        value: 'el-icon-more'
                    },
                    {
                        value: 'el-icon-more-outline'
                    },
                    {
                        value: 'el-icon-picture'
                    },
                    {
                        value: 'el-icon-picture-outline'
                    },
                    {
                        value: 'el-icon-menu'
                    },
                    {
                        value: 'el-icon-date'
                    },
                    {
                        value: 'el-icon-message'
                    },
                    {
                        value: 'el-icon-bell'
                    },
                    {
                        value: 'el-icon-time'
                    },
                    {
                        value: 'el-icon-printer'
                    },
                    {
                        value: 'el-icon-back'
                    },
                    {
                        value: 'el-icon-arrow-left'
                    },
                    {
                        value: 'el-icon-arrow-down'
                    },
                    {
                        value: 'el-icon-arrow-right'
                    },
                    {
                        value: 'el-icon-arrow-up'
                    },
                    {
                        value: 'el-icon-caret-left'
                    },
                    {
                        value: 'el-icon-caret-bottom'
                    },
                    {
                        value: 'el-icon-caret-top'
                    },
                    {
                        value: 'el-icon-caret-right'
                    },
                    {
                        value: 'el-icon-d-arrow-left'
                    },
                    {
                        value: 'el-icon-d-arrow-right'
                    },
                    {
                        value: 'el-icon-minus'
                    },
                    {
                        value: 'el-icon-plus'
                    },
                    {
                        value: 'el-icon-close'
                    },
                    {
                        value: 'el-icon-check'
                    },
                    {
                        value: 'el-icon-circle-close'
                    },
                    {
                        value: 'el-icon-circle-check'
                    },
                    {
                        value: 'el-icon-d-caret'
                    },
                    {
                        value: 'el-icon-sort'
                    },
                    {
                        value: 'el-icon-sort-down'
                    },
                    {
                        value: 'el-icon-sort-up'
                    },
                    {
                        value: 'el-icon-tickets'
                    },
                    {
                        value: 'el-icon-document'
                    },
                    {
                        value: 'el-icon-goods'
                    },
                    {
                        value: 'el-icon-sold-out'
                    },
                    {
                        value: 'el-icon-news'
                    },
                    {
                        value: 'el-icon-star-on'
                    },
                    {
                        value: 'el-icon-star-off'
                    },
                    {
                        value: 'el-icon-phone'
                    },
                    {
                        value: 'el-icon-phone-outline'
                    }
                ]
            },
            nativeType: {
                default: 'button',
                des: '原生type属性',
                type: String,
                enumValue: [{
                        value: 'button',
                        des: '按钮'
                    },
                    {
                        value: 'submit',
                        des: '提交'
                    },
                    {
                        value: 'reset',
                        des: '重置'
                    }
                ]
            },
            loading: {
                default: false,
                des: '是否加载中状态',
                type: Boolean
            },
            disabled: {
                default: false,
                des: '是否禁用状态',
                type: Boolean
            },
            plain: {
                default: false,
                des: '是否朴素按钮',
                type: Boolean
            },
            autofocus: {
                default: false,
                des: '是否默认聚焦',
                type: Boolean
            },
            round: {
                default: false,
                des: '是否圆角按钮',
                type: Boolean
            },
            circle: {
                default: false,
                des: '是否圆形按钮',
                type: Boolean
            },
            innerText: {
                default: '示例按钮',
                des: '标题',
                type: String
            }
        },
        events: {
            click: {
                args: ['event'],
                des: '点击事件'
            }
        }
    },
    examples: [{
            name: '主要按钮',
            class: 'el-button',
            props: {
                type: 'primary',
                innerText: '主要按钮'
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '默认按钮',
            class: 'el-button',
            props: {
                innerText: '默认按钮',
                plain: true
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '成功按钮',
            class: 'el-button',
            props: {
                type: 'success',
                innerText: '成功按钮'
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '警告按钮',
            class: 'el-button',
            props: {
                type: 'warning',
                innerText: '警告按钮'
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '危险按钮',
            class: 'el-button',
            props: {
                type: 'danger',
                innerText: '危险按钮'
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '圆角按钮',
            class: 'el-button',
            props: {
                innerText: '圆角按钮',
                round: true
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '圆形按钮',
            class: 'el-button',
            props: {
                innerText: ' ',
                circle: true,
                icon: 'el-icon-edit'
            },
            events: {
                onClick: {}
            }
        },
        {
            name: '主要按钮(禁用)',
            class: 'el-button',
            props: {
                type: 'primary',
                innerText: '主要按钮',
                disabled: true
            }
        },
        {
            name: '文字按钮',
            class: 'el-button',
            props: {
                type: 'text',
                innerText: '文字按钮'
            },
            events: {
                onClick: {}
            }
        }
    ]
}