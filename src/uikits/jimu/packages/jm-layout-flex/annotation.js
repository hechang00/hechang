import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-layout-flex',
        grouptype: '布局组件',
        img: 't_layout',
        icon:'',
        link:"http://jimudev.oa.com/ops/docs/guide/page-layout.html#%E5%9F%BA%E7%A1%80%E5%B8%83%E5%B1%80",
        isContainer: true,
        name: '基础布局',
        props: {},
        events: {}
    },
    examples: [{
            name: '一行双列',
            img: 'layout1_2',
            id: 'jm-layout',
            props: {
                needChangeHeight: true,
                justify: 'row',
                align: 'stretch',
                bgcolor: '#FFFFFF',
                style_flex: 0,
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                wrap: 'nowrap',
                value: 0,
                minWidth: 0,
                minHeight: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        name: 'jm-layout',
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                }
            ]
        },
        {
            name: '一行单列',
            img: 'layout1_1',
            id: 'jm-layout',
            props: {
                needChangeHeight: true,
                justify: 'row',
                align: 'flex-start',
                direction: 'flex-start',
                style_flex: 0,
                flexBasis: 'auto',
                style_marginLeft: '4px',
                style_marginRight: '4px',
                style_marginTop: '0px',
                style_marginBottom: '4px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                wrap: 'wrap',
                isFlex: true,
                noShow: ['alignContent']
            }
        },
        {
            name: '一行三列',
            img: 'layout1_3',
            id: 'jm-layout',
            props: {
                needChangeHeight: true,
                justify: 'row',
                align: 'stretch',
                bgcolor: '#FFFFFF',
                style_flex: 0,
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                wrap: 'nowrap',
                value: 0,
                minWidth: 0,
                minHeight: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                }
            ]
        },
        {
            name: '一行四列',
            img: 'layout1_4',
            id: 'jm-layout',
            props: {
                needChangeHeight: true,
                justify: 'row',
                align: 'stretch',
                bgcolor: '#FFFFFF',
                style_flex: 0,
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                wrap: 'nowrap',
                value: 0,
                minWidth: 0,
                minHeight: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        name: 'jm-layout',
                        needChangeHeight: true,
                        justify: 'row',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 1,
                        flexBasis: '0',
                        isFlex: true,
                        style_marginLeft: '4px',
                        style_marginRight: '4px',
                        style_marginTop: '0px',
                        style_marginBottom: '4px',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        wrap: 'wrap',
                        noShow: ['alignContent']
                    }
                }
            ]
        }
    ]
}