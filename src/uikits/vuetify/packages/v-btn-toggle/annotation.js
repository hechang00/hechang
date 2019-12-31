import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-btn-toggle', 
		name: '按钮组', 
		grouptype: '组', 
		img: 'select_checkbox_pop',
		link:"https://vuetifyjs.com/zh-Hans/components/button-groups",
		icon:'',
		props: {
			activeClass: {
				default: '', 
				type: String, 
				title: '激活CSS类',
				des: '配置当链接处于活动状态时应用的活动CSS类'
			}, 
			color: {
				default: "#409EFF", 
				type: Color, 
				title: '颜色'
			}, 
			backgroundColor: {
				default: undefined, 
				type: Color, 
				title: '背景颜色'
			}, 
			borderless: {
				default: undefined, 
				type: Boolean, 
				title: '无边框'
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
			mandatory: {
				default: false, 
				type: Boolean, 
				title: '强制一个按钮被选中'
			}, 
			max: {
				default: false, 
				type: [
					Number, 
					String
				], 
				title: '能被选中的最大数量'
			},
			multiple: {
				default: false, 
				type: Boolean, 
				title: '多选'
			},
			rounded: {
				default: false, 
				type: Boolean, 
				title: '圆角'
			},
			shaped: {
				default: false, 
				type: Boolean, 
				title: '边框半径',
				des: '在卡的左上方和右下方应用较大的边框半径'
			},
			tile: {
				default: false, 
				type: Boolean, 
				title: '紧凑'
			}, 
			tile: {
				default: false, 
				type: Boolean, 
				title: '紧凑'
			}, 
			value: {
				default: '', 
				type: null, 
				title: '值',
				model: true
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
			
			tag: {
				default: 'button', 
				type: String, 
				title: '标签'
			}, 
			tile: {
				default: false, 
				type: Boolean, 
				title: '紧凑'
			}, 
			
			append: {
				default: false, 
				type: Boolean, 
				title: '附加'
			}
		
		}, 
		events: {
			change:{
				des:"数值变化函数",
				args:["value"]
			}
		}, 
		slots: {
			default: {
				des: '默认插槽', 
				title: '默认', 
				components: []
			}, 
			loader: {
				des: 'loader插槽', 
				title: 'loader', 
				components: []
			}
		}
	}, 
	examples: [
		{
		img: 'v_btn_group1', 
		name: '基本用法', 
			props: {
				tile: true,
        color: "deep-purple accent-3",
        group: true
			}, 
			slots: {
				default: [
					{
						id: 'v-btn', 
						name: 'v-btn', 
						props: {
							value: "left"
						}, 
						slots: {
							default: [
								{text: 'left'}
							]
						}
					},
					{
						id: 'v-btn', 
						name: 'v-btn', 
						props: {
							value: "center"
						}, 
						slots: {
							default: [
								{text: 'center'}
							]
						}
					},
					{
						id: 'v-btn', 
						name: 'v-btn', 
						props: {
							value: "right"
						}, 
						slots: {
							default: [
								{text: 'right'}
							]
						}
					}
				]
			}
		}, 
		{
		img: 'v_btn_group2', 
		name: '图标按钮组', 
			props: {
				icon: true, 
			}, 
			slots: {
				default: [
					{
						id: 'v-btn', 
						name: 'v-btn', 
						slots: {
							default: [
								{
									id: 'v-icon', 
									name: 'v-icon', 
									slots: {
										default: [
											{text: 'mdi-format-align-left'}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-btn', 
						name: 'v-btn', 
						slots: {
							default: [
								{
									id: 'v-icon', 
									name: 'v-icon', 
									slots: {
										default: [
											{text: 'mdi-format-align-center'}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-btn', 
						name: 'v-btn', 
						slots: {
							default: [
								{
									id: 'v-icon', 
									name: 'v-icon', 
									slots: {
										default: [
											{text: 'mdi-format-align-right'}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-btn', 
						name: 'v-btn', 
						slots: {
							default: [
								{
									id: 'v-icon', 
									name: 'v-icon', 
									slots: {
										default: [
											{text: 'mdi-format-align-justify'}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
}