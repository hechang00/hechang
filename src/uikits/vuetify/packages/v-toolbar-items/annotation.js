import { Color } from '../../../type'
export default {
  what: {
    id: 'v-toolbar-items',
    name: '工具栏子项',
    grouptype: '栏',
    img: 'list_group_text',
    link: 'https://vuetifyjs.com/zh-Hans/components/toolbars',
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
      img: 'v_tool_bar1',
      props: {
        style_flex: 1
      },
      slots: {
        default: [
          {
            text: '工具栏子项插槽页面'
          }
        ]
      }
    }
  ]
}
