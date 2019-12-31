import { Color } from '../../../type';
export default {
	what: {
		id: 'v-form',
		name: '表单',
		link: 'https://vuetifyjs.com/zh-Hans/components/forms',
		grouptype: '表单和控制组件',
		img: 'form_layout',
		icon:'',
		props: {
			lazyValidation: {
				default: false,
				type: Boolean,
				title: '懒惰验证'
			},
			value: {
				default: false,
				type: Boolean,
				title: '值'
			}
		},
		events: {
			input: {
				des: '被绑定模型的更新',
				args: ["value"]
			},
			submit: {
				des: '提交数据',
				args: ["event"]
			}
		},
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
			img: 'v_form2',
			name: '注册/登录表单',
			props: {},
			slots: {
				default: [
					{
						id: 'v-text-field',
						name: 'v-text-field',
						props: {
							disabled: false,
							error: false,
							errorCount: 1,
							errorMessages: [],
							messages: [],
							readonly: false,
							success: false,
							successMessages: [],
							validateOnBlur: false,
							value: '',
							backgroundColor: '',
							hideDetails: false,
							label: 'Name',
							loading: false,
							persistentHint: false,
							loaderHeight: 2,
							autofocus: false,
							clearable: false,
							clearIcon: '$vuetify.icons.clear',
							counter: 10,
							filled: false,
							flat: false,
							fullWidth: false,
							outlined: false,
							reverse: false,
							rounded: false,
							shaped: false,
							singleLine: false,
							solo: false,
							soloInverted: false,
							type: 'text'
						},
						slots: {
							default: [
								{
									id: 'v-messages',
									name: 'v-messages',
									props: {
										value: []
									},
									slots: {
										default: [
											{
												id: 'transition-group',
												props: { tag: 'div', name: 'message-transition', appear: false, css: false },
											}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-text-field',
						name: 'v-text-field',
						props: {
							disabled: false,
							error: false,
							errorCount: 1,
							errorMessages: [],
							messages: [],
							readonly: false,
							success: false,
							successMessages: [],
							validateOnBlur: false,
							value: '',
							backgroundColor: '',
							hideDetails: false,
							label: 'E-mail',
							loading: false,
							persistentHint: false,
							loaderHeight: 2,
							autofocus: false,
							clearable: false,
							clearIcon: '$vuetify.icons.clear',
							counter: false,
							filled: false,
							flat: false,
							fullWidth: false,
							outlined: false,
							reverse: false,
							rounded: false,
							shaped: false,
							singleLine: false,
							solo: false,
							soloInverted: false,
							type: 'text'
						},
						slots: {
							default: [
								{
									id: 'v-messages',
									name: 'v-messages',
									props: {
										value: []
									},
									slots: {
										default: [
											{
												id: 'transition-group',
												props: { tag: 'div', name: 'message-transition', appear: false, css: false },
											}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-select',
						name: 'v-select',
						props: {
							disabled: false,
							error: false,
							errorCount: 1,
							errorMessages: [],
							messages: [],
							readonly: false,
							success: false,
							successMessages: [],
							validateOnBlur: false,
							appendIcon: '$vuetify.icons.dropdown',
							backgroundColor: '',
							hideDetails: false,
							label: 'Item',
							loading: false,
							persistentHint: false,
							loaderHeight: 2,
							autofocus: false,
							clearable: false,
							clearIcon: '$vuetify.icons.clear',
							counter: false,
							filled: false,
							flat: false,
							fullWidth: false,
							outlined: false,
							reverse: false,
							rounded: false,
							shaped: false,
							singleLine: false,
							solo: false,
							soloInverted: false,
							type: 'text',
							valueComparator: {},
							noDataText: '$vuetify.noDataText',
							attach: false,
							cacheItems: false,
							chips: false,
							deletableChips: false,
							dense: false,
							eager: false,
							hideSelected: false,
							items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
							itemColor: 'primary',
							itemDisabled: 'disabled',
							itemText: 'text',
							itemValue: 'value',
							menuProps: { closeOnClick: false, closeOnContentClick: false, disableKeys: true, openOnClick: false, maxHeight: 304 },
							multiple: false,
							openOnClear: false,
							returnObject: false,
							smallChips: false
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
										dense: false,
										disabled: false,
										left: false,
										right: false,
										tag: 'i'
									},
									slots: {
										default: [
											{ text: '$vuetify.icons.dropdown' }
										]
									}
								},
								{
									id: 'v-menu',
									name: 'v-menu',
									props: {
										openDelay: 0,
										closeDelay: 0,
										eager: false,
										attach: false,
										contentClass: '',
										absolute: false,
										bottom: false,
										fixed: false,
										left: false,
										right: false,
										top: false,
										value: false,
										activator: { _prevClass: 'v-input__slot' },
										disabled: false,
										internalActivator: false,
										openOnHover: false,
										allowOverflow: false,
										maxWidth: 'auto',
										nudgeBottom: 0,
										nudgeLeft: 0,
										nudgeRight: 0,
										nudgeTop: 0,
										nudgeWidth: 0,
										offsetOverflow: false,
										openOnClick: false,
										auto: false,
										closeOnClick: false,
										closeOnContentClick: false,
										disableKeys: true,
										maxHeight: 304,
										offsetX: false,
										offsetY: false,
										origin: 'top left',
										transition: 'v-menu-transition'
									},
									slots: {
										default: []
									}
								},
								{
									id: 'v-messages',
									name: 'v-messages',
									props: {
										value: []
									},
									slots: {
										default: [
											{
												id: 'transition-group',
												props: { tag: 'div', name: 'message-transition', appear: false, css: false },
											}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-checkbox',
						name: 'v-checkbox',
						props: {
							disabled: false,
							error: false,
							errorCount: 1,
							errorMessages: [],
							messages: [],
							readonly: false,
							success: false,
							successMessages: [],
							validateOnBlur: false,
							backgroundColor: '',
							hideDetails: false,
							label: 'Do you agree?',
							loading: false,
							persistentHint: false,
							ripple: true,
							valueComparator: {},
							inputValue: false,
							indeterminate: false,
							indeterminateIcon: '$vuetify.icons.checkboxIndeterminate',
							offIcon: '$vuetify.icons.checkboxOff',
							onIcon: '$vuetify.icons.checkboxOn'
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
										dense: false,
										disabled: false,
										left: false,
										right: false,
										tag: 'i'
									},
									slots: {
										default: [
											{ text: '$vuetify.icons.checkboxOff' }
										]
									}
								},
								{
									id: 'v-messages',
									name: 'v-messages',
									props: {
										value: []
									},
									slots: {
										default: [
											{
												id: 'transition-group',
												props: { tag: 'div', name: 'message-transition', appear: false, css: false },
											}
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
							color: 'success',
							tag: 'button',
							tile: false,
							activeClass: '',
							append: false,
							disabled: true,
							link: false,
							nuxt: false,
							replace: false,
							absolute: false,
							bottom: false,
							fixed: false,
							left: false,
							right: false,
							top: false,
							large: false,
							small: false,
							xLarge: false,
							xSmall: false,
							block: false,
							depressed: false,
							fab: false,
							icon: false,
							loading: false,
							outlined: false,
							rounded: false,
							text: false,
							type: 'button'
						},
						slots: {
							default: [
								{
									text: `
      Validate
    `}
							]
						}
					},
					{
						id: 'v-btn',
						name: 'v-btn',
						props: {
							color: 'error',
							tag: 'button',
							tile: false,
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							absolute: false,
							bottom: false,
							fixed: false,
							left: false,
							right: false,
							top: false,
							large: false,
							small: false,
							xLarge: false,
							xSmall: false,
							block: false,
							depressed: false,
							fab: false,
							icon: false,
							loading: false,
							outlined: false,
							rounded: false,
							text: false,
							type: 'button'
						},
						slots: {
							default: [
								{
									text: `
      Reset Form
    `}
							]
						}
					},
					{
						id: 'v-btn',
						name: 'v-btn',
						props: {
							color: 'warning',
							tag: 'button',
							tile: false,
							activeClass: '',
							append: false,
							disabled: false,
							link: false,
							nuxt: false,
							replace: false,
							absolute: false,
							bottom: false,
							fixed: false,
							left: false,
							right: false,
							top: false,
							large: false,
							small: false,
							xLarge: false,
							xSmall: false,
							block: false,
							depressed: false,
							fab: false,
							icon: false,
							loading: false,
							outlined: false,
							rounded: false,
							text: false,
							type: 'button'
						},
						slots: {
							default: [
								{
									text: `
      Reset Validation
    `}
							]
						}
					}
				]
			}
		}
	]
}