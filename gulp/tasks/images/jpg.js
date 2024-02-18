import imagemin from 'gulp-imagemin';
import imageminMozjpeg from "imagemin-mozjpeg";

export default function jpg() {
  const {src, dest} = app.gulp
  const {browserSync} = app.plugins

  if (__DEV__) {
    return src(app.path.source.images.jpg)
      .pipe(app.errorHandler('images:jpg'))
      .pipe(browserSync.stream())
  }

  if (__PROD__) {
    return src(app.path.source.images.jpg)
      .pipe(app.errorHandler('images:jpg'))
      .pipe(imagemin([imageminMozjpeg({
        quality: 70,
        progressive: true,
      })], {
        verbose: true
      }))
      .pipe(dest(app.path.build.images))
  }
}
