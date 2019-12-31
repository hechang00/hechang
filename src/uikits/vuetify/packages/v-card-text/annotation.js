export default {
    what: {
        id: 'v-card-text',
        name: '卡片文本',
        grouptype: '卡片',
        img: 'list_action_text',
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
                    { text: `I'm a card text` },
                ]
            }
        }
    ]
}