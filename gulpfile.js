const gulp = require("gulp");
const prefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const del = require("del");

const PUBLIC_PATH = "dist";

// Styles
gulp.task("styles", () => {
    return gulp
        .src("src/styles/index.css")
        .pipe(
            cleanCSS({
                compatibility: "ie11",
            })
        )
        .pipe(prefixer())
        .pipe(gulp.dest(`${PUBLIC_PATH}/styles/`));
});

// Script Main
gulp.task("scripts", () => {
    return gulp
        .src("src/scripts/index.js")
        .pipe(concat("index.js"))
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            })
        )
        .pipe(terser())
        .pipe(gulp.dest(`${PUBLIC_PATH}/scripts/`));
});

// Clean dist/
gulp.task("clean", () => {
    return del([
        `${PUBLIC_PATH}/scripts`,
        `${PUBLIC_PATH}/styles/**/*`,
        `!${PUBLIC_PATH}/styles/index.css`,
    ]);
});

// Build all bundles (not for development)
gulp.task("build", gulp.series("clean", "styles", "scripts"));
