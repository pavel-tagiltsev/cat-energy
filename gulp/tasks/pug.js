import gulp from 'gulp';
import fs from 'fs';
import url from 'url';
import path from 'path';
import YAML from 'yamljs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const {src, dest} = gulp;

export default function pug() {
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
