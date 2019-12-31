import {Color} from '../../../type';
export default {
	what: {
		id: 'v-footer', 
		name: '页尾', 
		link: 'https://vuetifyjs.com/zh-Hans/components/footer', 
		grouptype: '基础组件', 
		img: 'v_footer',
		icon:'',
		props: {
			innerText: {
				default: "i m footer",
				title: '文本内容',
				type: String
			},
			color: {
				default: undefined, 
				type: Color, 
				title: '颜色'
			}, 
			elevation: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '相对深度'
			}, 
			height: {
				default: 'auto', 
				type: [
					Number, 
					String
				], 
				title: '高度'
			}, 
			maxHeight: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最大高度'
			}, 
			maxWidth: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最大宽度'
			}, 
			minHeight: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最小高度'
			}, 
			minWidth: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最小宽度'
			}, 
			width: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '宽度'
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
			}, 
			tag: {
				default: 'div', 
				type: String, 
				title: '标签'
			}, 
			tile: {
				default: true, 
				type: Boolean, 
				title: '紧凑'
			}, 
			absolute: {
				default: false, 
				type: Boolean, 
				title: '绝对布局'
			}, 
			fixed: {
				default: false, 
				type: Boolean, 
				title: 'fixed布局'
			}, 
			app: {
				default: false, 
				type: Boolean, 
				title: '将组件指定为应用程序布局的一部分'
			}, 
			inset: {
				default: false, 
				type: Boolean, 
				title: '放置工具欄與應用程序v-navigation-drawer的偏移量'
			}, 
			padless: {
				default: false, 
				type: Boolean, 
				title: '消除内边框'
			}
		}, 
		events: {}, 
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
		img: 'v_footers',
		name: '基本用法', 
			props: {}, 
			slots: {
				default: [
					{
						id: 'v-footer', 
						name: 'v-footer', 
						props: {
							height: 'auto', 
							tag: 'div', 
							tile: true, 
						}, 
						slots: {
							default: [
								{text: '© 2019'}
							]
						}
					}
				]
			}
		}, 
		{
		img: 'v_footers',
		name: '带标题', 
			props: {tile: true}, 
			slots: {
				default: [
					{
						id: 'v-card', 
						name: 'v-card', 
						props: {
							loaderHeight: 4, 
							tag: 'div', 
							width: '100%', 
							tile: true, 
							flat: true, 
						}, 
						slots: {
							default: [
								{
									id: 'v-divider', 
									name: 'v-divider', 
									props: {
									}, 
								}, 
								{text: `2019 — `}
							]
						}
					}
				]
			}
		}, 
		{
		img: 'v_footers',
		name: '移除内边距', 
			props: {}, 
			slots: {
				default: [
					{
						id: 'v-footer', 
						name: 'v-footer', 
						props: {
							height: 'auto', 
							tag: 'div', 
							tile: true, 
							padless: true
						}, 
						slots: {
							default: [
								{text: `2019 — `}
							]
						}
					}
				]
			}
		}
	]
}