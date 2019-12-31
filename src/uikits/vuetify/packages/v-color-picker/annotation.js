import {
  Color
} from '../../../type';
export default {
	what: {
		id: 'v-color-picker', 
		name: '颜色选择', 
		grouptype: '选择器', 
		img: 'select_color',
		link:"https://vuetifyjs.com/zh-Hans/components/color-pickers",
		icon:'',
		props: {
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
      		color: {
				default: false, 
				type: Color, 
        		title: '颜色'
			},
			canvasHeight: {
				default: 150, 
				type: [
					String, 
					Number
				], 
				title: '像素高度'
			}, 
			disabled: {
				default: false, 
				type: Boolean, 
				title: '禁用'
			}, 
			dotSize: {
				default: 10, 
				type: [
					Number, 
					String
				], 
				title: '选取点大小'
			}, 
			flat: {
				default: false, 
				type: Boolean, 
				title: '消除相对深度'
			}, 
			hideCanvas: {
				default: false, 
				type: Boolean, 
				title: '隐藏像素'
			}, 
			hideInputs: {
				default: false, 
				type: Boolean, 
				title: '隐藏输入'
			}, 
			hideModeSwitch: {
				default: false, 
				type: Boolean, 
				title: '隐藏模式切换'
			}, 
			mode: {
				default: 'rgba', 
				type: String, 
				title: '模式'	,
				enumValue: [{
					value: 'rgba',
					des: 'rgba'
				  },
				  {
					value: 'hsla',
					des: 'hsla'
				  },
				  {
					value: 'hexa',
					des: 'hexa'
				  }
				]
			}, 
			showSwatches: {
				default: false, 
				type: Boolean, 
				title: '展示色板'
			}, 
			swatches: {
				default: undefined, 
				type: Array, 
				title: '可选颜色样本（RGB十六机制字符串列表）'
			}, 
			swatchesMaxHeight: {
				default: 150, 
				type: [
					Number, 
					String
				], 
				title: '颜色样本最大高度'
			}, 
			value: {
				default: '', 
				type: [
					Object, 
					String
				], 
				title: '当前颜色',
				model: true
			}, 
			width: {
				default: 300, 
				type: [
					Number, 
					String
				], 
				title: '宽度'
			}
		}, 
		events: {
			"update:color":{
				des: "颜色更新",
				args: ["obj"]
			},
			"update:mode":{
				des: "颜色模式更新",
				args: ["value"]
			},
			input: {
				des: "被绑定模型的更新",
				args: ["value"]
			},
		}
	}, 
	examples: [
		{
			name: '基本用法', 
			img:'v_color1',
			props: {}, 
		}, 
		{
			name: '展示默认提供颜色', 
			img:'v_color2',
			props: {showSwatches :true}, 
		}
	]
}