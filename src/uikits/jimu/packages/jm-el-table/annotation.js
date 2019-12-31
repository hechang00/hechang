import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-table',
    needRegis: true,
    link:"https://element.eleme.io/#/zh-CN/component/table",
    name: '表格',
    priority:965, 
    registID: true,
    grouptype: '基础组件',
    img: 'data_table',
    icon: '',
    props: {
      totalCount: {
        default: 0,
        des: '总条数',
        type: Number
      },
      curPage: {
        default: 1,
        des: '初始展示页',
        type: Number
      },
      value: {
        default: [],
        des: '顶部列配置',
        model: true,
        type: Array
      },
      contentData: {
        default: [],
        des: '显示行数据',
        type: Array
      },
      pageSizes: {
        default: [10, 20, 50, 100],
        des: '分页选项',
        type: Array
      },
      pageNum: {
        default: 20,
        des: '初始每页展示条数',
        type: Number
      },
      size: {
        default: 'small',
        des: 'Table 的尺寸',
        type: String,
        enumValue: [
          {
            value: 'medium',
            des: '中等'
          },
          {
            value: 'small',
            des: '小的'
          },
          {
            value: 'mini',
            des: '迷你'
          }
        ]
      },
      fit: {
        default: true,
        des: '列宽是否撑开',
        type: Boolean
      },
      stripe: {
        default: false,
        des: '是否为斑马纹',
        type: Boolean
      },
      border: {
        default: false,
        des: '是否带纵向边框',
        type: Boolean
      },
      prop: {
        default: 'date',
        des: '默认排序字段名',
        type: String
      },
      order: {
        default: 'ascending',
        des: '默认排序规则',
        type: String,
        enumValue: [
          {
            value: 'ascending',
            des: '升序'
          },
          {
            value: 'descending',
            des: '降序'
          }
        ]
      },
      isNormal: {
        default: false,
        des: '分页模式',
        type: Boolean
      },
      isShowFiled: {
        default: false,
        des: '字段显示',
        type: Boolean
      },
      showSummary: {
        default: false,
        des: '是否在表尾显示合计行',
        type: Boolean
      },
      showText: {
        default: '合计',
        des: '合计行第一列文本',
        type: String
      },
      highlightCurrentRow: {
        default: false,
        des: '是否要高亮当前行',
        type: Boolean
      },
      showHeader: {
        default: true,
        des: '是否显示表头',
        type: Boolean
      },
      emptyText: {
        default: '暂无数据',
        des: '空数据时显示的文本',
        type: String
      },
      selectOnIndeterminate: {
        default: true,
        des: '是否表头控制多选框',
        type: Boolean
      },
      spanFunc: {
        default: '',
        des: '合并行或列的计算方法',
        type: Function,
        args: ['data'],
        childArgs: ['row', 'column', 'rowIndex', 'columnIndex']
      },
      rowStyle: {
        default: '',
        des: '行的style设置方法',
        type: Function,
        args: ['data'],
        childArgs: ['row', 'rowIndex']
      },
      cellStyle: {
        default: '',
        des: '单元格style设置方法',
        type: Function,
        args: ['data'],
        childArgs: ['row', 'column', 'rowIndex', 'columnIndex']
      },
      headerRowStyle: {
        default: '',
        des: '表头行style设置方法',
        type: Function,
        args: ['data'],
        childArgs: ['row', 'rowIndex']
      },
      headerCellStyle: {
        default: '',
        des: '表头单元格style设置方法',
        type: Function,
        args: ['data'],
        childArgs: ['row', 'column', 'rowIndex', 'columnIndex']
      },
      summaryFunc: {
        default: '',
        des: '自定义的合计计算方法',
        type: Function,
        args: ['data'],
        childArgs: ['columns', 'data']
      },
      isBgPage: {
        default: false,
        des: '是否后台分页',
        type: Boolean
      },
      formatter: {
        default: '',
        des: '格式化内容',
        type: Function,
        args: ['row', 'column', 'cellValue', 'index']
      },
      renderHeader: {
        default: '',
        des: '列标题Label渲染方法',
        type: Function,
        args: ['h', 'data']
      },
      layout: {
        default: '',
        des: '分页布局设置',
        type: String
      },
      fixHeader: {
        default: '',
        des: '固定表头高度',
        type: String
      },
      paginationStyle: {
        default: {},
        des: '分页栏样式',
        notArray: true,
        type: Object
      },
      defaultExpandAll: {
        default: false,
        des: '是否默认展开所有行',
        type: Boolean
      },
      rowKey: {
        default: '',
        des: '行数据的Key',
        type: String,
      },
      expandRowKeys: {
        default: [],
        des: '展开行的keys数组',
        type: Array
      },
      isLoadData:{
        default: true,
        des: '是否自动执行加载数据函数',
        type: Boolean
      },
      headerCellStyleWay:{
        default:"",
        title:"表头对齐方式",
        enumValue:[{value:"",des:"自定义对齐"},{value:"left",des:"左对齐"},{value:"center",des:"居中对齐"},{value:"right",des:"右对齐"}]
      },
      cellStyleWay:{
        default:"",
        title:"表格内容对齐方式",
        enumValue:[{value:"",des:"自定义对齐方式"},{value:"left",des:"左对齐"},{value:"center",des:"居中对齐"},{value:"right",des:"右对齐"}]
      },
      loading:{
        default:false,
        title:"加载状态",
        type:Boolean
      },
      loadingText:{
        default:"拼命加载中",
        title:"加载状态文本",
        type:String
      },
      loadingBackground:{
        default:undefined,
        title:"加载状态背景",
        type:Color
      }
    },
    events: {
      instance: {
        args: ['vm'],
        des: '初始化获取表格实例'
      },
      handleOperate: {
        des: '按钮操作函数',
        args: ['row', 'name']
      },
      loadData: {
        des: '加载数据函数',
        args: ['currentPage', 'pageSize']
      },
      load: {
        des: '加载子节点数据函数',
        args: ['tree', 'treeNode', 'resolve']
      },
      handleSelectionChange: {
        des: '当选择项发生变化时触发',
        args: ['selection']
      },
      sortChange: {
        des: '当表格排序条件变化时候触发(sortable设置为custom时生效)',
        args: ['column', 'prop', 'order']
      }
    }
  },
  examples: [
    {
      name: '普通表格',
      img: 'normalTable',
      props: {
        noShow: ['totalCount', 'isBgPage', 'layout'],
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '分页表格',
      img: 'pageTable',
      props: {
        isNormal: true,
        layout:'total, sizes, prev, pager, next, jumper',
        isShowFiled: true,
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            startStatus: '任务执行中',
            status: '查看结果'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            startStatus: '成功',
            endStatus: '任务执行中',
            status: '详情'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            startStatus: '失败',
            endStatus: '',
            status: '详情信息'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            startStatus: '成功',
            endStatus: '任务执行中',
            status: '详情信息'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            tag: [
              {
                prop: 'startStatus',
                type: 'primary'
              },
              {
                prop: 'endStatus',
                type: 'success'
              }
            ],
            label: '状态',
            parentProp: '',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: false,
            'show-overflow-tooltip': false
          },
          {
            operate: ['status'],
            label: '结果',
            config: {
              status: {
                prop: 'status',
                type: 'text'
              }
            },
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            operate: ['配置查看和修改', '删除'],
            label: '图标提示操作',
            config: {
              配置查看和修改: {
                type: 'primary',
                icon: 'el-icon-edit',
                showType: 'iconTip'
              },
              删除: {
                type: 'danger',
                icon: 'el-icon-delete',
                showType: 'iconTip'
              }
            },
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            operate: ['编辑', '删除'],
            label: '操作',
            config: {
              编辑: {
                type: 'primary',
                icon: 'el-icon-edit'
              },
              删除: {
                type: 'danger',
                icon: 'el-icon-delete'
              }
            },
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '标签表格',
      img: 'tagTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        noShow: ['totalCount', 'isBgPage', 'layout'],
        pageSizes: [10, 20, 50, 100],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            startStatus: '任务执行中'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            startStatus: '成功',
            endStatus: '任务执行中'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            startStatus: '失败',
            endStatus: ''
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            startStatus: '成功',
            endStatus: '任务执行中'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            tag: [
              {
                prop: 'startStatus',
                type: 'primary'
              },
              {
                prop: 'endStatus',
                type: 'success'
              }
            ],
            parentProp: '',
            label: '状态',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '图标提示表格',
      img: 'iconTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        noShow: ['totalCount', 'isBgPage', 'layout'],
        pageSizes: [10, 20, 50, 100],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            operate: ['配置查看和修改', '删除'],
            label: '图标提示操作',
            config: {
              配置查看和修改: {
                type: 'primary',
                icon: 'el-icon-edit',
                showType: 'iconTip'
              },
              删除: {
                type: 'danger',
                icon: 'el-icon-delete',
                showType: 'iconTip'
              }
            },
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '按钮操作表格',
      img: 'buttonTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount', 'isBgPage', 'layout'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            status: '详情'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            status: '详情信息'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            status: '详情信息'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            operate: ['status'],
            label: '结果',
            config: {
              status: {
                prop: 'status',
                type: 'text'
              }
            }
          },
          {
            operate: ['status'],
            label: '颜色按钮',
            config: {
              status: {
                prop: 'status',
                type: 'text',
                color: 'red'
              }
            }
          },
          {
            operate: ['编辑', '删除'],
            label: '操作',
            config: {
              编辑: {
                type: 'primary',
                icon: 'el-icon-edit'
              },
              删除: {
                type: 'danger',
                icon: 'el-icon-delete'
              }
            },
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '多选表格',
      img: 'selectTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount', 'isBgPage', 'layout'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        value: [
          {
            type: 'selection'
          },
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': true
          }
        ]
      }
    },
    {
      name: '自定义模板表格',
      img: 'customTemplateTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount', 'isBgPage', 'layout'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tm: '<a style="color:red" href="http://www.baidu.com">红色按钮</a>'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            tm:
              '<a style="color:orange" href="http://www.baidu.com">橙色按钮</a>'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            tm:
              '<a style="color:green" href="http://www.baidu.com">绿色按钮</a>'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            tm: '<a style="color:blue" href="http://www.baidu.com">绿色按钮</a>'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'tm',
            label: '自定义模板',
            customTemplate: true,
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '自定义对齐表格',
      img: 'normalTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount', 'isBgPage', 'layout'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true,
            headerAlign: 'center',
            align: 'center'
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            headerAlign: 'center',
            align: 'center'
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false,
            headerAlign: 'center',
            align: 'center'
          }
        ]
      }
    },
    {
      name: '多级表头表格',
      img: 'multiHeaderTable',
      props: {
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount', 'isBgPage', 'layout'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            province: '上海',
            city: '普陀区',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            province: '上海',
            city: '普陀区',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            province: '上海',
            city: '普陀区',
            zip: 200333
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            province: '上海',
            city: '普陀区',
            zip: 200333
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            label: '配送信息',
            subColumns: [
              {
                prop: 'name',
                label: '姓名',
                width: '180',
                visible: true,
                'show-overflow-tooltip': false
              },
              {
                label: '地址',
                subColumns: [
                  {
                    prop: 'province',
                    label: '省份',
                    width: '',
                    visible: true,
                    'show-overflow-tooltip': false
                  },
                  {
                    prop: 'city',
                    label: '市区',
                    width: '',
                    visible: true,
                    'show-overflow-tooltip': false
                  },
                  {
                    prop: 'address',
                    label: '地址',
                    width: '',
                    visible: true,
                    'show-overflow-tooltip': false
                  },
                  {
                    prop: 'zip',
                    label: '邮编',
                    width: '',
                    visible: true,
                    'show-overflow-tooltip': false
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      name: '树形表格',
      img: 'treeTable',
      props: {
        noShow: ['totalCount', 'isBgPage', 'layout'],
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        rowKey:'treeTableId',
        contentData: [
          {
            treeTableId: '1',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            treeTableId: '2',
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            children: [
              {
                treeTableId: '21',
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                treeTableId: '22',
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }
            ]
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '',
            visible: true,
            'show-overflow-tooltip': false
          }
        ]
      }
    },
    {
      name: '固定表头和列表格',
      img: 'buttonTable',
      props: {
        fixHeader: '200',
        isNormal: false,
        layout:'total, sizes, prev, pager, next, jumper',
        style_flex: 1,
        pageSizes: [10, 20, 50, 100],
        noShow: ['totalCount', 'isBgPage', 'layout'],
        contentData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            status: '详情'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            status: '详情信息'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            status: '详情信息'
          }
        ],
        value: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false,
            sortable: true
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            prop: 'address',
            label: '地址',
            width: '360',
            visible: true,
            'show-overflow-tooltip': false
          },
          {
            operate: ['status'],
            label: '结果',
            config: {
              status: {
                prop: 'status',
                type: 'text'
              }
            }
          },
          {
            operate: ['status'],
            label: '颜色按钮',
            config: {
              status: {
                prop: 'status',
                type: 'text',
                color: 'red'
              }
            }
          },
          {
            operate: ['编辑', '删除'],
            label: '操作',
            config: {
              编辑: {
                type: 'primary',
                icon: 'el-icon-edit'
              },
              删除: {
                type: 'danger',
                icon: 'el-icon-delete'
              }
            },
            width: '200',
            visible: true,
            'show-overflow-tooltip': false,
            fixed: 'right'
          }
        ]
      }
    }
  ]
}
