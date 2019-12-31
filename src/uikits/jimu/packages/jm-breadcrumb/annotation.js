import { Color } from "../../../type";
export default {
  what: {
    id: "jm-breadcrumb",
    needRegis: true,
    name: "面包屑",
    grouptype: "导航组件",
    img: "nav_breadcrumb",
    icon: "",
    props: {
      value: {
        default: 0,
        des: "当前执行步骤",
        model: true,
        type: Number
      },
      separator: {
        default: "/",
        des: "分隔符",
        type: String
      },
      fontSize: {
        default: "14px",
        des: "字体大小",
        type: String
      },
      space: {
        default: "40px",
        des: "间距",
        type: String
      },
      separatorClass: {
        default: "el-icon-arrow-right",
        des: "图标分隔符class",
        type: String
      },
      router: {
        default: false,
        type: Boolean,
        title: "是否开启路由跳转(发布包预览生效)"
      },
      data: {
        default: [],
        des: "数据",
        fieldConfig: {
          title: "面包屑数据配置",
          config: [
            {
              name: "name",
              chinaName: "名字",
              type: "String",
              default: ""
            },
            {
              name: "path",
              chinaName: "路径",
              type: "Array",
              pageOption: true,
              default: ""
            },
            {
              name: "disabled",
              chinaName: "禁用",
              type: "Boolean",
              default: false
            }
          ]
        },
        type: Array
      }
    },
    events: {
      click: {
        des: "某一项被点击函数",
        args: ["event", "name", "path", "index"]
      }
    }
  },
  examples: [
    {
      name: "基础用法",
      img: "breadcrumb",
      props: {
        data: [
          {
            name: "首页",
            disabled: false,
            path: "/default/test1"
          },
          {
            name: "活动管理",
            disabled: false,
            path: "/default/test2"
          },
          {
            name: "活动列表",
            disabled: false,
            style: {
              "text-decoration": "underline"
            },
            path: "/default/test3"
          },
          {
            name: "活动详情",
            disabled: false,
            style: {
              color: "#606266"
            },
            path: "/default/test4"
          }
        ]
      }
    }
  ]
};
