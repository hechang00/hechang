import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-actionsheet',
        needRegis: true,
        name: 'actionsheet',
        grouptype: '基础组件',
        img: 'actionsheet',
        icon:'',
        props: {
            menus: {
                default: {},
                des: 'actionsheet数据',
                type: Object
            },
            showCancel: {
                default: true,
                des: '是否显示取消菜单',
                type: Boolean
            },
            show1: {
                default: true,
                des: '是否显示',
                type: Boolean
            }
        },
        events: {
            change: {
                des: '页面切换回调函数',
                args: ['index']
            }
        }
    },
    examples: [{
        name: 'actionsheet',
        img: 'actionSheet',
        props: {
            menus1: {
                menu1: '菜单1',
                menu2: '菜单2',
                menu3: '菜单3'
            }
        }
    }]
}