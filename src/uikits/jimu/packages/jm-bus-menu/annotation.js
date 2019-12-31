import {
    Color
} from '../../../type';
export default {
  what: {
    id: "jm-bus-menu",
    needRegis: true,
    name: "power2菜单",
    grouptype: "公司业务组件",
    icon: "",
    img: "nav_menu",
    props: {
      items: {
        default: [],
        des: "默认导航栏选项",
        type: Array
      },
      mode: {
        default: "horizontal",
        des: "模式",
        type: String,
        enumValue: [
          {
            value: "horizontal",
            des: "水平"
          },
          {
            value: "vertical",
            des: "垂直"
          }
        ]
      },
      isCollapse: {
        default: false,
        des: "是否折叠",
        type: Boolean
      },
      activeIndex: {
        default: "",
        des: "默认选择项",
        type: String
      },
      backgroundColor: {
        default: "#ffffff",
        des: "背景颜色",
        type: Color
      },
      textColor: {
        default: "#303133",
        des: "字体颜色",
        type: Color
      },
      activeTextColor: {
        default: "#409EFF",
        des: "高亮字体颜色",
        type: Color
      },
      baseUrl: {
        default: "https://power.cf.com/",
        type: String,
        des: "基础url"
      },
      router: {
        default: false,
        type: Boolean,
        title: "是否开启路由跳转(发布包预览生效)"
      },
      openNetReq: {
        default: true,
        type: Boolean,
        title: "是否使用网络加载power2菜单"
      },
      useUsername: {
        default: false,
        type: Boolean,
        title: "是否使用用户名加载菜单"
      },
      systemId: {
        default: 259,
        type: Number,
        title: "系统ID"
      }
    },
    events: {
      instance: {
        args: ["vm"],
        des: "初始化获取菜单实例"
      },
      select: {
        des: "菜单激活回调",
        args: ["index", "indexPath"]
      },
      open: {
        des: "sub-menu展开的回调",
        args: ["index", "indexPath"]
      },
      close: {
        des: "sub-menu收起的回调",
        args: ["index", "indexPath"]
      },
      itemClick: {
        des: "菜单项点击事件回调",
        args: ["event", "index", "currentMenu"]
      }
    }
  },
  examples: [
    {
      name: "水平导航栏",
      img: "hor_nav",
      props: {
        items: [
          {
            title: "一级菜单 一",
            value: "/default/test1",
            disabled: false
          },
          {
            title: "一级菜单 二",
            value: "/default/test2",
            subItems: [
              {
                title: "二级菜单 二/一",
                value: "/default/test2/1"
              },
              {
                title: "二级菜单 二/二",
                value: "/default/test2/2"
              }
            ]
          }
        ],
        style_flex: 1,
        mode: "horizontal",
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px"
      }
    },
    {
      name: "竖直导航栏",
      props: {
        id: "41474",
        items: [
          {
            title: "导航一",
            value: "/default/test1",
            icon: "el-icon-location"
          },
          {
            title: "导航二",
            value: "/default/test2",
            icon: "el-icon-menu",
            subItems: [
              {
                title: "选项2-1",
                value: "/default/test2/1",
                disabled: false
              },
              {
                title: "分组2-2",
                value: "/default/test2/2",
                subItems: [
                  {
                    title: "选项221",
                    value: "/default/test2/2/1",
                    disabled: false
                  },
                  {
                    title: "选项222",
                    value: "/default/test2/2/2"
                  }
                ]
              }
            ]
          },
          {
            title: "导航三",
            value: "/default/test3",
            icon: "el-icon-setting"
          }
        ],
        mode: "vertical",
        backgroundColor: "#303133",
        textColor: "#ffffff",
        style_flex: 0,
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px",
        style_width: "250px"
      }
    },
    {
      img: "hor_nav2",
      name: "路由跳转菜单",
      props: {
        router: true,
        items: [
          {
            title: "导航一",
            value: "/default/test1",
            icon: "el-icon-location"
          },
          {
            title: "导航二",
            value: "/default/test2",
            icon: "el-icon-menu",
            subItems: [
              {
                title: "选项2-1",
                value: "/default/test2/1",
                disabled: false
              },
              {
                title: "分组2-2",
                value: "/default/test2/2",
                subItems: [
                  {
                    title: "选项221",
                    value: "/default/test2/2/1",
                    disabled: false
                  },
                  {
                    title: "选项222",
                    value: "/default/test2/2/2"
                  }
                ]
              }
            ]
          },
          {
            title: "导航三",
            value: "/default/test3",
            icon: "el-icon-setting"
          }
        ],
        mode: "vertical",
        backgroundColor: "#303133",
        textColor: "#ffffff",
        style_flex: 0,
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px",
        style_width: "250px"
      }
    }
  ]
};