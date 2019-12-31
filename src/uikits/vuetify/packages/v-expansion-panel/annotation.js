import {Color} from '../../../type';
export default {
	what: {
		id: 'v-expansion-panel', 
		link: 'https://vuetifyjs.com/en/components/expansion-panels', 
		name: '折叠面板项', 
		// grouptype: '折叠面板', 
		img: 'baseCollapse',
		icon:'',
		props: {
            innerText: {
				default: "",
				title: '文本内容',
                type: String
            },
			activeClass: {
				default: undefined, 
				type: String, 
				title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
			}, 
			disabled: {
				default: false, 
				type: Boolean, 
				title: '禁用'
			}, 
			readonly: {
				default: false, 
				type: Boolean, 
				title: '只读'
			}
		}, 
		events: {
			change: {
				des: 'change', 
				args: []
			}, 
			click: {
				des: 'click', 
				args: ['p1']
			}
        },
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