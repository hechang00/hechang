import { Color } from '../../../type';
export default {
	what: {
		id: 'v-combobox',
		name: '选择表单',
		link: 'https://vuetifyjs.com/zh-Hans/components/combobox',
		grouptype: '表单和控制组件',
		img: 'select_drop',
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
				title: 'blur事件延迟验证'
			},
			value: {
				default: '',
				type: null,
				title: '值',
				model: true
			},
			appendIcon: {
				default: '$vuetify.icons.dropdown',
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
				title: '加载'
			},
			persistentHint: {
				default: false,
				type: Boolean,
				title: 'persistentHint'
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
				title: '清除icon'
			},
			counter: {
				default: undefined,
				type: [
					Boolean,
					Number,
					String
				],
				title: '计数'
			},
			filled: {
				default: false,
				type: Boolean,
				title: '填充'
			},
			flat: {
				default: false,
				type: Boolean,
				title: '平面'
			},
			fullWidth: {
				default: false,
				type: Boolean,
				title: '全屏宽度'
			},
			outlined: {
				default: false,
				type: Boolean,
				title: '外形'
			},
			placeholder: {
				default: undefined,
				type: String,
				title: 'placeholder'
			},
			prefix: {
				default: undefined,
				type: String,
				title: 'prefix'
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
			},
			singleLine: {
				default: false,
				type: Boolean,
				title: '单行'
			},
			solo: {
				default: false,
				type: Boolean,
				title: '单独'
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
			valueComparator: {
				default: undefined,
				type: Function,
				title: '值比较'
			},
			noDataText: {
				default: '$vuetify.noDataText',
				type: String,
				title: '无数据文本'
			},
			attach: {
				default: false,
				type: null,
				title: '固定'
			},
			cacheItems: {
				default: false,
				type: Boolean,
				title: '缓存项目'
			},
			chips: {
				default: false,
				type: Boolean,
				title: '纸片'
			},
			deletableChips: {
				default: false,
				type: Boolean,
				title: '可删除纸片'
			},
			dense: {
				default: false,
				type: Boolean,
				title: '密集'
			},
			eager: {
				default: false,
				type: Boolean,
				title: '安装时渲染',
        		des:"将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。"
			},
			hideSelected: {
				default: false,
				type: Boolean,
				title: '隐藏选择'
			},
			items: {
				default: undefined,
				type: Array,
				title: '项目'
			},
			itemColor: {
				default: 'primary',
				type: Color,
				title: '项目颜色'
			},
			itemDisabled: {
				default: 'disabled',
				type: [
					String,
					Array,
					Function
				],
				title: '项目禁用'
			},
			itemText: {
				default: 'text',
				type: [
					String,
					Array,
					Function
				],
				title: '项目文本'
			},
			itemValue: {
				default: 'value',
				type: [
					String,
					Array,
					Function
				],
				title: '项目值'
			},
			menuProps: {
				default: undefined,
				type: [
					String,
					Array,
					Object
				],
				title: '菜单属性'
			},
			multiple: {
				default: false,
				type: Boolean,
				title: '多项'
			},
			openOnClear: {
				default: false,
				type: Boolean,
				title: '打开清除'
			},
			returnObject: {
				default: true,
				type: Boolean,
				title: '返回对象'
			},
			smallChips: {
				default: false,
				type: Boolean,
				title: '小纸片'
			},
			allowOverflow: {
				default: true,
				type: Boolean,
				title: '允许溢出'
			},
			autoSelectFirst: {
				default: false,
				type: Boolean,
				title: '自动选择优先'
			},
			filter: {
				default: undefined,
				type: Function,
				title: '自定义项目过滤功能函数'
			},
			hideNoData: {
				default: false,
				type: Boolean,
				title: '隐藏数据'
			},
			noFilter: {
				default: false,
				type: Boolean,
				title: '无过滤器'
			},
			searchInput: {
				default: undefined,
				type: String,
				title: '搜索输入'
			},
			delimiters: {
				default: undefined,
				type: Array,
				title: '定界符'
			}
		},
		slots: {
			default: {
				des: '默认插槽',
				title: '默认',
				components: []
			},
			append: {
				des: '插入',
				title: '插入',
				components: []
			},
			"append-item": {
				des: '插入项目',
				title: '插入',
				components: []
			},
			"append-outer": {
				des: '外面插入',
				title: '插入',
				components: []
			},
			item: {
				des: '子项',
				title: '子项',
				components: []
			},
			label: {
				des: '替换默认标签',
				title: '插入',
				components: []
			},
			"no-data": {
				des: '插入',
				title: '插入',
				components: []
			},
			prepend: {
				des: '',
				title: '',
				components: []
			},
			"prepend-inner": {
				des: '',
				title: '',
				components: []
			},
			"prepend-item": {
				des: '',
				title: '',
				components: []
			},
			progress: {
				des: '自定义进度线的插槽',
				title: '',
				components: []
			},
			selection: {
				des: '选项',
				title: '选项',
				components: []
			},
		},
		events: {
			input: {
				des: '被绑定模型的更新',
				args: ['event']
			},
			eventName: {
				des: '事件名称',
				args: ['event']
			},
			blur: {
				des: '失去焦点',
				args: ['event']
			},
			focus: {
				des: '获得焦点',
				args: ['event']
			},
			change: {
				des: '事件更新',
				args: ['event']
			},
			"click:append": {
				des: '点击事件',
				args: ['event']
			},
			"click:append-outer": {
				des: '点击事件',
				args: ['event']
			},
			"click:clear": {
				des: '点击事件',
				args: ['event']
			},
			"click:prepend-inner": {
				des: '点击事件',
				args: ['event']
			},
			"update:error": {
				des: '更新错误事件',
				args: ['event']
			},
			"update:search-input": {
				des: '更新错误事件',
				args: ['event']
			}
		}
	},
	examples: [
		{
			name: '基本用法',
			img: 'v_select_form2',
			props: {
				items: [
					'Programming',
					'Design',
					'Vue',
					'Vuetify',
				],
				label: "Select a favorite activity or create a new one"
			}
		},
		{
			img: 'v_select_form2',
			name: '纸片用法',
			props: {
				items: [
					'Programming',
					'Design',
					'Vue',
					'Vuetify',
				],
				chips: true,
				label: "I use chips"
			}
		},
		{
			img: 'v_select_form3',
			name: '插槽用法',
			props: {
				items: [
					'Programming',
					'Design',
					'Vue',
					'Vuetify',
				],
				chips: true,
				label: "I use a scoped slot"
			},
			slots: {
				selection: {
					id: 'v-chip',
					name: 'v-chip',
					props: {
						key: [
							'Programming',
							'Design',
							'Vue',
							'Vuetify',
						],
						inputValue: 'Programming'
					},
					slots: {
						default: [
							{
								id: 'v-avatar',
								name: 'v-avatar',
								props: {
									left: true
								},
								slots: {
									default: [
										{text: "mdi-pencil"}
									]
								}
							}
						]
					}
				}
			}
		},
		{
			img: 'v_select_form2',
			name: '只读示例',
			props: { 
				chips: true,
				label: "I'm readonly",
				readonly: true
			 },
		},
		{
			img: 'v_select_form1',
			name: '多选示例',
			props: { 
				multiple: true,
				chips: true,
				label: "I'm multiple",
				items: [
					'Programming',
					'Design',
					'Vue',
					'Vuetify',
				]
			 },
		}
	]
}