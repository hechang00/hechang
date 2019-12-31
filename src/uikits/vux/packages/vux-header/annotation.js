import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'vux-header',
        needRegis: true,
        name: '标题栏',
        grouptype: '基础组件',
        img: 'xheader',
        icon:'',
        props: {
            title: {
                default: '',
                des: '标题',
                type: String
            },
            backgroundColor: {
                default: '',
                des: '背景色',
                type: Color
            },
            showBack: {
                default: true,
                des: '是否显示返回键',
                type: String
            },
            showMore: {
                default: true,
                des: '是否显示更多',
                type: String
            },
            preventGoBack: {
                default: true,
                des: '是否自定义返回键',
                type: String
            },
            backText: {
                default: '',
                des: '返回文字',
                type: String
            }
        },
        events: {
            click: {
                des: 'back点击回调',
                args: []
            },
            clickMore: {
                des: 'more点击回调',
                args: []
            }
        }
    },
    examples: [{
        name: '标题栏',
        style_marginTop: '0px',
        style_marginLeft: '0px',
        style_marginBottom: '0px',
        style_marginRight: '0px',
        props: {
            style_width: '100%',
            title: '标题'
        }
    }]
}