import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';

export default function png() {
  const {src, dest} = app.gulp
  const {browserSync} = app.plugins

  if (__DEV__) {
    return src(app.path.source.images.png)
      .pipe(app.errorHandler('images:png'))
      .pipe(browserSync.stream())
  }

  if (__PROD__) {
    return src(app.path.source.images.png)
      .pipe(app.errorHandler('images:png'))
      .pipe(imagemin([imageminPngquant({
        quality: [0.7, 0.85],
        speed: 1,
        dithering: 1
      })], {
        verbose: true
      }))
      .pipe(dest(app.path.build.images))
  }
}
