let gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass',() =>{
    return gulp.src(['app/scss/**/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true})); //Наблюдаем за таском
});


gulp.task('scripts', ()=>{
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js', // подключаем jquery
         'app/libs/rounded/js/velocity.min.js', // подключаем velocity.min.js
         'app/libs/rounded/js/main.js', // подключаем rounded
        'app/libs/owl.carousel/dist/owl.carousel.js' // подключаем owl.carousel
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify()) // сжимаем полученный файл
        .pipe(gulp.dest('app/js'))
});



gulp.task('browser-sync',() =>{
    browserSync({
        server: {
            baseDir : 'app'      //указываем дерикторию за которой будет наблюдать сервер
        },
        notify: false   //отключам уведомления browserSync
    })
});

gulp.task('watch',['browser-sync','sass','scripts'],()=>{   // в параметры в масиве выполняються до того как произойдет watch на момент запуска сервера
    gulp.watch('app/scss/**/*.scss',['sass']);//Наблюдаем за таском sass по пути таком то
gulp.watch('app/*.html', browserSync.reload);//Наблюдаем за file.html
gulp.watch('app/js/**/*.js', browserSync.reload);//Наблюдаем за file.js
});

