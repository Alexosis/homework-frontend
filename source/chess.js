'use strict';

 const chess = function(N){

    if(+N<2 || isNaN(+N) || !isFinite(N)){          //проверка на валидность данных
        return null;
    }
    let parity = true;
    let str1='', str2='';
    for (let i = 0; i < +N; i++){
        if(parity){
            str1 += '*';                            //создание шаблонов двух строк:
            str2 += ' ';                            //чётной и не четной
            parity = !parity;
        }
        else {
            str1 += ' ';
            str2 += '*';
            parity = !parity;
        }

    }
    str1 += '\n';
    str2 += '\n';

    parity = true;

    let desk = str1 + str2;
    for(let i=0; i<+N-2; i++){
        if(parity){                                 //Поочерёдное присоединение готовых строк
            desk += str1;
            parity = !parity;
        }
        else{
            desk += str2;
            parity = !parity;
        }
    }
    return desk;
};