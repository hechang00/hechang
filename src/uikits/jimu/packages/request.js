/* jshint esversion: 6 */
import axios from 'axios';
var qs = require('qs');

let interceptor = axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
    if (
      error &&
      error.response &&
      401 === error.response.status &&
      error.response.headers &&
      error.response.headers.redirecturl
    ) {
      window.location = error.response.headers.redirecturl
    } else {
      return Promise.reject(error)
    }
});
var globalHeaders = {
  // 'X-Requested-With': 'XMLHttpRequest'
};
var globalTimeout = 60000;

var globalConfig = function (options,globalConfigFunc) {
  globalHeaders = Object.assign(
    globalHeaders,
    options.headers ? options.headers : (options.header ? options.header : {})
  );
  globalTimeout = options.timeout || 60000;
  if (typeof globalConfigFunc === "function") {
    globalConfigFunc(axios, interceptor)
  }
};

var downloadFile = function (data, contentType, fileName) {
  const blob = new Blob([data], {
    type: contentType + ';charset=utf-8'
  });
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  downloadElement.href = href
  downloadElement.download = fileName;
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
};

var post = function (options) {
  return newRequest(Object.assign(options || {}, {
    type: "post"
  }));
};

var del = function (options) {
  return newRequest(Object.assign(options || {}, {
    type: "delete"
  }));
};

var get = async function (options) {
  return newRequest(Object.assign(options || {}, {
    type: "get"
  }));
};

var newRequest =  function({url, data, timeout, headers, type, successBlock, failBlock, options, ignoreGlobalHeader}){
  if(!ignoreGlobalHeader){
    headers = Object.assign({}, globalHeaders, headers || {})
  }
  let _type = type || "get";
  if(_type.toLocaleLowerCase() == "get"){
    var extra = qs.stringify(data);;
    if (extra.length != 0) {
      if (!url.endsWith("?")) {
        url += '?'
      }
      url += extra;
      data = {};
    }
  }
  return createRequest({
    url: url || "", 
    data: data || {}, 
    timeout: timeout || globalTimeout,
    header: headers || {}, 
    type: _type, 
    successBlock, 
    failBlock,
    options: options || {}
  });
}

var createRequest = function({url, data, timeout, header, type, successBlock, failBlock, options}){
  var _header = {};
  try{
    _header = JSON.parse(JSON.stringify(header || {}));
  }catch(_){

  }
  if (!successBlock && !failBlock) {
    let promise = new Promise(function (resolve, reject) {
      axios(Object.assign(options, {
        method: type,
        url: url,
        timeout: timeout,
        headers: _header,
        data: data,
      })).then(function (response) {
        if (response && response.status == 200) {
          resolve(response.data, response);
        } else {
          let _statusText = response ? response.statusText : ''
          reject({
            code: -1,
            message: _statusText
          }, response);
        }
      }).catch(function (error) {
        reject(error, undefined);
      });
    });
    return promise;
  } else {
    axios(Object.assign(options,{
      method: type,
      url: url,
      timeout: timeout,
      headers: _header,
      data: data,
    })).then(function (response) {
      if (response && response.status == 200) {
        if (successBlock) successBlock(response.data, response);
      } else {
        let _statusText = response ? response.statusText : ''
        if (failBlock) failBlock({ code: -1, message: _statusText}, response);
      }
      failBlock = null;
      successBlock = null;
    }).catch(function (error) {
      if (failBlock) failBlock(error, undefined);
      failBlock = null;
    });
    return undefined;
  }
};

export default {
  new: newRequest,
  post: post,
  get: get,
  delete: del,
  downloadFile: downloadFile,
  globalConfig: globalConfig
};
