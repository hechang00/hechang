import {
	Color
} from '../../../type';
export default {
	what: {
		id: 'v-tabs',
		name: '标签组',
		grouptype: '选项卡',
		img: 'select_checkbox_pop',
		link: "https://vuetifyjs.com/zh-Hans/components/tabs",
		icon:'',
		props: {
			innerText: {
				default: '',
				title: '内部文本',
				type: String
			},
			color: {
				default: undefined,
				type: Color,
				title: '颜色'
			},
			value: {
				default: '',
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
				default: '',
				type: String,
				title: '激活css类'
			},
			alignWithTitle: {
				default: false,
				type: Boolean,
				title: '标题对齐'
			},
			backgroundColor: {
				default: undefined,
				type: String,
				title: '背景颜色'
			},
			centerActive: {
				default: false,
				type: Boolean,
				title: '选中居中'
			},
			centered: {
				default: false,
				type: Boolean,
				title: '居中'
			},
			fixedTabs: {
				default: false,
				type: Boolean,
				title: '固定标签'
			},
			grow: {
				default: false,
				type: Boolean,
				title: '增长'
			},
			height: {
				default: undefined,
				type: [
					Number,
					String
				],
				title: '高度'
			},
			hideSlider: {
				default: false,
				type: Boolean,
				title: '隐藏组件'
			},
			iconsAndText: {
				default: false,
				type: Boolean,
				title: '图标和文字'
			},
			mobileBreakPoint: {
				default: 1264,
				type: [
					Number,
					String
				],
				title: '移动断点'
			},
			nextIcon: {
				default: '$vuetify.icons.next',
				type: String,
				title: '下一个'
			},
			optional: {
				default: false,
				type: Boolean,
				title: '选项'
			},
			prevIcon: {
				default: '$vuetify.icons.prev',
				type: String,
				title: '前一个'
			},
			right: {
				default: false,
				type: Boolean,
				title: '右边'
			},
			showArrows: {
				default: false,
				type: Boolean,
				title: '显示箭头'
			},
			sliderColor: {
				default: undefined,
				type: String,
				title: '组件颜色'
			},
			sliderSize: {
				default: 2,
				type: [
					Number,
					String
				],
				title: '组件大小'
			},
			vertical: {
				default: false,
				type: Boolean,
				title: '垂直'
			}
		},
		events: {
			change: {
				des: "选项切换事件",
				args: ["value"]
			}
		},
		slots: {
			default: {
				des: '默认描述',
				title: '名称',
				components: []
			}
		}
	},
	examples: [
		{
		img: 'v_tab1',
		name: '基本示例',
			props: { dark: false, light: false },
			slots: {
				default: [
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Item One' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Item Two' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Item Three' }
							]
						}
					}
				]
			}
		},
		{
		img: 'v_tab2',
		name: '填充示例',
			props: { dark: true, light: false, backgroundColor: 'indigo', fixedTabs: true },
			slots: {
				default: [
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: `Option` }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: `Another Selection` }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: `Items` }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: `Another Screen` }
							]
						}
					}
				]
			}
		},
		{
		img: 'v_tab3',
		name: '活动项居中示例',
			props: { dark: true, light: false, backgroundColor: 'deep-purple accent-4', centerActive: true },
			slots: {
				default: [
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'One' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Two' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Three' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Four' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Five' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Six' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Seven' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Eight' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Nine' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Ten' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Eleven' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Twelve' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Thirteen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Fourteen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Fifteen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Sixteen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Seventeen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Eighteen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Nineteen' }
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{ text: 'Twenty' }
							]
						}
					}
				]
			}
		},
		{
		img: 'v_tab4',
		name: '分页示例',
			props: { dark: true, light: false, backgroundColor: 'teal darken-3', showArrows: true },
			slots: {
				default: [
					{
						id: 'v-tabs-slider',
						name: 'v-tabs-slider',
						props: { color: 'teal lighten-3' },
						slots: {}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-1',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 1
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-2',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 2
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-3',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 3
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-4',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 4
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-5',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 5
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-6',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 6
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-7',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 7
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-8',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 8
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-9',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 9
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-10',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 10
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-11',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 11
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-12',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 12
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-13',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 13
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-14',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 14
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-15',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 15
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-16',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 16
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-17',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 17
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-18',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 18
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-19',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 19
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-20',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 20
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-21',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 21
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-22',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 22
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-23',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 23
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-24',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 24
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-25',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 25
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-26',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 26
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-27',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 27
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-28',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 28
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-29',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 29
    `}
							]
						}
					},
					{
						id: 'v-tab',
						name: 'v-tab',
						props: {
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							href: '#tab-30',
							nuxt: false,
							replace: false,
							ripple: true,
							dark: null,
							light: null
						},
						slots: {
							default: [
								{
									text: `
      Item 30
    `}
							]
						}
					}
				]
			}
		},
	]
}