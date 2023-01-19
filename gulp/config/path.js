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
    pug: `${sourceFolder}/pages/*.pug`,
    scss: `${sourceFolder}/styles.scss`,
    js: `${sourceFolder}/scripts.js`,
    images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${sourceFolder}/images/**/*.svg`,
    files: `${sourceFolder}/files/**/*.*`,
    fonts: `${sourceFolder}/fonts/`,
    fontStyle: `${sourceFolder}/scss/fonts.scss`,
    sprite: {
      stack: `${sourceFolder}/svg/stack/**/*.svg`,
      symbol: `${sourceFolder}/svg/symbol/**/*.svg`
    },
    favicons: `${sourceFolder}/favicons/*.{png,xml,ico,svg,webmanifest}`
  },
  watch: {
    pug: `${sourceFolder}/**/*.pug`,
    scss: `${sourceFolder}/**/*.scss`,
    js: `${sourceFolder}/**/*.js`,
    images: `${sourceFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    files: `${sourceFolder}/files/**/*.*`
  },
  buildFolder,
  sourceFolder,
  rootFolderName,
  ftpFolder
}
