const path = require('path')

const aliases = {
  '@': '.',
  '@src': 'src',
  '@public': 'public',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@store': 'src/store',
  '@plugins': 'src/plugins',
  '@editor': 'src/editor'
}

module.exports = {
  webpack: {}
}

for (const alias in aliases) {
  const aliasTo = aliases[alias]
  module.exports.webpack[alias] = resolveSrc(aliasTo)
}

function resolveSrc (_path) {
  return path.resolve(__dirname, _path)
}
