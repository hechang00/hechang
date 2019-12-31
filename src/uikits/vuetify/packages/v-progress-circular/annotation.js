import {
  Color
} from '../../../type';
export default {
	what: {
		id: 'v-progress-circular', 
		name: '进度条', 
		grouptype: '进度条',
		img: 'base_pro', 
		link:"https://vuetifyjs.com/zh-Hans/components/progress-circular",
		icon:'',
		props: {
			color: {
				default: 'blue', 
				type: Color, 
				title: '颜色'
			}, 
			indeterminate: {
				default: false, 
				type: Boolean, 
				title: '不间断动画效果'
			}, 
			rotate: {
				default: 0, 
				type: [
					Number, 
					String
				], 
				title: '以度为单位旋转圆的起点'
			}, 
			size: {
				default: 32, 
				type: [
					Number, 
					String
				], 
				title: '圆的直径'
			}, 
			width: {
				default: 3, 
				type: [
					Number, 
					String
				], 
				title: '线条粗度'
			}, 
			value: {
				default: 0, 
				type: [
					Number, 
					String
				], 
				title: '当前进度的百分比值'
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
      		name: '基本用法', 
      		props: {value: 20}, 
    	},
		{
			name: '动画过度', 
			props: {indeterminate: true}, 
		}, 
		{
			name: '尺寸/宽度设置', 
			props: {size: 50,width: 3}, 
		}, 
		{
			name: '自定义颜色', 
			props: {color: 'red', indeterminate: true, width: 3}, 
		}
	]
}