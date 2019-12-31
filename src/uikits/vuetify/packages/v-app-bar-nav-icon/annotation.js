import { Color } from '../../../type'
export default {
  what: {
    id: 'v-app-bar-nav-icon',
    name: '状态栏图标',
    link: 'https://vuetifyjs.com/zh-Hans/components/app-bars',
    grouptype: '栏',
    img: 'icon',
    icon:'',
    props: {
      innerText: {
        default: '',
        type: String,
        title: '内部文本'
      }
    },
    slots: {
      default: {
        des: '默认插槽',
        title: '默认',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_app_bar1',
      name: '基础用法',
      props: {
        style_height: '50px',
				style_width: '50px',
				innerText:'图标'
      }
    }
  ]
}
