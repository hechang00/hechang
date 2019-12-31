import { Color } from "../../../type";
export default {
  what: {
    id: "mavon-editor",
    name: "mk编辑器",
    grouptype: "编辑类",
    img: "simple_md",
    priority: "880",
    props: {
      value: {
        language: "html",
        default: "",
        title: "初始值",
        model: true,
        type: String
      },
      fontSize: {
        default: "15px",
        title: "编辑区域文字大小",
        type: String
      },
      scrollStyle: {
        default: true,
        title: "开启滚动条样式(仅支持chrome)",
        type: Boolean
      },
      boxShadow: {
        default: true,
        title: "开启边框阴影",
        type: Boolean
      },
      boxShadowStyle: {
        default: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
        title: "边框阴影样式",
        type: String
      },
      transition: {
        default: true,
        des: "是否开启过渡动画",
        type: Boolean
      },
      toolbarsBackground: {
        default: "#ffffff",
        type: Color,
        title: "工具栏背景颜色"
      },
      previewBackground: {
        default: "#fbfbfb",
        type: Color,
        title: "工具栏背景颜色"
      },
      subfield: {
        default: true,
        title: "是否双栏展示",
        des: "true:双栏(编辑预览同屏),false:单栏(编辑预览分屏)",
        type: Boolean
      },
      defaultOpen: {
        default: undefined,
        title: "默认展示区域",
        type: String,
        enumValue: [
          { value: undefined, des: "不设置" },
          { value: "edit", des: "编辑区域" },
          { value: "preview", des: "预览区域" }
        ]
      },
      placeholder: {
        default: "开始编辑...",
        title: "输入框为空时默认提示文本",
        type: String
      },
      editable: {
        default: true,
        title: "是否允许编辑",
        type: Boolean
      },
      codeStyle: {
        default: "github",
        type: String,
        title: "样式",
        enumValue: [
          { value: "agate" },
          { value: "androidstudio" },
          { value: "arduino-light" },
          { value: "arta" },
          { value: "ascetic" },
          { value: "atelier-cave-dark" },
          { value: "atelier-cave-light" },
          { value: "atelier-dune-dark" },
          { value: "atelier-dune-light" },
          { value: "atelier-estuary-dark" },
          { value: "atelier-estuary-light" },
          { value: "atelier-forest-dark" },
          { value: "atelier-forest-light" },
          { value: "atelier-heath-dark" },
          { value: "atelier-heath-light" },
          { value: "atelier-lakeside-dark" },
          { value: "atelier-lakeside-light" },
          { value: "atelier-plateau-dark" },
          { value: "atelier-plateau-light" },
          { value: "atelier-savanna-dark" },
          { value: "atelier-savanna-light" },
          { value: "atelier-seaside-dark" },
          { value: "atelier-seaside-light" },
          { value: "atelier-sulphurpool-dark" },
          { value: "atelier-sulphurpool-light" },
          { value: "atom-one-dark" },
          { value: "atom-one-light" },
          { value: "brown-paper" },
          { value: "codepen-embed" },
          { value: "color-brewer" },
          { value: "darcula" },
          { value: "dark" },
          { value: "darkula" },
          { value: "default" },
          { value: "docco" },
          { value: "dracula" },
          { value: "far" },
          { value: "foundation" },
          { value: "github-gist" },
          { value: "github" },
          { value: "googlecode" },
          { value: "grayscale" },
          { value: "gruvbox-dark" },
          { value: "gruvbox-light" },
          { value: "hopscotch" },
          { value: "hybrid" },
          { value: "idea" },
          { value: "ir-black" },
          { value: "kimbie.dark" },
          { value: "kimbie.light" },
          { value: "magula" },
          { value: "mono-blue" },
          { value: "monokai-sublime" },
          { value: "monokai" },
          { value: "obsidian" },
          { value: "ocean" },
          { value: "paraiso-dark" },
          { value: "paraiso-light" },
          { value: "pojoaque" },
          { value: "purebasic" },
          { value: "qtcreator_dark" },
          { value: "qtcreator_light" },
          { value: "railscasts" },
          { value: "rainbow" },
          { value: "routeros" },
          { value: "school-book" },
          { value: "solarized-dark" },
          { value: "solarized-light" },
          { value: "sunburst" },
          { value: "tomorrow-night-blue" },
          { value: "tomorrow-night-bright" },
          { value: "tomorrow-night-eighties" },
          { value: "tomorrow-night" },
          { value: "tomorrow" },
          { value: "vs" },
          { value: "vs2015" },
          { value: "xcode" },
          { value: "xt256" },
          { value: "zenburn" }
        ]
      },
      toolbarsFlag: {
        default: true,
        title: "工具栏是否显示",
        type: Boolean
      },
      navigation: {
        default: false,
        title: "默认展示目录",
        type: Boolean
      },
      shortCut: {
        default: true,
        title: "是否启用快捷键",
        type: Boolean
      },
      autofocus: {
        default: true,
        title: "自动聚焦到文本框",
        type: Boolean
      },
      ishljs: {
        default: true,
        title: "代码高亮",
        type: Boolean
      },
      imageFilter: {
        default: "",
        type: Function,
        title: "图片过滤函数"
      },
      imageClick: {
        default: "",
        type: Function,
        title: "图片点击事件"
      },
      tabSize: {
        default: undefined,
        type: Number,
        title: "tab转化为几个空格"
      },
      toolbars: {
        default: {},
        type: Object,
        title: "工具栏"
      },
      language: {
        language: "zh",
        title: "语言选择",
        type: String,
        enumValue: [
          { value: "zh-CN", des: "中文简体" },
          { value: "en", des: "英文" },
          { value: "fr", des: "法语" },
          { value: "pt-BR", des: "葡萄牙语" },
          { value: "ru", des: "俄语" },
          { value: "de", des: "德语" },
          { value: "ja", des: "日语" }
        ]
      }
    },
    events: {
      change: {
        des: "编辑区发生变化的回调事件",
        args: ["value", "render"]
      },
      save: {
        des: "保存的回调事件(",
        args: ["value", "render"]
      },
      fullScreen: {
        des: "切换全屏编辑的回调事件",
        args: ["status", "value"]
      },
      readModel: {
        des: "切换沉浸式阅读的回调事件",
        args: ["status", "value"]
      },
      htmlCode: {
        des: "查看html源码的回调事件",
        args: ["status", "value"]
      },
      subfieldToggle: {
        des: "切换单双栏编辑的回调事件",
        args: ["status", "value"]
      },
      previewToggle: {
        des: "切换预览编辑的回调事件",
        args: ["status", "value"]
      },
      helpToggle: {
        des: "查看帮助的回调事件",
        args: ["status", "value"]
      },
      navigationToggle: {
        des: "切换导航目录的回调事件",
        args: ["status", "value"]
      },
      imgAdd: {
        des: "图片文件添加回调事件",
        args: ["filename", "imgfile"]
      },
      imgDel: {
        des: "图片文件删除回调事件",
        args: ["filename"]
      }
    }
  },
  examples: [
    {
      name: "基本示例",
      img: "markdown",
      props: {
        tabSize: 4,
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true // 预览
        }
      }
    },
    {
      name: "无工具栏",
      img: "markdown",
      props: {
        tabSize: 4,
        style_flex: 1,
        toolbarsFlag: false
      }
    },
    {
      name: "预览示例",
      img: "markdown",
      props: {
        tabSize: 4,
        style_flex: 1,
        toolbarsFlag: false,
        subfield: false,
        value: `# 我是标题
我是正文`,
        defaultOpen: "preview"
      }
    }
  ]
};
