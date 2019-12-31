import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-button-tab',
        needRegis: true,
        name: '按钮选项页',
        grouptype: '基础组件',
        img: 'nav_tags',
        icon:'',
        props: {
            items: {
                default: {},
                des: 'tab设置',
                type: Object
            }
        },
        events: {
            click: {
                des: 'tabItem点击函数',
                args: ['index', 'name']
            }
        }
    },
    examples: [{
        name: '按钮选项页',        
        props: {
            style_width: '100%',
            items: [{
                    tabLabel: 'tab1',
                    selected: false,
                    page: 'page1'
                },
                {
                    tabLabel: 'tab2',
                    selected: true,
                    page: 'page2'
                },
                {
                    tabLabel: 'tab3',
                    selected: false,
                    page: 'page3'
                }
            ]
        }
    }]
}