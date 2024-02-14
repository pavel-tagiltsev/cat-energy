import fs from 'fs'
import url from 'url'
import path from 'path'
import YAML from 'yamljs';

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function pug() {
  const {src, dest} = app.gulp
  const {build, source} = app.path
  const {browserSync, replace, pug, rename} = app.plugins

  return src(source.pug)
    .pipe(app.errorHandler('PUG'))
    .pipe(pug({
      pretty: app.isDev,
      data: YAML.parse(
          fs.readFileSync(
            path.resolve(__dirname, '..', '..', 'source', 'data.yml'),
            'utf-8'
          )
        )
      })
    )
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(
      rename((path) => {
        path.dirname = ''
      })
    )
    .pipe(dest(build.html))
    .pipe(browserSync.stream())
}
