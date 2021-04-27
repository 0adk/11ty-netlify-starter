const { src, dest } = require("gulp")

const webpack = require('webpack-stream');
const plumber = require("gulp-plumber")

exports.default = function (done) {
  return (
    src("./src/assets/scripts/main.js")
      .pipe(plumber())
      .pipe(
        webpack({
          mode: "production",
          output: {
            filename: 'main.js'
          },
          // watch: true
        })
      )
      .pipe(dest("./public/assets/scripts"))
  )
}