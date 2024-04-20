import gulp from 'gulp';
import webpack from 'webpack-stream';
import rev from "gulp-rev";
import {readFileSync} from "node:fs";
import revRewrite from "gulp-rev-rewrite";

const {src, dest} = gulp;

const strategy = {};

strategy.dev = function js() {
  return src(Object.values(app.path.source.js))
    .pipe(app.errorHandler('js:dev'))
    .pipe(webpack({
      mode: 'development',
      entry: app.path.source.js,
      output: {filename: '[name].min.js'}
    }))
    .pipe(dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
};

strategy.prod = function js() {
  const manifest = readFileSync(app.path.build.manifest);

  return src(Object.values(app.path.source.js))
    .pipe(app.errorHandler('js:prod'))
    .pipe(webpack({
      mode: 'production',
      entry: app.path.source.js,
      output: {filename: '[name].min.js'}
    }))
    .pipe(revRewrite({ manifest }))
    .pipe(rev())
    .pipe(dest(app.path.build.js))
    .pipe(rev.manifest({
      base: app.path.buildFolder,
      path: app.path.build.manifest,
      merge: true
    }))
    .pipe(dest(app.path.build.html))
};

strategy.default = strategy.dev;
export default strategy[process.env.MODE] || strategy.default;
