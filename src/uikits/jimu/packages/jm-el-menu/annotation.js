import {
    Color
} from '../../../type';
export default {
  what: {
    id: "jm-el-menu",
    needRegis: true,
    name: "导航菜单",
    priority: 999,
    link: "https://element.eleme.io/#/zh-CN/component/menu",
    grouptype: "导航组件",
    img: "nav_menu",
    icon: "",
    props: {
      items: {
        default: [],
        des: "导航栏选项",
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
      flex: {
        default: 1,
        des: "是否占满剩余空间",
        type: Number
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
      lazy: {
        default: false,
        des: "是否懒加载子菜单,需与open函数结合使用",
        type: Boolean
      },
      associationId: {
        default: "",
        type: String,
        des: "关联页面容器ID"
      },
      router: {
        default: false,
        type: Boolean,
        title: "是否开启路由跳转(发布包预览生效)"
      },
      uniqueOpened: {
        default: true,
        type: Boolean,
        title: "是否只保持一个子菜单的展开"
      },
      defaultOpeneds: {
        default: [],
        type: Array,
        title: "当前打开的子菜单的value的数组"
      },
      menuTrigger: {
        title: "子菜单打开的触发方式",
        des: "子菜单打开的触发方式(只在model为horizontal时有效)",
        default: "hover",
        type: String,
        enumValue: [{ value: "hover" }, { value: "click" }]
      },
      collapseTransition: {
        title: "是否开启折叠动画",
        default: true,
        type: Boolean
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
      img: "hor_nav2",
      name: "竖直导航栏",
      props: {
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