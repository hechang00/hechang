// import {Color} from '../../../type';
export default {
  what: {
    id: 'v-data-table',
    name: '表格',
    link: 'https://vuetifyjs.com/zh-Hans/components/data-tables',
    grouptype: '表格和列表',
    img: 'data_table',
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
      items: {
        default: [],
        type: Array,
        title: '项目'
      },
      options: {
        default: {},
        type: Object,
        title: '选项'
      },
      sortBy: {
        default: [],
        type: [String, Array],
        title: '排序'
      },
      sortDesc: {
        default: undefined,
        type: [Boolean, Array],
        title: '排序描述'
      },
      // customSort: {
      //   default: undefined,
      //   type: Function,
      //   title: '定制排序'
      // },
      mustSort: {
        default: false,
        type: Boolean,
        title: '必须排序'
      },
      multiSort: {
        default: false,
        type: Boolean,
        title: '多排序'
      },
      page: {
        default: 1,
        type: Number,
        title: '页码'
      },
      itemsPerPage: {
        default: 10,
        type: Number,
        title: '项目页码'
      },
      groupBy: {
        default: undefined,
        type: [String, Array],
        title: '排序方式'
      },
      groupDesc: {
        default: undefined,
        type: [Boolean, Array],
        title: '排序描述'
      },
      locale: {
        default: 'en-US',
        type: String,
        title: '本地'
      },
      disableSort: {
        default: false,
        type: Boolean,
        title: '禁用排序'
      },
      disablePagination: {
        default: false,
        type: Boolean,
        title: '禁用分页'
      },
      disableFiltering: {
        default: false,
        type: Boolean,
        title: '禁用过滤'
      },
      search: {
        default: undefined,
        type: String,
        title: '搜索'
      },
      // customFilter: {
      //   default: undefined,
      //   type: Function,
      //   title: '定制过滤'
      // },
      serverItemsLength: {
        default: -1,
        type: Number,
        title: '服务器项目长度'
      },
      itemKey: {
        default: 'id',
        type: String,
        title: '项目Key'
      },
      value: {
        default: [],
        type: Array,
        title: '值',
        model: true
      },
      singleSelect: {
        default: false,
        type: Boolean,
        title: '单选'
      },
      expanded: {
        default: undefined,
        type: Array,
        title: '扩大'
      },
      singleExpand: {
        default: false,
        type: Boolean,
        title: '单个扩大'
      },
      loading: {
        default: undefined,
        type: [Boolean, String],
        title: '加载'
      },
      noResultsText: {
        default: '$vuetify.dataIterator.noResultsText',
        type: String,
        title: '无结果文本'
      },
      noDataText: {
        default: '$vuetify.noDataText',
        type: String,
        title: '无数据文本'
      },
      loadingText: {
        default: '$vuetify.dataIterator.loadingText',
        type: String,
        title: '加载文本'
      },
      hideDefaultFooter: {
        default: false,
        type: Boolean,
        title: '隐藏默认页脚'
      },
      footerProps: {
        default: undefined,
        type: Object,
        title: '页脚属性'
      },
      headers: {
        default: undefined,
        type: Array,
        title: '头部'
      },
      showSelect: {
        default: false,
        type: Boolean,
        title: '显示可选择'
      },
      showExpand: {
        default: false,
        type: Boolean,
        title: '显示扩展'
      },
      showGroupBy: {
        default: false,
        type: Boolean,
        title: '展示分组'
      },
      mobileBreakpoint: {
        default: 600,
        type: Number,
        title: '移动断点'
      },
      height: {
        default: undefined,
        type: [Number, String],
        title: '高度'
      },
      hideDefaultHeader: {
        default: false,
        type: Boolean,
        title: '隐藏默认头部'
      },
      caption: {
        default: undefined,
        type: String,
        title: '字幕'
      },
      dense: {
        default: false,
        type: Boolean,
        title: '密集'
      },
      headerProps: {
        default: {},
        type: Object,
        title: '头部属性'
      },
      calculateWidths: {
        default: false,
        type: Boolean,
        title: '计算宽度'
      },
      fixedHeader: {
        default: false,
        type: Boolean,
        title: '固定头部'
      },
      headersLength: {
        default: undefined,
        type: Number,
        title: '头部长度'
      },
      expandIcon: {
        default: '$vuetify.icons.expand',
        type: String,
        title: '扩展icon'
      }
    },
    events: {
      'item-selected': {
        des: 'item-selected',
        args: ['p1', 'p2']
      },
      'item-expanded': {
        des: 'item-expanded',
        args: ['p1', 'p2']
      },
      'click:row': {
        des: '点击行',
        args: ['event']
      },
      'current-items': {
        des: '当前项目',
        args: ['value']
      },
      'page-count': {
        des: '页码',
        args: ['value']
      },
      pagination: {
        des: '分页',
        args: ['value']
      },
      'update:expanded': {
        des: 'update:expanded',
        args: ['value']
      },
      'update:group-by': {
        des: 'update:group-by',
        args: ['value']
      },
      'update:group-desc': {
        des: 'update:group-desc',
        args: ['value']
      },
      'update:items-per-page': {
        des: 'update:items-per-page',
        args: ['value']
      },
      'update:multi-sort': {
        des: 'update:multi-sort',
        args: ['value']
      },
      'update:must-sort': {
        des: 'update:must-sort',
        args: ['value']
      },
      'update:options': {
        des: 'update:options',
        args: ['value']
      },
      'update:page': {
        des: 'update:page',
        args: ['value']
      },
      'update:sort-by': {
        des: 'update:sort-by',
        args: ['value']
      },
      'update:sort-desc': {
        des: 'update:sort-desc',
        args: ['value']
      }
    },
    slots: {
      top: {
        des: 'top插槽',
        title: 'top',
        components: [],
        hasProps: true
      },
      default: {
        des: '默认插槽',
        title: '默认',
        components: []
      },
      body: {
        des: 'body插槽',
        title: 'body插槽',
        components: [],
        hasProps: true
      },
      'body.append': {
        des: 'body.append插槽',
        title: 'body附加',
        components: [],
        hasProps: true
      },
      'body.prepend': {
        des: 'body.prepend插槽',
        title: 'body前置',
        components: [],
        hasProps: true
      },
      'expanded-item': {
        des: 'Slot to customize expanded rows',
        title: '扩展行',
        components: [],
        hasProps: true
      },
      'footer.page-text': {
        des: 'Slot to customize footer page text',
        title: '下一页',
        components: [],
        hasProps: true
      },
      footer: {
        des: 'Slot to add a custom footer',
        title: '页脚',
        components: [],
        hasProps: true
      },
      group: {
        des: 'Slot to replace the default rendering of grouped rows',
        title: '分组行',
        components: [],
        hasProps: true
      },
      header: {
        des: 'Slot to add a custom header',
        title: '头部',
        components: [],
        hasProps: true
      },
      'header.name': {
        des: 'Slot to customize a specific header column',
        title: '头部列',
        components: [],
        hasProps: true
      },
      'header.data-table-select': {
        des: 'Slot to replace the default v-simple-checkbox in header',
        title: '头部选择框',
        components: [],
        hasProps: true
      },
      'group.header': {
        des: 'Slot to customize the default rendering of group headers',
        title: '组头部',
        components: [],
        hasProps: true
      },
      'group.summary': {
        des: 'Slot to customize the default rendering of group summaries',
        title: '组摘要',
        components: [],
        hasProps: true
      },
      'no-data': {
        des: 'Defines content for when no items are provided',
        title: '无数据',
        components: []
      },
      item: {
        des: 'Slot to replace the default rendering of a row',
        title: '行',
        components: [],
        hasProps: true
      },
      'item.name': {
        des: 'Slot to customize a specific column',
        title: '列',
        components: [],
        hasProps: true
      },
      'item.data-table-expand': {
        des: 'Slot to replace the default v-icon used when expanding rows',
        title: '图标',
        components: [],
        hasProps: true
      },
      'item.data-table-select': {
        des:
          'Slot to replace the default v-simple-checkbox used when selecting rows',
        title: '选择框',
        components: [],
        hasProps: true
      },
      loading: {
        des:
          'Defines content for when loading is true and no items are provided',
        title: '加载',
        components: []
      },
      progress: {
        des: '自定义进度线的插槽',
        title: '进度线',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      name: '基本用法',
      img: 'v_data_table1',
      props: {
        style_flex: 1,
        showSelect: true,
        itemKey: 'name',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      },
      slots: {}
    }
  ]
}