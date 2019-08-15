import gulp from "gulp";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGiflossy from "imagemin-giflossy";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";

const imgPath = {
  input: `./assets/static/images/**/*.{png,jpg,gif,svg}`,
  ouput: `./build/images`,
};

const imageminConfig = [
  imageminGiflossy({
    optimizationLevel: 3,
    optimize: 3,
    lossy: 2,
  }),
  imageminPngquant({
    speed: 5,
    quality: [0.6, 0.8],
  }),
  imageminZopfli({
    more: true,
  }),
  imageminMozjpeg({
    progressive: true,
    quality: 90,
  }),
  imagemin.svgo({
    plugins: [{removeViewBox: false}, {removeUnusedNS: false}, {removeUselessStrokeAndFill: false}, {cleanupIDs: false}, {removeComments: true}, {removeEmptyAttrs: true}, {removeEmptyText: true}, {collapseGroups: true}],
  }),
];

gulp.task(`img`, () => gulp.src(imgPath.input).pipe(gulp.dest(imgPath.ouput)));

gulp.task(`img:prod`, () =>
  gulp
    .src(imgPath.input)
    .pipe(plumber())
    .pipe(imagemin(imageminConfig))
    .pipe(plumber.stop())
    .pipe(gulp.dest(imgPath.ouput))
    .on(`end`, browsersync.reload)
);
