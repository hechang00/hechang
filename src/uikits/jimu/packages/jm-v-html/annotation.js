import { Color } from '../../../type'
export default {
  what: {
    id: 'jm-v-html',
    name: 'html输入',
    grouptype: '编辑类',
    img: 'vHtml',
    needRegis: true,
    icon: '',
    props: {
      html: {
        language:'html',
        default: ``,
        des: '配置',
        type: String
      }
    },
    events: {}
  },
  examples: [
    {
      name: '基础用法',
      img: 'vhtml4',
      props: {
        html: '<div style="color:red;font-size:22px;">积木系统</div>'
      }
    }
  ]
}
