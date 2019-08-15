import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task(`serve`, () => {
  browsersync.init({
    server: `./build`,
    port: 4000,
    notify: true,
    // online: false, // Work offline without internet connection
    // tunnel: true, tunnel: `codeska`, // Demonstration page: http://projectname.localtunnel.me
  });
});
