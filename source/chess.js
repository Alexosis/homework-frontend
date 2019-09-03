'use strict';

/*
* Изображает ASCII шахматную доску, размером N*N
*
* @param {number} N - сторона доски
* @return {string} ASCII изображение шахматной доски
* */

 const chess = N => {
     if (+N < 2) {
         return 'Шахматной доски размером меньше чем 2х2 не бывает';
     }

     if ( isNaN(+N) ) {
         return 'Ошибка ввода';
     }

     if ( !isFinite(N) ){
         return 'Ввод бесконечен';
     }

     const str1 = "* ".repeat(N / 2 + 1).slice(0, N) + '\n';
     const str2 = " *".repeat(N / 2 + 1).slice(0, N) + '\n';

     return `${str1}${str2}`.repeat(N / 2 + 1).slice(0, str1.length * N);
};