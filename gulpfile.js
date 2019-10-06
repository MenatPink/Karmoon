var gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin"),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    config = {
        paths: {
            html: {
                src: "*.html",
                dest: ""
            },
            javascript: {
                src: ["src/js/*.js"],
                dest: ["build/app"]
            },
            images: {
                src: ["src/assets/*.jpg", "src/assets/*.png"],
                dest: "build/images"
            },
            sass: {
                src: ["src/sass/*.scss"],
                dest: "build/styles"
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

gulp.task('uglify-js', () => {
    return gulp.src(config.paths.javascript.src)
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.javascript.dest))
});

gulp.task('sass', () => {
    return gulp.src(config.paths.sass.src)
        .pipe(sass())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(config.paths.sass.dest))
});

gulp.task("build", gulp.series('minify-html', 'uglify-js', 'sass'))

gulp.task("default", () => {
    gulp.watch(config.paths.sass.src, gulp.series("sass"));
    gulp.watch(config.paths.javascript.src, gulp.series("uglify-js")); 
});

