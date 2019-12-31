import {Color} from '../../../type';
export default {
	what: {
		id: 'v-tab', 
		name: '标签项', 
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
			activeClass: {
				default: undefined, 
				type: String, 
				title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
			}, 
			append: {
				default: false, 
				type: Boolean, 
				title: '插入'
			}, 
			disabled: {
				default: false, 
				type: Boolean, 
				title: '禁用'
			}, 
			exact: {
				default: false, 
				type: Boolean, 
				title: '精度'
			}, 
			exactActiveClass: {
				default: undefined, 
				type: String, 
				title: '配置完全匹配的活动CSS类'
			}, 
			link: {
				default: false, 
				type: Boolean, 
				title: '链接'
			}, 
			href: {
				default: undefined, 
				type: [
					String, 
					Object
				], 
				title: 'href'
			}, 
			to: {
				default: undefined, 
				type: [
					String, 
					Object
				], 
				title: 'to'
			}, 
			nuxt: {
				default: false, 
				type: Boolean, 
				title: 'buxt框架'
			}, 
			replace: {
				default: false, 
				type: Boolean, 
				title: '替代'
			}, 
			ripple: {
				default: true, 
				type: [
					Boolean, 
					Object
				], 
				title: '波浪'
			}, 
			tag: {
				default: undefined, 
				type: String, 
				title: '标签'
			}, 
			target: {
				default: undefined, 
				type: String, 
				title: '目标'
			}, 
			dark: {
				default: false, 
				type: Boolean, 
				title: '暗黑主题'
			}, 
			light: {
				default: false, 
				type: Boolean, 
				title: '明亮主题'
			}
		}, 
		events: {
			click: {
				des: 'click', 
				args: ['p1']
			}, 
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
			props: {innerText:'v_tab内容'}, 
			slots: {}
		}
	]
}