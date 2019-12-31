/* jshint esversion: 6 */
import {
  Message
} from 'element-ui';
import {
  MessageBox
} from 'element-ui';
import {
  Loading
} from 'element-ui';
import {
  Notification
} from 'element-ui';


var message = function (options) {
  var isHtmlText = options.isHtmlText || false;
  Message(Object.assign(options || {}, {
    iconClass: "",
    dangerouslyUseHTMLString: isHtmlText,
    customClass: ""
  }));
}

var alert = function (options) {
  var confirmBlock = options.confirmBlock;
  var cancelBlock = options.cancelBlock;
  var isHtmlText = options.isHtmlText || false;
  var _this = this;
  MessageBox(Object.assign(options || {}, {
    iconClass: "",
    dangerouslyUseHTMLString: isHtmlText,
    customClass: ""
  })).then(action => {
    if (confirmBlock) confirmBlock.apply(_this);
    confirmBlock = null;
    cancelBlock = null;
    _this = null;
  }).catch(() => {
    if (cancelBlock) cancelBlock.apply(_this);
    confirmBlock = null;
    cancelBlock = null;
    _this = null;
  });
}

var notify = function (options) {
  var isHtmlText = options.isHtmlText || false;
  Notification(Object.assign(options || {}, {
    iconClass: "",
    dangerouslyUseHTMLString: isHtmlText,
    customClass: ""
  }));
}

var showLoading = function (options = {}) {
  if (typeof options.target === "string") {
    options.target = document.getElementById(options.target);
  }
  return Loading.service(Object.assign({
    target: "document.body",
    body: false,
    customClass: ""
  }, options || {}));
}

var hideLoading = function (instance) {
  if (instance && typeof instance.close === "function") {
    instance.close();
  }
}

export default {
  message: message,
  alert: alert,
  notify: notify,
  showLoading: showLoading,
  hideLoading: hideLoading
}
