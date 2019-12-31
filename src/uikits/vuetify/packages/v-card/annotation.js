import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-card', 
		name: '卡片', 
		grouptype: '卡片', 
		img: 'htmlInput',
		link:"https://vuetifyjs.com/zh-Hans/components/cards",
		icon:'',
		props: {
			innerText: {
				default: "",
				title: '文本内容',
				type: String
			},
			loading: {
				default: false, 
				type: [
					Boolean, 
					String
				], 
				title: '显示线性进度条'
			}, 
			loaderHeight: {
				default: 4, 
				type: [
					Number, 
					String
				], 
				title: '装载高度'
			}, 
			activeClass: {
				default: undefined, 
				type: String, 
				title: '配置活动CSS类'
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
				title: '链接'
			}, 
			to: {
				default: undefined, 
				type: [
					String, 
					Object
				], 
				title: '到'
			}, 
			nuxt: {
				default: false, 
				type: Boolean, 
				title: 'nuxt框架'
			}, 
			replace: {
				default: false, 
				type: Boolean, 
				title: '替换'
			}, 
			ripple: {
				default: {"center": true}, 
				type: [
					Boolean, 
					Object
				], 
				title: '波浪'
			}, 
			tag: {
				default: 'div', 
				type: String, 
				title: '标签'
			}, 
			target: {
				default: undefined, 
				type: String, 
				title: '目标'
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
			tile: {
				default: false, 
				type: Boolean, 
				title: '标题'
			}, 
			flat: {
				default: false, 
				type: Boolean, 
				title: '消除相对深度'
			}, 
			hover: {
				default: false, 
				type: Boolean, 
				title: '悬浮'
			}, 
			img: {
				default: undefined, 
				type: String, 
				title: '图片'
			}, 
			outlined: {
				default: false, 
				type: Boolean, 
				title: '外形'
			}, 
			raised: {
				default: false, 
				type: Boolean, 
				title: '提高'
			}
		}, 
		events: {
            click: {
                des: "点击函数",
                args: ["event"]
            }
        }, 
		slots: {
			default: {
				des: '内容插槽', 
				title: '内容插槽', 
				components: []
      },
      progress: {
				des: '进度线的插槽（loading属性不等于布尔值False时显示)', 
				title: '定义进度线插槽', 
				components: []
			}
		}
	}, 
	examples: [
		{
		img: 'v_card',
		name: '基本用法', 
			props: {
				loaderHeight: 4, 
				minWidth: '100', 
				minHeight: '100'
			},
			slots: {
				default: [
					{
						id: 'v-card-title',
						name: 'v-card-title',
						props: {},
						slots: {
							default: [
								{text: "card title"}
							]
						}
					},
					{
						id: 'v-card-text',
						name: 'v-card-text',
						props: {},
						slots: {
							default: [
								{text: "card text"}
							]
						}
					},
				]
			}
		},
		{
		img: 'v_card',
		name: '边框卡片', 
			props: {
				loaderHeight: 4, 
				minWidth: '100', 
				minHeight: '100',
				outlined: true
			},
			slots: {
				default: [
					{
						id: 'v-card-title',
						name: 'v-card-title',
						props: {},
						slots: {
							default: [
								{text: "card title"}
							]
						}
					},
					{
						id: 'v-card-text',
						name: 'v-card-text',
						props: {},
						slots: {
							default: [
								{text: "card text"}
							]
						}
					}
				]
			}
		},
		{
		img: 'v_card',
		name: '漂浮卡片',
			props: {
				loaderHeight: 4, 
				minWidth: '100', 
				minHeight: '100',
				raised: true
			},
			slots: {
				default: [
					{
						id: 'v-card-title',
						name: 'v-card-title',
						props: {},
						slots: {
							default: [
								{text: "card title"}
							]
						}
					},
					{
						id: 'v-card-text',
						name: 'v-card-text',
						props: {},
						slots: {
							default: [
								{text: "card text"}
							]
						}
					}
				]
			}
		},
		{
		img: 'v_card',
		name: '圆角形状卡片', 
			props: {
				loaderHeight: 4, 
				minWidth: '100', 
				minHeight: '100',
				shaped: true
			},
			slots: {
				default: [
					{
						id: 'v-card-title',
						name: 'v-card-title',
						props: {},
						slots: {
							default: [
								{text: "card title"}
							]
						}
					},
					{
						id: 'v-card-text',
						name: 'v-card-text',
						props: {},
						slots: {
							default: [
								{text: "card text"}
							]
						}
					}
				]
			}
		},
		{
		img: 'v_card',
		name: '直角形状卡片',
			props: {
				loaderHeight: 4, 
				minWidth: '100', 
				minHeight: '100',
				tile: true
			},
			slots: {
				default: [
					{
						id: 'v-card-title',
						name: 'v-card-title',
						props: {},
						slots: {
							default: [
								{text: "card title"}
							]
						}
					},
					{
						id: 'v-card-text',
						name: 'v-card-text',
						props: {},
						slots: {
							default: [
								{text: "card text"}
							]
						}
					}
				]
			}
		}
	]
}