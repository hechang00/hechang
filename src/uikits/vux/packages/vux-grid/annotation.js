import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-grid',
        needRegis: true,
        name: '表格',
        grouptype: '基础组件',
        img: 'xgrid',
        icon:'',
        props: {
            lists: {
                default: {},
                des: '数据设置',
                type: Object
            },
            rows: {
                default: 3,
                des: '表格行数',
                type: Number
            },
            columns: {
                default: 2,
                des: '表格列数',
                type: Number
            }
        },
        events: {
            click: {
                des: 'item点击回调函数',
                args: ['item']
            }
        }
    },
    examples: [{
        name: '表格',
        img: 'xgrid',
        props: {
            style_width: '100%',
            index: 1,
            lists: [{
                    url: 'javascript:',
                    img: '',
                    title: '送你一朵fua'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一辆车'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一次旅行'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一朵fua1'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一辆车2'
                },
                {
                    url: 'javascript:',
                    img: '',
                    title: '送你一次旅行3'
                }
            ]
        }
    }]
}