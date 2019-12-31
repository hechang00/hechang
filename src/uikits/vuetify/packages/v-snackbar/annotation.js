import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-snackbar', 
		name: '消息条', 
		grouptype: '基础组件', 
		img: 'base_slide',
		link:"https://vuetifyjs.com/zh-Hans/components/snackbars",
		icon:'',
		props: {
			innerText: {
				default: "i'm snapbar",
				title: '文本内容',
				type: String
			},
			color: {
				default: undefined, 
				type: Color, 
				title: '颜色'
			}, 
			value: {
				default: true, 
				type: null, 
				title: '值',
				model: true
			}, 
			absolute: {
				default: false, 
				type: Boolean, 
				title: '绝对的'
			}, 
			top: {
				default: false, 
				type: Boolean, 
				title: '顶部'
			}, 
			bottom: {
				default: false, 
				type: Boolean, 
				title: '底部'
			}, 
			left: {
				default: false, 
				type: Boolean, 
				title: '左边'
			}, 
			right: {
				default: false, 
				type: Boolean, 
				title: '右边'
			}, 
			multiLine: {
				default: false, 
				type: Boolean, 
				title: '多行'
			}, 
			timeout: {
				default: 6000, 
				type: Number, 
				title: '自动隐藏的时间， 0：永久开启。'
			}, 
			vertical: {
				default: false, 
				type: Boolean, 
				title: '垂直'
			}
		}, 
		slots: {
            default: {
				des: '内容插槽',
				title: '内容插槽', 
				components: []
			}
        }
	}, 
	examples: [
		{	
			img: 'v_snackbar', 
			name: '基础用法', 
			props: {}, 
		}
	]
};