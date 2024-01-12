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
    pug: `${sourceFolder}/pug/pages/*/*.pug`,
    scss: {
      base: `${sourceFolder}/sass/entry/base.scss`,
      layouts: `${sourceFolder}/sass/entry/layout.scss`,
      pages: `${sourceFolder}/sass/entry/pages/*.scss`
    },
    js: {
      'map': `${sourceFolder}/js/modules/map.js`,
      'example': `${sourceFolder}/js/modules/example.js`,
    },
    images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${sourceFolder}/assets/images/**/*.svg`,
    files: `${sourceFolder}/assets/files/**/*.*`,
    fonts: `${sourceFolder}/assets/fonts/`,
    fontStyle: `${sourceFolder}/sass/base/fonts.scss`,
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
