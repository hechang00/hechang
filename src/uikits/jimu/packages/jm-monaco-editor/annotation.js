import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-monaco-editor',
        needRegis: true,
        name: 'vs编辑器',
        registID: true,
        grouptype: '编辑类',
        img: 'nav_vs',
        icon:'',
        props: {
            value: {
                default: '',
                des: '内容',
                model: true,
                type: String
            },
            theme: {
                default: 'vs-dark',
                des: '主题',
                type: String,
                enumValue: [{
                        value: 'vs',
                        des: '浅色'
                    },
                    {
                        value: 'vs-dark',
                        des: '深色'
                    }
                ]
            },
            language: {
                default: 'javascript',
                des: '语言类型',
                type: String,
                enumValue: [{
                        value: 'javascript'
                    },
                    {
                        value: 'json'
                    },
                    {
                        value: 'css'
                    },
                    {
                        value: 'html'
                    }
                ]
            },
            options: {
                default: {},
                des: '其他配置',
                notArray: true,
                type: Object
            },
            textAlign: {
                default: 'left',
                des: '对齐方式',
                type: String,
                enumValue: [{
                        value: 'left',
                        des: '左对齐'
                    },
                    {
                        value: 'right',
                        des: '右对齐'
                    },
                    {
                        value: 'center',
                        des: '居中'
                    }
                ]
            },
            diffEditor: {
                default: false,
                des: '是否启用diff',
                hideInPropsPanel: true,
                type: Boolean
            },
            original: {
                default: '',
                des: '源内容',
                type: String
            }
        },
        events: {
            change: {
                args: ['value', 'event'],
                des: '数据改变时回调'
            }
        }
    },
    examples: [{
            name: '基础用法',
            img: 'vs',
            props: {
                style_width: '100%',
                style_height: '400px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px'
            }
        },
        {
            name: 'diff用法',
            img: 'vs',
            props: {
                diffEditor: true,
                language: 'json',
                original: '{"name":"test2","age":21}',
                value: '{"name":"test1","age":22}',
                style_width: '100%',
                style_height: '400px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px'
            }
        }
    ]
}