import {
  Color
} from '../../../type';
export default {
	what: {
		id: 'v-pagination', 
		name: '分页', 
		grouptype: '基础组件', 
		img: 'fenye',
		link:"https://vuetifyjs.com/zh-Hans/components/paginations",
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
			circle: {
				default: false, 
				type: Boolean, 
				title: '圆形'
			}, 
			disabled: {
				default: false, 
				type: Boolean, 
				title: '不可点击'
			}, 
			length: {
				default: 0, 
				type: Number, 
				title: '长度'
			}, 
			nextIcon: {
				default: '$vuetify.icons.next', 
				type: String, 
				title: '下一页图标'
			}, 
			prevIcon: {
				default: '$vuetify.icons.prev', 
				type: String, 
				title: '上一页图标'
			}, 
			totalVisible: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '全部可见'
			}, 
			value: {
				default: 0, 
				type: Number, 
        		title: '当前页数',
        		model: true
			}
		}, 
		events: {
      input: {
        des: "被绑定模型的更新",
        args: ["value"]
      },
      next: {
        des: "下一页更新",
        args: ["value"]
      },
      previous: {
        des: "上一页更新",
        args: ["value"]
      }
    }, 
		slots: {
		}
	}, 
	examples: [
		{
      name: '基本用法', 
			props: {disabled: false, length: 6, value: 1}, 
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
					}, 
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
		}, 
		{
			name: '页面按钮最大数', 
			props: {length: 10,  totalVisible: 10, value: 1}, 
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
								{text: 'navigate_before'}
							]
						}
					}, 
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'navigate_next'}
							]
						}
					}
				]
			}
		}, 
		{
			name: '圆形按钮', 
			props: {circle: true,length: 4, value: 1}, 
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
					}, 
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
		}, 
		{
			name: '禁用按钮', 
			props: {disabled: true, value: 0, length:3}, 
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
					}, 
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