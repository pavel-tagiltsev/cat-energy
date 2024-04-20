import gulp from 'gulp';
import path from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';
import errorHandler from './gulp/config/errorHandler.js';

global.app = {path, plugins, errorHandler};

const {watch, series, parallel, task} = gulp;
import server from './gulp/tasks/server.js';
import svg from './gulp/tasks/svg.js';
import pug from "./gulp/tasks/pug.js";
import scss from "./gulp/tasks/scss.js";
import js from "./gulp/tasks/js.js";
import reset from "./gulp/tasks/reset.js";
import favicons from "./gulp/tasks/favicons.js";
import files from "./gulp/tasks/files.js";
import img from "./gulp/tasks/img.js";
import fonts from "./gulp/tasks/fonts.js";

function watcher() {
  watch(app.path.watch.pug, pug);
  watch(app.path.watch.scss, scss);
  watch(app.path.watch.js, js);
  watch(app.path.watch.img, img);
  watch(app.path.watch.files, files);
  watch(app.path.watch.favicons, favicons);
  watch(app.path.watch.sprite, svg);
  watch(app.path.source.fonts + '**/*.{woff,woff2}', fonts);
}

const dev = series(
  reset,
  fonts,
  parallel(
    pug,
    scss,
    js,
    img,
    svg,
    files,
    favicons
  ),
  parallel(watcher, server),
)

const prod = series(
  reset,
  fonts,
  parallel(
    img,
    svg,
    files,
    favicons
  ),
  scss,
  js,
  pug,
)

const strategy = {
  dev,
  prod,
  default: dev
}

task('default', strategy[process.env.MODE] || strategy.default)

// import zip from './gulp/tasks/zip.scripts'
// import deploy from './gulp/tasks/deploy.scripts'
//
// const mainTasks = gulp.series(
//   fonts,
//   sprite,
//   favicons,
//   gulp.parallel(pug, scss, scripts, img, files)
// )
//
// const deployZIP = gulp.series(reset, mainTasks, zip)
//
// export {build}
// export {deployZIP}
// export {sprite}
// export {deploy}
