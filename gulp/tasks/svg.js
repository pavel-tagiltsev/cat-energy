import gulp from 'gulp';
import imagemin from "gulp-imagemin";
import { stacksvg } from "gulp-stacksvg";
import rev from "gulp-rev";

const {src, dest} = gulp;

const strategy = {};

strategy.dev = function sprite () {
  return src(app.path.source.sprite)
    .pipe(stacksvg({ output: `stack-sprite` }))
    .pipe(imagemin())
    .pipe(dest(app.path.build.images))
}

strategy.prod = function sprite () {
  return src(app.path.source.sprite)
    .pipe(stacksvg({ output: `stack-sprite` }))
    .pipe(imagemin())
    .pipe(rev())
    .pipe(dest(app.path.build.images))
    .pipe(rev.manifest({
      base: app.path.buildFolder,
      path: app.path.build.manifest,
      merge: true
    }))
    .pipe(dest(app.path.build.html))
}

strategy.default = strategy.dev;
export default strategy[process.env.MODE] || strategy.default;
