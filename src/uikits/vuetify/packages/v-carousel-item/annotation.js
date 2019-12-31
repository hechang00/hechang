import {Color} from '../../../type';
export default {
	what: {
		id: 'v-carousel-item', 
		name: '轮播项', 
		link: 'https://vuetifyjs.com/en/components/carousels', 
		img: 'v_carousel',
		grouptype: '基础组件', 
		icon:'',
		props: {
            innerText: {
				default: "i m carousel-item",
				title: '文本内容',
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
				title: '激活css类'
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
				default: 0, 
				type: null, 
				title: '值',
				model:true
			}, 
			append: {
				default: false, 
				type: Boolean, 
				title: '插入'
			}, 
			exact: {
				default: false, 
				type: Boolean, 
				title: '完全匹配'
			}, 
			exactActiveClass: {
				default: undefined, 
				type: String, 
				title: '激活CSS类',
				des: '配置具有完全匹配的活动链接时应用的活动CSS类'
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
				title: 'nuxt框架'
			}, 
			replace: {
				default: false, 
				type: Boolean, 
				title: '替代'
			}, 
			ripple: {
				default: undefined, 
				type: [
					Boolean, 
					Object
				], 
				title: 'v-ripple属性'
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
			}
		}, 
		events: {
			click: {
				des: 'click', 
				args: ['p1']
			}
        },
        slots: {
            default: {
				des: '内容插槽', 
				title: '内容插槽', 
				components: []
			}
        }
	}, 
	examples: [
		{
			img: 'v_carousels',
			name: '基础用法',
			props: {}, 
			slots: {}
		}
	]
}