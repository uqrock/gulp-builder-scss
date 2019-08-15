import gulp from "gulp";
import requireDir from "require-dir";

requireDir(`./tasks/`);

const filesPath = {
  html: `./assets/html/**/*.html`,
  fonts: `./assets/static/fonts/**/*`,
  css: `./assets/styles/**/*.scss`,
  js: `./assets/js/**/*.js`,
  img: `./assets/static/images/**/*`,
};

gulp.task(`watch`, () => {
  gulp.watch(filesPath.html, gulp.series(`html`));
  gulp.watch(filesPath.fonts, gulp.series(`fonts`));
  gulp.watch(filesPath.css, gulp.series(`css`));
  gulp.watch(filesPath.js, gulp.series(`js`));
  gulp.watch(filesPath.img, gulp.series(`img`));
});

gulp.task(`dev`, gulp.series(`del`, gulp.parallel(`fonts`, `html`, `img`, `svg-sprite`, `css`, `js`), gulp.parallel(`watch`, `serve`)));

gulp.task(`build`, gulp.series(`del`, gulp.parallel(`fonts`, `html:prod`, `img:prod`, `svg-sprite`, `css:prod`, `js:prod`), gulp.parallel(`watch`, `serve`)));
