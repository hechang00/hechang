import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item-icon',
    name: '项图标',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'xunhuan',
		icon:'',
    props: {
      innerText: {
        default: '',
        title: '内部文本',
        type: String
      }
    },
    events: {},
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
      img: 'v_list_icon',
      props: {
        style_flex: 1
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            props: { color: '#9E9E9E' },
            slots: {
              default: [{ text: 'mdi-magnify' }]
            }
          }
        ]
      }
    }
  ]
}
