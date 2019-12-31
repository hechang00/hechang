import {Color} from '../../../type';
export default {
  what: {
    id: 'v-date-picker',
    name: '日期选择',
    link: 'https://vuetifyjs.com/zh-Hans/components/date-pickers',
    grouptype: '选择器',
    img: 'select_date',
		icon:'',
    props: {
      locale: {
        default: undefined,
        type: String,
        title: '本地'
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
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
      fullWidth: {
        default: false,
        type: Boolean,
        title: '全部宽度'
      },
      headerColor: {
        default: undefined,
        type: Color,
        title: '头部颜色'
      },
      landscape: {
        default: false,
        type: Boolean,
        title: '景观'
      },
      noTitle: {
        default: false,
        type: Boolean,
        title: '无标题'
      },
      width: {
        default: 290,
        type: [Number, String],
        title: '宽度'
      },
      allowedDates: {
        default: undefined,
        type: Function,
        title: '允许日期'
      },
      dayFormat: {
        default: undefined,
        type: Function,
        title: '日格式'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      events: {
        default: undefined,
        type: [Array, Function, Object],
        title: '事件'
      },
      eventColor: {
        default: undefined,
        type: [Array, Function, Object, String],
        title: '事件颜色'
      },
      firstDayOfWeek: {
        default: 0,
        type: [String, Number],
        title: '每周第一天'
      },
      headerDateFormat: {
        default: undefined,
        type: Function,
        title: '头部日期格式'
      },
      max: {
        default: undefined,
        type: String,
        title: '最大值'
      },
      min: {
        default: undefined,
        type: String,
        title: '最小值'
      },
      monthFormat: {
        default: undefined,
        type: Function,
        title: '月格式'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '多项'
      },
      nextIcon: {
        default: '$vuetify.icons.next',
        type: String,
        title: '下一个icon'
      },
      pickerDate: {
        default: undefined,
        type: String,
        title: '选择日期'
      },
      prevIcon: {
        default: '$vuetify.icons.prev',
        type: String,
        title: '前置icon'
      },
      reactive: {
        default: false,
        type: Boolean,
        title: '相对的'
      },
      readonly: {
        default: false,
        type: Boolean,
        title: '只读'
      },
      scrollable: {
        default: false,
        type: Boolean,
        title: '可滚动'
      },
      showCurrent: {
        default: true,
        type: [Boolean, String],
        title: '展示当前'
      },
      selectedItemsText: {
        default: '$vuetify.datePicker.itemsSelected',
        type: String,
        title: '选择项目文本'
      },
      showWeek: {
        default: false,
        type: Boolean,
        title: '显示周'
      },
      titleDateFormat: {
        default: undefined,
        type: Function,
        title: '标题日期格式'
      },
      type: {
        default: 'date',
        type: String,
        title: '类型'
      },
      value: {
        default: undefined,
        type: [Array, String],
        title: '值'
      },
      weekdayFormat: {
        default: undefined,
        type: Function,
        title: '工作日格式'
      },
      yearFormat: {
        default: undefined,
        type: Function,
        title: '年格式'
      },
      yearIcon: {
        default: undefined,
        type: String,
        title: '年icon'
      }
    },
    events: {
      input: {
        des: '被绑定模型的更新',
        args: ['value']
      },
      change: {
        des: '数据更新事件',
        args: ['event']
      },
      'click:date': {
        des: '点击事件',
        args: ['event']
      },
      'dblclick:date': {
        des: '双击事件',
        args: ['event']
      },
      'click:month': {
        des: '点击事件',
        args: ['event']
      },
      'dblclick:month': {
        des: '双击事件',
        args: ['event']
      },
      'update:picker-date': {
        des: '数据更新事件',
        args: ['event']
      }
    }
  },
  examples: [
    {
      name: '基本用法',
      props: { eventColor: 'warning', showCurrent: true, value: '2019-09-24' },
      slots: {
        default: [
          {
            id: 'v-picker',
            name: 'v-picker',
            props: {
              transition: 'fade-transition',
              width: 290
            },
            slots: {
              title: [
                {
                  id: 'v-date-picker-title',
                  name: 'v-date-picker-title',
                  props: {
                    date: 'Tue, Sep 24',
                    disabled: false,
                    readonly: false,
                    selectingYear: false,
                    value: '2019-09-24',
                    year: '2019'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      name: '显示当前时间',
      props: {
        color: 'green lighten-1',
        eventColor: 'warning',
        showCurrent: true,
        value: '2019-09-24'
      },
      slots: {
        default: [
          {
            id: 'v-picker',
            name: 'v-picker',
            props: {
              color: 'green lighten-1',
              transition: 'fade-transition',
              width: 290
            },
            slots: {
              title: [
                {
                  id: 'v-date-picker-title',
                  name: 'v-date-picker-title',
                  props: {
                    date: 'Tue, Sep 24',
                    disabled: false,
                    readonly: false,
                    selectingYear: false,
                    value: '2019-09-24',
                    year: '2019'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}