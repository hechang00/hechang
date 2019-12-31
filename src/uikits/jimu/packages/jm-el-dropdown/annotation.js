import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-el-dropdown',
        needRegis: true,
        name: '下拉菜单',
        grouptype: '导航组件',
        link:"https://element.eleme.io/#/zh-CN/component/dropdown",
        img: 'select_menu',
        icon:'',
        props: {
            items: {
                default: [],
                des: '下拉选项',
                fieldConfig: {
                    title: '下拉选项配置',
                    config: [{
                            name: 'name',
                            chinaName: '名称',
                            type: 'String',
                            default: ''
                        },
                        {
                            name: 'disabled',
                            chinaName: '禁用',
                            type: 'Boolean',
                            default: false
                        }
                    ]
                },
                type: Array
            },
            splitButton: {
                default: false,
                des: '右侧下拉',
                type: Boolean
            },
            trigger: {
                default: 'hover',
                des: '触发下拉的行为方式',
                type: String,
                enumValue: [{
                        value: 'hover'
                    },
                    {
                        value: 'click'
                    }
                ]
            },
            size: {
                default: 'medium',
                des: '菜单尺寸',
                type: String,
                enumValue: [{
                        value: '',
                        des: '默认'
                    },
                    {
                        value: 'medium',
                        des: '中等'
                    },
                    {
                        value: 'small',
                        des: '小的'
                    },
                    {
                        value: 'mini',
                        des: ' 迷你'
                    }
                ]
            },
            title: {
                default: '下拉菜单',
                des: '标题描述',
                type: String
            },
            iconShow: {
                default: false,
                des: '是否显示图标',
                type: Boolean
            },
            type: {
                default: 'default',
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
            }
        },
        events: {
            click: {
                des: '点击按钮回调',
                args: ['event']
            },
            command: {
                des: '点击菜单项触发的事件回调',
                args: ['command']
            },
            visibleChange: {
                des: '下拉框出现/隐藏时触发',
                args: ['event']
            }
        }
    },
    examples: [{
            name: '按钮下拉',
            props: {
                title: '下拉菜单',
                items: [{
                        name: '黄金糕'
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ]
            }
        },
        {
            name: '文字下拉',
            props: {
                type: 'text',
                title: '下拉菜单',
                items: [{
                        name: '黄金糕'
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ]
            }
        },
        {
            name: '禁用某选项',
            props: {
                title: '下拉菜单',
                items: [{
                        name: '黄金糕',
                        disabled: true
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ]
            }
        },
        {
            name: '点击下拉',
            props: {
                title: '下拉菜单',
                items: [{
                        name: '黄金糕',
                        disabled: true
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ],
                trigger: 'click'
            }
        },
        {
            name: '右侧下拉',
            props: {
                title: '下拉菜单',
                items: [{
                        name: '黄金糕'
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ],
                splitButton: true
            }
        },
        {
            name: '大号尺寸',
            props: {
                title: '下拉菜单',
                size: 'medium',
                items: [{
                        name: '黄金糕'
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ]
            }
        },
        {
            name: '迷你尺寸',
            props: {
                title: '下拉菜单',
                size: 'mini',
                items: [{
                        name: '黄金糕'
                    },
                    {
                        name: '狮子头'
                    },
                    {
                        name: '螺蛳粉'
                    }
                ]
            }
        }
    ]
}