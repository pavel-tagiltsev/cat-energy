import gulp from 'gulp';
const {src, dest} = gulp;
export default function favicons() {
  return src(app.path.source.favicons)
    .pipe(dest(app.path.build.favicons))
}
