import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-slot-dialog',
        name: '对话框',
        grouptype: '其他',
        img: 'dialog_nv',
        priority:900,
        needRegis: true,
        icon:'',
        props: {
            value: {
                default: false,
                des: 'Dialog是否显示',
                model: true,
                type: Boolean
            },
            title: {
                default: '',
                des: '标题',
                type: String
            },
            width: {
                default: '50%',
                des: '宽度',
                type: String
            },
            fullscreen: {
                default: false,
                des: '是否全屏',
                type: Boolean
            },
            top: {
                default: '15vh',
                des: '上边距',
                type: String
            },
            modal: {
                default: true,
                des: '是否需要蒙层',
                type: Boolean
            },
            modalAppendToBody: {
                default: true,
                des: '遮罩层是否插入body',
                type: Boolean
            },
            appendToBody: {
                default: true,
                des: 'Dialog是否插入body',
                type: Boolean
            },
            lockScroll: {
                default: true,
                des: '是否Dialog出现时body滚动锁定',
                type: Boolean
            },
            customClass: {
                default: '',
                des: '自定义类名',
                type: String
            },
            closeOnClickModal: {
                default: true,
                des: '是否可点击modal关闭Dialog',
                type: Boolean
            },
            closeOnPressEscape: {
                default: true,
                des: '是否可通过ESC关闭Dialog',
                type: Boolean
            },
            showClose: {
                default: true,
                des: '是否显示关闭按钮',
                type: Boolean
            },
            center: {
                default: false,
                des: '是否对头部和底部采用居中布局',
                type: Boolean
            },
            beforeClose: {
                default: '',
                des: '关闭前回调,会暂停Dialog关闭',
                type: Function,
                args: ['done']
            },
            titleSlot: {
                default: '',
                des: '标题区插槽',
                isSlotArray: true,
                type: String,
                enumValue: [{
                    value: ''
                }]
            },
            titleSlotData: {
                default: {},
                des: '标题区槽数据',
                notArray: true,
                type: Object
            },
            contentSlot: {
                default: '',
                des: '内容插槽',
                isSlotArray: true,
                type: String,
                enumValue: [{
                    value: ''
                }]
            },
            contentSlotData: {
                default: {},
                des: '内容插槽数据',
                notArray: true,
                type: Object
            },
            footerSlot: {
                default: '',
                des: '按钮操作区插槽',
                isSlotArray: true,
                type: String,
                enumValue: [{
                    value: ''
                }]
            },
            footerSlotData: {
                default: {},
                des: '按钮操作区插槽数据',
                notArray: true,
                type: Object
            }
        },
        events: {
            open: {
                des: 'Dialog打开的回调',
                args: []
            },
            opened: {
                des: 'Dialog打开动画结束时的回调',
                args: []
            },
            close: {
                des: 'Dialog关闭的回调',
                args: []
            },
            closed: {
                des: 'Dialog关闭动画结束时的回调',
                args: []
            }
        }
    },
    examples: [{
        name: '基本示例',
        img: 'dialog',
        props: {
            value:true,
            style_flex: 1,
            style_marginLeft: '0px',
            style_marginRight: '0px',
            style_marginTop: '0px',
            style_marginBottom: '0px'
        }
    }]
}