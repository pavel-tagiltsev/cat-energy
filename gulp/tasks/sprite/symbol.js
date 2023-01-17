import svgoPlugins from './svgoPlugins.js'

const symbolConfig = {
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            ...svgoPlugins,
            ...[
              {
                name: 'removeAttrs',
                params: {
                  attrs: '(fill|stroke|style)'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  mode: {
    symbol: {
      dest: '.',
      sprite: 'symbol-sprite.svg'
    }
  }
}

export default function symbol() {
  const {src, dest} = app.gulp
  const {build, source} = app.path

  return src(source.sprite.symbol)
    .pipe(app.errorHandler('SVG_SYMBOL'))
    .pipe(app.plugins.svgSprite(symbolConfig))
    .pipe(dest(build.images))
}
