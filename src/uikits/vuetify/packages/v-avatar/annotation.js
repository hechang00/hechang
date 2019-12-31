import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-avatar', 
		name: '头像', 
		grouptype: '基础组件', 
		icon:'',
		img: 'linkman',
		link:"https://vuetifyjs.com/zh-Hans/components/avatars",
		props: {
			innerText: {
				default: "i m avatar",
				title: '文本内容',
				type: String
			},
			color: {
				default: undefined, 
				type: Color, 
				title: '颜色'
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
				default: 36, 
				type: [
					Number, 
					String
				], 
				title: '最小高度'
			}, 
			minWidth: {
				default: 36, 
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
			left: {
				default: false, 
				type: Boolean, 
				title: '左侧'
			}, 
			right: {
				default: false, 
				type: Boolean, 
				title: '右侧'
			}, 
			size: {
				default: 48, 
				type: [
					Number, 
					String
				], 
				title: '尺码'
			}, 
			tile: {
				default: false, 
				type: Boolean, 
				title: '无边框半径'
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
		img: 'v_avatar',
		name: '小号头像', 
			props: {color: 'indigo', left: false, right: false, size: 36, minHeight: 36, minWidth: 36, tile: true}, 
			slots: {
				default: [
					{text: '36'}
				]
			}
		}, 
		{
		img: 'v_avatar',
		name: '中号头像', 
			props: {color: 'teal', left: false, right: false, size: 48, minHeight: 48, minWidth: 48, tile: false}, 
			slots: {
				default: [
					{text: '48'}
				]
			}
		}, 
		{
		img: 'v_avatar',
		name: '大号头像', 
			props: {color: 'orange', left: false, right: false, size: 62, minHeight: 62, minWidth: 62, tile: false}, 
			slots: {
				default: [
					{text: '62'}
				]
			}
		}, 
		{
		img: 'v_avatar',
		name: '图标头像', 
			props: {color: 'blue', left: false, right: false, size: 48, minHeight: 48, minWidth: 48, tile: true}, 
			slots: {
				default: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {}, 
						slots: {
							default: [
								{text: 'mdi-alarm'}
							]
						}
					}
				]
			}
		}, 
		{
		img: 'v_avatar',
		name: '图片头像', 
			props: {color: 'grey', left: false, right: false, size: 64, minHeight: 64, minWidth: 64, tile: true,innerText:''}, 
			slots: {
				default: [
					{
						id: 'v-img', 
						name: 'v-img', 
						props: {global_zindex: 1200, contain: false, position: 'center center', src: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg', transition: 'fade-transition'}
					}
				]
			}
		}
	]
}