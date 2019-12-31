import {Color} from '../../../type';
export default {
	what: {
		id: 'v-tab-item', 
		name: '标签单元', 
		link: 'https://vuetifyjs.com/en/components/app-bars', 
		img: 'select_checkbox_pop',
		grouptype: '选项卡', 
		icon:'',
		props: {
      innerText: {
				default: '',
				title: '内部文本',
				type: String
			},
			eager: {
				default: false, 
				type: Boolean, 
				title: '安装时渲染',
        		des:"将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。"
			}, 
			activeClass: {
				default: undefined, 
				type: String, 
				title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
			}, 
			disabled: {
				default: false, 
				type: Boolean, 
				title: '禁用'
			}, 
			reverseTransition: {
				default: undefined, 
				type: [
					Boolean, 
					String
				], 
				title: '反转动画'
			}, 
			transition: {
				default: undefined, 
				type: [
					Boolean, 
					String
				], 
				title: '动画'
			}, 
			value: {
				default: '', 
				type: null, 
				title: '值'
			}, 
			id: {
				default: undefined, 
				type: String, 
				title: 'id'
			}
		}, 
		events: {
			change: {
				des: 'change', 
				args: []
			}
		},
    slots: {
      default: {
        des: '默认描述',
        title: '默认',
        components: []
      }
    }
	}, 
	examples: [
		{
			img: 'v_tab1',
			name: '基础示例', 
			props: {innerText:'v-tab-item内容'}, 
			slots: {}
		}
	]
}