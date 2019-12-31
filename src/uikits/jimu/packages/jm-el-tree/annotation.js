import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-tree',
    needRegis: true,
    name: '树形控件',
    priority: 970,
    link:"https://element.eleme.io/#/zh-CN/component/tree",
    grouptype: '数据组件',
    img: 'jmTree',
    icon: '',
    props: {
      defaultProps: {
        default: {
          children: 'children',
          label: 'label'
        },
        des: '配置',
        fieldConfig: {
          title: '属性名配置',
          config: [{
              name: 'children',
              chinaName: '孩子',
              type: 'String',
              default: 'children'
            },
            {
              name: 'label',
              chinaName: '标签名',
              type: 'String',
              default: 'label'
            },
            {
              name: 'disabled',
              chinaName: '禁用',
              type: 'String',
              default: 'disabled'
            },
            {
              name: 'isLeaf',
              chinaName: '叶子节点',
              type: 'String',
              default: 'isLeaf'
            }
          ]
        },
        notArray: true,
        type: Object
      },
      data: {
        default: [],
        des: '树形控件列表',
        type: Array
      },
      accordion: {
        default: false,
        des: '手风琴模式',
        isStatic: true,
        type: Boolean
      },
      showCheckBox: {
        default: false,
        des: '节点是否可被选择',
        isStatic: true,
        type: Boolean
      },
      draggable: {
        default: false,
        des: '节点是否可以拖拽',
        type: Boolean
      },
      highlight: {
        default: false,
        des: '是否高亮选中的节点',
        type: Boolean
      },
      openAll: {
        default: false,
        des: '是否默认展开所有节点',
        type: Boolean
      },
      checkNode: {
        default: false,
        des: '是否在点击节点的时候选中节点',
        type: Boolean
      },
      indent: {
        default: 16,
        des: '节点间的水平缩进',
        type: Number
      },
      nodeKey: {
        default: 'id',
        des: '树节点的唯一标识',
        type: String
      },
      expanded: {
        default: [],
        des: '默认展开的节点的key的数组',
        type: Array
      },
      checked: {
        default: [],
        des: '默认勾选的节点的key的数组',
        type: Array
      },
      currentKey: {
        default: '',
        des: '当前选中的节点',
        type: String
      }
    },
    events: {
      Initialization: {
        des: '初始化函数',
        args: ['vm']
      },
      handleNodeClick: {
        des: '节点被点击时的回调',
        args: ['vm', 'data', 'node', 'key']
      },
      checkChange: {
        des: '节点选中状态发生变化时的回调',
        args: ['vm', 'data', 'checked', 'indeterminate']
      },
      check: {
        des: '当复选框被点击的时候触发',
        args: ['vm', 'data', 'state']
      },
      handleDrop: {
        des: '拖拽成功完成时触发的事件',
        args: ['vm', 'draggingNode', 'dropNode', 'dropType', 'ev']
      },
      nodeExpand: {
        des: '节点被展开时触发的事件',
        args: ['vm', 'data', 'node', 'e']
      }
    }
  },
  examples: [{
      name: '基础用法',
      props: {
        data: [{
            id: '1',
            label: '一级 1',
            children: [{
              id: '2',
              label: '二级 1-1',
              children: [{
                id: '3',
                label: '三级 1-1-1'
              }]
            }]
          },
          {
            id: '4',
            label: '一级 2',
            children: [{
                id: '5',
                label: '二级 2-1',
                children: [{
                  id: '6',
                  label: '三级 2-1-1'
                }]
              },
              {
                id: '8',
                label: '二级 2-2',
                children: [{
                  id: '9',
                  label: '三级 2-2-1'
                }]
              }
            ]
          },
          {
            id: '5',
            label: '一级 3',
            children: [{
                id: '11',
                label: '二级 3-1',
                children: [{
                  id: '13',
                  label: '三级 3-1-1'
                }]
              },
              {
                id: '14',
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
                }]
              }
            ]
          }
        ]
      }
    },
    {
      name: '可选择',
      props: {
        showCheckBox: true,
        data: [{
            id: '1',
            label: '一级 1',
            children: [{
              id: '2',
              label: '二级 1-1',
              children: [{
                id: '3',
                label: '三级 1-1-1'
              }]
            }]
          },
          {
            id: '4',
            label: '一级 2',
            children: [{
                id: '5',
                label: '二级 2-1',
                children: [{
                  id: '6',
                  label: '三级 2-1-1'
                }]
              },
              {
                id: '8',
                label: '二级 2-2',
                children: [{
                  id: '9',
                  label: '三级 2-2-1'
                }]
              }
            ]
          },
          {
            id: '5',
            label: '一级 3',
            children: [{
                id: '11',
                label: '二级 3-1',
                children: [{
                  id: '13',
                  label: '三级 3-1-1'
                }]
              },
              {
                id: '14',
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
                }]
              }
            ]
          }
        ]
      }
    },
    {
      name: '可拖拽节点',
      props: {
        showCheckBox: true,
        draggable: true,
        data: [{
            id: '1',
            label: '一级 1',
            children: [{
              id: '2',
              label: '二级 1-1',
              children: [{
                id: '3',
                label: '三级 1-1-1'
              }]
            }]
          },
          {
            id: '4',
            label: '一级 2',
            children: [{
                id: '5',
                label: '二级 2-1',
                children: [{
                  id: '6',
                  label: '三级 2-1-1'
                }]
              },
              {
                id: '8',
                label: '二级 2-2',
                children: [{
                  id: '9',
                  label: '三级 2-2-1'
                }]
              }
            ]
          },
          {
            id: '5',
            label: '一级 3',
            children: [{
                id: '11',
                label: '二级 3-1',
                children: [{
                  id: '13',
                  label: '三级 3-1-1'
                }]
              },
              {
                id: '14',
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
                }]
              }
            ]
          }
        ]
      }
    }
  ]
}
