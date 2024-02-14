import webpack from 'webpack-stream'

export default function js() {
  const {src, dest} = app.gulp
  const {build, source} = app.path
  const {browserSync} = app.plugins

  return src(Object.values(source.js))
    .pipe(app.errorHandler('JS'))
    .pipe(
      webpack({
        mode: __PROD__ ? 'production' : 'development',
        entry: source.js,
        output: {filename: '[name].min.js'}
      })
    )
    .pipe(dest(build.js))
    .pipe(browserSync.stream())
}
