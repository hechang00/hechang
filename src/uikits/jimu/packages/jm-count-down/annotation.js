import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-count-down',
        needRegis: true,
        name: '倒计时',
        grouptype: '其他',
        img: 'select_time',
        icon:'',
        props: {
            target: {
                default: 10000,
                des: '倒计时时间(ms)',
                type: Number
            },
            fontSize: {
                default: 16,
                des: '字体大小',
                type: Number
            },
            color: {
                default: '#000000',
                des: '字体颜色',
                type: Color
            },
            backgroundColor: {
                default: '#FFFFFF',
                des: '背景颜色',
                type: Color
            }
        },
        events: {
            end: {
                des: '倒计时结束触发',
                args: []
            }
        }
    },
    examples: [{
        name: '基础用法',
        img: 'countdown',
        props: {
            target:100000
        }
    }]
}