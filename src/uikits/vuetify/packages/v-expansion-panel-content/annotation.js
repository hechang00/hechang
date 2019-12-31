import {Color} from '../../../type';
export default {
	what: {
		id: 'v-expansion-panel-content', 
		name: '面板内容', 
		link: 'https://vuetifyjs.com/en/components/expansion-panels', 
		// grouptype: '折叠面板', 
		img: 'baseCollapse',
		icon:'',
		props: {
            innerText: {
				default: "",
				title: '文本内容',
                type: String
            },
			eager: {
				default: false, 
				type: Boolean, 
				title: '安装时渲染',
        		des:"将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。"
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
			img: 'v_ex_pan',
			name: '基本用法', 
			props: {}, 
			slots: {}
		}
	]
}