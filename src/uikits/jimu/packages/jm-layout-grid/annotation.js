import { Color } from '../../../type'
import config from './examples.json'
export default {
  what: {
    isContainer: true,
    id: 'jm-layout-grid',
    name: '栅格布局',
    link:"http://jimudev.oa.com/ops/docs/guide/page-layout.html#%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80",
    grouptype: '布局组件',
    img: "g_layout",
    icon:'',
    needRegis: true,
    props: {
      columnSpace: {
        default: '16',
        des: '列间距(px)',
        type: String,
        enumValue: [
          {
            value: 0
          },
          {
            value: 8
          },
          {
            value: 16
          },
          {
            value: 24
          }
        ]
      },
      justify: {
        default: 'start',
        des: '水平排列方式',
        type: String,
        enumValue: [
          {
            value: 'start',
            des: '开始'
          },
          {
            value: 'end',
            des: '结束'
          },
          {
            value: 'center',
            des: '居中'
          },
          {
            value: 'space-around',
            des: '四周分开'
          },
          {
            value: 'space-between',
            des: '两边分开'
          }
        ]
      },
      align: {
        default: '顶部',
        des: '垂直排列方式',
        type: String,
        enumValue: [
          {
            value: '顶部'
          },
          {
            value: '中间'
          },
          {
            value: '底部'
          }
        ]
      },
      bgcolor: {
        default: '#ffffff',
        des: '背景颜色',
        type: Color
      },
      padding: {
        default: '0px 0px 0px 0px',
        des: '内边距',
        type: String
      }
    },
    events: {}
  },
  examples: config.gridLayout.value
}
