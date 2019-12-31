import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item-subtitle',
    name: '项子标题',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'v_subheader',
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
      img: 'v_list_item_title',
      props: {
        style_flex: 1
      },
      slots: {
        default: [
          {
            text: '标题插槽页面'
          }
        ]
      }
    }
  ]
}
