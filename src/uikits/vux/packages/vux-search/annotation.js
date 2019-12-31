import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-search',
        name: '搜索',
        grouptype: '基础组件',
        img: 'xsearch',
        needRegis: true,
        icon:'',
        props: {
            placeholder: {
                default: '请输入搜索内容',
                des: '输入提示',
                type: String
            },
            cancelText: {
                default: '取消',
                des: '按钮文字',
                type: String
            },
            value: {
                default: '',
                des: '搜索值',
                model: true,
                type: String
            }
        },
        events: {
            submit: {
                des: '提交动作关联函数',
                args: ['content']
            },
            cancel: {
                des: '取消动作关联函数'
            },
            clear: {
                des: '清除关联函数'
            }
        }
    },
    examples: [{
        name: '搜索',
        props: {}
    }]
}