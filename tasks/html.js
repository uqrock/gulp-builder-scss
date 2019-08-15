import gulp from "gulp";
import rigger from "gulp-rigger";
import plumber from "gulp-plumber";
import htmlmin from "gulp-htmlmin";
import browsersync from "browser-sync";

const htmlPath = {
  input: `./assets/html/*.html`,
  output: `./build/`,
};

gulp.task(`html`, () => {
  return gulp
    .src(htmlPath.input)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(`./build/`))
    .on(`end`, browsersync.reload);
});

gulp.task(`html:prod`, () => {
  return gulp
    .src(htmlPath.input)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(`./build/`))
    .on(`end`, browsersync.reload);
});
