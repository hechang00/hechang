const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
// let PATH_UIKITS = 'src/uikits'

function genConfig(PATH_UIKITS){
  console.log("genUikitsConfig")
  let file_global_components = PATH_UIKITS +'/components.js'
  let file_global_annotations = PATH_UIKITS + '/annotations.js'
  let global_components_import = '//auto create components.js\n'
  let global_annotations_improt = '//auto create annotations.js\n'
  let global_text = 'export default {\n'
  let files = fs.readdirSync(PATH_UIKITS)
  for (let i = 0; i < files.length; i++) {
    let name = files[i]
    let abPath = path.join(PATH_UIKITS, name)
    let stat = fs.lstatSync(abPath)
    if (!stat.isDirectory()) continue
    abPath = path.join(PATH_UIKITS, name, 'packages')
    if (!fs.existsSync(abPath)) continue
    stat = fs.lstatSync(abPath)
    if (stat.isDirectory()) {
      scan_kit(path.join(PATH_UIKITS, name))
      global_components_import += `import _${name.replace(/-/g,'_')} from './${name}/packages/components';\n`
      global_annotations_improt += `import _${name.replace(/-/g,'_')} from './${name}/packages/annotations';\n`
      global_text += `  ${name}:  _${name.replace(/-/g,'_')},\n`
    }
  }
  global_text += '}\n'
  writeJavascript(file_global_components,global_components_import+global_text)
  writeJavascript(file_global_annotations,global_annotations_improt+global_text)
}

function scan_kit(kitpath){
  let jm_components_dir = `${kitpath}/packages`
  let jm_comp_annotationsjs = `${kitpath}/packages/annotations.js`
  let jm_comp_componentsjs = `${kitpath}/packages/components.js` 
  let jm_comp_annotationsjs_import = '//auto create annotations.js\n'
  let jm_comp_componentsjs_import = '//auto create components.js\n'
  let jm_comp_annotationsjs_text = 'export default {\n'
  let jm_comp_componentsjs_text = 'export default {\n'
  let files = fs.readdirSync(jm_components_dir)
  for(let i = 0;i < files.length;i++){
    let name = files[i]
    let file_name = path.join(jm_components_dir, name)
    let stat = fs.lstatSync(file_name)
    if (!stat.isDirectory()) continue
    file_name = path.join(jm_components_dir, name, 'default.vue')
    if (fs.existsSync(file_name)){
      stat = fs.lstatSync(file_name)
      if (fs.existsSync(file_name) && stat.isFile()) {
        jm_comp_componentsjs_import += `import ${name.replace( /-/g, '_' )} from './${name}/default';\n`
        jm_comp_componentsjs_text += `  '${name}': ${name.replace(/-/g, '_')},\n`
      }
    }
    file_name = path.join(jm_components_dir, name, 'annotation.js')
    if (fs.existsSync(file_name)){
      stat = fs.lstatSync(file_name)
      if (fs.existsSync(file_name) && stat.isFile()) {
        jm_comp_annotationsjs_import += `import ${name.replace( /-/g, '_' )} from './${name}/annotation';\n`
        jm_comp_annotationsjs_text += `  '${name}': ${name.replace(/-/g, '_')},\n`
      }
    }
  }
  jm_comp_componentsjs_text += '}\n'
  jm_comp_annotationsjs_text += '}\n'
  writeJavascript(jm_comp_componentsjs,jm_comp_componentsjs_import+jm_comp_componentsjs_text)
  writeJavascript(jm_comp_annotationsjs,jm_comp_annotationsjs_import+jm_comp_annotationsjs_text)
}

function writeJavascript(saveName, text) {
  try {
    mkdirp(path.dirname(saveName), function(err) {
      fs.writeFileSync(saveName, text, 'utf8')
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = genConfig
