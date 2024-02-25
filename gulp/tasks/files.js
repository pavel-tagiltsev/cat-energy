import gulp from 'gulp';
const {src, dest} = gulp;
export default function files() {
  return src(app.path.source.files)
    .pipe(dest(app.path.build.files))
}
