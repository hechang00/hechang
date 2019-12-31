import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'rater',
        name: '评分',
        grouptype: '基础组件',
        img: 'base_rate',
        icon:'',
        props: {
            max: {
                default: 6,
                des: '最多可选个数',
                type: Number
            },
            value: {
                default: 3,
                des: '值',
                model: true,
                type: Number
            },
            activeColor: {
                default: '',
                des: '选中时的颜色',
                type: Color
            },
            fontSize: {
                default: 25,
                des: '字体大小',
                type: Number
            }
        },
        events: {}
    },
    examples: [{
        name: 'rater',
        props: {}
    }]
}