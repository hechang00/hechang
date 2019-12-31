import {Color} from '../../../type';
export default {
  what: {
    id: "v-calendar",
    name: "日历",
    link: "https://vuetifyjs.com/zh-Hans/components/calendars",
    grouptype: "选择器",
    img: "select_date",
    icon: "",
    props: {
      color: {
        default: undefined,
        type: Color,
        title: "颜色"
      },
      locale: {
        default: undefined,
        type: String,
        title: "地点"
      },
      dark: {
        default: false,
        type: Boolean,
        title: "暗黑主题"
      },
      light: {
        default: false,
        type: Boolean,
        title: "明亮主题"
      },
      now: {
        default: undefined,
        type: String,
        title: "现在"
      },
      start: {
        default: undefined,
        type: String,
        title: "开始"
      },
      end: {
        default: undefined,
        type: String,
        title: "结束"
      },
      weekdays: {
        default: [0, 1, 2, 3, 4, 5, 6],
        type: Array,
        title: "工作日"
      },
      hideHeader: {
        default: false,
        type: Boolean,
        title: "隐藏头"
      },
      shortWeekdays: {
        default: true,
        type: Boolean,
        title: "短周"
      },
      weekdayFormat: {
        default: undefined,
        type: Function,
        title: "周格式"
      },
      dayFormat: {
        default: undefined,
        type: Function,
        title: "日格式"
      },
      events: {
        default: undefined,
        type: Array,
        title: "事件"
      },
      eventStart: {
        default: "start",
        type: String,
        title: "事件开始"
      },
      eventEnd: {
        default: "end",
        type: String,
        title: "事件结束"
      },
      eventHeight: {
        default: 20,
        type: Number,
        title: "事件高度"
      },
      eventColor: {
        default: "secondary",
        type: [String, Function],
        title: "事件颜色"
      },
      eventTextColor: {
        default: "white",
        type: [String, Function],
        title: "事件文本颜色"
      },
      eventName: {
        default: "name",
        type: [String, Function],
        title: "事件名称"
      },
      eventOverlapThreshold: {
        default: 60,
        type: Number,
        title: "事件重叠阈值"
      },
      eventMore: {
        default: true,
        type: Boolean,
        title: "更多事件"
      },
      eventMoreText: {
        default: "$vuetify.calendar.moreEvents",
        type: String,
        title: "更多事件文本"
      },
      eventRipple: {
        default: undefined,
        type: [Boolean, Object],
        title: "事件波纹"
      },
      eventMarginBottom: {
        default: 1,
        type: Number,
        title: "事件边界底部"
      },
      type: {
        default: "month",
        type: String,
        title: "类型"
      },
      value: {
        default: undefined,
        type: String,
        title: "值"
      },
      minWeeks: {
        default: 1,
        type: null,
        title: "最小周"
      },
      shortMonths: {
        default: true,
        type: Boolean,
        title: "短月"
      },
      showMonthOnFirst: {
        default: true,
        type: Boolean,
        title: "showMonthOnFirst"
      },
      monthFormat: {
        default: undefined,
        type: Function,
        title: "月格式"
      },
      maxDays: {
        default: 7,
        type: Number,
        title: "最大日期"
      },
      shortIntervals: {
        default: true,
        type: Boolean,
        title: "短间隔"
      },
      intervalHeight: {
        default: 40,
        type: [Number, String],
        title: "间隔高度"
      },
      intervalMinutes: {
        default: 60,
        type: [Number, String],
        title: "间隔分钟"
      },
      firstInterval: {
        default: 0,
        type: [Number, String],
        title: "第一间隔"
      },
      intervalCount: {
        default: 24,
        type: [Number, String],
        title: "间隔计数"
      },
      intervalFormat: {
        default: undefined,
        type: Function,
        title: "间隔格式"
      },
      intervalStyle: {
        default: undefined,
        type: Function,
        title: "间隔样式"
      },
      showIntervalLabel: {
        default: undefined,
        type: Function,
        title: "展示间隔标签"
      }
    },
    events: {
      event: {
        des: "event",
        args: ["p1"]
      },
      "click:more": {
        des: "click:more",
        args: ["p1"]
      },
      change: {
        des: "change",
        args: ["start", "end"]
      },
      input: {
        des: "被绑定模型的更新",
        args: ["p1"]
      },
      moved: {
        des: "moved",
        args: ["p1"]
      },
      "click:date": {
        des: "点击日期",
        args: ["event"]
      },
      "click:day": {
        des: "点击事件",
        args: ["event"]
      },

      "click:interval": {
        des: "点击事件",
        args: ["event"]
      },
      "click:time": {
        des: "点击天",
        args: ["event"]
      },
      "contextmenu:date": {
        des: "contextmenu",
        args: ["event"]
      },
      "contextmenu:day": {
        des: "contextmenu",
        args: ["event"]
      },
      "contextmenu:interval": {
        des: "contextmenu",
        args: ["event"]
      },
      "contextmenu:time": {
        des: "contextmenu",
        args: ["event"]
      },
      "mousedown:day": {
        des: "鼠标按下",
        args: ["event"]
      },
      "mousedown:interval": {
        des: "鼠标按下",
        args: ["event"]
      },
      "mousedown:time": {
        des: "鼠标按下",
        args: ["event"]
      },
      "mouseenter:day": {
        des: "鼠标进入",
        args: ["event"]
      },
      "mouseenter:interval": {
        des: "鼠标进入",
        args: ["event"]
      },
      "mouseenter:time": {
        des: "鼠标进入",
        args: ["event"]
      },
      "mouseleave:day": {
        des: "鼠标离开",
        args: ["event"]
      },
      "mouseleave:interval": {
        des: "鼠标离开",
        args: ["event"]
      },
      "mouseleave:time": {
        des: "鼠标离开",
        args: ["event"]
      },
      "mousemove:day": {
        des: "鼠标移动",
        args: ["event"]
      },
      "mousemove:interval": {
        des: "鼠标移动",
        args: ["event"]
      },
      "mousemove:time": {
        des: "鼠标移动",
        args: ["event"]
      },
      "mouseup:day": {
        des: "鼠标弹上",
        args: ["event"]
      },
      "mouseup:interval": {
        des: "鼠标移动",
        args: ["event"]
      },
      moved: {
        des: "鼠标移动",
        args: ["event"]
      },
      "touchend:day": {
        des: "触摸结束事件",
        args: ["event"]
      },
      "touchend:interval": {
        des: "触摸结束事件",
        args: ["event"]
      },
      "touchend:time": {
        des: "触摸结束事件",
        args: ["event"]
      },
      "touchmove:day": {
        des: "触摸移动事件",
        args: ["event"]
      },
      "touchmove:interval": {
        des: "触摸移动事件",
        args: ["event"]
      },
      "touchmove:time": {
        des: "触摸移动事件",
        args: ["event"]
      },
      "touchstart:day": {
        des: "触摸开始事件",
        args: ["event"]
      },
      "touchstart:interval": {
        des: "触摸开始事件",
        args: ["event"]
      },
      "touchstart:time": {
        des: "触摸开始事件",
        args: ["event"]
      }
    },
    slots: {
      default: {
        des: "默认插槽",
        title: "默认",
        hasProps: true,
        components: []
      },
      day: {
        des: "天",
        title: "天",
        hasProps: true,
        components: []
      },
      "day-body": {
        des: "",
        title: "",
        hasProps: true,
        components: []
      },
      "day-header": {
        des: "",
        title: "",
        hasProps: true,
        components: []
      },
      "day-label": {
        des: "",
        title: "",
        hasProps: true,
        components: []
      },
      "day-month": {
        des: "",
        title: "",
        hasProps: true,
        components: []
      },
      interval: {
        des: "",
        title: "",
        hasProps: true,
        components: []
      }
    }
  },
  examples: [
    {
      name: "基本用法",
      props: {
        type: "month",
        now: "2019-01-08",
        value: "2019-01-08",
        events: [
          {
            name: "Vacation",
            start: "2018-12-30",
            end: "2019-01-02"
          },
          {
            name: "Meeting",
            start: "2019-01-07"
          },
          {
            name: "30th Birthday",
            start: "2019-01-03"
          },
          {
            name: "New Year",
            start: "2019-01-01"
          },
          {
            name: "Conference",
            start: "2019-01-21"
          },
          {
            name: "Hackathon",
            start: "2019-01-30",
            end: "2019-02-01"
          }
        ]
      }
    },
    {
      name: "周日历",
      props: {
        ref: "calendar",
        now: "2019-01-08",
        value: "2019-01-08",
        events: [
          {
            name: "Weekly Meeting",
            start: "2019-01-07 09:00",
            end: "2019-01-07 10:00"
          },
          {
            name: "Thomas Birthday",
            start: "2019-01-10"
          },
          {
            name: "Mash Potatoes",
            start: "2019-01-09 12:30",
            end: "2019-01-09 15:30"
          }
        ],
        type: "week"
      }
    },
    {
      name: "日日历",
      props: {
        type: "day"
      },
      slots: {}
    }
  ]
};