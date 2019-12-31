import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item-content',
    name: '项内容',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'list_group_text',
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
      img: 'v_list_item_content',
      props: {
        style_flex: 1
      },
      slots: {
        default: [
          {
            text: '列表项插槽内容'
          }
        ]
      }
    },
    {
      name: '插槽示例',
      img: 'v_list_item_content',
      props: {
        style_flex: 1
      },
      slots: {
        default: [
          {
            id: 'v-list-item-title',
            props: {},
            slots: {
              default: [{ text: '列表项插槽内容' }]
            }
          }
        ]
      }
    }
  ]
}
