// import {Color} from '../../../type';
export default {
	what: {
		id: 'v-data-iterator', 
		name: '数据迭代', 
		link: 'https://vuetifyjs.com/zh-Hans/components/data-iterator', 
		grouptype: '基础组件', 
		img: 'data_table',
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
			items: {
				default: undefined, 
				type: Array, 
				title: '子项目'
			}, 
			options: {
				default: undefined, 
				type: Object, 
				title: '选项'
			}, 
			sortBy: {
				default: undefined, 
				type: [
					String, 
					Array
				], 
				title: '排序'
			}, 
			sortDesc: {
				default: undefined, 
				type: [
					Boolean, 
					Array
				], 
				title: '排序描述'
			}, 
			customSort: {
				default: undefined, 
				type: Function, 
				title: '定制排序'
			}, 
			mustSort: {
				default: false, 
				type: Boolean, 
				title: '必须排序'
			}, 
			multiSort: {
				default: false, 
				type: Boolean, 
				title: '多排序'
			}, 
			page: {
				default: 1, 
				type: Number, 
				title: '页码'
			}, 
			itemsPerPage: {
				default: 10, 
				type: Number, 
				title: '项目每一页'
			}, 
			groupBy: {
				default: undefined, 
				type: [
					String, 
					Array
				], 
				title: '排序方式'
			}, 
			groupDesc: {
				default: undefined, 
				type: [
					Boolean, 
					Array
				], 
				title: '排序描述'
			}, 
			locale: {
				default: 'en-US', 
				type: String, 
				title: '本地'
			}, 
			disableSort: {
				default: false, 
				type: Boolean, 
				title: '禁用排序'
			}, 
			disablePagination: {
				default: false, 
				type: Boolean, 
				title: '禁用分页'
			}, 
			disableFiltering: {
				default: false, 
				type: Boolean, 
				title: '禁用过滤'
			}, 
			search: {
				default: undefined, 
				type: String, 
				title: '搜索'
			}, 
			customFilter: {
				default: undefined, 
				type: Function, 
				title: '定制过滤器'
			}, 
			serverItemsLength: {
				default: -1, 
				type: Number, 
				title: '服务器项目长度'
			}, 
			itemKey: {
				default: 'id', 
				type: String, 
				title: '项目key'
			}, 
			value: {
				default: undefined, 
				type: Array, 
				title: '值'
			}, 
			singleSelect: {
				default: false, 
				type: Boolean, 
				title: '单选'
			}, 
			expanded: {
				default: undefined, 
				type: Array, 
				title: '扩大'
			}, 
			singleExpand: {
				default: false, 
				type: Boolean, 
				title: '单个扩大'
			}, 
			loading: {
				default: undefined, 
				type: [
					Boolean, 
					String
				], 
				title: '加载'
			}, 
			noResultsText: {
				default: '$vuetify.dataIterator.noResultsText', 
				type: String, 
				title: '无结果文本'
			}, 
			noDataText: {
				default: '$vuetify.noDataText', 
				type: String, 
				title: '无数据文本'
			}, 
			loadingText: {
				default: '$vuetify.dataIterator.loadingText', 
				type: String, 
				title: '加载文本'
			}, 
			hideDefaultFooter: {
				default: false, 
				type: Boolean, 
				title: '隐藏默认页脚'
			}, 
			footerProps: {
				default: undefined, 
				type: Object, 
				title: '页脚属性'
			}
		}, 
		events: {
			'current-items': {
				des: '当前项目', 
				args: ['event']
			}, 
			input: {
				des: '被绑定模型的更新', 
				args: ['event']
			},
			'item-selected': {
				des: 'item-selected', 
				args: ['event', 'value']
			}, 
			'item-expanded': {
				des: 'item-expanded', 
				args: ['event', 'value']
			},
			'page-count': {
				des: '页码', 
				args: ['value']
			}, 
			pagination: {
				des: '分页', 
				args: ['value']
			},
			'update:expanded': {
				des: '扩展更新', 
				args: ['event']
			}, 
			'update:group-by': {
				des: '更新规则', 
				args: ['value']
			}
		}, 
		slots: {
			default: {
				des: '默认插槽', 
				title: '默认', 
				components: []
			},
			footer: {
				des: '尾部', 
				title: '尾部', 
				components: []
			},
			header: {
				des: '头部', 
				title: '头部', 
				components: []
			},
			item: {
				des: '项目', 
				title: '项目', 
				components: []
			},
			loading: {
				des: '加载中', 
				title: '加载中', 
				components: []
			},
			"no-data": {
				des: '没有数据', 
				title: '没有数据', 
				components: []
			},
			"no-results": {
				des: '没有结果', 
				title: '没有结果', 
				components: []
			}
		}
	}, 
	examples: [
		{
		name: '基础用法', 
			props: {
				items: [
					{name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4, sodium: 87, calcium: '14%', iron: '1%'}, 
					{name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3, sodium: 129, calcium: '8%', iron: '1%'}, 
					{name: 'Eclair', calories: 262, fat: 16, carbs: 23, protein: 6, sodium: 337, calcium: '6%', iron: '7%'}, 
					{name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, sodium: 413, calcium: '3%', iron: '8%'}, 
					{name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9, sodium: 327, calcium: '7%', iron: '16%'}, 
					{name: 'Jelly bean', calories: 375, fat: 0, carbs: 94, protein: 0, sodium: 50, calcium: '0%', iron: '0%'}, 
					{name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, sodium: 38, calcium: '0%', iron: '2%'}, 
					{name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, sodium: 562, calcium: '0%', iron: '45%'}, 
					{name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9, sodium: 326, calcium: '2%', iron: '22%'}, 
					{name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7, sodium: 54, calcium: '12%', iron: '6%'}
				], 
				options: {}, 
				sortBy: [], 
				sortDesc: [], 
				itemsPerPage: 4, 
				groupBy: [], 
				groupDesc: [], 
			}, 
			slots: {
				default: [
					{
						id: 'v-card', 
						name: 'v-card', 
						props: {
							loaderHeight: 4, 
							tag: 'div', 
						}, 
						slots: {
							default: [
								{
									id: 'v-divider', 
									name: 'v-divider', 
									props: {
									}, 
								}, 
								{
									id: 'v-list', 
									name: 'v-list', 
									props: {
										dark: null, 
										light: null, 
										tag: 'div', 
										tile: true, 
										dense: true, 
										disabled: false, 
									}, 
									slots: {
										default: [
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													disabled: false, 
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Calories:'}, 
														{text: '159'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Fat:'}, 
														{text: '6'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Carbs:'}, 
														{text: '24'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Protein:'}, 
														{text: '4'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Sodium:'}, 
														{text: '87'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Calcium:'}, 
														{text: '14%'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Iron:'}, 
														{text: '1%'}
													]
												}
											}
										]
									}
								}
							]
						}
					}, 
					{
						id: 'v-card', 
						name: 'v-card', 
						props: {
							loading: false, 
							loaderHeight: 4, 
							append: false, 
							disabled: false, 
							link: false, 
							nuxt: false, 
							replace: false, 
							ripple: null, 
							tag: 'div', 
							dark: null, 
							light: null, 
							tile: false, 
							flat: false, 
							hover: false, 
							outlined: false, 
							raised: false
						}, 
						slots: {
							default: [
								{
									id: 'v-divider', 
									name: 'v-divider', 
									props: {
										dark: null, 
										light: null, 
										inset: false, 
										vertical: false
									}, 
								}, 
								{
									id: 'v-list', 
									name: 'v-list', 
									props: {
										dark: null, 
										light: null, 
										tag: 'div', 
										tile: true, 
										dense: true, 
										disabled: false, 
										expand: false, 
										flat: false, 
										nav: false, 
										rounded: false, 
										shaped: false, 
										subheader: false, 
										threeLine: false, 
										twoLine: false
									}, 
									slots: {
										default: [
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Calories:'}, 
														{text: '237'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Fat:'}, 
														{text: '9'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Carbs:'}, 
														{text: '37'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Protein:'}, 
														{text: '4.3'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Sodium:'}, 
														{text: '129'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Calcium:'}, 
														{text: '8%'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Iron:'}, 
														{text: '1%'}
													]
												}
											}
										]
									}
								}
							]
						}
					}, 
					{
						id: 'v-card', 
						name: 'v-card', 
						props: {
							loading: false, 
							loaderHeight: 4, 
							append: false, 
							disabled: false, 
							link: false, 
							nuxt: false, 
							replace: false, 
							ripple: null, 
							tag: 'div', 
							dark: null, 
							light: null, 
							tile: false, 
							flat: false, 
							hover: false, 
							outlined: false, 
							raised: false
						}, 
						slots: {
							default: [
								{}, 
								{
									id: 'v-divider', 
									name: 'v-divider', 
									props: {
										dark: null, 
										light: null, 
										inset: false, 
										vertical: false
									}, 
								}, 
								{
									id: 'v-list', 
									name: 'v-list', 
									props: {
										dark: null, 
										light: null, 
										tag: 'div', 
										tile: true, 
										dense: true, 
										disabled: false, 
										expand: false, 
										flat: false, 
										nav: false, 
										rounded: false, 
										shaped: false, 
										subheader: false, 
										threeLine: false, 
										twoLine: false
									}, 
									slots: {
										default: [
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Calories:'}, 
														{text: '262'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Fat:'}, 
														{text: '16'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Carbs:'}, 
														{text: '23'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Protein:'}, 
														{text: '6'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Sodium:'}, 
														{text: '337'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													append: false, 
													disabled: false, 
													link: false, 
													nuxt: false, 
													replace: false, 
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
													dense: false, 
													inactive: false, 
													threeLine: false, 
													twoLine: false
												}, 
												slots: {
													default: [
														{text: 'Calcium:'}, 
														{text: '6%'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Iron:'}, 
														{text: '7%'}
													]
												}
											}
										]
									}
								}
							]
						}
					}, 
					{
						id: 'v-card', 
						name: 'v-card', 
						props: {
							loaderHeight: 4, 
							tag: 'div', 
						}, 
						slots: {
							default: [
								{}, 
								{
									id: 'v-divider', 
									name: 'v-divider', 
									props: {
									}, 
								}, 
								{
									id: 'v-list', 
									name: 'v-list', 
									props: {
										tag: 'div', 
										tile: true, 
										dense: true, 
									}, 
									slots: {
										default: [
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Calories:'}, 
														{text: '305'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Fat:'}, 
														{text: '3.7'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Carbs:'}, 
														{text: '67'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Protein:'}, 
														{text: '4.3'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													activeClass: '', 
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Sodium:'}, 
														{text: '413'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													tag: 'div', 
												}, 
												slots: {
													default: [
														{text: 'Calcium:'}, 
														{text: '3%'}
													]
												}
											}, 
											{
												id: 'v-list-item', 
												name: 'v-list-item', 
												props: {
													ripple: null, 
													tag: 'div', 
													dark: null, 
													light: null, 
												}, 
												slots: {
													default: [
														{text: 'Iron:'}, 
														{text: '8%'}
													]
												}
											}
										]
									}
								}
							]
						}
					}, 
					{
						id: 'v-data-footer', 
						name: 'v-data-footer', 
						props: {
							options: {
								page: 1, 
								itemsPerPage: 4, 
								sortBy: [], 
								sortDesc: [], 
								groupBy: [], 
								groupDesc: [], 
							}, 
							pagination: {page: 1, itemsPerPage: 4, pageStart: 0, pageStop: 4, pageCount: 3, itemsLength: 10}, 
							itemsPerPageOptions: [4, 8, 12], 
							prevIcon: '$vuetify.icons.prev', 
							nextIcon: '$vuetify.icons.next', 
							firstIcon: '$vuetify.icons.first', 
							lastIcon: '$vuetify.icons.last', 
							itemsPerPageText: '$vuetify.dataFooter.itemsPerPageText', 
							itemsPerPageAllText: '$vuetify.dataFooter.itemsPerPageAll', 
						}, 
						slots: {
							default: [
								{
									id: 'v-select', 
									name: 'v-select', 
									props: {
										errorCount: 1, 
										errorMessages: [], 
										messages: [], 
										rules: [], 
										successMessages: [], 
										value: 4, 
										appendIcon: '$vuetify.icons.dropdown', 
										backgroundColor: '', 
										hideDetails: true, 
										loaderHeight: 2, 
										clearIcon: '$vuetify.icons.clear', 
										type: 'text', 
										valueComparator: {}, 
										noDataText: '$vuetify.noDataText', 
										items: [
											{text: '4', value: 4}, 
											{text: '8', value: 8}, 
											{text: '12', value: 12}
										], 
										itemColor: 'primary', 
										itemDisabled: 'disabled', 
										itemText: 'text', 
										itemValue: 'value', 
										menuProps: {closeOnClick: false, closeOnContentClick: false, disableKeys: true, openOnClick: false, maxHeight: 304}, 
									}, 
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
														{text: '$vuetify.icons.dropdown'}
													]
												}
											}, 
											{
												id: 'v-menu', 
												name: 'v-menu', 
												props: {
													openDelay: 0, 
													closeDelay: 0, 
													activator: {_prevClass: 'v-input__slot'}, 
													maxWidth: 'auto', 
													nudgeBottom: 0, 
													nudgeLeft: 0, 
													nudgeRight: 0, 
													nudgeTop: 0, 
													nudgeWidth: 0, 
													disableKeys: true, 
													maxHeight: 304, 
													offsetX: false, 
													offsetY: false, 
													origin: 'top left', 
													transition: 'v-menu-transition'
												}, 
											}
										]
									}
								}, 
								{
									id: 'v-btn', 
									name: 'v-btn', 
									props: {
										tag: 'button', 
										icon: true, 
										text: true, 
										type: 'button'
									}, 
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
														{text: '$vuetify.icons.prev'}
													]
												}
											}
										]
									}
								}, 
								{
									id: 'v-btn', 
									name: 'v-btn', 
									props: {
										tag: 'button', 
										icon: true, 
										text: true, 
										type: 'button'
									}, 
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
														{text: '$vuetify.icons.next'}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
}