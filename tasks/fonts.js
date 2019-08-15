import gulp from "gulp";

const fontPath = {
  input: `./assets/static/fonts/**/*.*`,
  output: `./build/fonts/`,
};

gulp.task(`fonts`, () => {
  return gulp.src(fontPath.input).pipe(gulp.dest(fontPath.output));
});
