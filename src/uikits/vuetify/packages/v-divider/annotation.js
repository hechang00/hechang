// import {Color} from '../../../type';
export default {
	what: {
		id: 'v-divider', 
		name: '分割线', 
		link: 'https://vuetifyjs.com/zh-Hans/components/dividers', 
		grouptype: '基础组件', 
		img: 'line',
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
			inset: {
				default: false, 
				type: Boolean, 
				title: '缩进'
			}, 
			vertical: {
				default: false, 
				type: Boolean, 
				title: '垂直方向'
			}
		}, 
		events: {}
	}, 
	examples: [
		{
			name: '基本用法', 
			props: {
				style_flex:1
			}
    },
    {
			name: '添加缩进(72px)', 
			props: {
				style_flex:1,
        inset:true
      }, 
		},
    {
			name: '设置浅色主题', 
			props: {
				style_flex:1,
        light:true
      }, 
		},
    {
			name: '垂直排布', 
			props: {
				style_flex:1,
        vertical:true
      }, 
		}
	]
}