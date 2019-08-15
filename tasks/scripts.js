import gulp from "gulp";
import webpack from "webpack-stream";
import browsersync from "browser-sync";

const jsPath = {
  input: `./assets/js/index.js`,
  ouput: `./build/js/`,
};

const webpackConfig = (isProduction) => {
  return {
    mode: isProduction ? `production` : `development`,
    devtool: isProduction ? `none` : `source-map`,
    output: {
      filename: `bundle.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: `babel-loader`,
          exclude: `/node_modules/`,
        },
      ],
    },
  };
};

gulp.task(`js`, () => {
  return gulp
    .src(jsPath.input)
    .pipe(webpack(webpackConfig(false)))
    .pipe(gulp.dest(jsPath.ouput))
    .on(`end`, browsersync.reload);
});

gulp.task(`js:prod`, () => {
  return gulp
    .src(jsPath.input)
    .pipe(webpack(webpackConfig(true)))
    .pipe(gulp.dest(jsPath.ouput));
});
