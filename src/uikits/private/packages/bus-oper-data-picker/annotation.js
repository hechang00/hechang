import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'bus-oper-data-picker',
    grouptype: '业务组件',
    img: 'select_date',
    icon:'',
    name: '日期选择器',
    componentName: 'jm-el-data-picker',
    props: {},
    events: {}
  },
  examples: [
    {
      name: '选择日期',
      id: 'jm-el-data-picker',
      props: {
        value: '',
        dateType: 'datetime',
        placeholder: '选择日期',
        shortcuts: [
          {
            text: '最近一小时',
            startTime: '-1',
            endTime: '0',
            unit: 'hour'
          },
          {
            text: '最近半天',
            startTime: '-12',
            endTime: '0',
            unit: 'hour'
          },
          {
            text: '最近一天',
            startTime: '-1',
            endTime: '0',
            unit: 'day'
          },
          {
            text: '最近三天',
            startTime: '-3',
            endTime: '0',
            unit: 'day'
          }
        ]
      }
    },
    {
      name: '选择日期范围',
      id: 'jm-el-data-picker',
      props: {
        value: '',
        dateType: 'daterange',
        rangeSeparator: '至',
        startPlaceholder: '开始',
        endplaceholder: '结束',
        shortcuts: [
          {
            text: '最近一小时',
            startTime: '-1',
            endTime: '0',
            unit: 'hour'
          },
          {
            text: '最近半天',
            startTime: '-12',
            endTime: '0',
            unit: 'hour'
          },
          {
            text: '最近一天',
            startTime: '-1',
            endTime: '0',
            unit: 'day'
          },
          {
            text: '最近三天',
            startTime: '-3',
            endTime: '0',
            unit: 'day'
          }
        ]
      }
    }
  ]
}