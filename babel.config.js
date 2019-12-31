module.exports = function(api) {
  api.cache(true)

  const isPreiviw = process.env.BUILD_ENV === 'preview'
  _presets = [['@vue/babel-preset-jsx']]
  if (!isPreiviw) {
    _presets.push([
      '@babel/env',
      {
        useBuiltIns: false
      }
    ])
  }
  return {
    presets: _presets,
    plugins: ['@babel/plugin-syntax-dynamic-import']
  }
}
