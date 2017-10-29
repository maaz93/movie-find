var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var babel = require('babelify');

gulp.task("browserify", function () {
    browserify("./src/js/main.js", { debug: true })
        .transform(babel.configure({
            presets: ["es2015", "react"]
        }))
        .bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("copy", function () {
    gulp.src("./src/index.html")
        .pipe(gulp.dest("dist"));
    gulp.src("./src/css/*.*")
        .pipe(gulp.dest("dist/css"));
})

gulp.task("default", ["browserify", "copy"], function () {
    return gulp.watch("./src/**/*.*", ["browserify", "copy"]);
});
