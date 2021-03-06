import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-layout-complex',
        img: 'layout35',
        isContainer: true,
        name: '复合布局',
        link:"https://element.eleme.io/#/zh-CN/component/layout",
        temp: '<span>复合布局</span>',
        props: {},
        events: {}
    },
    examples: [{
            name: 'asideHeaderMain',
            img: 'layout35',
            id: 'jm-layout',
            props: {
                justify: 'row',
                align: 'stretch',
                bgcolor: '#f0f2f5',
                style_flex: 0,
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        wrap: 'nowrap',
                        style_flex: 0,
                        isFixedWidth: true,
                        width: '256px',
                        flexShrink: 0,
                        bgcolor: '#001529',
                        align: 'stretch',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        align: 'stretch',
                        bgcolor: '#f0f2f5',
                        style_flex: 1,
                        wrap: 'nowrap',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0
                    },
                    children: [{
                            id: 'jm-layout',
                            props: {
                                height: '64px',
                                justify: 'row',
                                style_flex: 0,
                                bgcolor: '#B3C0D1',
                                minHeight: 0,
                                align: 'flex-start',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0,
                                noShow: ['alignContent']
                            }
                        },
                        {
                            id: 'jm-layout',
                            props: {
                                justify: 'column',
                                wrap: 'nowrap',
                                style_flex: 1,
                                minHeight: 0,
                                bgcolor: '#F0F2F5',
                                align: 'stretch',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '24px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'headerMain',
            img: 'layout30',
            id: 'jm-layout',
            props: {
                name: 'jm-layout',
                justify: 'column',
                align: 'stretch',
                bgcolor: '#f0f2f5',
                style_flex: 0,
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        height: '64px',
                        justify: 'row',
                        bgcolor: '#B3C0D1',
                        align: 'flex-start',
                        direction: 'flex-start',
                        style_flex: 0,
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0,
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        wrap: 'nowrap',
                        style_flex: '1',
                        bgcolor: '#F0F2F5',
                        align: 'stretch',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '24px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0
                    }
                }
            ]
        },
        {
            name: 'headerMainFooter',
            img: 'layout31',
            id: 'jm-layout',
            props: {
                justify: 'column',
                align: 'stretch',
                bgcolor: '#f0f2f5',
                style_flex: 0,
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                tyle_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        height: '64px',
                        justify: 'row',
                        style_flex: 0,
                        bgcolor: '#B3C0D1',
                        align: 'flex-start',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0,
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        wrap: 'nowrap',
                        style_flex: 5,
                        minHeight: 0,
                        bgcolor: '#F0F2F5',
                        align: 'stretch',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '24px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minWidth: 0
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        row: 'row',
                        style_flex: 0,
                        bgcolor: '#B3C0D1',
                        align: 'flex-start',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0,
                        noShow: ['alignContent']
                    }
                }
            ]
        },
        {
            name: 'asideMain',
            img: 'layout32',
            id: 'jm-layout',
            props: {
                justify: 'row',
                align: 'stretch',
                style_flex: 0,
                bgcolor: '#d3dce6',
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        wrap: 'nowrap',
                        style_flex: 0,
                        isFixedWidth: true,
                        width: '256px',
                        flexShrink: 0,
                        minHeight: 0,
                        bgcolor: '#D3DCE6',
                        align: 'stretch',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minWidth: 0
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        wrap: 'nowrap',
                        style_flex: 1,
                        minHeight: 0,
                        bgcolor: '#F0F2F5',
                        align: 'stretch',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '24px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minWidth: 0
                    }
                }
            ]
        },
        {
            name: 'headerAsideMain',
            img: 'layout33',
            id: 'jm-layout',
            props: {
                justify: 'column',
                align: 'stretch',
                bgcolor: '#f0f2f5',
                style_flex: 0,
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        height: '64px',
                        justify: 'row',
                        style_flex: 0,
                        bgcolor: '#B3C0D1',
                        align: 'flex-start',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0,
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'row',
                        align: 'stretch',
                        bgcolor: '#f0f2f5',
                        style_flex: 1,
                        wrap: 'nowrap',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0
                    },
                    children: [{
                            id: 'jm-layout',
                            props: {
                                justify: 'column',
                                wrap: 'nowrap',
                                style_flex: 0,
                                minHeight: 0,
                                isFixedWidth: true,
                                width: '256px',
                                flexShrink: 0,
                                bgcolor: '#D3DCE6',
                                align: 'stretch',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0
                            }
                        },
                        {
                            id: 'jm-layout',
                            props: {
                                justify: 'column',
                                wrap: 'nowrap',
                                style_flex: 1,
                                minHeight: 0,
                                bgcolor: '#F0F2F5',
                                align: 'stretch',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '24px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'headerAsideMainFooter',
            img: 'layout34',
            id: 'jm-layout',
            props: {
                justify: 'column',
                align: 'stretch',
                bgcolor: '#f0f2f5',
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        height: '64px',
                        justify: 'row',
                        style_flex: 0,
                        bgcolor: '#B3C0D1',
                        align: 'flex-start',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0,
                        noShow: ['alignContent']
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'row',
                        align: 'stretch',
                        bgcolor: '#f0f2f5',
                        style_flex: 1,
                        wrap: 'nowrap',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0
                    },
                    children: [{
                            id: 'jm-layout',
                            props: {
                                justify: 'column',
                                wrap: 'nowrap',
                                style_flex: 0,
                                isFixedWidth: true,
                                width: '256px',
                                flexShrink: 0,
                                minHeight: 0,
                                bgcolor: '#D3DCE6',
                                align: 'stretch',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0
                            }
                        },
                        {
                            id: 'jm-layout',
                            props: {
                                justify: 'column',
                                align: 'stretch',
                                bgcolor: '#f0f2f5',
                                style_flex: 1,
                                wrap: 'nowrap',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minHeight: 0,
                                minWidth: 0
                            },
                            children: [{
                                    id: 'jm-layout',
                                    props: {
                                        justify: 'column',
                                        wrap: 'nowrap',
                                        style_flex: 1,
                                        minHeight: 0,
                                        bgcolor: '#F0F2F5',
                                        align: 'stretch',
                                        direction: 'flex-start',
                                        paddingLeft: '0px',
                                        paddingRight: '0px',
                                        paddingTop: '0px',
                                        paddingBottom: '24px',
                                        style_marginLeft: '0px',
                                        style_marginRight: '0px',
                                        style_marginTop: '0px',
                                        style_marginBottom: '0px',
                                        notBorderHint: true,
                                        minWidth: 0
                                    }
                                },
                                {
                                    id: 'jm-layout',
                                    props: {
                                        justify: 'row',
                                        style_flex: 0,
                                        bgcolor: '#B3C0D1',
                                        minHeight: 0,
                                        align: 'flex-start',
                                        direction: 'flex-start',
                                        paddingLeft: '0px',
                                        paddingRight: '0px',
                                        paddingTop: '0px',
                                        paddingBottom: '0px',
                                        style_marginLeft: '0px',
                                        style_marginRight: '0px',
                                        style_marginTop: '0px',
                                        style_marginBottom: '0px',
                                        notBorderHint: true,
                                        minWidth: 0,
                                        noShow: ['alignContent']
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'asideHeaderMainFooter',
            img: 'layout36',
            id: 'jm-layout',
            props: {
                justify: 'row',
                align: 'stretch',
                bgcolor: '#f0f2f5',
                style_flex: 0,
                wrap: 'nowrap',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                style_marginLeft: '0px',
                style_marginRight: '0px',
                style_marginTop: '0px',
                style_marginBottom: '0px',
                notBorderHint: true,
                minHeight: '100vh',
                minWidth: 0
            },
            children: [{
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        wrap: 'nowrap',
                        style_flex: 0,
                        isFixedWidth: true,
                        width: '256px',
                        flexShrink: 0,
                        minHeight: 0,
                        bgcolor: '#001529',
                        align: 'stretch',
                        direction: 'flex-start',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minWidth: 0
                    }
                },
                {
                    id: 'jm-layout',
                    props: {
                        justify: 'column',
                        align: 'stretch',
                        bgcolor: '#f0f2f5',
                        style_flex: 1,
                        wrap: 'nowrap',
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        style_marginLeft: '0px',
                        style_marginRight: '0px',
                        style_marginTop: '0px',
                        style_marginBottom: '0px',
                        notBorderHint: true,
                        minHeight: 0,
                        minWidth: 0
                    },
                    children: [{
                            id: 'jm-layout',
                            props: {
                                height: '64px',
                                justify: 'row',
                                style_flex: 0,
                                bgcolor: '#B3C0D1',
                                minHeight: 0,
                                align: 'flex-start',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0,
                                noShow: ['alignContent']
                            }
                        },
                        {
                            id: 'jm-layout',
                            props: {
                                justify: 'column',
                                wrap: 'nowrap',
                                style_flex: 1,
                                bgcolor: '#F0F2F5',
                                minHeight: 0,
                                align: 'stretch',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '24px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0
                            }
                        },
                        {
                            id: 'jm-layout',
                            props: {
                                justify: 'row',
                                style_flex: 0,
                                bgcolor: '#B3C0D1',
                                minHeight: 0,
                                align: 'flex-start',
                                direction: 'flex-start',
                                paddingLeft: '0px',
                                paddingRight: '0px',
                                paddingTop: '0px',
                                paddingBottom: '0px',
                                style_marginLeft: '0px',
                                style_marginRight: '0px',
                                style_marginTop: '0px',
                                style_marginBottom: '0px',
                                notBorderHint: true,
                                minWidth: 0,
                                noShow: ['alignContent']
                            }
                        }
                    ]
                }
            ]
        }
    ]
}