import gulp from 'gulp';

const {src, dest} = gulp;

const config = {
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  removeUnusedNS: false,
                  cleanupIDs: false
                }
              }
            }
          ]
        }
      }
    ]
  },
  mode: {
    stack: {
      dest: '.',
      sprite: 'stack-sprite.svg',
      rootviewbox: false
    }
  }
}

export default function svg() {
  const {build, source} = app.path

  return src(source.sprite.stack)
    .pipe(app.errorHandler('svg'))
    .pipe(app.plugins.svgSprite(config))
    .pipe(dest(build.images))
}
