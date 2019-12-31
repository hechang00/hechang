import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vue-json-editor',
        name: 'json编辑器',
        grouptype: '编辑类',
        img: 'json_editor',
        icon:'',
        props: {
            value: {
                default: {},
                des: '绑定值',
                model: true,
                type: Object
            },
            showBtns: {
                default: true,
                des: '是否显示保存按钮',
                type: Boolean
            },
            mode: {
                default: 'undefined',
                des: '输入模式',
                type: String,
                enumValue: [{
                        value: 'tree'
                    },
                    {
                        value: 'code'
                    },
                    {
                        value: 'form'
                    },
                    {
                        value: 'text'
                    },
                    {
                        value: 'view'
                    }
                ]
            },
            lang: {
                default: 'zh',
                des: '语言选择',
                hideInPropsPanel: true,
                noCompile: true,
                type: String
            }
        },
        events: {
            'json-change': {
                des: 'JSON改变函数',
                args: ['value']
            },
            'json-save': {
                des: 'JSON保存函数',
                args: ['value']
            },
            'has-error': {
                des: '发生错误函数',
                args: ['error']
            }
        }
    },
    examples: [{
            name: '默认tree模式',
            img: 'vue-json-editor-tree',
            props: {
                value: {},
                mode: 'tree'
            }
        },
        {
            name: 'code模式',
            img: 'vue-json-editor-code',
            props: {
                value: {},
                mode: 'code'
            }
        },
        {
            name: 'form模式',
            img: 'vue-json-editor-form',
            props: {
                value: {},
                mode: 'form'
            }
        },
        {
            name: 'text模式',
            img: 'vue-json-editor-text',
            props: {
                value: {},
                mode: 'text'
            }
        },
        {
            name: 'view模式',
            img: 'vue-json-editor-view',
            props: {
                value: {},
                mode: 'view'
            }
        }
    ]
}