import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'el-pagination',
        name: '分页',
        img: 'pagination',
        link:"https://element.eleme.io/#/zh-CN/component/pagination",
        grouptype:'数据组件',
        priority:910, 
        icon:'',
        props: {
            small: {
                default: false,
                des: '使用小型分页样式',
                type: Boolean
            },
            hideOnSinglePage: {
                default: false,
                des: '只有一页时是否隐藏',
                type: Boolean
            },
            background: {
                default: false,
                des: '分页按钮添加背景色',
                type: Boolean
            },
            pageSize: {
                default: 10,
                des: '每页显示条目个数',
                type: Number
            },
            total: {
                default: 0,
                des: '总条目数',
                type: Number
            },
            pageCount: {
                default: 0,
                des: '总页数',
                type: Number
            },
            pagerCount: {
                default: 7,
                des: '页码按钮的数量',
                type: Number
            },
            currentPage: {
                default: 1,
                des: '当前页数',
                type: Number
            },
            layout: {
                default: 'prev, pager, next, jumper, ->, total',
                des: '组件布局，子组件名用逗号分隔',
                type: String
            },
            pageSizes: {
                default: [10, 20, 30, 40, 50, 100, 200],
                des: '每页显示个数设置',
                type: Array
            },
            popperClass: {
                default: '',
                des: '每页显示个数选择器的下拉框类名',
                type: String
            },
            prevText: {
                default: '',
                des: '替代图标显示的上一页文字',
                type: String
            },
            nextText: {
                default: '',
                des: '替代图标显示的下一页文字',
                type: String
            },
            disabled: {
                default: false,
                des: '是否禁用',
                type: Boolean
            }
        },
        events: {
            'size-change': {
                des: '每页显示条目个数改变时触发',
                args: ['size']
            },
            'current-change': {
                des: '当前页数改变是触发',
                args: ['value']
            },
            'prev-click': {
                des: '上一页按钮改变当前页后触发',
                args: ['event']
            },
            'next-click': {
                des: '下一页按钮改变当前页后触发',
                args: ['event']
            }
        }
    },
    examples: [{
            name: '基础用法',
            props: {
                layout: 'prev, pager, next',
                total: 50
            }
        },
        {
            name: '设置最大页码按钮数',
            props: {
                layout: 'prev, pager, next',
                pageSize: '20',
                pagerCount: 11,
                total: 1000
            }
        },
        {
            name: '带有背景色的分页',
            props: {
                layout: 'prev, pager, next',
                background: true,
                total: 1000
            }
        },
        {
            name: '完整功能',
            props: {
                layout: 'total, sizes, prev, pager, next, jumper',
                background: true,
                total: 1000
            }
        }
    ]
}