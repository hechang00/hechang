import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-badge', 
		name: '消息提醒', 
		grouptype: '基础组件', 
		img: 'v_badge',
		link:"https://vuetifyjs.com/zh-Hans/components/badges",
		icon:'',
		props: {
			innerText: {
				default: "1",
				title: '文本内容',
				type: String
			},
			color: {
				default: '#1867c0', 
				type: Color, 
				title: '颜色'
			}, 
			value: {
				default: '0', 
				type: {String, Number}, 
				title: '值'
			}, 
			left: {
				default: false, 
				type: Boolean, 
				title: '左边'
			}, 
			bottom: {
				default: false, 
				type: Boolean, 
				title: '底部'
			}, 
			mode: {
				default: undefined, 
				type: String, 
				title: 'mode'
			}, 
			origin: {
				default: undefined, 
				type: String, 
				title: '原型'
			}, 
			transition: {
				default: 'fab-transition', 
				type: String, 
				title: '转换'
			}, 
			overlap: {
				default: false, 
				type: Boolean, 
				title: '重叠'
			}
		}, 
		events: {}, 
		slots: {
			default: {
				des: '默认插槽', 
				title: '默认', 
				components: []
			}, 
			badge: {
				des: '描述', 
				title: '角标', 
				components: []
			}
		}
	}, 
	examples: [
		{
		img: 'v_badge',
		name: '基础示例',
			props: {
				innerText:''
			}, 
			slots: {
				default: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							large: false, 
							small: false, 
							xLarge: false, 
							xSmall: false, 
							dark: false, 
							light: false, 
							dense: false, 
							disabled: false, 
							tag: 'i',
							style_marginLeft: '0px',
							style_marginRight: '0px',
							style_marginTop: '0px',
							style_marginBottom: '0px'
						}, 
						slots: {
							default: [
								{text: 'mdi-email'}
							]
						}
					}
				], 
				badge: [
					{
						text: '0',
						props:{
							color:"#ffffff",
              newLineHeight:20 
						}	
					}
				]
			}
		}, 
		{
		img: 'v_badge',
		name: '文本示例', 
			props: {left: false, bottom: false, transition: 'fab-transition', overlap: true,innerText:''}, 
			slots: {
				default: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							color: '#808080', 
							large: true, 
							small: false, 
							xLarge: false, 
							xSmall: false, 
							dark: false, 
							light: false, 
							dense: false, 
							disabled: false, 
							tag: 'i',
							style_marginLeft: '0px',
							style_marginRight: '0px',
							style_marginTop: '0px',
							style_marginBottom: '0px'
						}, 
						slots: {
							default: [
								{text: 'mail'}
							]
						}
					}
				], 
				badge: [
					{
						text: '!',
						props:{
							color:"#ffffff",
              newLineHeight:20 
						}	
					}
				]
			}
		}, 
		{
		img: 'v_badge',
		name: '图标徽章', 
			props: {color: '#F44336',bottom: true, transition: 'fab-transition', overlap: false,innerText:''}, 
			slots: {
				default: [
					{text: 'Badge w/ Bottom Prop'}
				], 
				badge: [
					{
						id:"v-icon",
						props:{
							dark:true,
							innerText:"mdi-close",
							style_marginLeft: '0px',
							style_marginRight: '0px',
							style_marginTop: '0px',
							style_marginBottom: '0px'
						}
					}
				]
			}
		}, 
		{
		img: 'v_badges_left',
		name: '左侧徽章', 
			props: {left: true, transition: 'fab-transition', overlap: false,innerText:''}, 
			slots: {
				default: [
					{text: 'Examples'}
				], 
				badge: [
					{
						text: '2',
						props:{
							color:"#ffffff",
              newLineHeight:20 
						}	
					}
				]
			}
		}
	]
}