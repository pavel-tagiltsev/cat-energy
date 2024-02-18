import imagemin from 'gulp-imagemin';
import imageminAvif from "imagemin-avif";

export default function avif() {
  const {src, dest} = app.gulp
  const {browserSync, rename} = app.plugins

  if (__DEV__) {
    return src(app.path.source.images.avif)
      .pipe(app.errorHandler('images:avif'))
      .pipe(browserSync.stream())
  }

  if (__PROD__) {
    return src(app.path.source.images.avif)
      .pipe(app.errorHandler('images:avif'))
      .pipe(imagemin([imageminAvif({
        quality: 70,
        speed: 0 // slowest
      })], {
        verbose: true
      }))
      .pipe(rename({
        extname: ".avif"
      }))
      .pipe(dest(app.path.build.images))
  }
}
