import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item-avatar',
    name: '列表头像',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'linkman',
		icon:'',
    props: {
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      height: {
        default: undefined,
        type: [Number, String],
        title: '高度'
      },
      maxHeight: {
        default: undefined,
        type: [Number, String],
        title: '最大高度'
      },
      maxWidth: {
        default: undefined,
        type: [Number, String],
        title: '最大宽度'
      },
      minHeight: {
        default: undefined,
        type: [Number, String],
        title: '最小高度'
      },
      minWidth: {
        default: undefined,
        type: [Number, String],
        title: '最小宽度'
      },
      width: {
        default: undefined,
        type: [Number, String],
        title: '宽度'
      },
      left: {
        default: false,
        type: Boolean,
        title: '左边'
      },
      right: {
        default: false,
        type: Boolean,
        title: '右边'
      },
      size: {
        default: 40,
        type: [Number, String],
        title: '尺寸'
      },
      tile: {
        default: false,
        type: Boolean,
        title: '标题'
      },
      horizontal: {
        default: false,
        type: Boolean,
        title: '水平'
      }
    },
    slots: {
      default: {
        title: '默认',
        des: '默认插槽',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      img: 'v_list_avatar',
      props: {
        style_flex: 1
      }
    },
    {
      name: '插槽示例',
      img: 'v_list_avatar',
      props: {},
      slots: {
        default: [
          {
            id: 'v-img',
            props: {
              global_zindex: 1200,
              src: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
            }
          }
        ]
      }
    }
  ]
}
