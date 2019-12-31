import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-editor',
        needRegis: true,
        name: '编辑器',
        grouptype: '编辑类',
        img: 'base_editor',
        icon:'',
        props: {
            value: {
                default: '',
                des: 'html内容',
                multiline: true,
                model: true,
                type: String
            },
            uploadUrl: {
                default: 'HOST/api/store_image',
                des: '图片上传接口',
                type: String
            },
            params: {
                default: {},
                des: '上传时附带的额外参数',
                notArray: true,
                type: Object
            }
        },
        events: {}
    },
    examples: [{
        name: '基础模式',
        img: 'editor',
        props: {}
    }]
}