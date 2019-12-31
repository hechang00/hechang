import {
  Color
} from '../../../type';
export default {
	what: {
		id: 'v-progress-linear', 
		name: '线型进度条', 
		grouptype: '进度条', 
		img: 'base_pro',
		link:"https://vuetifyjs.com/zh-Hans/components/progress-linear",
		icon:'',
		props: {
			color: {
				default: 'primary', 
				type: Color, 
				title: '颜色'
			}, 
			absolute: {
				default: false, 
				type: Boolean, 
				title: '绝对定位'
			}, 
			fixed: {
				default: false, 
				type: Boolean, 
				title: '固定定位'
			}, 
			top: {
				default: false, 
				type: Boolean, 
				title: '顶部'
			}, 
			bottom: {
				default: false, 
				type: Boolean, 
				title: '底部'
			}, 
			value: {
				default: 0, 
				type: [
					Number, 
					String
				], 
				title: '值',
				model:true
			}, 
			active: {
				default: true, 
				type: Boolean, 
				title: '激活'
			}, 
			backgroundColor: {
				default: undefined, 
				type: Color, 
				title: '背景颜色'
			}, 
			backgroundOpacity: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '背景颜色透明度'
			}, 
			bufferValue: {
				default: 100, 
				type: [
					Number, 
					String
				], 
				title: 'buffer值'
			}, 
			height: {
				default: 4, 
				type: [
					Number, 
					String
				], 
				title: '高度'
			}, 
			indeterminate: {
				default: false, 
				type: Boolean, 
				title: '变化'
			}, 
			query: {
				default: false, 
				type: Boolean, 
				title: '查询'
			}, 
			rounded: {
				default: false, 
				type: Boolean, 
				title: '圆角'
			}, 
			stream: {
				default: false, 
				type: Boolean, 
				title: '气流'
			}, 
			striped: {
				default: false, 
				type: Boolean, 
				title: '带条纹的'
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
		img:"v_progress_linear1",
		props: {value: 20}, 
		},
		{
		img:"v_progress_linear1",
		name: '加载查询效果', 
			props: {
				query: true,
				indeterminate: true
			}, 
		}, 
		{
		img:"v_progress_linear1",
		name: '带条纹效果', 
			props: {
				striped: true,
			}, 
		}, 
		{
		img:"v_progress_linear1",
		name: '流动效果', 
			props: {
				stream: true,
			}, 
		}
	]
}