import {
	Color
  } from '../../../type';
export default {
	what: {
		id: 'v-treeview', 
		name: '树形控件', 
		grouptype: '基础组件', 
		img:'jmTree',
		link:"https://vuetifyjs.com/zh-Hans/components/treeview",
		icon:'',
		props: {
			dark: {
				default: false, 
				type: Boolean, 
				title: '阴暗'
			}, 
			light: {
				default: false, 
				type: Boolean, 
				title: '明亮主题'
			}, 
			active: {
				default: [], 
				type: Array, 
				title: '允许用户通过单击将节点标记为活动节点'
			}, 
			dense: {
				default: false, 
				type: Boolean, 
				title: '紧凑'
			}, 
			filter: {
				default: null, 
				type: Function, 
				title: '自定义项目过滤功能函数'
			}, 
			hoverable: {
				default: false, 
				type: Boolean, 
				title: '悬浮样式'
			}, 
			items: {
				default: [], 
				type: Array, 
				title: '构成树节点的元素列表'
			}, 
			multipleActive: {
				default: false, 
				type: Boolean, 
				title: '允许用户同时具有多个活动节点'
			}, 
			open: {
				default: [], 
				type: Array, 
				title: '允许控制打开的节点列表'
			}, 
			openAll: {
				default: false, 
				type: Boolean, 
				title: '节点全部打开'
			}, 
			returnObject: {
				default: false, 
				type: Boolean, 
				title: '使v模型，active.sync和open.sync返回完整的对象，而不仅仅是键'
			}, 
			search: {
				default: undefined, 
				type: String, 
				title: '筛选结果的搜索模型'
			}, 
			selectionType: {
				default: 'leaf', 
				type: String, 
				title: '控制树视图如何选择节点。有两种模式可用：leaf和independent'
			}, 
			value: {
				default: [], 
				type: Array, 
				title: '选择哪些节点。该数组由每个选定项目的项目键组成',
				model: true
			}, 
			activatable: {
				default: false, 
				type: Boolean, 
				title: '允许用户通过单击将节点标记为活动节点'
			}, 
			activeClass: {
				default: 'v-treeview-node--active', 
				type: String, 
				title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
			}, 
			color: {
				default: 'primary', 
				type: Color, 
				title: '颜色'
			}, 
			expandIcon: {
				default: '$vuetify.icons.subgroup', 
				type: String, 
				title: '拓展图标'
			}, 
			indeterminateIcon: {
				default: '$vuetify.icons.checkboxIndeterminate', 
				type: String, 
				title: '节点处于不确定状态时使用的图标。仅当selectable为true时可见。'
			}, 
			itemChildren: {
				default: 'children', 
				type: String, 
				title: '提供的包含子项的项目的属性'
			}, 
			itemDisabled: {
				default: 'disabled', 
				type: String, 
				title: '提供的项目的属性，其中包含该项目的禁用状态'
			}, 
			itemKey: {
				default: 'id', 
				type: String, 
				title: '提供的项目上的属性用于跟踪节点状态'
			}, 
			itemText: {
				default: 'name', 
				type: String, 
				title: '提供的包含标签文本的项目的属性'
			}, 
			loadChildren: {
				default: undefined, 
				type: Function, 
				title: '动态加载子代时使用的功能。如果设置了此道具，则在展开具有item-children属性（为空数组）的项目时，将运行提供的功能。支持返回承诺。'
			}, 
			loadingIcon: {
				default: '$vuetify.icons.loading', 
				type: String, 
				title: '节点加载中使用的图标'
			}, 
			offIcon: {
				default: '$vuetify.icons.checkboxOff', 
				type: String, 
				title: '节点未被选择时使用的图标'
			}, 
			onIcon: {
				default: '$vuetify.icons.checkboxOn', 
				type: String, 
				title: '选择叶节点或完全选择分支节点时使用的图标'
			}, 
			openOnClick: {
				default: false, 
				type: Boolean, 
				title: '点击展开'
			}, 
			rounded: {
				default: false, 
				type: Boolean, 
				title: '圆角'
			}, 
			selectable: {
				default: false, 
				type: Boolean, 
				title: '可选择'
			}, 
			selectedColor: {
				default: 'accent', 
				type: Color, 
				title: '选中颜色'
			}, 
			shaped: {
				default: false, 
				type: Boolean, 
				title: '边框半径',
				des: '为v-treeview节点提供替代的活动样式。仅在可激活为真时才可见，并且不应与圆形道具一起使用。'
			}, 
			transition: {
				default: false, 
				type: Boolean, 
				title: '过渡效果'
			}
		}, 
	events: {
		event: {
			des: 'event', 
			args: ['p1']
		},
		input: {
			des: "被绑定模型的更新",
			args: ["value"]
		},
		"update:active":{
			des:'激活状态',
			args: ["event"]
		},
		"update:open":{
			des:'打开节点',
			args: ["event"]
		}
    },
    slots: {
      append: {
        des: '插入节点', 
        title: '插入节点', 
        components: [],
        Props:["item","leaf","selected","indeterminate","active","open"]
      },
      label: {
        des: '标签', 
        title: '标签', 
        components: [],
        Props:["item","leaf","selected","indeterminate","active","open"]
      },
      prepend: {
        des: '前置', 
        title: '前置', 
        components: [],
        Props:["item","leaf","selected","indeterminate","active","open"]
      }
    }
	}, 
	examples: [
		{
		img:'v_tree1',
		name: '基本用法',
			props: {
				items: [{
					id: 1,
					name: 'Applications :',
					children: [
					  { id: 2, name: 'Calendar : app' },
					  { id: 3, name: 'Chrome : app' },
					  { id: 4, name: 'Webstorm : app' },
					],
				  },{
					id: 5,
					name: 'Documents :',
					children: [
					  {
						id: 6,
						name: 'vuetify :',
						children: [
						  {
							id: 7,
							name: 'src :',
							children: [
							  { id: 8, name: 'index : ts' },
							  { id: 9, name: 'bootstrap : ts' },
							],
						  },
						],
					  },
					  {
						id: 10,
						name: 'material2 :',
						children: [
						  {
							id: 11,
							name: 'src :',
							children: [
							  { id: 12, name: 'v-btn : ts' },
							  { id: 13, name: 'v-card : ts' },
							  { id: 14, name: 'v-window : ts' },
							],
						  },
						],
					  },
					],
				  },{
					id: 15,
					name: 'Downloads :',
					children: [
					  { id: 16, name: 'October : pdf' },
					  { id: 17, name: 'November : pdf' },
					  { id: 18, name: 'Tutorial : html' },
					],
				  },{
					id: 19,
					name: 'Videos :',
					children: [
					  {
						id: 20,
						name: 'Tutorials :',
						children: [
						  { id: 21, name: 'Basic layouts : mp4' },
						  { id: 22, name: 'Advanced techniques : mp4' },
						  { id: 23, name: 'All about app : dir' },
						],
					  },
					  { id: 24, name: 'Intro : mov' },
					  { id: 25, name: 'Conference introduction : avi' },
					],
				  }
				]
			}
		},
		{
		img:'v_tree2',
		name: '多选用法',
			props: {
				items: [{
					id: 1,
					name: 'Applications :',
					children: [
					  { id: 2, name: 'Calendar : app' },
					  { id: 3, name: 'Chrome : app' },
					  { id: 4, name: 'Webstorm : app' },
					],
				  },{
					id: 5,
					name: 'Documents :',
					children: [
					  {
						id: 6,
						name: 'vuetify :',
						children: [
						  {
							id: 7,
							name: 'src :',
							children: [
							  { id: 8, name: 'index : ts' },
							  { id: 9, name: 'bootstrap : ts' },
							],
						  },
						],
					  },
					  {
						id: 10,
						name: 'material2 :',
						children: [
						  {
							id: 11,
							name: 'src :',
							children: [
							  { id: 12, name: 'v-btn : ts' },
							  { id: 13, name: 'v-card : ts' },
							  { id: 14, name: 'v-window : ts' },
							],
						  },
						],
					  },
					],
				  },{
					id: 15,
					name: 'Downloads :',
					children: [
					  { id: 16, name: 'October : pdf' },
					  { id: 17, name: 'November : pdf' },
					  { id: 18, name: 'Tutorial : html' },
					],
				  },{
					id: 19,
					name: 'Videos :',
					children: [
					  {
						id: 20,
						name: 'Tutorials :',
						children: [
						  { id: 21, name: 'Basic layouts : mp4' },
						  { id: 22, name: 'Advanced techniques : mp4' },
						  { id: 23, name: 'All about app : dir' },
						],
					  },
					  { id: 24, name: 'Intro : mov' },
					  { id: 25, name: 'Conference introduction : avi' },
					],
				  }
				],
				selectable: true,
				selectedColor: 'red'
			}
		},
		{
			name: '自定义颜色',
		img:'v_tree3',
			props: {
				items: [{
					id: 1,
					name: 'Applications :',
					children: [
					  { id: 2, name: 'Calendar : app' },
					  { id: 3, name: 'Chrome : app' },
					  { id: 4, name: 'Webstorm : app' },
					],
				  },{
					id: 5,
					name: 'Documents :',
					children: [
					  {
						id: 6,
						name: 'vuetify :',
						children: [
						  {
							id: 7,
							name: 'src :',
							children: [
							  { id: 8, name: 'index : ts' },
							  { id: 9, name: 'bootstrap : ts' },
							],
						  },
						],
					  },
					  {
						id: 10,
						name: 'material2 :',
						children: [
						  {
							id: 11,
							name: 'src :',
							children: [
							  { id: 12, name: 'v-btn : ts' },
							  { id: 13, name: 'v-card : ts' },
							  { id: 14, name: 'v-window : ts' },
							],
						  },
						],
					  },
					],
				  },{
					id: 15,
					name: 'Downloads :',
					children: [
					  { id: 16, name: 'October : pdf' },
					  { id: 17, name: 'November : pdf' },
					  { id: 18, name: 'Tutorial : html' },
					],
				  },{
					id: 19,
					name: 'Videos :',
					children: [
					  {
						id: 20,
						name: 'Tutorials :',
						children: [
						  { id: 21, name: 'Basic layouts : mp4' },
						  { id: 22, name: 'Advanced techniques : mp4' },
						  { id: 23, name: 'All about app : dir' },
						],
					  },
					  { id: 24, name: 'Intro : mov' },
					  { id: 25, name: 'Conference introduction : avi' },
					],
				  }
				],
				activatable: true,
				color: 'red'
			}
		},
		{
			name: '自定义悬浮形状',
		img:'v_tree4',
			props: {
				items: [{
					id: 1,
					name: 'Applications :',
					children: [
					  { id: 2, name: 'Calendar : app' },
					  { id: 3, name: 'Chrome : app' },
					  { id: 4, name: 'Webstorm : app' },
					],
				  },{
					id: 5,
					name: 'Documents :',
					children: [
					  {
						id: 6,
						name: 'vuetify :',
						children: [
						  {
							id: 7,
							name: 'src :',
							children: [
							  { id: 8, name: 'index : ts' },
							  { id: 9, name: 'bootstrap : ts' },
							],
						  },
						],
					  },
					  {
						id: 10,
						name: 'material2 :',
						children: [
						  {
							id: 11,
							name: 'src :',
							children: [
							  { id: 12, name: 'v-btn : ts' },
							  { id: 13, name: 'v-card : ts' },
							  { id: 14, name: 'v-window : ts' },
							],
						  },
						],
					  },
					],
				  },{
					id: 15,
					name: 'Downloads :',
					children: [
					  { id: 16, name: 'October : pdf' },
					  { id: 17, name: 'November : pdf' },
					  { id: 18, name: 'Tutorial : html' },
					],
				  },{
					id: 19,
					name: 'Videos :',
					children: [
					  {
						id: 20,
						name: 'Tutorials :',
						children: [
						  { id: 21, name: 'Basic layouts : mp4' },
						  { id: 22, name: 'Advanced techniques : mp4' },
						  { id: 23, name: 'All about app : dir' },
						],
					  },
					  { id: 24, name: 'Intro : mov' },
					  { id: 25, name: 'Conference introduction : avi' },
					],
				  }
				],
				activatable: true,
				rounded: true,
				hoverable: true
			}
		}
	]
}