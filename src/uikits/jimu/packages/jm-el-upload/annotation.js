import { Color } from '../../../type'
export default {
  what: {
    id: 'jm-el-upload',
    needRegis: true,
    name: '上传',
    link:"https://element.eleme.io/#/zh-CN/component/upload",
    grouptype: '表单组件',
    priority:920, 
    img: 'base_upload',
    icon:'',
    props: {
      action: {
        default: '',
        des: '上传接口地址',
        type: String
      },
      filesKey: {
        default: 'file',
        des: '上传文件列表字段名',
        type: String
      },
      data: {
        default: {},
        des: '上传时附带的额外参数',
        notArray: true,
        type: Object
      },
      limit: {
        default: 3,
        des: '上传最大个数',
        type: Number
      },
      multiple: {
        default: false,
        des: '是否支持多选文件',
        type: Boolean
      },
      fileList: {
        default: [],
        des: '当前上传的文件列表',
        // readonly: true,
        type: Array
      },
      showFileList: {
        default: false,
        des: '是否显示已上传文件列表',
        type: Boolean
      },
      disabled: {
        default: false,
        des: '是否禁用',
        type: Boolean
      },
      showTip: {
        default: true,
        des: '是否展示已上传文件',
        type: Boolean
      },
      tipText: {
        default: '只能上传jpg/png文件',
        des: '提示文案，仅在showFileList=true时显示',
        type: String
      },
      uploadButton: {
        default: {},
        noTemp: true,
        noChange: true,
        element: 'el-button',
        type: Object
      },
      btnSlot: {
        default: '',
        des: '按钮插槽',
        isSlotArray: true,
        type: String,
        enumValue: [
          {
            value: ''
          }
        ]
      },
      btnSlotData: {
        default: {},
        des: '按钮插槽数据',
        type: Object
      },
      desSlot: {
        default: '',
        des: '描述插槽',
        isSlotArray: true,
        type: String,
        enumValue: [
          {
            value: ''
          }
        ]
      },
      desSlotData: {
        default: {},
        des: '描述插槽数据',
        type: Object
      }
    },
    events: {
      handlePreview: {
        des: '点击文件列表中已上传的文件时',
        args: ['file']
      },
      handleRemove: {
        des: '文件列表移除文件时',
        args: ['file', 'fileList']
      },
      beforeRemove: {
        des: '删除文件之前',
        args: ['file', 'fileList']
      },
      handleProgress: {
        des: '文件上传时',
        args: ['event', 'file', 'fileList']
      },
      handleSuccess: {
        des: '文件上传成功时',
        args: ['response', 'file', 'fileList']
      },
      handleError: {
        des: '文件上传失败时',
        args: ['error', 'file', 'fileList']
      },
      handleExceed: {
        des: '文件超出个数限制时',
        args: ['files', 'fileList']
      },
      handleUploadBefore: {
        des: '文件上传前检查',
        args: ['files']
      },
      handleChange:{
        des: '文件状态改变时',
        args: ['file','fileList']
      }
    }
  },
  examples: [
    {
      name: '普通上传按钮',
      img:'downloadBtn',
      props: {
        action: 'https://jsonplaceholder.typicode.com/posts/',
        uploadButton: {
          innerText: '选取文件',
          type: 'primary',
          size: 'small'
        }
      }
    }
  ]
}
