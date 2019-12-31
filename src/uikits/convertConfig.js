import fs from 'fs'
import beautify from 'js-beautify'
// let annotations =  require("./annotations.js").default;
import annotations from './annotations.js'
import { Color, Page } from './type'
import mkdirp from 'mkdirp'
import path from 'path'
const typeMap = {
  String: String,
  Boolean: Boolean,
  null: null,
  Number: Number,
  Object: Object,
  Array: Array,
  Color: Color,
  Date: Date
}
const pathMap = {
  bootstrap: './propsconfig/bootstrap/',
  element: './propsconfig/element/',
  iview: './propsconfig/iview/',
  jimu: './propsconfig/jimu/',
  private: './propsconfig/private/',
  vux: './propsconfig/vux/'
}
function writeJavascript(savePath, filename, text) {
  try {
    mkdirp(path.dirname(savePath + filename), function(err) {
      fs.writeFileSync(savePath + filename, text, 'utf8')
    })
  } catch (error) {
    console.log(error)
  }
}
function getType(fn) {
  if (typeof fn === 'function') {
    const match = fn && fn.toString().match(/^\s*function (\w+)/)
    return match ? match[1] : ''
  } else if (fn === null) {
    return 'null'
  }
  return ''
}
function toJavascript(object, indent = 0, ignored = {}) {
  let src = ''
  const type = typeof object
  if (ignored[type]) return ''
  src += {
    undefined: object => object,
    boolean: object => object,
    number: object => object,
    string: object => {
      if (object.startsWith('function()')) return beautify.js(object)
      return object.indexOf("'") != -1 ? `\`${object}\`` : `'${object}'`
    },
    function: object => {
      if (object === Color) {
        return 'Color'
      }
      const s = object.toString()
      const m = /^function[\s\t]+([a-zA-Z]+)\(\)[\s]*{[\s\t\n]+\[native[\s]code\][\s\t\n]*}/.exec(
        s
      )
      if (m) {
        return m[1]
      } else return s
    },
    object: (object, indent) => {
      if (object === null) {
        return 'null'
      }
      if (Array.isArray(object)) {
        let s = '['
        let hasObject = false
        for (const item of object) {
          if (typeof item == 'object' || typeof item == 'function') {
            hasObject = true
            break
          }
        }
        for (const item of object) {
          if (ignored[typeof item == 'object']) continue
          if (hasObject) {
            s += `\n${'\t'.repeat(indent + 1)}`
          }
          s += toJavascript(item, indent + 1)
          s += ', '
        }
        s = s.replace(/,\s$/, '')
        if (hasObject) {
          s += `\n${'\t'.repeat(indent)}`
        }
        s += ']'
        return s
      } else {
        let s = '{'
        let hasObject = false
        for (const key in object) {
          const item = object[key]
          if (typeof item == 'object' || typeof item == 'function') {
            hasObject = true
            break
          }
        }
        for (const key in object) {
          const item = object[key]
          if (ignored[typeof item == 'object']) continue
          if (hasObject) {
            s += `\n${'\t'.repeat(indent + 1)}`
          }
          if (typeof item != 'function' || item.prototype) {
            if (/^[$_a-z][$_a-z0-9]*$/i.test(key)) {
              s += `${key}: `
            } else {
              s += `'${key}': `
            }
          } else {
            const ss = item.toString()
            if (/^function[\s\t]*\(/.test(ss)) {
              if (/^[$_a-z][$_a-z0-9]*$/i.test(key)) {
                s += `${key}: `
              } else {
                s += `'${key}': `
              }
            }
            s += ss + ','
            continue
          }
          s += toJavascript(item, indent + 1)
          s += ', '
        }
        s = s.replace(/,\s$/, '')
        if (hasObject) {
          s += `\n${'\t'.repeat(indent)}`
        }
        s += '}'
        return s
      }
    }
  }[type](object, indent)
  return src
}
for (let key in annotations) {
  // debugger
  if (key === 'vuetify' || key === 'element') continue
  // if (key !== 'jimu') continue
  for (let name in annotations[key]) {
    let _value = annotations[key][name]
    let propsResult = {}
    for (let propName in _value.what.props) {
      if (propName === 'innerText') continue
      let defaultValue = _value.what.props[propName].default
      if (
        getType(_value.what.props[propName].type) === 'Function' ||
        _value.what.props[propName].selectFromMethods
      ) {
        propsResult[propName] = Function
      } else if (typeof defaultValue === 'object') {
        let objValue = toJavascript(defaultValue)
        propsResult[propName] = {
          default: 'function(){return' + objValue + '}'
        }
      } else {
        propsResult[propName] = {
          default: defaultValue
        }
      }
    }
    // console.log(beautify.js("import {Color} from '../../../type';export default"+toJavascript(_value)))

    writeJavascript(
      pathMap[key],
      name + '/' + 'annotation.js',
      beautify.js(toJavascript(propsResult))
    )
    console.log(name + ' done!')
  }
}
// console.log(annotations)
