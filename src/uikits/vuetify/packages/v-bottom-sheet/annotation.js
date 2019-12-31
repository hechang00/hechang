// import {Color} from '../../../type';
export default {
	what: {
		id: 'v-bottom-sheet',
		name: '底部表单',
		link: 'https://vuetifyjs.com/zh-Hans/components/bottom-sheets',
		grouptype: '基础组件',
		img: 'v_bottom_nav',
		icon:'',
		props: {
			openDelay: {
				default: 0,
				type: [
					Number,
					String
				],
				title: '打开延时'
			},
			closeDelay: {
				default: 0,
				type: [
					Number,
					String
				],
				title: '关掉延时'
			},
			value: {
				default: false,
				type: null,
				title: '值',
				model: true
			},
			activator: {
				default: undefined,
				type: null,
				title: '激活'
			},
			disabled: {
				default: false,
				type: Boolean,
				title: '禁用'
			},
			internalActivator: {
				default: false,
				type: Boolean,
				title: '内部激活'
			},
			sheet: {
				default: false,
				type: Boolean,
				title: 'sheet',
				model: true
			},
			openOnHover: {
				default: false,
				type: Boolean,
				title: '打开悬停'
			},
			eager: {
				default: false,
				type: Boolean,
				title: '安装时渲染',
        		des:"将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。"
			},
			attach: {
				default: false,
				type: null,
				title: '固定'
			},
			contentClass: {
				default: '',
				type: String,
				title: '内容css类'
			},
			hideOverlay: {
				default: false,
				type: Boolean,
				title: '隐藏遮罩'
			},
			returnValue: {
				default: undefined,
				type: null,
				title: '返回值'
			},
			dark: {
				default: false,
				type: Boolean,
				title: '暗黑主题'
			},
			fullscreen: {
				default: false,
				type: Boolean,
				title: '全屏'
			},
			light: {
				default: false,
				type: Boolean,
				title: '明亮主题'
			},
			maxWidth: {
				default: 'auto',
				type: [
					String,
					Number
				],
				title: '最大宽度'
			},
			noClickAnimation: {
				default: false,
				type: Boolean,
				title: '无点击动画'
			},
			origin: {
				default: 'center center',
				type: String,
				title: '起源'
			},
			persistent: {
				default: false,
				type: Boolean,
				title: '持久的'
			},
			retainFocus: {
				default: true,
				type: Boolean,
				title: '保持聚焦'
			},
			scrollable: {
				default: false,
				type: Boolean,
				title: '可滚动'
			},
			transition: {
				default: 'bottom-sheet-transition',
				type: String,
				title: '过渡'
			},
			width: {
				default: 'auto',
				type: [
					String,
					Number
				],
				title: '宽度'
			},
			inset: {
				default: false,
				type: Boolean,
				title: '插入'
			}
		},
		slots: {
			default: {
				des: '内容插槽',
				title: '内容插槽',
				components: []
			},
			activator: {
				des: '使用时，将在点击后激活组件',
				title: '激活组件',
				hasProps: true,
				components: []
			}
		},
		events: {
			'click:outside': {
				des: '外面点击事件',
				args: ['event']
			},
			keydown: {
				des: '键盘按下事件',
				args: ['event']
			}
		}
	},
	examples: [
		{
			name: '基本用法',
			img:"v_bottom_sheet",
			props: {},
			slots: {
				activator: [{
					id: 'v-btn',
					name: 'v-btn',
					props: {
						color: 'purple',
						text: true
					},
					slots: {
						default: [
							{ text: 'Open Usage' },
						]
					}

				}],
				default: [
					{
						id: 'v-btn',
						name: 'v-btn',
						props: {
							color: 'red',
							text: true
						},
						slots: {
							default: [
								{ text: 'close' },
							]
						}

					},
					{ text: 'The basic usage of v-bottom-sheet. Almost any content can be placed inside this component' }
				]
			}
		}
	]
}