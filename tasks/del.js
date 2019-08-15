import gulp from "gulp";
import del from "del";

gulp.task(`del`, () => {
  return del(`./build`);
});
