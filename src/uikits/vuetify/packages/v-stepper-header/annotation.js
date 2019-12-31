import { Color } from '../../../type'
export default {
  what: {
    id: 'v-stepper-header',
    name: '步骤条头',
    img: 'step',
    link: 'https://vuetifyjs.com/zh-Hans/components/steppers',
    grouptype: '基础组件',
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
      img: 'v_steppers',
      name: '基础示例',
      props: { innerText: 'step-contetnt-header' }
    }
  ]
}
