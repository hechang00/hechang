import {Color} from '../../../type';
export default {
	what: {
		id: 'v-timeline-item', 
		name: '时间线单元', 
		link: 'https://vuetifyjs.com/en/components/app-bars', 
		icon:'',
		grouptype: '', 
		props: {
			color: {
				default: 'primary', 
				type: Color, 
				title: '颜色'
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
			fillDot: {
				default: false, 
				type: Boolean, 
				title: '填充点'
			}, 
			hideDot: {
				default: false, 
				type: Boolean, 
				title: '隐藏点'
			}, 
			icon: {
				default: undefined, 
				type: String, 
				title: 'icon'
			}, 
			iconColor: {
				default: undefined, 
				type: Color, 
				title: 'icon颜色'
			}, 
			large: {
				default: false, 
				type: Boolean, 
				title: '大号'
			}, 
			left: {
				default: false, 
				type: Boolean, 
				title: '左边'
			}, 
			right: {
				default: false, 
				type: Boolean, 
				title: '右边'
			}, 
			small: {
				default: false, 
				type: Boolean, 
				title: '小号'
			}
		}, 
		events: {}
	}, 
	examples: [
		{
			name: '基础示例', 
			props: {}, 
			slots: {
                default: [
                    {text: 'timeline item'}
                ]
            }
		}
	]
}