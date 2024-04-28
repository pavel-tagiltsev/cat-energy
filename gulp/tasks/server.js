export default function server() {
  app.plugins.browserSync.init({
    server: {
      baseDir: app.path.build.html,
    },
    notify: false,
    port: 8080
  })
}
