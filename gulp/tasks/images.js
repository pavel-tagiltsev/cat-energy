import imagemin from 'gulp-imagemin'

export default function images() {
  const {src, dest} = app.gulp
  const {build, source} = app.path
  const {newer, gulpIf, browserSync, webp} = app.plugins

  return src(source.images)
    .pipe(app.errorHandler('IMAGES'))
    .pipe(newer(build.images))
    .pipe(gulpIf(__PROD__, webp()))
    .pipe(gulpIf(__PROD__, dest(build.images)))
    .pipe(gulpIf(__PROD__, src(source.images)))
    .pipe(gulpIf(__PROD__, newer(build.images)))
    .pipe(
      gulpIf(
        __PROD__,
        imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          interlaced: true,
          optimizationLevel: 4 // 0 to 7
        })
      )
    )
    .pipe(dest(build.images))
    .pipe(src(source.svg))
    .pipe(dest(build.images))
    .pipe(browserSync.stream())
}
