import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'cell',
        name: 'cell',
        grouptype: '基础组件',
        img: 'xcell',
        icon:'',
        props: {
            title: {
                default: '',
                des: '标题',
                type: String
            },
            value: {
                default: '',
                des: '值',
                type: String
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            },
            isLink: {
                default: false,
                des: '是否链接',
                type: Boolean
            },
            alignItems: {
                default: 'left',
                des: '对齐方式',
                type: String,
                enumValue: [{
                        value: 'left'
                    },
                    {
                        value: 'center'
                    },
                    {
                        value: 'right'
                    }
                ]
            }
        },
        events: {}
    },
    examples: [{
        name: 'xcell',
        props: {
            title: '标题',
            value: '内容',
            disabled: false,
            isLink: true
        }
    }]
}