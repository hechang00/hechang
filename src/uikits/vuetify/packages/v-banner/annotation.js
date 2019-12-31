import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-banner', 
		name: '横幅', 
		grouptype: '基础组件', 
		img: 'banner',
		link:"https://vuetifyjs.com/zh-Hans/components/banners",
		icon:'',
		props: {
			innerText: {
				default: "i'm banner",
				title: '文本内容',
				type: String
			},
			color: {
				default: "undefined", 
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
				default: undefined, 
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
				title: '正方形（无边框半径）'
			}, 
			value: {
				default: true, 
				type: Boolean, 
				title: '是否可见'
			}, 
			icon: {
				default: '', 
				type: String, 
				title: '图标'
			}, 
			iconColor: {
				default: '', 
				type: Color, 
				title: '图标颜色'
			}, 
			mobileBreakPoint: {
				default: 960, 
				type: [
					Number, 
					String
				], 
				title: '移动断断点'
			}, 
			singleLine: {
				default: false, 
				type: Boolean, 
				title: '单行显示'
			}, 
			sticky: {
				default: false, 
				type: Boolean, 
				title: '粘贴在组件上',
				model:true
			}
		}, 
		events: {
			'click:icon': {
				des: 'click:icon', 
				args: ['p1']
			}
		},
		slots: {
			default: {
			  des: '默认插槽', 
			  title: '默认', 
			  components: []
			},
			actions: {
				des: 'actions', 
			  title: 'actions', 
			  components: []
			},
			icon: {
			  des: 'icon', 
			  title: 'icon', 
			  components: []
			}
		  }
	}, 
	examples: [
		{
		img: 'v_banner',
		name: '基本用法', 	
			props: {
				sticky: false,
          		singleLine: true,
				icon: 'mdi-plus',
				elevation: 4,
			}, 
			slots: {
				default: [
					{text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
				],
				actions: [
					{
						id: 'v-btn', 
						name: 'v-btn', 
						props: {
							text: true,
							color: "deep-purple accent-4",
							innerText: "Action"
						}
					}
				]
			}
		},
		{
		img: 'v_banner2',
		name: '两行', 
			props: {}, 
			slots: {
				default: [
					{text: "Lorem ipsum dolor sit amet"}
				],
				actions: [
					{
						id: 'v-btn', 
						name: 'v-btn', 
						props: {
							text: true,
							color: "deep-purple accent-4",
							innerText: "Action"
						}
					},
					{
						id: 'v-btn', 
						name: 'v-btn', 
						props: {
							text: true,
							color: "deep-purple accent-4",
							innerText: "Action"
						}
					}
				]
			}
		}
	]
}

