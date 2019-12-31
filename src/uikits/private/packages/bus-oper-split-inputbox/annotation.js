import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'bus-oper-split-inputbox',
        name: '下拉组件',
        needRegis: true,
        grouptype: '业务组件',
        icon:'',
        img: 'select_drop',
        props: {
            splitChar: {
                default: '|',
                des: '选项分割符',
                type: String
            },
            maxLinesNum: {
                default: 50,
                des: '最大显示条数',
                min: 5,
                max: 200,
                type: Number
            },
            placeholder: {
                default: '输入关键词',
                des: '提示',
                type: String
            },
            options: {
                default: [{
                    value: '选项1',
                    label: '黄金糕'
                }],
                des: '下拉选项数据',
                fieldConfig: {
                    title: '下拉选项配置',
                    config: [{
                            name: 'value',
                            chinaName: '值',
                            type: 'String',
                            default: ''
                        },
                        {
                            name: 'label',
                            chinaName: '标签名',
                            type: 'String',
                            default: ''
                        }
                    ]
                },
                type: Array
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            clearable: {
                default: false,
                des: '清空按钮',
                type: Boolean
            },
            multiple: {
                default: false,
                des: '是否多选',
                hideInPropsPanel: true,
                type: Boolean
            },
            value: {
                default: '',
                des: '当前选择数据',
                model: true,
                type: String
            },
            size: {
                default: 'small',
                des: '尺寸大小',
                type: String,
                enumValue: [{
                        value: 'medium',
                        des: '中号'
                    },
                    {
                        value: 'small',
                        des: '小号'
                    },
                    {
                        value: 'mini',
                        des: '迷你'
                    }
                ]
            },
            remote:{
                default:false,
                type: "Boolean",
                des:"是否为远程搜索",
            },
            remoteMethod:{
                default:"",
                type: Function,
                des:"远程搜索方法",
                args: ["query"],
              },
            loading:{
                default:false,
                type:"Boolean",
                des:"是否正从远程获取数据"
            }
        },
        events: {
            change: {
                des: '选中值变化函数',
                args: ['value']
            },
            focus: {
                des: 'input获得焦点时触发',
                args: ['el']
            },
            blur: {
                des: 'input失去焦点时触发',
                args: ['el']
            },
            visibleChange: {
                des: '下拉框出现/隐藏时触发(visible为true出现，false隐藏)',
                args: ['visible']
            }
        }
    },
    examples: [{
        name: '多选有分割符下拉',
        props: {
            style_flex: 1,
            options: [{
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '北京烤鸭'
                },
                {
                    value: '选项4',
                    label: '宫保鸡丁'
                },
                {
                    value: '选项5',
                    label: '百合凤爪'
                },
                {
                    value: '选项6',
                    label: '萝卜糕'
                }
            ],
            multiple: true
        }
    }]
}