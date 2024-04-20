import gulp from 'gulp';
import fs from 'fs';
import url from 'url';
import path from 'path';
import YAML from 'yamljs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const {src, dest} = gulp;

import { readFileSync } from 'node:fs';
import revRewrite from 'gulp-rev-rewrite';

const strategy = {};

strategy.dev = function pug() {
  const {build, source} = app.path
  const {browserSync, replace, pug, rename} = app.plugins

  return src(source.pug)
    .pipe(app.errorHandler('pug'))
    .pipe(pug({
      pretty: true,
      data: YAML.parse(
        fs.readFileSync(
          path.resolve(__dirname, '..', '..', 'source', 'data.yml'),
          'utf-8'
        )
      )
    }))
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(rename((path) => {
      path.dirname = ''
    }))
    .pipe(dest(build.html))
    .pipe(browserSync.stream())
}

strategy.prod = function pug() {
  const {build, source} = app.path
  const { replace, pug, rename } = app.plugins

  const manifest = readFileSync(app.path.build.manifest);

  return src(source.pug)
    .pipe(app.errorHandler('pug'))
    .pipe(pug({
      pretty: true,
      data: YAML.parse(
        fs.readFileSync(
          path.resolve(__dirname, '..', '..', 'source', 'data.yml'),
          'utf-8'
        )
      )
    }))
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(rename((path) => {
      path.dirname = ''
    }))
    .pipe(revRewrite({ manifest }))
    .pipe(dest(build.html))
}

strategy.default = strategy.dev;
export default strategy[process.env.MODE] || strategy.default;
