import {
	Color
} from '../../../type';
export default {
	what: {
		id: 'v-timeline',
		name: '时间线',
		// grouptype: '基础组件',
		img: 'timeline',
		link: "https://vuetifyjs.com/zh-Hans/components/timelines",
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
			alignTop: {
				default: false,
				type: Boolean,
				title: '顶部对齐'
			},
			dense: {
				default: false,
				type: Boolean,
				title: '密集'
			},
			reverse: {
				default: false,
				type: Boolean,
				title: '反方向'
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
			img: 'v_timeline',
			name: '基本用法',
			props: {
			},
			slots: {
				default: [
					{
						id: 'v-timeline-item',
						props: {},
						slots: {
							default: [
								{text:'timeline item'}
							]
						}
					},
					{
						id: 'v-timeline-item',
						props: {class: "text-right"},
						slots: {
							default: [
								{text:'timeline item'}
							]
						}
					},
					{
						id: 'v-timeline-item',
						props: {},
						slots: {
							default: [
								{text:'timeline item'}
							]
						}
					}
				]
			}
		},
		{
			img: 'v_timeline',
			name: '卡片应用',
			props: {},
			slots: {
				default: [
					{
						id: 'v-timeline-item',
						props: {
							color: "red lighten-2",
							large: true
						},
						slots: {
							default: [
								{
									id: 'v-card',
									slots: {
										default: [
											{text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-timeline-item',
						props: {
							color: "red lighten-2",
							large: true
						},
						slots: {
							default: [
								{
									id: 'v-card',
									slots: {
										default: [
											{text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'}
										]
									}
								}
							]
						}
					},
					{
						id: 'v-timeline-item',
						props: {
							color: "red lighten-2",
							large: true
						},
						slots: {
							default: [
								{
									id: 'v-card',
									slots: {
										default: [
											{text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'}
										]
									}
								}
							]
						}
					}
				]
			}
		},
	]
}

