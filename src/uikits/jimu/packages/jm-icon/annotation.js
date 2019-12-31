import {
    Color
} from '../../../type';
export default {
    what: {
        id: 'jm-icon',
        name: '图标',
        link:"https://element.eleme.io/#/zh-CN/component/icon",
        needRegis: true,
        props: {
            size: {
                default: 24,
                des: '尺寸',
                type: Number
            },
            color: {
                default: '#303133',
                des: '颜色',
                type: Color
            },
            iconName: {
                default: '',
                des: '图标index',
                type: String
            },
            type: {
                default: 'undefined',
                des: '类名',
                needIcon: true,
                type: String,
                enumValue: [{
                        value: ''
                    },
                    {
                        value: 'el-icon-info'
                    },
                    {
                        value: 'el-icon-error'
                    },
                    {
                        value: 'el-icon-success'
                    },
                    {
                        value: 'el-icon-warning'
                    },
                    {
                        value: 'el-icon-warning-outline'
                    },
                    {
                        value: 'el-icon-question'
                    },
                    {
                        value: 'el-icon-back'
                    },
                    {
                        value: 'el-icon-arrow-left'
                    },
                    {
                        value: 'el-icon-arrow-down'
                    },
                    {
                        value: 'el-icon-arrow-right'
                    },
                    {
                        value: 'el-icon-arrow-up'
                    },
                    {
                        value: 'el-icon-caret-left'
                    },
                    {
                        value: 'el-icon-caret-bottom'
                    },
                    {
                        value: 'el-icon-caret-top'
                    },
                    {
                        value: 'el-icon-bottom-left'
                    },
                    {
                        value: 'el-icon-bottom-right'
                    },
                    {
                        value: 'el-icon-top-left'
                    },
                    {
                        value: 'el-icon-top-right'
                    },
                    {
                        value: 'el-icon-caret-right'
                    },
                    {
                        value: 'el-icon-d-arrow-left'
                    },
                    {
                        value: 'el-icon-d-arrow-right'
                    },
                    {
                        value: 'el-icon-minus'
                    },
                    {
                        value: 'el-icon-plus'
                    },
                    {
                        value: 'el-icon-remove'
                    },
                    {
                        value: 'el-icon-circle-plus'
                    },
                    {
                        value: 'el-icon-remove-outline'
                    },
                    {
                        value: 'el-icon-circle-plus-outline'
                    },
                    {
                        value: 'el-icon-close'
                    },
                    {
                        value: 'el-icon-check'
                    },
                    {
                        value: 'el-icon-circle-close'
                    },
                    {
                        value: 'el-icon-circle-check'
                    },
                    {
                        value: 'el-icon-s-help'
                    },
                    {
                        value: 'el-icon-help'
                    },
                    {
                        value: 'el-icon-platform-eleme'
                    },
                    {
                        value: 'el-icon-eleme'
                    },
                    {
                        value: 'el-icon-cpu'
                    },
                    {
                        value: 'el-icon-link'
                    },
                    {
                        value: 'el-icon-connection'
                    },
                    {
                        value: 'el-icon-open'
                    },
                    {
                        value: 'el-icon-turn-off'
                    },
                    {
                        value: 'el-icon-set-up'
                    },
                    {
                        value: 'el-icon-coin'
                    },
                    {
                        value: 'el-icon-wallet'
                    },
                    {
                        value: 'el-icon-discount'
                    },
                    {
                        value: 'el-icon-price-tag'
                    },
                    {
                        value: 'el-icon-guide'
                    },
                    {
                        value: 'el-icon-money'
                    },
                    {
                        value: 'el-icon-bank-card'
                    },
                    {
                        value: 'el-icon-mouse'
                    },
                    {
                        value: 'el-icon-coordinate'
                    },
                    {
                        value: 'el-icon-headset'
                    },
                    {
                        value: 'el-icon-umbrella'
                    },
                    {
                        value: 'el-icon-scissors'
                    },
                    {
                        value: 'el-icon-attract'
                    },
                    {
                        value: 'el-icon-video-pause'
                    },
                    {
                        value: 'el-icon-video-play'
                    },
                    {
                        value: 'el-icon-brush'
                    },
                    {
                        value: 'el-icon-magic-stick'
                    },
                    {
                        value: 'el-icon-reading'
                    },
                    {
                        value: 'el-icon-data-line'
                    },
                    {
                        value: 'el-icon-data-board'
                    },
                    {
                        value: 'el-icon-pie-chart'
                    },
                    {
                        value: 'el-icon-data-analysis'
                    },
                    {
                        value: 'el-icon-collection-tag'
                    },
                    {
                        value: 'el-icon-film'
                    },
                    {
                        value: 'el-icon-suitcase'
                    },
                    {
                        value: 'el-icon-suitcase-1'
                    },
                    {
                        value: 'el-icon-receiving'
                    },
                    {
                        value: 'el-icon-collection'
                    },
                    {
                        value: 'el-icon-files'
                    },
                    {
                        value: 'el-icon-notebook-1'
                    },
                    {
                        value: 'el-icon-notebook-2'
                    },
                    {
                        value: 'el-icon-toilet-paper'
                    },
                    {
                        value: 'el-icon-office-building'
                    },
                    {
                        value: 'el-icon-school'
                    },
                    {
                        value: 'el-icon-table-lamp'
                    },
                    {
                        value: 'el-icon-house'
                    },
                    {
                        value: 'el-icon-no-smoking'
                    },
                    {
                        value: 'el-icon-smoking'
                    },
                    {
                        value: 'el-icon-shopping-cart-full'
                    },
                    {
                        value: 'el-icon-shopping-cart-1'
                    },
                    {
                        value: 'el-icon-shopping-cart-2'
                    },
                    {
                        value: 'el-icon-shopping-bag-1'
                    },
                    {
                        value: 'el-icon-shopping-bag-2'
                    },
                    {
                        value: 'el-icon-zoom-out'
                    },
                    {
                        value: 'el-icon-zoom-in'
                    },
                    {
                        value: 'el-icon-d-caret'
                    },
                    {
                        value: 'el-icon-sort'
                    },
                    {
                        value: 'el-icon-sort-down'
                    },
                    {
                        value: 'el-icon-sort-up'
                    },
                    {
                        value: 'el-icon-tickets'
                    },
                    {
                        value: 'el-icon-document-remove'
                    },
                    {
                        value: 'el-icon-document-delete'
                    },
                    {
                        value: 'el-icon-document-copy'
                    },
                    {
                        value: 'el-icon-document-checked'
                    },
                    {
                        value: 'el-icon-document-add'
                    },
                    {
                        value: 'el-icon-document'
                    },
                    {
                        value: 'el-icon-goods'
                    },
                    {
                        value: 'el-icon-sold-out'
                    },
                    {
                        value: 'el-icon-sell'
                    },
                    {
                        value: 'el-icon-present'
                    },
                    {
                        value: 'el-icon-box'
                    },
                    {
                        value: 'el-icon-news'
                    },
                    {
                        value: 'el-icon-message'
                    },
                    {
                        value: 'el-icon-date'
                    },
                    {
                        value: 'el-icon-printer'
                    },
                    {
                        value: 'el-icon-paperclip'
                    },
                    {
                        value: 'el-icon-takeaway-box'
                    },
                    {
                        value: 'el-icon-time'
                    },
                    {
                        value: 'el-icon-odometer'
                    },
                    {
                        value: 'el-icon-bell'
                    },
                    {
                        value: 'el-icon-mobile'
                    },
                    {
                        value: 'el-icon-mobile-phone'
                    },
                    {
                        value: 'el-icon-bicycle'
                    },
                    {
                        value: 'el-icon-truck'
                    },
                    {
                        value: 'el-icon-ship'
                    },
                    {
                        value: 'el-icon-basketball'
                    },
                    {
                        value: 'el-icon-football'
                    },
                    {
                        value: 'el-icon-soccer'
                    },
                    {
                        value: 'el-icon-baseball'
                    },
                    {
                        value: 'el-icon-wind-power'
                    },
                    {
                        value: 'el-icon-service'
                    },
                    {
                        value: 'el-icon-view'
                    },
                    {
                        value: 'el-icon-menu'
                    },
                    {
                        value: 'el-icon-more'
                    },
                    {
                        value: 'el-icon-more-outline'
                    },
                    {
                        value: 'el-icon-star-on'
                    },
                    {
                        value: 'el-icon-star-off'
                    },
                    {
                        value: 'el-icon-location'
                    },
                    {
                        value: 'el-icon-location-outline'
                    },
                    {
                        value: 'el-icon-location-information'
                    },
                    {
                        value: 'el-icon-add-location'
                    },
                    {
                        value: 'el-icon-delete-location'
                    },
                    {
                        value: 'el-icon-map-location'
                    },
                    {
                        value: 'el-icon-phone'
                    },
                    {
                        value: 'el-icon-phone-outline'
                    },
                    {
                        value: 'el-icon-picture'
                    },
                    {
                        value: 'el-icon-picture-outline'
                    },
                    {
                        value: 'el-icon-picture-outline-round'
                    },
                    {
                        value: 'el-icon-delete-solid'
                    },
                    {
                        value: 'el-icon-delete'
                    },
                    {
                        value: 'el-icon-s-tools'
                    },
                    {
                        value: 'el-icon-user-solid'
                    },
                    {
                        value: 'el-icon-user'
                    },
                    {
                        value: 'el-icon-monitor'
                    },
                    {
                        value: 'el-icon-search'
                    },
                    {
                        value: 'el-icon-edit'
                    },
                    {
                        value: 'el-icon-edit-outline'
                    },
                    {
                        value: 'el-icon-rank'
                    },
                    {
                        value: 'el-icon-refresh'
                    },
                    {
                        value: 'el-icon-refresh-right'
                    },
                    {
                        value: 'el-icon-refresh-left'
                    },
                    {
                        value: 'el-icon-finished'
                    },
                    {
                        value: 'el-icon-share'
                    },
                    {
                        value: 'el-icon-setting'
                    },
                    {
                        value: 'el-icon-upload'
                    },
                    {
                        value: 'el-icon-upload2'
                    },
                    {
                        value: 'el-icon-download'
                    },
                    {
                        value: 'el-icon-loading'
                    },
                    {
                        value: 'el-icon-camera-solid'
                    },
                    {
                        value: 'el-icon-camera'
                    },
                    {
                        value: 'el-icon-video-camera-solid'
                    },
                    {
                        value: 'el-icon-video-camera'
                    },
                    {
                        value: 'el-icon-message-solid'
                    },
                    {
                        value: 'el-icon-s-cooperation'
                    },
                    {
                        value: 'el-icon-s-order'
                    },
                    {
                        value: 'el-icon-s-platform'
                    },
                    {
                        value: 'el-icon-s-fold'
                    },
                    {
                        value: 'el-icon-s-unfold'
                    },
                    {
                        value: 'el-icon-s-operation'
                    },
                    {
                        value: 'el-icon-s-promotion'
                    },
                    {
                        value: 'el-icon-s-home'
                    },
                    {
                        value: 'el-icon-s-release'
                    },
                    {
                        value: 'el-icon-s-ticket'
                    },
                    {
                        value: 'el-icon-s-management'
                    },
                    {
                        value: 'el-icon-s-open'
                    },
                    {
                        value: 'el-icon-s-shop'
                    },
                    {
                        value: 'el-icon-s-marketing'
                    },
                    {
                        value: 'el-icon-s-flag'
                    },
                    {
                        value: 'el-icon-s-comment'
                    },
                    {
                        value: 'el-icon-s-finance'
                    },
                    {
                        value: 'el-icon-s-claim'
                    },
                    {
                        value: 'el-icon-s-custom'
                    },
                    {
                        value: 'el-icon-s-opportunity'
                    },
                    {
                        value: 'el-icon-s-data'
                    },
                    {
                        value: 'el-icon-s-check'
                    },
                    {
                        value: 'el-icon-s-grid'
                    },
                    {
                        value: 'el-icon-folder'
                    },
                    {
                        value: 'el-icon-c-scale-to-original'
                    },
                    {
                        value: 'el-icon-folder-opened'
                    },
                    {
                        value: 'el-icon-folder-add'
                    },
                    {
                        value: 'el-icon-folder-remove'
                    },
                    {
                        value: 'el-icon-folder-delete'
                    },
                    {
                        value: 'el-icon-folder-checked'
                    },
                    {
                        value: 'el-icon-male'
                    },
                    {
                        value: 'el-icon-female'
                    },
                    {
                        value: 'el-icon-thumb'
                    },
                    {
                        value: 'el-icon-chat-round'
                    },
                    {
                        value: 'el-icon-chat-line-round'
                    },
                    {
                        value: 'el-icon-chat-square'
                    },
                    {
                        value: 'el-icon-chat-dot-round'
                    },
                    {
                        value: 'el-icon-chat-dot-square'
                    },
                    {
                        value: 'el-icon-chat-line-square'
                    },
                    {
                        value: 'el-icon-postcard'
                    },
                    {
                        value: 'el-icon-position'
                    },
                    {
                        value: 'el-icon-turn-off-microphone'
                    },
                    {
                        value: 'el-icon-microphone'
                    },
                    {
                        value: 'el-icon-close-notification'
                    },
                    {
                        value: 'el-icon-bangzhu'
                    },
                    {
                        value: 'el-icon-crop'
                    },
                    {
                        value: 'el-icon-aim'
                    },
                    {
                        value: 'el-icon-switch-button'
                    },
                    {
                        value: 'el-icon-full-screen'
                    },
                    {
                        value: 'el-icon-copy-document'
                    },
                    {
                        value: 'el-icon-stopwatch'
                    },
                    {
                        value: 'el-icon-medal-1'
                    },
                    {
                        value: 'el-icon-medal'
                    },
                    {
                        value: 'el-icon-trophy'
                    },
                    {
                        value: 'el-icon-trophy-1'
                    },
                    {
                        value: 'el-icon-first-aid-kit'
                    },
                    {
                        value: 'el-icon-discover'
                    },
                    {
                        value: 'el-icon-place'
                    },
                    {
                        value: 'el-icon-alarm-clock'
                    },
                    {
                        value: 'el-icon-timer'
                    },
                    {
                        value: 'el-icon-watch-1'
                    },
                    {
                        value: 'el-icon-watch'
                    },
                    {
                        value: 'el-icon-lock'
                    },
                    {
                        value: 'el-icon-unlock'
                    },
                    {
                        value: 'el-icon-key'
                    },
                    {
                        value: 'el-icon-light-rain'
                    },
                    {
                        value: 'el-icon-lightning'
                    },
                    {
                        value: 'el-icon-heavy-rain'
                    },
                    {
                        value: 'el-icon-sunrise'
                    },
                    {
                        value: 'el-icon-sunrise-1'
                    },
                    {
                        value: 'el-icon-sunset'
                    },
                    {
                        value: 'el-icon-sunny'
                    },
                    {
                        value: 'el-icon-cloudy'
                    },
                    {
                        value: 'el-icon-partly-cloudy'
                    },
                    {
                        value: 'el-icon-cloudy-and-sunny'
                    },
                    {
                        value: 'el-icon-moon'
                    },
                    {
                        value: 'el-icon-moon-night'
                    },
                    {
                        value: 'el-icon-dish'
                    },
                    {
                        value: 'el-icon-dish-1'
                    },
                    {
                        value: 'el-icon-food'
                    },
                    {
                        value: 'el-icon-chicken'
                    },
                    {
                        value: 'el-icon-fork-spoon'
                    },
                    {
                        value: 'el-icon-knife-fork'
                    },
                    {
                        value: 'el-icon-burger'
                    },
                    {
                        value: 'el-icon-tableware'
                    },
                    {
                        value: 'el-icon-sugar'
                    },
                    {
                        value: 'el-icon-dessert'
                    },
                    {
                        value: 'el-icon-ice-cream'
                    },
                    {
                        value: 'el-icon-hot-water'
                    },
                    {
                        value: 'el-icon-water-cup'
                    },
                    {
                        value: 'el-icon-coffee-cup'
                    },
                    {
                        value: 'el-icon-cold-drink'
                    },
                    {
                        value: 'el-icon-goblet'
                    },
                    {
                        value: 'el-icon-goblet-full'
                    },
                    {
                        value: 'el-icon-goblet-square'
                    },
                    {
                        value: 'el-icon-goblet-square-full'
                    },
                    {
                        value: 'el-icon-grape'
                    },
                    {
                        value: 'el-icon-watermelon'
                    },
                    {
                        value: 'el-icon-apple'
                    },
                    {
                        value: 'el-icon-pear'
                    },
                    {
                        value: 'el-icon-orange'
                    },
                    {
                        value: 'el-icon-coffee'
                    },
                    {
                        value: 'el-icon-ice-tea'
                    },
                    {
                        value: 'el-icon-ice-drink'
                    },
                    {
                        value: 'el-icon-milk-tea'
                    },
                    {
                        value: 'el-icon-potato-strips'
                    },
                    {
                        value: 'el-icon-lollipop'
                    },
                    {
                        value: 'el-icon-ice-cream-square'
                    },
                    {
                        value: 'el-icon-ice-cream-round'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-add'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-add'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-add-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-add-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-add-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-alarm'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-alarm-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-alarm'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-albums'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-albums-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-albums'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-alert'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-alert-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-alert'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-american-football'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-american-football-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-american-football'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-analytics'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-analytics-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-analytics'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-android'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-angular'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-aperture'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-aperture-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-aperture'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-apple'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-apps'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-apps-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-apps'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-appstore'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-appstore-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-appstore'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-archive'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-archive-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-archive'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-back'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-back'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropdown'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropdown'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropdown-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropdown-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropleft'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropleft'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropright'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropright'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropright-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropright-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropup'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropup'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-dropup-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-dropup-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-forward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-forward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-round-back'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-round-back'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-round-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-round-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-round-forward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-round-forward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-round-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-round-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-arrow-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-arrow-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-at'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-at-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-at'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-attach'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-attach'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-backspace'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-backspace-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-backspace'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-barcode'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-barcode-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-barcode'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-baseball'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-baseball-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-baseball'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-basket'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-basket-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-basket'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-basketball'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-basketball-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-basketball'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-battery-charging'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-battery-charging'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-battery-dead'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-battery-dead'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-battery-full'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-battery-full'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-beaker'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-beaker-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-beaker'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-beer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-beer-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-beer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bicycle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bicycle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-bitcoin'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bluetooth'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bluetooth'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-boat'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-boat-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-boat'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-body'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-body-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-body'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bonfire'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bonfire-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bonfire'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-book'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-book-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-book'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bookmark'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bookmark-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bookmark'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bookmarks'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bookmarks-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bookmarks'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bowtie'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bowtie-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bowtie'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-briefcase'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-briefcase-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-briefcase'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-browsers'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-browsers-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-browsers'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-brush'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-brush-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-brush'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-buffer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bug'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bug-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bug'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-build'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-build-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-build'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bulb'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bulb-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bulb'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bus'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-bus-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-bus'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cafe'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cafe-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cafe'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-calculator'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-calculator-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-calculator'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-calendar'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-calendar-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-calendar'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-call'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-call-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-call'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-camera'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-camera-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-camera'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-car'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-car-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-car'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cart'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cart-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cart'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cash'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cash-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cash'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-chatboxes'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-chatboxes-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-chatboxes'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-chatbubbles'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-chatbubbles-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-chatbubbles'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-checkbox'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-checkbox-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-checkbox'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-checkbox-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-checkmark'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-checkmark'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-checkmark-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-checkmark-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-checkmark-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-checkmark-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-chrome'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-clipboard'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-clipboard-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-clipboard'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-clock'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-clock-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-clock'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-close'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-close'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-close-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-close-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-close-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-closed-captioning'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-closed-captioning-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-closed-captioning'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloud'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloud-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-done'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-done-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloud-done'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-download'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-download-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloud-download'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloud-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-upload'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloud-upload-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloud-upload'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloudy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloudy-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloudy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloudy-night'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cloudy-night-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cloudy-night'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-code'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-code'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-code-download'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-code-download'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-code-working'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-code-working'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-codepen'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cog'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cog-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cog'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-fill'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-fill-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-color-fill'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-filter'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-filter-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-color-filter'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-palette'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-palette-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-color-palette'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-wand'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-color-wand-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-color-wand'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-compass'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-compass-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-compass'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-construct'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-construct-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-construct'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-contract'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-contract-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-contract'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-copy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-copy-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-copy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-create'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-create-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-create'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-crop'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-crop-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-crop'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-css3'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cube'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cube-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cube'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cut'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-cut-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-cut'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-designernews'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-desktop'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-desktop-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-desktop'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-disc'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-disc-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-disc'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-document'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-document-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-document'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-done-all'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-done-all'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-download'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-download-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-download'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-dribbble'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-dropbox'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-easel'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-easel-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-easel'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-egg'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-egg-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-egg'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-euro'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-exit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-exit-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-exit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-expand'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-expand'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-eye'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-eye-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-eye'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-eye-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-eye-off-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-eye-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-facebook'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-fastforward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-fastforward-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-fastforward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-female'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-female'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-filing'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-filing-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-filing'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-film'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-film-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-film'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-finger-print'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-finger-print'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flag'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flag-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-flag'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flame'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flame-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-flame'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flash'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flash-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-flash'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flask'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flask-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-flask'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flower'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-flower-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-flower'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-folder'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-folder-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-folder'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-folder-open'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-folder-open-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-folder-open'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-football'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-football-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-football'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-foursquare'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-freebsd-devil'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-funnel'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-funnel-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-funnel'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-game-controller-a'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-game-controller-a-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-game-controller-a'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-game-controller-b'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-game-controller-b-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-game-controller-b'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-git-branch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-git-branch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-git-commit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-git-commit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-git-compare'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-git-compare'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-git-merge'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-git-merge'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-git-network'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-git-network'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-git-pull-request'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-git-pull-request'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-github'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-glasses'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-glasses-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-glasses'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-globe'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-globe-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-globe'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-google'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-googleplus'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-grid'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-grid-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-grid'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-hackernews'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-hammer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-hammer-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-hammer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-hand'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-hand-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-hand'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-happy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-happy-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-happy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-headset'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-headset-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-headset'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-heart'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-heart-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-heart'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-heart-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-help'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-help'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-help-buoy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-help-buoy-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-help-buoy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-help-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-help-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-help-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-home'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-home-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-home'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-html5'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ice-cream'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ice-cream-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-ice-cream'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-image'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-image-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-image'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-images'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-images-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-images'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-infinite'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-infinite-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-infinite'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-information'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-information'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-information-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-information-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-information-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-instagram'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ionic'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ionic-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-ionic'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ionitron'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ionitron-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-ionitron'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-javascript'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-jet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-jet-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-jet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-key'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-key-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-key'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-keypad'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-keypad-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-keypad'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-laptop'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-laptop'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-leaf'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-leaf-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-link'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-link-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-link'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-linkedin'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-list'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-list'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-list-box'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-list-box-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-list-box'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-locate'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-locate-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-locate'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-lock'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-lock-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-lock'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-log-in'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-log-in'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-log-out'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-log-out'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-magnet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-magnet-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-magnet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mail'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mail-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-mail'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mail-open'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mail-open-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-mail-open'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-male'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-male'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-man'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-man-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-man'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-map'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-map-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-map'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-markdown'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-medal'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-medal-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-medal'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-medical'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-medical-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-medical'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-medkit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-medkit-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-medkit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-megaphone'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-megaphone-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-megaphone'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-menu'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-menu-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-menu'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mic'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mic-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-mic'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mic-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-mic-off-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-mic-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-microphone'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-microphone-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-microphone'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-moon'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-moon-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-moon'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-more'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-more-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-more'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-move'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-move-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-move'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-musical-note'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-musical-note-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-musical-note'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-musical-notes'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-musical-notes-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-musical-notes'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-navigate'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-navigate-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-navigate'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-no-smoking'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-no-smoking-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-no-smoking'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-nodejs'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-notifications'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-notifications-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-notifications'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-notifications-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-notifications-off-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-notifications-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-notifications-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-nuclear'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-nuclear-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-nuclear'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-nutrition'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-nutrition-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-nutrition'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-octocat'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-open'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-open-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-open'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-options'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-options-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-options'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-outlet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-outlet-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-outlet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-paper'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-paper-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-paper'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-paper-plane'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-paper-plane-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-paper-plane'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-partly-sunny'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-partly-sunny-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-partly-sunny'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pause'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-paw'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-paw-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-paw'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-people'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-people-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-people'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-person'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-person-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-person'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-person-add'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-person-add-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-person-add'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-phone-landscape'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-phone-landscape'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-phone-portrait'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-phone-portrait'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-photos'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-photos-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-photos'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pie'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pie-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pie'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pin'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pin-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pin'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pint'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pint-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pint'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-pinterest'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pizza'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pizza-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pizza'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-plane'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-plane-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-plane'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-planet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-planet-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-planet'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-play'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-play-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-play'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-playstation'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-podium'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-podium-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-podium'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-power'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-power-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-power'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pricetag'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pricetag-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pricetag'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pricetags'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pricetags-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pricetags'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-print'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-print-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-print'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pulse'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-pulse-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-pulse'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-python'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-qr-scanner'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-qr-scanner'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-quote'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-quote-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-quote'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-radio'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-radio-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-radio'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-radio-button-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-radio-button-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-radio-button-on'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-radio-button-on'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-rainy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-rainy-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-rainy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-recording'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-recording-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-recording'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-reddit'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-redo'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-redo-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-redo'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-refresh'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-refresh'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-refresh-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-refresh-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-refresh-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-remove'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-remove'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-remove-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-remove-circle-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-remove-circle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-reorder'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-reorder'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-repeat'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-repeat'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-resize'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-resize'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-restaurant'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-restaurant-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-restaurant'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-return-left'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-return-left'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-return-right'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-return-right'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-reverse-camera'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-reverse-camera-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-reverse-camera'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-rewind'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-rewind-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-rewind'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ribbon'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-ribbon-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-ribbon'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-rose'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-rose-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-rose'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-rss'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-sad'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-sad-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-sad'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-sass'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-school'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-school-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-school'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-search'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-search-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-search'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-send'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-send-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-send'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-settings'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-settings-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-settings'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-share'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-share-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-share'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-share-alt'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-share-alt-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-share-alt'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-shirt'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-shirt-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-shirt'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-shuffle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-shuffle'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-skip-backward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-skip-backward-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-skip-backward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-skip-forward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-skip-forward-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-skip-forward'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-skype'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-snapchat'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-snow'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-snow-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-snow'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-speedometer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-speedometer-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-speedometer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-square'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-square-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-square'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-square-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-star'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-star-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-star'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-star-half'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-star-half'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-star-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-stats'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-stats-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-stats'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-steam'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-stopwatch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-stopwatch-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-stopwatch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-subway'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-subway-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-subway'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-sunny'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-sunny-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-sunny'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-swap'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-swap'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-switch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-switch-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-switch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-sync'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-sync'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-tablet-landscape'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-tablet-landscape'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-tablet-portrait'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-tablet-portrait'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-tennisball'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-tennisball-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-tennisball'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-text'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-text-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-text'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thermometer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thermometer-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-thermometer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thumbs-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thumbs-down-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-thumbs-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thumbs-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thumbs-up-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-thumbs-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thunderstorm'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-thunderstorm-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-thunderstorm'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-time'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-time-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-time'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-timer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-timer-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-timer'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-train'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-train-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-train'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-transgender'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-transgender-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-transgender'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-trash'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-trash-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-trash'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-trending-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-trending-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-trending-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-trending-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-trophy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-trophy-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-trophy'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-tumblr'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-tux'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-twitch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-twitter'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-umbrella'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-umbrella-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-umbrella'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-undo'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-undo-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-undo'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-unlock'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-unlock-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-unlock'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-usd'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-videocam'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-videocam-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-videocam'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-vimeo'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-volume-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-volume-down'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-volume-mute'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-volume-mute'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-volume-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-volume-off'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-volume-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-volume-up'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-walk'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-walk'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-warning'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-warning-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-warning'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-watch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-watch'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-water'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-water-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-water'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-whatsapp'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-wifi'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-wifi-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-wifi'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-windows'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-wine'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-wine-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-wine'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-woman'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-woman-outline'
                    },
                    {
                        value: 'ivu-icon ivu-icon-md-woman'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-wordpress'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-xbox'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-yahoo'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-yen'
                    },
                    {
                        value: 'ivu-icon ivu-icon-logo-youtube'
                    },
                    {
                        value: 'ivu-icon ivu-icon-ios-loading'
                    },
                    {
                        value: 'anticon anticon-step-backward'
                    },
                    {
                        value: 'anticon anticon-step-forward'
                    },
                    {
                        value: 'anticon anticon-fast-backward'
                    },
                    {
                        value: 'anticon anticon-fast-forward'
                    },
                    {
                        value: 'anticon anticon-shrink'
                    },
                    {
                        value: 'anticon anticon-arrows-alt'
                    },
                    {
                        value: 'anticon anticon-down'
                    },
                    {
                        value: 'anticon anticon-up'
                    },
                    {
                        value: 'anticon anticon-left'
                    },
                    {
                        value: 'anticon anticon-right'
                    },
                    {
                        value: 'anticon anticon-caret-up'
                    },
                    {
                        value: 'anticon anticon-caret-down'
                    },
                    {
                        value: 'anticon anticon-caret-left'
                    },
                    {
                        value: 'anticon anticon-caret-right'
                    },
                    {
                        value: 'anticon anticon-up-circle'
                    },
                    {
                        value: 'anticon anticon-down-circle'
                    },
                    {
                        value: 'anticon anticon-left-circle'
                    },
                    {
                        value: 'anticon anticon-right-circle'
                    },
                    {
                        value: 'anticon anticon-up-circle-o'
                    },
                    {
                        value: 'anticon anticon-down-circle-o'
                    },
                    {
                        value: 'anticon anticon-right-circle-o'
                    },
                    {
                        value: 'anticon anticon-left-circle-o'
                    },
                    {
                        value: 'anticon anticon-double-right'
                    },
                    {
                        value: 'anticon anticon-double-left'
                    },
                    {
                        value: 'anticon anticon-verticle-left'
                    },
                    {
                        value: 'anticon anticon-verticle-right'
                    },
                    {
                        value: 'anticon anticon-forward'
                    },
                    {
                        value: 'anticon anticon-backward'
                    },
                    {
                        value: 'anticon anticon-rollback'
                    },
                    {
                        value: 'anticon anticon-enter'
                    },
                    {
                        value: 'anticon anticon-retweet'
                    },
                    {
                        value: 'anticon anticon-swap'
                    },
                    {
                        value: 'anticon anticon-swap-left'
                    },
                    {
                        value: 'anticon anticon-swap-right'
                    },
                    {
                        value: 'anticon anticon-arrow-up'
                    },
                    {
                        value: 'anticon anticon-arrow-down'
                    },
                    {
                        value: 'anticon anticon-arrow-left'
                    },
                    {
                        value: 'anticon anticon-arrow-right'
                    },
                    {
                        value: 'anticon anticon-play-circle'
                    },
                    {
                        value: 'anticon anticon-play-circle-o'
                    },
                    {
                        value: 'anticon anticon-up-square'
                    },
                    {
                        value: 'anticon anticon-down-square'
                    },
                    {
                        value: 'anticon anticon-left-square'
                    },
                    {
                        value: 'anticon anticon-right-square'
                    },
                    {
                        value: 'anticon anticon-up-square-o'
                    },
                    {
                        value: 'anticon anticon-down-square-o'
                    },
                    {
                        value: 'anticon anticon-left-square-o'
                    },
                    {
                        value: 'anticon anticon-right-square-o'
                    },
                    {
                        value: 'anticon anticon-login'
                    },
                    {
                        value: 'anticon anticon-logout'
                    },
                    {
                        value: 'anticon anticon-menu-fold'
                    },
                    {
                        value: 'anticon anticon-menu-unfold'
                    },
                    {
                        value: 'anticon anticon-question'
                    },
                    {
                        value: 'anticon anticon-question-circle-o'
                    },
                    {
                        value: 'anticon anticon-question-circle'
                    },
                    {
                        value: 'anticon anticon-plus'
                    },
                    {
                        value: 'anticon anticon-plus-circle-o'
                    },
                    {
                        value: 'anticon anticon-plus-circle'
                    },
                    {
                        value: 'anticon anticon-pause'
                    },
                    {
                        value: 'anticon anticon-pause-circle-o'
                    },
                    {
                        value: 'anticon anticon-pause-circle'
                    },
                    {
                        value: 'anticon anticon-minus'
                    },
                    {
                        value: 'anticon anticon-minus-circle-o'
                    },
                    {
                        value: 'anticon anticon-minus-circle'
                    },
                    {
                        value: 'anticon anticon-plus-square'
                    },
                    {
                        value: 'anticon anticon-plus-square-o'
                    },
                    {
                        value: 'anticon anticon-minus-square'
                    },
                    {
                        value: 'anticon anticon-minus-square-o'
                    },
                    {
                        value: 'anticon anticon-info'
                    },
                    {
                        value: 'anticon anticon-info-circle-o'
                    },
                    {
                        value: 'anticon anticon-info-circle'
                    },
                    {
                        value: 'anticon anticon-exclamation'
                    },
                    {
                        value: 'anticon anticon-exclamation-circle-o'
                    },
                    {
                        value: 'anticon anticon-exclamation-circle'
                    },
                    {
                        value: 'anticon anticon-close'
                    },
                    {
                        value: 'anticon anticon-close-circle'
                    },
                    {
                        value: 'anticon anticon-close-circle-o'
                    },
                    {
                        value: 'anticon anticon-close-square'
                    },
                    {
                        value: 'anticon anticon-close-square-o'
                    },
                    {
                        value: 'anticon anticon-check'
                    },
                    {
                        value: 'anticon anticon-check-circle'
                    },
                    {
                        value: 'anticon anticon-check-circle-o'
                    },
                    {
                        value: 'anticon anticon-check-square'
                    },
                    {
                        value: 'anticon anticon-check-square-o'
                    },
                    {
                        value: 'anticon anticon-clock-circle-o'
                    },
                    {
                        value: 'anticon anticon-clock-circle'
                    },
                    {
                        value: 'anticon anticon-warning'
                    },
                    {
                        value: 'anticon anticon-lock'
                    },
                    {
                        value: 'anticon anticon-unlock'
                    },
                    {
                        value: 'anticon anticon-area-chart'
                    },
                    {
                        value: 'anticon anticon-pie-chart'
                    },
                    {
                        value: 'anticon anticon-bar-chart'
                    },
                    {
                        value: 'anticon anticon-dot-chart'
                    },
                    {
                        value: 'anticon anticon-bars'
                    },
                    {
                        value: 'anticon anticon-book'
                    },
                    {
                        value: 'anticon anticon-calendar'
                    },
                    {
                        value: 'anticon anticon-cloud'
                    },
                    {
                        value: 'anticon anticon-cloud-download'
                    },
                    {
                        value: 'anticon anticon-code'
                    },
                    {
                        value: 'anticon anticon-code-o'
                    },
                    {
                        value: 'anticon anticon-copy'
                    },
                    {
                        value: 'anticon anticon-credit-card'
                    },
                    {
                        value: 'anticon anticon-delete'
                    },
                    {
                        value: 'anticon anticon-desktop'
                    },
                    {
                        value: 'anticon anticon-download'
                    },
                    {
                        value: 'anticon anticon-edit'
                    },
                    {
                        value: 'anticon anticon-ellipsis'
                    },
                    {
                        value: 'anticon anticon-file'
                    },
                    {
                        value: 'anticon anticon-file-text'
                    },
                    {
                        value: 'anticon anticon-file-unknown'
                    },
                    {
                        value: 'anticon anticon-file-pdf'
                    },
                    {
                        value: 'anticon anticon-file-word'
                    },
                    {
                        value: 'anticon anticon-file-excel'
                    },
                    {
                        value: 'anticon anticon-file-jpg'
                    },
                    {
                        value: 'anticon anticon-file-ppt'
                    },
                    {
                        value: 'anticon anticon-file-markdown'
                    },
                    {
                        value: 'anticon anticon-file-add'
                    },
                    {
                        value: 'anticon anticon-folder'
                    },
                    {
                        value: 'anticon anticon-folder-open'
                    },
                    {
                        value: 'anticon anticon-folder-add'
                    },
                    {
                        value: 'anticon anticon-hdd'
                    },
                    {
                        value: 'anticon anticon-frown'
                    },
                    {
                        value: 'anticon anticon-frown-o'
                    },
                    {
                        value: 'anticon anticon-meh'
                    },
                    {
                        value: 'anticon anticon-meh-o'
                    },
                    {
                        value: 'anticon anticon-smile'
                    },
                    {
                        value: 'anticon anticon-smile-o'
                    },
                    {
                        value: 'anticon anticon-inbox'
                    },
                    {
                        value: 'anticon anticon-laptop'
                    },
                    {
                        value: 'anticon anticon-appstore-o'
                    },
                    {
                        value: 'anticon anticon-appstore'
                    },
                    {
                        value: 'anticon anticon-line-chart'
                    },
                    {
                        value: 'anticon anticon-link'
                    },
                    {
                        value: 'anticon anticon-mail'
                    },
                    {
                        value: 'anticon anticon-mobile'
                    },
                    {
                        value: 'anticon anticon-notification'
                    },
                    {
                        value: 'anticon anticon-paper-clip'
                    },
                    {
                        value: 'anticon anticon-picture'
                    },
                    {
                        value: 'anticon anticon-poweroff'
                    },
                    {
                        value: 'anticon anticon-reload'
                    },
                    {
                        value: 'anticon anticon-search'
                    },
                    {
                        value: 'anticon anticon-setting'
                    },
                    {
                        value: 'anticon anticon-share-alt'
                    },
                    {
                        value: 'anticon anticon-shopping-cart'
                    },
                    {
                        value: 'anticon anticon-tablet'
                    },
                    {
                        value: 'anticon anticon-tag'
                    },
                    {
                        value: 'anticon anticon-tag-o'
                    },
                    {
                        value: 'anticon anticon-tags'
                    },
                    {
                        value: 'anticon anticon-tags-o'
                    },
                    {
                        value: 'anticon anticon-to-top'
                    },
                    {
                        value: 'anticon anticon-upload'
                    },
                    {
                        value: 'anticon anticon-user'
                    },
                    {
                        value: 'anticon anticon-video-camera'
                    },
                    {
                        value: 'anticon anticon-home'
                    },
                    {
                        value: 'anticon anticon-loading'
                    },
                    {
                        value: 'anticon anticon-loading-3-quarters'
                    },
                    {
                        value: 'anticon anticon-cloud-upload-o'
                    },
                    {
                        value: 'anticon anticon-cloud-download-o'
                    },
                    {
                        value: 'anticon anticon-cloud-upload'
                    },
                    {
                        value: 'anticon anticon-cloud-o'
                    },
                    {
                        value: 'anticon anticon-star-o'
                    },
                    {
                        value: 'anticon anticon-star'
                    },
                    {
                        value: 'anticon anticon-heart-o'
                    },
                    {
                        value: 'anticon anticon-heart'
                    },
                    {
                        value: 'anticon anticon-environment'
                    },
                    {
                        value: 'anticon anticon-environment-o'
                    },
                    {
                        value: 'anticon anticon-eye'
                    },
                    {
                        value: 'anticon anticon-eye-o'
                    },
                    {
                        value: 'anticon anticon-camera'
                    },
                    {
                        value: 'anticon anticon-camera-o'
                    },
                    {
                        value: 'anticon anticon-save'
                    },
                    {
                        value: 'anticon anticon-team'
                    },
                    {
                        value: 'anticon anticon-solution'
                    },
                    {
                        value: 'anticon anticon-phone'
                    },
                    {
                        value: 'anticon anticon-filter'
                    },
                    {
                        value: 'anticon anticon-exception'
                    },
                    {
                        value: 'anticon anticon-export'
                    },
                    {
                        value: 'anticon anticon-customer-service'
                    },
                    {
                        value: 'anticon anticon-qrcode'
                    },
                    {
                        value: 'anticon anticon-scan'
                    },
                    {
                        value: 'anticon anticon-like'
                    },
                    {
                        value: 'anticon anticon-like-o'
                    },
                    {
                        value: 'anticon anticon-dislike'
                    },
                    {
                        value: 'anticon anticon-dislike-o'
                    },
                    {
                        value: 'anticon anticon-message'
                    },
                    {
                        value: 'anticon anticon-pay-circle'
                    },
                    {
                        value: 'anticon anticon-calculator'
                    },
                    {
                        value: 'anticon anticon-pushpin'
                    },
                    {
                        value: 'anticon anticon-pushpin-o'
                    },
                    {
                        value: 'anticon anticon-bulb'
                    },
                    {
                        value: 'anticon anticon-select'
                    },
                    {
                        value: 'anticon anticon-switcher'
                    },
                    {
                        value: 'anticon anticon-rocket'
                    },
                    {
                        value: 'anticon anticon-bell'
                    },
                    {
                        value: 'anticon anticon-disconnect'
                    },
                    {
                        value: 'anticon anticon-database'
                    },
                    {
                        value: 'anticon anticon-compass'
                    },
                    {
                        value: 'anticon anticon-barcode'
                    },
                    {
                        value: 'anticon anticon-hourglass'
                    },
                    {
                        value: 'anticon anticon-key'
                    },
                    {
                        value: 'anticon anticon-flag'
                    },
                    {
                        value: 'anticon anticon-layout'
                    },
                    {
                        value: 'anticon anticon-printer'
                    },
                    {
                        value: 'anticon anticon-sound'
                    },
                    {
                        value: 'anticon anticon-usb'
                    },
                    {
                        value: 'anticon anticon-skin'
                    },
                    {
                        value: 'anticon anticon-tool'
                    },
                    {
                        value: 'anticon anticon-sync'
                    },
                    {
                        value: 'anticon anticon-wifi'
                    },
                    {
                        value: 'anticon anticon-car'
                    },
                    {
                        value: 'anticon anticon-schedule'
                    },
                    {
                        value: 'anticon anticon-user-add'
                    },
                    {
                        value: 'anticon anticon-user-delete'
                    },
                    {
                        value: 'anticon anticon-usergroup-add'
                    },
                    {
                        value: 'anticon anticon-usergroup-delete'
                    },
                    {
                        value: 'anticon anticon-man'
                    },
                    {
                        value: 'anticon anticon-woman'
                    },
                    {
                        value: 'anticon anticon-shop'
                    },
                    {
                        value: 'anticon anticon-gift'
                    },
                    {
                        value: 'anticon anticon-idcard'
                    },
                    {
                        value: 'anticon anticon-medicine-box'
                    },
                    {
                        value: 'anticon anticon-red-envelope'
                    },
                    {
                        value: 'anticon anticon-coffee'
                    },
                    {
                        value: 'anticon anticon-copyright'
                    },
                    {
                        value: 'anticon anticon-trademark'
                    },
                    {
                        value: 'anticon anticon-safety'
                    },
                    {
                        value: 'anticon anticon-wallet'
                    },
                    {
                        value: 'anticon anticon-bank'
                    },
                    {
                        value: 'anticon anticon-trophy'
                    },
                    {
                        value: 'anticon anticon-contacts'
                    },
                    {
                        value: 'anticon anticon-global'
                    },
                    {
                        value: 'anticon anticon-shake'
                    },
                    {
                        value: 'anticon anticon-api'
                    },
                    {
                        value: 'anticon anticon-fork'
                    },
                    {
                        value: 'anticon anticon-dashboard'
                    },
                    {
                        value: 'anticon anticon-form'
                    },
                    {
                        value: 'anticon anticon-table'
                    },
                    {
                        value: 'anticon anticon-profile'
                    },
                    {
                        value: 'anticon anticon-android'
                    },
                    {
                        value: 'anticon anticon-android-o'
                    },
                    {
                        value: 'anticon anticon-apple'
                    },
                    {
                        value: 'anticon anticon-apple-o'
                    },
                    {
                        value: 'anticon anticon-windows'
                    },
                    {
                        value: 'anticon anticon-windows-o'
                    },
                    {
                        value: 'anticon anticon-ie'
                    },
                    {
                        value: 'anticon anticon-chrome'
                    },
                    {
                        value: 'anticon anticon-github'
                    },
                    {
                        value: 'anticon anticon-aliwangwang'
                    },
                    {
                        value: 'anticon anticon-aliwangwang-o'
                    },
                    {
                        value: 'anticon anticon-dingding'
                    },
                    {
                        value: 'anticon anticon-dingding-o'
                    },
                    {
                        value: 'anticon anticon-weibo-square'
                    },
                    {
                        value: 'anticon anticon-weibo-circle'
                    },
                    {
                        value: 'anticon anticon-taobao-circle'
                    },
                    {
                        value: 'anticon anticon-html5'
                    },
                    {
                        value: 'anticon anticon-weibo'
                    },
                    {
                        value: 'anticon anticon-twitter'
                    },
                    {
                        value: 'anticon anticon-wechat'
                    },
                    {
                        value: 'anticon anticon-youtube'
                    },
                    {
                        value: 'anticon anticon-alipay-circle'
                    },
                    {
                        value: 'anticon anticon-taobao'
                    },
                    {
                        value: 'anticon anticon-skype'
                    },
                    {
                        value: 'anticon anticon-qq'
                    },
                    {
                        value: 'anticon anticon-medium-workmark'
                    },
                    {
                        value: 'anticon anticon-gitlab'
                    },
                    {
                        value: 'anticon anticon-medium'
                    },
                    {
                        value: 'anticon anticon-linkedin'
                    },
                    {
                        value: 'anticon anticon-google-plus'
                    },
                    {
                        value: 'anticon anticon-dropbox'
                    },
                    {
                        value: 'anticon anticon-facebook'
                    },
                    {
                        value: 'anticon anticon-codepen'
                    },
                    {
                        value: 'anticon anticon-amazon'
                    },
                    {
                        value: 'anticon anticon-google'
                    },
                    {
                        value: 'anticon anticon-codepen-circle'
                    },
                    {
                        value: 'anticon anticon-alipay'
                    },
                    {
                        value: 'anticon anticon-ant-design'
                    },
                    {
                        value: 'anticon anticon-aliyun'
                    },
                    {
                        value: 'anticon anticon-zhihu'
                    },
                    {
                        value: 'anticon anticon-slack'
                    },
                    {
                        value: 'anticon anticon-slack-square'
                    },
                    {
                        value: 'anticon anticon-behance'
                    },
                    {
                        value: 'anticon anticon-behance-square'
                    },
                    {
                        value: 'anticon anticon-dribbble'
                    },
                    {
                        value: 'anticon anticon-dribbble-square'
                    },
                    {
                        value: 'anticon anticon-instagram'
                    },
                    {
                        value: 'anticon anticon-yuque'
                    }
                ]
            }
        },
        events: {
            click: {
                des: '点击事件',
                args: []
            }
        }
    },
    examples: []
}