/* eslint-disable import/no-extraneous-dependencies */
const postCSSNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const postCssImport = require('postcss-import')
const postCssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postCSSNested,
    autoprefixer,
    postCssImport,
    postCssPresetEnv({
      browsers: 'last 2 versions',
      stage: 0,
    }),
  ],
}
