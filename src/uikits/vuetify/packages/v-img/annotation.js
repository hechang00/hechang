import {Color} from '../../../type';
export default {
	what: {
		id: 'v-img', 
		name: '图片', 
		link: 'https://vuetifyjs.com/zh-Hans/components/images', 
		grouptype: '基础组件', 
		img:'base_pic',
		icon:'',
		props: {
			global_zindex: {
				default: 2000, 
				type: [
					Number
				], 
				title: '高度'
			},
			height: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '高度'
			}, 
			maxHeight: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最大高度'
			}, 
			maxWidth: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最大宽度'
			}, 
			minHeight: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最小高度'
			}, 
			minWidth: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '最小宽度'
			}, 
			width: {
				default: undefined, 
				type: [
					Number, 
					String
				], 
				title: '宽度'
			}, 
			aspectRatio: {
				default: undefined, 
				type: [
					String, 
					Number
				], 
				title: '纵横比'
			}, 
			alt: {
				default: undefined, 
				type: String, 
				title: '备用文本'
			}, 
			contain: {
				default: false, 
				type: Boolean, 
				title: '包含(防止图片被裁剪)'
			}, 
			gradient: {
				default: undefined, 
				type: String, 
				title: '梯度(将渐变叠加到图像上，参见示例)'
			}, 
			lazySrc: {
				default: undefined, 
				type: String, 
				title: '备用图像地址（主图加载时显示的缩略图）'
			}, 
			position: {
				default: 'center center', 
				type: String, 
				title: '定位'
			}, 
			sizes: {
				default: undefined, 
				type: String, 
				title: '大小，使用srcset时使用'
			}, 
			src: {
				default: 'https://picsum.photos/510/300?random', 
				type: [
					String, 
					Object
				], 
				title: '图片地址'
			}, 
			srcset: {
				default: undefined, 
				type: String, 
				title: '根据设备大小使用的备用图像'
			}, 
			transition: {
				default: 'fade-transition', 
				type: [
					Boolean, 
					String
				], 
				title: '图像和备用图像切换'
			}
		}, 
		events: {
			load: {
				title: 'load', 
				args: ['p1']
			}, 
			error: {
				title: 'error', 
				args: ['p1']
			}
    },
    slots:{
      default: {
        des: '默认插槽', 
        title: '默认', 
        components: []
      },
      placeholder:{
        des:"替代文本",
        title:"替代文本",
        components:[]
      }
    }
	}, 
	examples: [
    {
      name: '基本用法', 
	  img:'base_pic',
      props: {
		src: "https://picsum.photos/id/11/500/300",
		lazySrc: "https://picsum.photos/id/11/10/6",
		class: "grey lighten-2",
		global_zindex: 1200,
		aspectRatio: 1,
		minWidth: 500,
		minHeight: 300
      }
    }, 
    {
	  name: '缩放比例', 
	  img:'base_pic',
      props: {
		src: "https://picsum.photos/id/11/500/300",
		lazySrc: "https://picsum.photos/id/11/10/6",
		aspectRatio: 2,
		global_zindex: 1200,
		minWidth: 500,
		minHeight: 300
      }
    },
    {
	  name: '添加渐变色', 
	  img:'base_pic',
      props: {
		gradient:'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)',
		minWidth: 500,
		minHeight: 300,
		aspectRatio: 1,
		global_zindex: 1200,
		src: "https://picsum.photos/id/11/500/300",
		lazySrc: "https://picsum.photos/id/11/10/6"
      }
    }, 
  ]
}