import path from 'path'

const rootFolderName = path.basename(path.resolve())
const buildFolder = `./build`
const sourceFolder = `./source`
const ftpFolder = 'test'

export default {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    favicons: `${buildFolder}/`
  },
  source: {
    pug: `${sourceFolder}/pages/*/*.pug`,
    scss: {
      base: `${sourceFolder}/base/*.scss`,
      layouts: `${sourceFolder}/layout/*.scss`,
      pages: `${sourceFolder}/pages/*/*.scss`
    },
    js: {
      'base-header': `${sourceFolder}/base/head.js`,
      'base-body': `${sourceFolder}/base/body.js`,
      'layout-head': `${sourceFolder}/layout/head.js`,
      'layout-body': `${sourceFolder}/layout/body.js`,
      'index-page-head': `${sourceFolder}/pages/index/head.js`,
      'index-page-body': `${sourceFolder}/pages/index/body.js`
    },
    images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${sourceFolder}/assets/images/**/*.svg`,
    files: `${sourceFolder}/assets/files/**/*.*`,
    fonts: `${sourceFolder}/assets/fonts/`,
    fontStyle: `${sourceFolder}/base/styles/fonts.scss`,
    sprite: {
      stack: `${sourceFolder}/assets/sprites/svg/stack/**/*.svg`,
      symbol: `${sourceFolder}/assets/sprites/svg/symbol/**/*.svg`
    },
    favicons: `${sourceFolder}/assets/favicons/*.{png,xml,ico,svg,webmanifest}`
  },
  watch: {
    pug: `${sourceFolder}/**/*.pug`,
    scss: `${sourceFolder}/**/*.scss`,
    js: `${sourceFolder}/**/*.js`,
    images: `${sourceFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    files: `${sourceFolder}/assets/files/**/*.*`
  },
  buildFolder,
  sourceFolder,
  rootFolderName,
  ftpFolder
}
