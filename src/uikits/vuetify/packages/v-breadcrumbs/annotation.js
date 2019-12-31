// import {Color} from '../../../type';
export default {
	what: {
		id: 'v-breadcrumbs', 
		name: '面包屑', 
		link: 'https://vuetifyjs.com/zh-Hans/components/breadcrumbs', 
		grouptype: '基础组件', 
		img: 'nav_breadcrumb',
		icon:'',
		props: {
			// innerText: {
			// 	default: "",
			// 	title: '文本内容',
			// 	type: String
			// },
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
			divider: {
				default: '/', 
				type: String, 
				title: '分割符'
			}, 
			items: {
				default: undefined, 
				type: Array, 
				title: '分割项'
			}, 
			large: {
				default: false, 
				type: Boolean, 
				title: '大号'
			}
		}, 
    events: {},
    slots: {
      default: {
        des: '默认插槽', 
        title: '默认', 
        components: []
      },
      divider: {
        des: '分割线', 
        title: '分割线', 
        components: []
      },
      item: {
        des: '每个子项目', 
				title: 'item', 
				hasProps: true,
        components: []
      },
    }
	}, 
	examples: [
		{
			name: '基础用法', 
			img: 'v_breadcrumbs', 
			props: {
				items: [
					{
					  text: 'Dashboard',
					  disabled: false,
					  href: 'breadcrumbs_dashboard',
					},
					{
					  text: 'Link 1',
					  disabled: false,
					  href: 'breadcrumbs_link_1',
					},
					{
					  text: 'Link 2',
					  disabled: true,
					  href: 'breadcrumbs_link_2',
					},
				  ],
				divider: ">"
      		}
    	},
    	{
			img: 'v_breadcrumbs', 
			name: '分隔符可配置icon', 
			props: {
				items: [
					{
					  text: 'Dashboard',
					  disabled: false,
					  href: 'breadcrumbs_dashboard',
					},
					{
					  text: 'Link 1',
					  disabled: false,
					  href: 'breadcrumbs_link_1',
					},
					{
					  text: 'Link 2',
					  disabled: true,
					  href: 'breadcrumbs_link_2',
					},
				],
      		}, 
			slots: {
				divider: [
					{
						id: 'v-icon', 
						name: 'v-icon', 
						props: {
							tag: 'i'
						}, 
						slots: {
							default: [
								{text: 'mdi-forward'}
							]
						}
					}
				]
			}
		}
	]
}