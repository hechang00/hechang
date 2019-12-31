import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'loading',
        name: '加载框',
        grouptype: '基础组件',
        img: 'xloading',
        icon:'',
        props: {
            text: {
                default: '',
                des: '提示内容',
                type: String
            },
            show: {
                default: true,
                des: '是否显示',
                type: Boolean
            }
        },
        events: {}
    },
    examples: [{
        name: 'xloading',
        props: {}
    }]
}