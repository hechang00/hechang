var what = {
  id: 'jm-draggable',
  needRegis: true,
  name: '拖拽列表',
  grouptype: '数据组件',
  img: 'draggable-list',
  icon:''
}

var props = {
    height:{
        default:'40px',
        des:'列表单个高度',
        type:String
    },
    group:{
        default:'items',
        des:'唯一标识',
        type:String
    },
    list: {
        default: [],
        des: '数据配置',
        type: Array
    }
}
what.props = props;

var events = {
    change: {
        des: "列表数据",
        args: ['value']
    }
}
what.events = events

let examples = [{
    name: "基础用法",
    img: "draggable-list",
    props: {
        list: [
            {
                data: [{
                    name: "vue.draggable",
                    id: 1
                },
                {
                    name: "draggable",
                    id: 2
                },
                {
                    name: "component",
                    id: 3
                },
                {
                    name: "for",
                    id: 4
                },]
            },
            {
                data: [{
                    name: "vue.js 2.0",
                    id: 5
                },
                {
                    name: "based",
                    id: 6
                },
                {
                    name: "on",
                    id: 7
                }, {
                    name: "Sortablejs",
                    id: 8
                }]
            }
        ],
    }
}]

export default {
    what: what,
    examples: examples
}