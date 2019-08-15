import gulp from "gulp";
import svg from "gulp-svg-sprite";
import browsersync from "browser-sync";

const spritePath = {
  input: `./assets/static/images/icons/*.svg`,
  output: `./build/images/sprite`,
};

const spriteConfig = {
  shape: {
    dest: `intermediate-svg`,
  },
  mode: {
    stack: {
      sprite: `../sprite.svg`,
    },
  },
};

gulp.task(`svg-sprite`, () => {
  return gulp
    .src(spritePath.input)
    .pipe(svg(spriteConfig))
    .pipe(gulp.dest(spritePath.output))
    .on(`end`, browsersync.reload);
});
