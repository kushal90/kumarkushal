let gulp = require(`gulp`);
let autoprefixer = require(`gulp-autoprefixer`);
gulp.task(`styles`, function() {
   return gulp.src(`style.css`).pipe(autoprefixer()).pipe(gulp.dest(`build`));
});