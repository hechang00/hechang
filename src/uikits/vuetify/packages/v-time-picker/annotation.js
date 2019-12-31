import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-time-picker', 
		name: '时间选择', 
		grouptype: '选择器', 
		img: 'select_time',
		link:"https://vuetifyjs.com/zh-Hans/components/time-pickers",
		icon:'',
		props: {
			color: {
				default: undefined, 
				type: Color, 
				title: '颜色'
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
			fullWidth: {
				default: false, 
				type: Boolean, 
				title: '全屏宽度'
			}, 
			headerColor: {
				default: undefined, 
				type: Color, 
				title: '头部颜色'
			}, 
			landscape: {
				default: false, 
				type: Boolean, 
				title: '景观'
			}, 
			noTitle: {
				default: false, 
				type: Boolean, 
				title: '隐藏标题'
			}, 
			width: {
				default: 290, 
				type: [
					Number, 
					String
				], 
				title: '宽度'
			}, 
			allowedHours: {
				default: undefined, 
				type: [
					Function, 
					Array
				], 
				title: '允许被选中的小时列表'
			}, 
			allowedMinutes: {
				default: undefined, 
				type: [
					Function, 
					Array
				], 
				title: '允许被选中的分钟列表'
			}, 
			allowedSeconds: {
				default: undefined, 
				type: [
					Function, 
					Array
				], 
				title: '允许被选中的秒数列表'
			}, 
			disabled: {
				default: false, 
				type: Boolean, 
				title: '禁用'
			}, 
			format: {
				default: 'ampm', 
				type: String, 
				title: '格式',
				enumValue: [{
					value: 'ampm',
					des: 'ampm'
				  },
				  {
					value: '24hr',
					des: '24hr'
				  }
				]
			}, 
			min: {
				default: undefined, 
				type: String, 
				title: '最小允许时间'
			}, 
			max: {
				default: undefined, 
				type: String, 
				title: '最大允许时间'
			}, 
			readonly: {
				default: false, 
				type: Boolean, 
				title: '只读'
			}, 
			scrollable: {
				default: false, 
				type: Boolean, 
				title: '可滚动'
			}, 
			useSeconds: {
				default: false, 
				type: Boolean, 
				title: '切换选择器的秒数使用'
			}, 
			value: {
				default: '', 
				type: null, 
				title: '时间值',
				model: true
			}, 
			ampmInTitle: {
				default: false, 
				type: Boolean, 
				title: 'am/pm切换放置于title, 或时钟附近'
			}
		}, 
		events: {
			// 'update: + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[kebabCase]': {
			// 	title: 'update: + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[kebabCase]', 
			// 	args: []
			// }, 
			// 'click: + selectingNames[this.selecting]': {
			// 	title: 'click: + selectingNames[this.selecting]', 
			// 	args: ['p1']
			// }, 
            change: {
                des: "当选择值变化时触发",
                args: ["value"]
            },
            input: {
                des: "被绑定模型的更新",
                args: ["value"]
            }
        }
	}, 
	examples: [
		{
			name: '基础示例',
			img:"v_time_pick",
			props: {}, 
		}
	]
}