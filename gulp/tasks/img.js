import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import imageminAvif from "imagemin-avif";

const {src, dest, parallel} = gulp;

function jpg() {
  return src(app.path.source.images.jpg)
    .pipe(app.errorHandler('jpg'))
    .pipe(imagemin([imageminMozjpeg({
      quality: 70,
      progressive: true,
    })], {
      verbose: true
    }))
    .pipe(dest(app.path.build.images))
}

function png() {
  return src(app.path.source.images.png)
    .pipe(app.errorHandler('png'))
    .pipe(imagemin([imageminPngquant({
      quality: [0.7, 0.85],
      speed: 1,
      dithering: 1
    })], {
      verbose: true
    }))
    .pipe(dest(app.path.build.images))
}

function webp() {
  return src(app.path.source.images.webp)
    .pipe(app.errorHandler('webp'))
    .pipe(imagemin([imageminWebp({
      quality: 70,
      method: 6 // slowest
    })], {
      verbose: true
    }))
    .pipe(app.plugins.rename({
      extname: ".webp"
    }))
    .pipe(dest(app.path.build.images))
}

function avif() {
  return src(app.path.source.images.avif)
    .pipe(app.errorHandler('avif'))
    .pipe(imagemin([imageminAvif({
      quality: 70,
      speed: 0 // slowest
    })], {
      verbose: true
    }))
    .pipe(app.plugins.rename({
      extname: ".avif"
    }))
    .pipe(dest(app.path.build.images))
}

const strategy = {};

strategy.dev = function img() {
  return src(app.path.source.img)
    .pipe(dest(app.path.build.images))
};

strategy.prod = parallel(jpg, png, webp, avif);

strategy.default = strategy.dev;
export default strategy[process.env.MODE] || strategy.default;
