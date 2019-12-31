import {
  Color
} from '../../../type';
export default {
	what: {
		id: 'v-textarea', 
		name: '文本输入', 
		grouptype: '表单和控制组件', 
		img: 'base_input',
		link:"https://vuetifyjs.com/zh-Hans/components/textarea",
		icon:'',
		props: {
			color: {
				default: '', 
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
			disabled: {
				default: false, 
				type: Boolean, 
				title: '禁用'
			}, 
			error: {
				default: false, 
				type: Boolean, 
				title: '错误'
			}, 
			errorCount: {
				default: 1, 
				type: [
					Number, 
					String
				], 
				title: '错误数量'
			}, 
			errorMessages: {
				default: undefined, 
				type: [
					String, 
					Array
				], 
				title: '错误信息'
			}, 
			messages: {
				default: undefined, 
				type: [
					String, 
					Array
				], 
				title: '信息'
			}, 
			readonly: {
				default: false, 
				type: Boolean, 
				title: '只读'
			}, 
			rules: {
				default: undefined, 
				type: Array, 
				title: '规则'
			}, 
			success: {
				default: false, 
				type: Boolean, 
				title: '成功'
			}, 
			successMessages: {
				default: undefined, 
				type: [
					String, 
					Array
				], 
				title: '成功信息'
			}, 
			validateOnBlur: {
				default: false, 
				type: Boolean, 
				title: '模糊验证'
			}, 
			value: {
				default: '', 
				type: null, 
				title: '值'
      		},
			appendIcon: {
				default: undefined, 
				type: String, 
				title: '附加图标'
			}, 
			backgroundColor: {
				default: '', 
				type: Color, 
				title: '背景颜色'
			}, 
			height: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '高度'
			}, 
			hideDetails: {
				default: false, 
				type: Boolean, 
				title: '隐藏细节'
			}, 
			hint: {
				default: undefined, 
				type: String, 
				title: '提示'
			}, 
			id: {
				default: undefined, 
				type: String, 
				title: 'id'
			}, 
			label: {
				default: undefined, 
				type: String, 
				title: '标签'
			}, 
			loading: {
				default: false, 
				type: [
					Boolean, 
					String
				], 
				title: '加载中'
			}, 
			persistentHint: {
				default: false, 
				type: Boolean, 
				title: '保持提示可见'
			}, 
			prependIcon: {
				default: undefined, 
				type: String, 
				title: '前置图标'
			}, 
			loaderHeight: {
				default: 2, 
				type: [
					Number, 
					String
				], 
				title: '装载高度'
			}, 
			appendOuterIcon: {
				default: undefined, 
				type: String, 
				title: '附加外部图标'
			}, 
			autofocus: {
				default: false, 
				type: Boolean, 
				title: '自动聚焦'
			}, 
			clearable: {
				default: false, 
				type: Boolean, 
				title: '可清除'
			}, 
			clearIcon: {
				default: '$vuetify.icons.clear', 
				type: String, 
				title: '清除图标'
			}, 
			counter: {
				default: undefined, 
				type: [
					Boolean, 
					Number, 
					String
				], 
				title: '创建输入长度的计数器'
			}, 
			filled: {
				default: false, 
				type: Boolean, 
				title: '应用替代填充输入样式'
			}, 
			flat: {
				default: false, 
				type: Boolean, 
				title: '平面'
			}, 
			fullWidth: {
				default: false, 
				type: Boolean, 
				title: '将输入类型指定为全角'
			}, 
			outlined: {
				default: false, 
				type: Boolean, 
				title: '有边框'
			}, 
			placeholder: {
				default: undefined, 
				type: String, 
				title: '占位文本'
			}, 
			prefix: {
				default: undefined, 
				type: String, 
				title: '显示前缀文本'
			}, 
			prependInnerIcon: {
				default: undefined, 
				type: String, 
				title: '组件输入前置图标'
			}, 
			reverse: {
				default: false, 
				type: Boolean, 
				title: '反方向'
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
			singleLine: {
				default: false, 
				type: Boolean, 
				title: '标签没有移到焦点'
			}, 
			solo: {
				default: false, 
				type: Boolean, 
				title: '更改输入的样式'
			}, 
			soloInverted: {
				default: false, 
				type: Boolean, 
				title: '倒置',
				des: '减少元素的不透明度，直到聚焦'
			}, 
			suffix: {
				default: undefined, 
				type: String, 
				title: '后缀'
			}, 
			type: {
				default: 'text', 
				type: String, 
				title: '类型'
			}, 
			autoGrow: {
				default: false, 
				type: Boolean, 
				title: '根据文本量自动增加文本区域'
			}, 
			noResize: {
				default: false, 
				type: Boolean, 
				title: '移除调整大小手柄'
			}, 
			rowHeight: {
				default: 24, 
				type: [
					Number, 
					String
				], 
				title: '每行的高度值，需要使用自动增长道具'
			}, 
			rows: {
				default: 5, 
				type: [
					Number, 
					String
				], 
				title: '默认行数'
			}
		}, 
    events: {
		eventName: {
			des: 'eventName', 
			args: ['p1']
		}, 
		change: {
			des: "change",
			args: ["Event"]
		},
		"click:append":{
			des: "click:append",
			args: ["Event"]
		},
		"click:append-outer":{
			des: "click:append-outer",
			args: ["Event"]
		},
		"click:clear":{
			des: "click:clear",
			args: ["Event"]
		},
		"click:prepend":{
			des: "click:prepend",
			args: ["Event"]
		},
		input: {
			des: "被绑定模型的更新",
			args: ["value"]
		},
		keydown: {
			des: "keydown",
			args: ["Event"]
		},
		"update:error": {
			des: "error event",
			args: ["boolean"]
		},
    }, 
    slots: {
			append: {
				des: '插入项目', 
				title: '插入项目', 
				components: []
      },
      "append-outer": {
		des: '插入项目', 
				title: '插入项目', 
				components: []
      },
      default: {
		des: '默认值', 
				title: '默认值', 
				components: []
      },
      label: {
		des: '替换默认标签', 
				title: '替换默认标签', 
				components: []
      },
      prepend: {
		des: '前置插入项目', 
				title: '前置插入项目', 
				components: []
      },
      "prepend-inner": {
		des: '输入内容前置插入', 
				title: '输入内容前置插入', 
				components: []
      },
      progress: {
		des: '自定义进度线的插槽', 
				title: '自定义进度线的插槽', 
				components: []
      }
		}
	}, 
	examples: [
		{
		img: 'v_textarea1',
		name: '基本用法',
			props: {}, 
    }, 
    {
		img: 'v_textarea1',
		name: '自动高度', 
			props: {autoGrow:true}, 
    }, 
    {
		img: 'v_textarea2',
		name: '可清除按钮', 
			props: {clearable:true}, 
    }, 
    {
		img: 'v_textarea3',
		name: '带外边框', 
			props: {outlined:true}, 
		}
	]
}