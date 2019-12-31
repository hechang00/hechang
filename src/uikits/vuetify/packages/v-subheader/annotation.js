export default {
	what: {
		id: 'v-subheader', 
		name: '副标题', 
		grouptype: '基础组件', 
		img: 'v_subheader',
		link:"https://vuetifyjs.com/zh-Hans/components/subheaders",
		icon:'',
		props: {
			innerText: {
				default: "",
				title: '文本内容',
				type: String
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
			inset: {
				default: false, 
				type: Boolean, 
				title: '缩进'
			}
		}, 
		events: {}, 
		slots: {
			default: {
				des: '默认', 
				title: '默认', 
				components: []
			}
		}
	}, 
	examples: [
		{
		img: 'v_subheaders',
		name: '基础示例', 
			props: {}, 
			slots: {
				default: [
					{
						id: 'v-subheader', 
						name: 'v-subheader', 
						props: {
							dark: null, 
							light: null, 
							inset: false
						}, 
						slots: {
							default: [
								{text: 'Subheader'}
							]
						}
					}
				]
			}
		}, 
		{
		img: 'v_subheaders',
		name: '缩进子标题', 
			props: {dark: false, light: false, inset: true}, 
			slots: {
				default: [
					{text: 'Subheader'}
				]
			}
		}
	]
}