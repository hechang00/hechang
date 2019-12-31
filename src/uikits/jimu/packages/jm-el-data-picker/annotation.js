import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-data-picker',
    name: '日期选择器',
    link:"https://element.eleme.io/#/zh-CN/component/date-picker",
    grouptype: '表单组件',
    priority:980, 
    img: 'select_date',
    needRegis: true,
    icon:'',
    props: {
      value: {
        default: '',
        type: Date,
        des: '当前选择数据',
        model: true
      },
      dateType: {
        default: 'date',
        des: '显示类型',
        type: String,
        enumValue: [
          {
            value: 'date'
          },
          {
            value: 'datetime'
          },
          {
            value: 'year'
          },
          {
            value: 'month'
          },
          {
            value: 'week'
          },
          {
            value: 'daterange'
          },
          {
            value: 'datetimerange'
          }
        ]
      },
      rangeSeparator: {
        default: '',
        des: '至',
        type: String
      },
      startPlaceholder: {
        default: '',
        des: '开始',
        type: String
      },
      endplaceholder: {
        default: '',
        des: '结束',
        type: String
      },
      placeholder: {
        default: '选择日期',
        des: '占位符',
        type: String
      },
      format: {
        default: '',
        des: '显示日期格式',
        type: String,
        enumValue: [
          {
            value: '',
            des: 'Date类型'
          },
          {
            value: 'yyyy-MM-dd',
            des: '格式化字符串'
          },
          {
            value: 'yyyy/MM/dd',
            des: '格式化字符串'
          },
          {
            value: 'yyyy-MM-dd HH:mm',
            des: '格式化字符串'
          },
          {
            value: 'yyyy-MM-dd HH:mm:ss',
            des: '格式化字符串'
          },
          {
            value: 'yyyy/MM/dd HH:mm',
            des: '格式化字符串'
          },
          {
            value: 'yyyy/MM/dd HH:mm:ss',
            des: '格式化字符串'
          },
          {
            value: 'timestamp',
            des: '时间戳'
          }
        ]
      },
      valueFormat: {
        default: '',
        des: '返回值日期格式',
        type: String,
        enumValue: [
          {
            value: '',
            des: 'Date类型'
          },
          {
            value: 'yyyy-MM-dd',
            des: '格式化字符串'
          },
          {
            value: 'yyyy/MM/dd',
            des: '格式化字符串'
          },
          {
            value: 'yyyy-MM-dd HH:mm',
            des: '格式化字符串'
          },
          {
            value: 'yyyy-MM-dd HH:mm:ss',
            des: '格式化字符串'
          },
          {
            value: 'yyyy/MM/dd HH:mm',
            des: '格式化字符串'
          },
          {
            value: 'yyyy/MM/dd HH:mm:ss',
            des: '格式化字符串'
          },
          {
            value: 'timestamp',
            des: '时间戳'
          }
        ]
      },
      align: {
        default: 'left',
        des: '对齐方式',
        type: String,
        enumValue: [
          {
            value: 'left',
            des: '居左'
          },
          {
            value: 'center',
            des: '居中'
          },
          {
            value: 'right',
            des: '居右'
          }
        ]
      },
      size: {
        default: 'large',
        des: '输入框尺寸',
        type: String,
        enumValue: [
          {
            value: 'large'
          },
          {
            value: 'small'
          },
          {
            value: 'mini'
          }
        ]
      },
      clearable: {
        default: true,
        des: '是否可清空',
        type: Boolean
      },
      shortcuts: {
        default: [],
        des: '快捷选项配置',
        fieldConfig: {
          title: '快捷选项配置',
          config: [
            {
              name: 'text',
              chinaName: '标题',
              type: 'String',
              default: ''
            },
            {
              name: 'startTime',
              chinaName: '开始时间',
              type: 'String',
              default: ''
            },
            {
              name: 'endTime',
              chinaName: '结束时间',
              type: 'String',
              default: ''
            },
            {
              name: 'unit',
              chinaName: '时间单位',
              type: 'Array',
              default: 'second',
              array: ['day', 'hour', 'minute', 'second'],
              trans: ['天', '小时', '分钟', '秒']
            }
          ]
        },
        type: Array
      },
      readonly: {
        default: false,
        des: '完全只读',
        type: Boolean
      },
      disabled: {
        default: false,
        des: '禁用',
        type: Boolean
      },
      editable: {
        default: true,
        des: '文本框可输入',
        type: Boolean
      },
      timeArrowControl: {
        default: false,
        des: '是否使用箭头进行时间选择',
        type: Boolean
      },
      rangeDefaultTime: {
        default: [],
        title: '默认小时值(修改需重新刷新页面生效)',
        des:'非范围选择时：形如12:00:00的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 00:00:00',
        type: Array
      },
      defaultTime: {
        default: '',
        title: '默认小时值(修改需重新刷新页面生效)',
        des:'非范围选择时：形如12:00:00的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 00:00:00',
        type: String
      }
    },
    events: {
      change: {
        des: '用户确认选定的值时触发',
        args: ['value']
      },
      blur: {
        des: '当 input 失去焦点时触发',
        args: ['event']
      },
      focus: {
        des: '当 input 获得焦点时触发',
        args: ['event']
      }
    }
  },
  examples: [
    {
      name: '选择日期',
      props: {
        value: '',
        dateType: 'date',
        placeholder: '选择日期'
      }
    },
    {
      name: '选择日期范围',
      props: {
        value: '',
        dateType: 'daterange',
        rangeSeparator: '至',
        startPlaceholder: '开始',
        endplaceholder: '结束'
      }
    },
    {
      name: '选择日期与时间',
      props: {
        value: '',
        dateType: 'datetime',
        placeholder: '选择日期与时间'
      }
    },
    {
      name: '选择日期范围',
      props: {
        value: '',
        dateType: 'datetimerange',
        rangeSeparator: '至',
        startPlaceholder: '开始',
        endplaceholder: '结束'
      }
    },
    {
      name: '带日期范围选择日期范围',
      props: {
        value: '',
        dateType: 'daterange',
        rangeSeparator: '至',
        startPlaceholder: '开始',
        endplaceholder: '结束',
        shortcuts: [
          {
            text: '最近一周',
            startTime: '-7',
            endTime: '0',
            unit: 'day'
          },
          {
            text: '最近一个月',
            startTime: '-30',
            endTime: '0',
            unit: 'day'
          },
          {
            text: '最近三个月',
            startTime: '-90',
            endTime: '0',
            unit: 'day'
          }
        ]
      }
    },
    {
      name: '选择多个日期',
      props: {
        value: '',
        dateType: 'dates',
        placeholder: '选择多个日期'
      }
    },
    {
      name: '选择周',
      props: {
        value: '',
        dateType: 'week',
        format: 'yyyy 第 WW 周',
        placeholder: '选择周'
      }
    },
    {
      name: '选择月',
      props: {
        value: '',
        dateType: 'month',
        placeholder: '选择月'
      }
    },
    {
      name: '选择年',
      props: {
        value: '',
        dateType: 'year',
        placeholder: '选择年'
      }
    }
  ]
}