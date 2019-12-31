export default {
    what: {
        id: 'v-card-title',
        name: '卡片标题',
        grouptype: '卡片',
        img: 'v_subheader',
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
            id: 'v-card-title',
            slots: {
                default: [
                    { text: `I'm a card title` },
                ]
            }
        }
    ]
}