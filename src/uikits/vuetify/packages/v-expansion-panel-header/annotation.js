import {Color} from '../../../type';
export default {
	what: {
		id: 'v-expansion-panel-header', 
		name: '面板头部', 
		link: 'https://vuetifyjs.com/en/components/expansion-panels', 
		img: 'baseCollapse',
		// grouptype: '折叠面板', 
		icon:'',
		props: {
            innerText: {
				default: "",
				title: '文本内容',
                type: String
            },
			disableIconRotate: {
				default: false, 
				type: Boolean, 
				title: '禁止icon旋转'
			}, 
			expandIcon: {
				default: '$expand', 
				type: String, 
				title: '扩展icon'
			}, 
			hideActions: {
				default: false, 
				type: Boolean, 
				title: '隐藏Actions'
			}, 
			ripple: {
				default: false, 
				type: [
					Boolean, 
					Object
				], 
				title: 'ripple'
			}
		}, 
		events: {
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
            },
            actions: {
				des: '动作', 
				title: '动作', 
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