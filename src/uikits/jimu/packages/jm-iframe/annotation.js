import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-iframe',
        name: 'iframe',
        grouptype: '导航组件',
        img: 'base_iframe',
        needRegis: true,
        icon:'',
        props: {
            url: {
                default: '',
                des: '外链',
                type: String
            },
            scrolling: {
                default: 'yes',
                des: '是否显示滚动条',
                type: String,
                enumValue: [{
                        value: 'yes'
                    },
                    {
                        value: 'no'
                    },
                    {
                        value: 'auto'
                    }
                ]
            },
            frameborder: {
                default: '1',
                des: '是否显示框架周围的边框',
                type: String,
                enumValue: [{
                        value: '1'
                    },
                    {
                        value: '0'
                    }
                ]
            }
        },
        events: {}
    },
    examples: [{
        name: 'iframe',
        img: 'iframe',
        props: {
            style_marginLeft: '0px',
            style_marginRight: '0px',
            style_marginTop: '0px',
            style_marginBottom: '0px',
            style_flex: 1,
            url: 'https://www.qq.com',
            style_height: '400px',
            scrolling: 'yes',
            frameborder: '1'
        }
    }]
}