import gulp from 'gulp';
import fonter from 'gulp-fonter';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

const {src, dest, series} = gulp;

export function woff() {
  const {build, source} = app.path;

  return src(source.fonts + '*.{woff,woff2}')
    .pipe(dest(build.fonts))
    .pipe(app.plugins.browserSync.stream());
}

export function otfToTtf() {
  const {source} = app.path;

  return src(source.fonts + '*.otf')
    .pipe(app.errorHandler('otf_to_ttf'))
    .pipe(fonter({formats: ['ttf']}))
    .pipe(dest(source.fonts))
    .pipe(app.plugins.browserSync.stream());
}

export function ttfToWoff() {
  const {build, source} = app.path;

  return src(source.fonts + '*.ttf')
    .pipe(app.errorHandler('ttf_to_woff'))
    .pipe(ttf2woff())
    .pipe(dest(build.fonts))
    .pipe(src(source.fonts + '*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest(build.fonts))
    .pipe(app.plugins.browserSync.stream());
}

export default series(woff, otfToTtf, ttfToWoff);
