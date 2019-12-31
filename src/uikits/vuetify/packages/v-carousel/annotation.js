import {
	Color
} from '../../../type';
export default {
	what: {
		id: 'v-carousel',
		name: '轮播图',
		grouptype: '基础组件',
		img: 'v_carousel',
		link: "https://vuetifyjs.com/zh-Hans/components/carousels",
		icon:'',
		props: {
			innerText: {
				default: "i m carousel",
				title: '文本内容',
				type: String
			},
			value: {
				default: 0,
				type: null,
				title: '值',
				model:true
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
			activeClass: {
				default: 'v-window-item--active',
				type: String,
				title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
			},
			mandatory: {
				default: true,
				type: Boolean,
				title: '强制性'
			},
			max: {
				default: 4,
				type: [
					Number,
					String
				],
				title: '最大'
			},
			multiple: {
				default: false,
				type: Boolean,
				title: '多项'
			},
			continuous: {
				default: true,
				type: Boolean,
				title: '连续'
			},
			nextIcon: {
				default: '$vuetify.icons.next',
				type: [
					Boolean,
					String
				],
				title: '下一个图标'
			},
			prevIcon: {
				default: '$vuetify.icons.prev',
				type: [
					Boolean,
					String
				],
				title: '前一个图标'
			},
			reverse: {
				default: false,
				type: Boolean,
				title: '反方向'
			},
			showArrows: {
				default: true,
				type: Boolean,
				title: '显示箭头'
			},
			showArrowsOnHover: {
				default: false,
				type: Boolean,
				title: '悬停显示箭头'
			},
			touch: {
				default: undefined,
				type: Object,
				title: '触摸'
			},
			touchless: {
				default: false,
				type: Boolean,
				title: '非接触'
			},
			vertical: {
				default: false,
				type: Boolean,
				title: '垂直'
			},
			cycle: {
				default: false,
				type: Boolean,
				title: '周期'
			},
			delimiterIcon: {
				default: '$vuetify.icons.delimiter',
				type: String,
				title: '定界符icon'
			},
			height: {
				default: 500,
				type: [
					Number,
					String
				],
				title: '高度'
			},
			hideDelimiters: {
				default: false,
				type: Boolean,
				title: '隐藏定界符'
			},
			hideDelimiterBackground: {
				default: false,
				type: Boolean,
				title: '隐藏定界符背景色'
			},
			interval: {
				default: 6000,
				type: [
					Number,
					String
				],
				title: '定时'
			},
			progress: {
				default: false,
				type: Boolean,
				title: '进度'
			},
			progressColor: {
				default: undefined,
				type: String,
				title: '进度条颜色'
			},
			verticalDelimiters: {
				default: undefined,
				type: String,
				title: '垂直定界符'
			}
		},
		events: {
			input: {
				des: "被绑定模型的更新",
				args: ["value"]
			}
		},
		slots: {
			default: {
				des: '默认',
				title: '默认',
				components: []
			}
		}
	},
	examples: [
		{
			img: 'v_carousels',
			name: '基础用法',
			props: {
				activeClass: 'v-window-item--active',
				mandatory: true,
				continuous: true,
				nextIcon: '$vuetify.icons.next',
				prevIcon: '$vuetify.icons.prev',
				showArrows: true,
				delimiterIcon: '$vuetify.icons.delimiter',
				height: 500,
				interval: 6000,
			},
			slots: {
				default: [
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {},
						slots: {
							default: [
								{ text: "1" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {},
						slots: {
							default: [
								{ text: "2" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {},
						slots: {
							default: [
								{ text: "3" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {},
						slots: {
							default: [
								{ text: "4" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {},
						slots: {
							default: [
								{ text: "5" }
							]
						}
					}
				]
			}
		},
		{
			img: 'v_carousels',
			name: '切换箭头可隐藏',
			props: {
				dark: false,
				light: false,
				activeClass: 'v-window-item--active',
				mandatory: true,
				multiple: false,
				continuous: true,
				nextIcon: '$vuetify.icons.next',
				prevIcon: '$vuetify.icons.prev',
				showArrows: true,
				showArrowsOnHover: true,
				touchless: false,
				vertical: false,
				cycle: true,
				delimiterIcon: '$vuetify.icons.delimiter',
				height: '400',
				hideDelimiters: false,
				hideDelimiterBackground: true,
				interval: 6000,
				progress: false
			},
			slots: {
				default: [
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {
							eager: false,
							disabled: false,
							append: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: null
						},
						slots: {
							default: [
								{ text: "1" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {
							eager: false,
							disabled: false,
							append: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: null
						},
						slots: {
							default: [
								{ text: "2" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {
							eager: false,
							disabled: false,
							append: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: null
						},
						slots: {
							default: [
								{ text: "3" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {
							eager: false,
							disabled: false,
							append: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: null
						},
						slots: {
							default: [
								{ text: "4" }
							]
						}
					},
					{
						id: 'v-carousel-item',
						name: 'v-carousel-item',
						props: {
							eager: false,
							disabled: false,
							append: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: null
						},
						slots: {
							default: [
								{ text: "5" }
							]
						}
					}
				]
			}
		}
	]
}