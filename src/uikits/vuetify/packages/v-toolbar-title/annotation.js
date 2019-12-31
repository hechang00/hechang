import { Color } from '../../../type'
export default {
  what: {
    id: 'v-toolbar-title',
    name: '工具栏标题',
    grouptype: '栏',
    img: 'v_subheader',
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
            text: '工具栏标题插槽页面'
          }
        ]
      }
    }
  ]
}
