import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-chip', 
		name: '纸片', 
		grouptype: '基础组件', 
		img: 'v_chip',
		link:"https://vuetifyjs.com/zh-Hans/components/chips",
		icon:'',
		props: {
			innerText: {
				default: "i'm chip",
				title: '文本内容',
				type: String
			},
			color: {
				default: "#409EFF", 
				type: Color, 
				title: '颜色'
			}, 
			large: {
				default: false, 
				type: Boolean, 
				title: '大号'
			}, 
			small: {
				default: false, 
				type: Boolean, 
				title: '小号'
			}, 
			xLarge: {
				default: false, 
				type: Boolean, 
				title: '超大号'
			}, 
			xSmall: {
				default: false, 
				type: Boolean, 
				title: '超小号'
			}, 
			activeClass: {
				default: '', 
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
				title: '完全匹配链接'
			}, 
			exactActiveClass: {
				default: '', 
				type: String, 
				title: '配置完全匹配的活动CSS类'
			}, 
			link: {
				default: false, 
				type: Boolean, 
				title: '是否为链接'
			}, 
			href: {
				default: undefined, 
				type: [
					String, 
					Object
				], 
				title: '链接地址'
			}, 
			to: {
				default: undefined, 
				type: [
					String, 
					Object
				], 
				title: '表示链接的目标路由'
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
				default: undefined, 
				type: [
					Boolean, 
					Object
				], 
				title: '波纹'
			}, 
			tag: {
				default: 'span', 
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
				title: '阴暗'
			},
			light: {
				default: false, 
				type: Boolean, 
				title: '明亮主题'
			}, 
			inputValue: {
				default: '', 
				type: null, 
				title: '输入值'
			}, 
			active: {
				default: false, 
				type: Boolean, 
				title: '活跃状态'
			}, 
			close: {
				default: false, 
				type: Boolean, 
				title: '是否有关闭图标'
			}, 
			closeIcon: {
				default: '$vuetify.icons.delete', 
				type: String, 
				title: '关闭图标'
			}, 
			draggable: {
				default: false, 
				type: Boolean, 
				title: '可拖拽'
			}, 
			filter: {
				default: false, 
				type: Boolean, 
				title: '自定义项目过滤功能函数'
			}, 
			filterIcon: {
				default: '$vuetify.icons.complete', 
				type: String, 
				title: '过滤图标'
			}, 
			label: {
				default: false, 
				type: Boolean, 
				title: '是否有标签'
			}, 
			outlined: {
				default: false, 
				type: Boolean, 
				title: '是否有轮廓'
			}, 
			pill: {
				default: false, 
				type: Boolean, 
				title: '删除填充'
			}, 
			textColor: {
				default: "#fff", 
				type: Color, 
				title: '文字颜色'
			}, 
			value: {
				default: '', 
				type: null, 
				title: '值',
				model: true
			}
		}, 
		events: {
			input: {
                des: "被绑定模型的更新",
                args: ["value"]
			},
			click: {
                des: "触发点击事件",
                args: ["event"]
			},
			"click:close": {
                des: "触发点击关闭事件",
                args: ["event"]
            },
			"update:active": {
                des: "触发更新事件",
                args: ["event"]
            }
		}, 
		slots: {
			default: {
				des: '内容',
				title: '内容', 
				components: []
			}
		}
	}, 
	examples: [
		{
			name: '基本用法',
			props: {
				xSmall: true,
				active: true, 
				innerText: 'new'
			}, 
			slots: {
				default: [
					{text: 'new'}
				]
			}
		}, 
		{
			name: '有边框',
			props: {
				active: true, 
				innerText: 'outlined',
				outlined: true
			}, 
			slots: {
				default: [
					{text: 'outlined'}
				]
			}
		}, 
		{
			name: '可关闭', 
			props: {
				color: 'warning', 
				active: true, 
				close: true, 
				innerText: 'closable'
			}, 
			slots: {
				default: [
					{text: 'updated'}
				]
			}
		},
		{
			name: "有图标",
			props: {active: true},
			slots: {
				default: [{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {left: true, color: "red"},
						slots: {
							default: [
								{text: `mdi-account`}
							]
						}
				    },
					{text: 'Icon'}
				]
			}
		}
	]
}