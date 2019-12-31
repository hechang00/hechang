import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item-action-text',
    name: 'action文本',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'list_action_text',
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
      img: 'v_list_action',
      props: {
        style_flex: 1
      },
      slots: {
        default: [
          {
            text: '列表项action文本插槽页面'
          }
        ]
      }
    }
  ]
}
