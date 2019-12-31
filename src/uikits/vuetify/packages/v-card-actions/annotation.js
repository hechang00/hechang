export default {
    what: {
        id: 'v-card-actions',
        name: '卡片操作',
        grouptype: '卡片',
        img: 'htmlInput',
        link: "https://vuetifyjs.com/zh-Hans/components/cards",
		icon:'',
        props: {
            innerText: {
				default: "",
				title: '文本内容',
				type: String
			}
        },
        slots: {
            default: {
                des: '内容插槽',
                title: '内容插槽',
                components: []
            },
        },
    },
    examples: [
        {
            img: 'v_card',
            name: '基本用法',
            props: {},
            slots: {
                default: [
                    {
                        id: 'v-btn',
                        name: 'v-btn',
                        props: {value: "center"},
                        slots: {
                            default: [
                              {text: "Button"}
                            ]
                        }
                    },
                    {
                        id: 'v-btn',
                        name: 'v-btn',
                        props: {value: "center"},
                        slots: {
                            default: [
                              {text: "Button"}
                            ]
                        }
                    }
                ]
            }
        }
    ]
}