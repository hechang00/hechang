import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-page',
        needRegis: true,
        name: '页面容器',
        priority:980,
        grouptype: '导航组件',
        img: 'nav_contain',
        registID: true,
        icon:'',
        props: {
            path: {
                default: undefined,
                des: '显示的页面路径',
                pageOption: true,
                type: String
            },
            width: {
                default: '600',
                des: '宽度',
                type: String,
                classifyType:'style',
                priority:1000
            },
            height: {
                default: '600',
                des: '高度',
                type: String,
                classifyType:'style',
                priority:1000
            },
            minHeight: {
                default: '600',
                des: '最小高度',
                type: String,
                classifyType:'style',
                priority:992
            },
            renderMode: {
                default: 'router',
                des: '渲染模式',
                type: String,
                enumValue: [{
                        value: 'router',
                        des: '路由模式'
                    },
                    {
                        value: 'direct',
                        des: '直渲模式'
                    }
                ]
            },
            keepalive: {
                default: false,
                type: Boolean,
                des: "是否保活"
            }
        },
        events: {}
    },
    examples: [{
        name: '基础用法',
        props: {
            path:'',
            style_marginLeft: '0px',
            style_marginRight: '0px',
            style_marginTop: '0px',
            style_marginBottom: '0px'
        }
    }]
}