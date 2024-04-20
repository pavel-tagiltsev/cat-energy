import gulp from 'gulp';
import imagemin from "gulp-imagemin";
import { stacksvg } from "gulp-stacksvg";

const {src, dest} = gulp;

export default function sprite () {
  return src(app.path.source.sprite)
    .pipe(stacksvg({ output: `stack-sprite` }))
    .pipe(imagemin())
    .pipe(dest(app.path.build.images))
}
