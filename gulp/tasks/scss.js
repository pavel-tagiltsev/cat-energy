import gulp from 'gulp';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import csso from 'postcss-csso'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import sourcemaps from "gulp-sourcemaps";

const sass = gulpSass(dartSass)
const {src, dest} = gulp;

const includeExtra = [
  './node_modules/normalize.css/',
  './node_modules/include-media/dist/',
  './node_modules/starability/starability-scss/',
  './node_modules/starability/starability-scss/starability/',
  './node_modules/nouislider/dist/'
]

const strategy = {};

strategy.dev = function scss() {
  return src(Object.values(app.path.source.scss))
    .pipe(app.errorHandler('scss:dev'))
    .pipe(sourcemaps.init())
    .pipe(app.plugins.replace(/@img\//g, '../img'))
    .pipe(sass({
      includePaths: includeExtra,
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.rename((path) => {
      path.dirname = ''
    }))
    .pipe(postcss([csso()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
};

strategy.prod = function scss() {
  return src(Object.values(app.path.source.scss))
    .pipe(app.errorHandler('scss:prod'))
    .pipe(app.plugins.replace(/@img\//g, '../img'))
    .pipe(sass({
      includePaths: includeExtra,
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.rename((path) => {
      path.dirname = ''
    }))
    .pipe(groupCssMediaQueries())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(app.path.build.css))
    .pipe(postcss([csso()]))
    .pipe(dest(app.path.build.css))
};

strategy.default = strategy.dev;
export default strategy[process.env.MODE] || strategy.default;
