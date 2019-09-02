'use strict';

/*
* Изображает ASCII шахматную доску, размером N*N
*
* @param {number} N - сторона доски
* @return {string} ASCII изображение шахматной доски
* */

 const chess = N => {

    if(+N<2 || isNaN(+N) || !isFinite(N)){
        return null;
    }

    const str1 = "* ".repeat(N/2+1).slice(0, N) + '\n';
    const str2 = " *".repeat(N/2+1).slice(0, N) + '\n';

     return (str1 + str2).repeat(N/2+1).slice( 0, str1.length * N);
};