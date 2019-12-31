import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-image',
        name: '图像',
        link:"https://element.eleme.io/#/zh-CN/component/image",
        grouptype: '基础组件',
        priority:950,
        img: 'base_pic',
        needRegis: true,
        icon:'',
        props: {
            value: {
                default: '',
                des: '图片url',
                model: true,
                upload: true,
                type: String
            },
            valueRelated: {
                default: '',
                des: '图片url相对路径缓存',
                hideInPropsPanel: true,
                noBindToTemp: true,
                noCompile: true,
                type: String
            },
            width: {
                default: 'auto',
                des: '宽度',
                type: String
            },
            height: {
                default: 'auto',
                des: '高度',
                type: String
            }
        },
        events: {}
    },
    examples: [{
        name: '基本用法',
        img: 'picture',
        props: {
            imgUrl: '',
            width: 'auto',
            height: 'auto',
            value: '',
            style_marginBottom: '0px',
            style_marginLeft: '0px',
            style_marginRight: '0px',
            style_marginTop: '0px'
        }
    }]
}