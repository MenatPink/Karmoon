var gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin"),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    config = {
        paths: {
            html: {
                src: "*.html",
                dest: ""
            },
            javascript: {
                src: ["src/js/*.js"],
                dest: "build/js"
            },
            css: {
                src: ["build/styles/*.css"],
                dest: "build/styles"
            },
            images: {
                src: ["src/assets/*.jpg", "src/assets/*.png"],
                dest: "build/images"
            },
            sass: {
                src: ["src/sass/*.scss"],
                dest: ""
            }
        }
    };

gulp.task('minify-html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.paths.html.dest))
});

gulp.task('minify-css', () => {
    return gulp.src(config.paths.css.src)
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(config.paths.css.dest))
});

gulp.task('uglify-js', () => {
    return gulp.src(config.paths.javascript.src)
        .pipe(uglify())
        .gulp.dest(config.paths.javascript.dest)
});

gulp.task('sass', () => {
    return gulp.src(config.paths.sass.src)
        .pipe(sass())
        .pipe(gulp.dest(config.paths.sass.dest))
});

gulp.task("build", gulp.series('minify-html', 'minify-css', 'uglify-js', 'sass'))

gulp.task("default", () => {
    gulp.watch(config.paths.sass.src, gulp.series("sass"));
});

