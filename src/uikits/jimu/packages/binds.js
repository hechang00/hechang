import jimu from './jimu'

var checkType = function (old, value) {
  var result = undefined;
  if (typeof old == 'number') {
    result = parseFloat(value) || 0;
  } else if (typeof old == 'object') {
    if (old instanceof Array) {
      if (typeof value == 'string') {
        var temp = [];
        try {
          temp = JSON.parse(value);
          // if(!(temp instanceof Array)){
          //   temp = new Array(temp);
          // }
        } catch (_) {
          temp = [];
        }
        result = temp;
      } else {
        result = value || [];
      }
    } else {
      var temp = {};
      if (typeof value == 'string') {
        try {
          temp = JSON.parse(value);
        } catch (_) {
          temp = {};
        }
      } else {
        temp = value || {};
      }
      //对对象类型做数据Key值保护
      for (var key in old) {
        if (!temp.hasOwnProperty(key)) {
          temp[key] = old[key];
        }
      }
      result = temp;
    }
  } else if (typeof old == 'string') {
    if (typeof value == 'object') {
      result = JSON.stringify(value);
    } else {
      result = value + '';
    }
  } else if (typeof old == 'boolean') {
    result = Boolean(value);
  } else {
    result = value;
  }
  return result;
};

var setValue = function (key, value) {
  // var _vue = window._vue;
  var binds = jimu.modules.routable.store.state;

  if (!key) return;

  if (binds.hasOwnProperty(key)) {
    // var old = binds[key];
    // binds[key] = checkType(old, value);
    binds[key] = value;
  } else {
    var subs = key.split(".");
    if (subs.indexOf("") != -1 || subs.length == 0) {
      return;
    }
    var obj = binds;
    for (let i in subs) {
      if (!obj.hasOwnProperty(subs[i])) {
        break;
      }
      if (i == subs.length - 1) {
        // obj[subs[i]] = checkType(obj[subs[i]], value);
        obj[subs[i]] = value;
      } else {
        obj = obj[subs[i]];
      }
    }
  }
};

var getValue = function (key) {
  if (!key) {
    return undefined;
  }
  var binds = jimu.modules.routable.store.state;
  if (binds.hasOwnProperty(key)) {
    return binds[key];
  } else {
    var subs = key.split(".");
    if (subs.indexOf("") != -1 || subs.length == 0) {
      return undefined;
    }
    var obj = binds;
    for (let i in subs) {
      obj = obj[subs[i]];
      if (obj == undefined) {
        break;
      }
    }
    return obj;
  }
};


const createUrl = function (url, params) {
  if (!url && !params) return '';
  if (!params) return url;
  const url_split = url.split('?');
  if (url_split.length > 1) {
    url_split[1].split('&').forEach(v => {
      const kv = v.split('=');
      // 如果params不含此key，则将key-value放入params
      if (!params[kv[0]])
        params[kv[0]] = kv[1];
    })
  }
  // object 转为 params string
  const params_string = Object.keys(params)
    .map(k => {
      const v = params[k];
      let value = encodeURIComponent(v);
      if (typeof v === 'object') {
        value = JSON.stringify(v)
      }
      return k + '=' + value;
    }).join('&');

  if (Object.keys(params).length > 0) {
    return url_split[0] + '?' + params_string
  } else {
    return url_split[0]
  }
};

const autoSetBinds = function (pairs) {
  if (!pairs) return false;
  try {
    for (const key of Object.keys(pairs)) {
      let value = decodeURIComponent(pairs[key]);
      const bind = getValue(key);
      if (!bind) continue;
      if (typeof bind == "object") {
        value = JSON.parse(value);
      } else if (typeof bind === "number") {
        value = parseFloat(value);
      }
      setValue(key, value);
    }
  } catch (e) {
    console.error('autoSetBinds失败 ', e, pairs);
    return false;
  }
  return true;
};

export default {
  set: setValue,
  get: getValue,
  createUrl,
  autoSetBinds,
}