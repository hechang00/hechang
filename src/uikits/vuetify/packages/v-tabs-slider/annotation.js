import {Color} from '../../../type';
export default {
	what: {
		id: 'v-tabs-slider', 
		name: '标签滑条', 
		link: 'https://vuetifyjs.com/en/components/app-bars', 
		img: 'select_checkbox_pop',
		grouptype: '选项卡', 
		icon:'',
		props: {
			color: {
				default: undefined, 
				type: Color, 
				title: 'color'
			}
		}, 
		events: {}
	}, 
	examples: [
		{
			img: 'v_tab1',
			name: '基础示例', 
			props: {}, 
			slots: {}
		}
	]
}