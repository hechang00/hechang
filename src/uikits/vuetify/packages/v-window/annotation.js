export default {
	what: {
		id: 'v-window', 
		name: '窗口', 
		grouptype: '组', 
		img: 'select_checkbox_pop',
		link:"https://vuetifyjs.com/zh-Hans/components/windows",
		props: {
			value: {
				default: 0, 
				type: null, 
				title: '值',
				model: true
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
				title: '激活css类'
			}, 
			mandatory: {
				default: true, 
				type: Boolean, 
				title: '强制性的'
			}, 
			max: {
				default: 4, 
				type: [
					Number, 
					String
				], 
				title: '最大值'
			}, 
			multiple: {
				default: false, 
				type: Boolean, 
				title: '多项'
			}, 
			continuous: {
				default: false, 
				type: Boolean, 
				title: '连续'
			}, 
			nextIcon: {
				default: '$vuetify.icons.next', 
				type: [
					Boolean, 
					String
				], 
				title: '下一个'
			}, 
			prevIcon: {
				default: '$vuetify.icons.prev', 
				type: [
					Boolean, 
					String
				], 
				title: '上一个'
			}, 
			reverse: {
				default: false, 
				type: Boolean, 
				title: '反方向'
			}, 
			showArrows: {
				default: false, 
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
				title: '触碰'
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
			innerText: {
        default: '',
        title: '内部文本',
        type: String
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
		img: 'v_window', 
		name: '普通窗口', 
			props: {
				value: 'template', 
				dark: false, 
				light: false, 
				activeClass: 'v-window-item--active', 
				mandatory: true, 
				multiple: false, 
				continuous: false, 
				nextIcon: '$vuetify.icons.next', 
				prevIcon: '$vuetify.icons.prev', 
				showArrows: false, 
				showArrowsOnHover: false, 
				touchless: false, 
				vertical: false
			}, 
			slots: {
				default: [
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: true, activeClass: 'v-window-item--active', disabled: false, value: 'template',innerText: '子项一'}, 
					}, 
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: true, activeClass: 'v-window-item--active', disabled: false, value: 'template',innerText: '子项二'}, 
					}
				]
			}
		}, 
		{
			name: '纵向窗口', 
		img: 'v_window', 
		props: {
				value: 0, 
				dark: false, 
				light: false, 
				activeClass: 'v-window-item--active', 
				mandatory: true, 
				multiple: false, 
				continuous: false, 
				nextIcon: '$vuetify.icons.next', 
				prevIcon: '$vuetify.icons.prev', 
				showArrows: false, 
				showArrowsOnHover: false, 
				touchless: false, 
				vertical: true
			}, 
			slots: {
				default: [
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: false, activeClass: 'v-window-item--active', disabled: false}, 
						slots: {
							default: [
								{
									id: 'v-card', 
									name: 'v-card', 
									props: {
										loading: false, 
										loaderHeight: 4, 
										append: false, 
										disabled: false, 
										link: false, 
										nuxt: false, 
										replace: false, 
										ripple: null, 
										tag: 'div', 
										dark: null, 
										light: null, 
										tile: false, 
										flat: true, 
										hover: false, 
										outlined: false, 
										raised: false
									}, 
								}
							]
						}
					}, 
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: false, activeClass: 'v-window-item--active', disabled: false}, 
					}, 
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: false, activeClass: 'v-window-item--active', disabled: false}, 
					}
				]
			}
		},
		{
		img: 'v_window', 
		name: '可逆向窗口', 
			props: {
				value: 0, 
				dark: false, 
				light: false, 
				activeClass: 'v-window-item--active', 
				mandatory: true, 
				multiple: false, 
				continuous: false, 
				nextIcon: '$vuetify.icons.next', 
				prevIcon: '$vuetify.icons.prev', 
				reverse: true, 
				showArrows: false, 
				showArrowsOnHover: false, 
				touchless: false, 
				vertical: false
			}, 
			slots: {
				default: [
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: false, activeClass: 'v-window-item--active', disabled: false}, 
						slots: {
							default: [
								{
									id: 'v-card', 
									name: 'v-card', 
									props: {
										loading: false, 
										loaderHeight: 4, 
										append: false, 
										disabled: false, 
										link: false, 
										nuxt: false, 
										replace: false, 
										ripple: null, 
										tag: 'div', 
										color: 'grey', 
										height: '200', 
										dark: null, 
										light: null, 
										tile: false, 
										flat: false, 
										hover: false, 
										outlined: false, 
										raised: false
									}, 
								}
							]
						}
					}, 
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: false, activeClass: 'v-window-item--active', disabled: false}, 
					}, 
					{
						id: 'v-window-item', 
						name: 'v-window-item', 
						props: {eager: false, activeClass: 'v-window-item--active', disabled: false}, 
					}
				]
			}
		}
	]
}