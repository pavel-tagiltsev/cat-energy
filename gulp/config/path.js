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
    favicons: `${buildFolder}/favicons/`,
    manifest: `${buildFolder}/rev-manifest.json`
  },
  source: {
    pug: `${sourceFolder}/pug/pages/*/*.pug`,
    scss: {
      base: `${sourceFolder}/sass/entry/base.scss`,
      layouts: `${sourceFolder}/sass/entry/layout.scss`,
      pages: `${sourceFolder}/sass/entry/pages/*.scss`
    },
    js: {
      'index': `${sourceFolder}/js/pages/Index.js`,
      'catalog': `${sourceFolder}/js/pages/Catalog.js`,
      'form': `${sourceFolder}/js/pages/Form.js`,
      'layout': `${sourceFolder}/js/layout/Layout.js`,
    },
    img:`${sourceFolder}/assets/images/**/*.{jpg,png}`,
    images: {
      jpg: `${sourceFolder}/assets/images/**/*.jpg`,
      png: `${sourceFolder}/assets/images/**/*.png`,
      webp: `${sourceFolder}/assets/images/**/*.{jpg,png}`,
      avif: `${sourceFolder}/assets/images/**/*.{jpg,png}`,
    },
    svg: `${sourceFolder}/assets/images/**/*.svg`,
    files: `${sourceFolder}/assets/files/**/*.*`,
    fonts: `${sourceFolder}/assets/fonts/`,
    fontStyle: `${sourceFolder}/sass/base/fonts.scss`,
    sprite: `${sourceFolder}/assets/sprite/**/*.svg`,
    favicons: `${sourceFolder}/assets/favicons/*.{png,xml,ico,svg,webmanifest}`
  },
  watch: {
    pug: `${sourceFolder}/**/*.pug`,
    scss: `${sourceFolder}/**/*.scss`,
    js: `${sourceFolder}/**/*.js`,
    img:`${sourceFolder}/assets/images/**/*.{jpg,png}`,
    images: {
      jpg: `${sourceFolder}/assets/images/**/*.jpg`,
      png: `${sourceFolder}/assets/images/**/*.png`,
      webp: `${sourceFolder}/assets/images/**/*.{jpg,png}`,
      avif: `${sourceFolder}/assets/images/**/*.{jpg,png}`,
    },
    sprite: `${sourceFolder}/assets/sprite/**/*.svg`,
    files: `${sourceFolder}/assets/files/**/*.*`,
    favicons: `${sourceFolder}/assets/favicons/*.{png,xml,ico,svg,webmanifest}`
  },
  buildFolder,
  sourceFolder,
  rootFolderName,
  ftpFolder
}
