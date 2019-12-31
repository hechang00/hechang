import {
  Color
} from '../../../type';
export default {
	what: {
		id: 'v-rating', 
		name: '评分', 
		grouptype: '基础组件', 
		img: 'base_rate',
		link:"https://vuetifyjs.com/zh-Hans/components/ratings",
		icon:'',
		props: {
			color: {
				default: '', 
				type: Color, 
				title: '颜色'
			}, 
			openDelay: {
				default: 0, 
				type: [
					Number, 
					String
				], 
				title: '打开延迟'
			}, 
			closeDelay: {
				default: 0, 
				type: [
					Number, 
					String
				], 
				title: '关闭延迟'
			}, 
			ripple: {
				default: true,
				type: [
					Boolean, 
					Object
				], 
				title: '波纹'
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
				title: '超大'
			}, 
			xSmall: {
				default: false, 
				type: Boolean, 
				title: '超小'
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
			backgroundColor: {
				default: '', 
				type: Color, 
				title: '背景颜色'
			}, 
			clearable: {
				default: false, 
				type: Boolean, 
				title: '可清除'
			}, 
			dense: {
				default: false, 
				type: Boolean, 
				title: '紧凑'
			}, 
			emptyIcon: {
				default: '$vuetify.icons.ratingEmpty', 
				type: String, 
				title: '清空图标'
			}, 
			fullIcon: {
				default: '$vuetify.icons.ratingFull', 
				type: String, 
				title: '满星图标'
			}, 
			halfIcon: {
				default: '$vuetify.icons.ratingHalf', 
				type: String, 
				title: '半星图标'
			}, 
			halfIncrements: {
				default: false, 
				type: Boolean, 
				title: '可选半个'
			}, 
			hover: {
				default: false, 
				type: Boolean, 
				title: '悬浮视觉效果'
			}, 
			length: {
				default: 5, 
				type: [
					Number, 
					String
				], 
				title: '长度'
			}, 
			readonly: {
				default: false, 
				type: Boolean, 
				title: '只读'
			}, 
			size: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '尺寸'
			}, 
			value: {
				default: 0, 
				type: Number, 
				title: '分数',
				model: true
      		},
		}, 
		events: {
      input: {
        des: "被绑定模型的更新",
        args: ["value"]
      }
    }, 
		slots: {
			default: {
				des: '默认插槽', 
				title: '默认', 
				components: []
      },
      item: {
		des: '子项目', 
				title: '子项目', 
				components: []
			}
		}
	}, 
	examples: [
		{
      name: '基本用法',  
			props: {ripple: true,value: 3}, 
			slots: {
				default: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingEmpty'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingEmpty'}
							]
						}
					}
				]
			}
		}, 
		{
			name: '鼠标移上效果', 
			props: {ripple: true,  hover: true, size: 64, value: 2}, 
			slots: {
				default: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							size: 64, 
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'mdi-heart'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							size: 64, 
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'mdi-heart'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							size: 64, 
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'mdi-heart-outline'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							size: 64, 
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'mdi-heart-outline'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							size: 64, 
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'mdi-heart-outline'}
							]
						}
					}
				]
			}
		}, 
		{
			name: '小图标', 
			props: {ripple: true, small: true,value: 4}, 
			slots: {
				default: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingFull'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: '$vuetify.icons.ratingEmpty'}
							]
						}
					}
				]
			}
		}
	]
}