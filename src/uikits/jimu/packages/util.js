/* jshint esversion: 6 */
const findCurrentComponent = element => {
  let target = element
  if (typeof target === 'string') {
    target = document.getElementById(element)
  } else {
    return null
  }
  while (target && target.tagName !== 'BODY') {
    let _vue = target.__vue__
    if (_vue) {
      while (_vue) {
        let prefix = _vue.$options._componentTag
          ? _vue.$options._componentTag.replace("-", "_")
          : "";
        let prefix_2 = _vue.$options._componentTag
          ? _vue.$options._componentTag.replace("-", "")
          : "";
        if (element.startsWith(prefix) || element.startsWith(prefix_2)) {
          return _vue;
        } else {
          _vue = _vue.$parent
        }
      }
    }
    target = target.parentNode
  }
  return null
}
const findNearestComponent = (element, componentName) => {
  let target = element
  if (typeof element === 'string') {
    target = document.getElementById(element)
  }

  while (target && !target.__vue__) {
    target = target.parentNode
  }

  if (!target) return null

  let vn = target.__vue__
  let pre = undefined
  while (vn && pre != vn) {
    if (
      vn.$options.name === componentName ||
      (vn.i$ && vn.i$.$id === componentName)
    ) {
      return vn
    }
    pre = vn
    vn = vn.$parent
  }
  return null
}

const copyText = function (options = {}) {
  let item = options.value || '';
  let successBlock = options.successBlock;
  let failBlock = options.failBlock;
  if (window._vue) {
    window._vue.$copyText(item).then(
      function (e) {
        if (successBlock) {
          successBlock(e);
        }
      },
      function (e) {
        if (failBlock) {
          failBlock(e);
        }
      }
    );
  }
};

export default {
  findCurrentComponent,
  findNearestComponent,
  copyText
};