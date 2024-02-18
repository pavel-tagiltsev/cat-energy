import imagemin from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';

export default function webp() {
  const {src, dest} = app.gulp
  const {browserSync, rename} = app.plugins

  if (__DEV__) {
    return src(app.path.source.images.webp)
      .pipe(app.errorHandler('images:webp'))
      .pipe(browserSync.stream())
  }

  if (__PROD__) {
    return src(app.path.source.images.webp)
      .pipe(app.errorHandler('images:webp'))
      .pipe(imagemin([imageminWebp({
        quality: 70,
        method: 6 // slowest
      })], {
        verbose: true
      }))
      .pipe(rename({
        extname: ".webp"
      }))
      .pipe(dest(app.path.build.images))
  }
}
