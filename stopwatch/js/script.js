/*
Сделать точно такой же таймер как здесь(http://stopwatch.onlineclock.net/new/). Основная функциональность:

Start - начинается отсчет с нуля. При работе таймера выводим миллисекунды. Кнопка Start заменяется на Stop.
Split - засекаем текущий отсчет и выводим его под таймером с меткой Split, при этом продолжаем работу таймера.
Stop - останавливаем текущий отсчет. Время, которое засекли, выводим под таймером с пометкой Stop.
Reset - обнуляем таймер, удаляем все сохраненные отметки Split и Stop.
Если будет не понятно как должны работать кнопки - просто посмотрите как они реализованы на текущем таймере по ссылке.
*/
var start = document.getElementsByClassName('start');
var pause = document.getElementsByClassName('start__pause');
var splitBtn = document.getElementsByClassName('start__split');
var clear = document.getElementsByClassName('clear');
var milisec = document.getElementsByClassName('timer__milisec');
var seconds = document.getElementsByClassName('timer__seconds');
var minutes = document.getElementsByClassName('timer__minutes');
var hourses = document.getElementsByClassName('timer__hourse');
var i = 0;

var mil = 0;
var sec = 0;
var min = 0;
var hou = 0;
var nowMil = '000';
var nowSec = '00';
var nowMin = '00';
var nowHours = '00';

    function startMilisec() {
    mil +=4;
    if (mil==0) {
    milisec[0].innerHTML = '000';
    } if (mil <=9) {
        milisec[0].innerHTML = '00' + mil;
        nowMil = '00' + mil;
    } if (mil >=10) {
        milisec[0].innerHTML = '0' + mil;
        nowMil = '0' + mil;
    } if (mil >=100) {
        milisec[0].innerHTML = mil;
        nowMil = mil;
    };
    if (mil==1000) {
        milisec[0].innerHTML = '000';
        mil = 0;
        nowMil = '000';
    };
};

    function startSeconds() {
    sec++;
    if (sec==0) {
        seconds[0].innerHTML = '00';
        nowSec = '00';
    } if (sec <=9) {
        seconds[0].innerHTML = '0' + sec;
        nowSec = '0' + sec;
    } if (sec >=10) {
        seconds[0].innerHTML = sec;
        nowSec = sec;
    };
    if (sec==60) {
        seconds[0].innerHTML =  '00';
        sec = 0;
        nowSec = '00';
        min++;
    };

    if (min==0) {
        minutes[0].innerHTML = '00';
        nowMin = '00';
    } if (min <=9) {
        minutes[0].innerHTML = '0' + min;
        nowMin = '0' + min;
    } if (min >=10) {
        minutes[0].innerHTML =  min;
        nowMin = min;
    };
    if (min==60) {
        minutes[0].innerHTML = '00';
        min = 0;
        nowMin = '00';
        hou++;
    };

    if (hou==0) {
        hourses[0].innerHTML = '00';
        nowHours = '00';
    } if (hou <=9) {
        hourses[0].innerHTML = '0' + hou;
        nowHours = '0' + hou;
    } if (hou >=10) {
        hourses[0].innerHTML = hou;
        nowHours = hou;
    };
    if (hou==24) {
        hourses[0].innerHTML = '00';
        hou = 0;
        nowHours = '00';
    };
};

    function startTimerMi() {
        startIntervalMil = setInterval(startMilisec, 1);
    };

    function startTimerSec() {
        startIntervalSec = setInterval(startSeconds, 1000);
    };

     function stopTimer() {
        clearInterval(startIntervalMil);
        clearInterval(startIntervalSec);
        mil = 0;
        sec = 0;
        min = 0;
        hours = 0;
        nowMil = '000';
        nowSec = '00';
        nowMin = '00';
        nowHours = '00';
        milisec[0].innerHTML = '000';
        seconds[0].innerHTML = '00';
        minutes[0].innerHTML = '00';
        hourses[0].innerHTML = '00';
        var resultSelect = document.getElementsByClassName('result');
        var wrapperDiv = document.querySelector('.wrapper');
        for (var a = resultSelect.length-1 ; a >=0; a--) {
            wrapperDiv.removeChild(resultSelect[a]);
            i = a;
        };
    };

    function pauseTimer() {
        clearInterval(startIntervalMil);
        clearInterval(startIntervalSec);
    };

    function changeButton() {
        pause[0].style.display = 'inline-flex';
        start[0].style.display = 'none';
    };

    function changeButton2() {
        pause[0].style.display = 'none';
        start[0].style.display = 'inline-flex';
    };

    function addResult(stopOrSplit) {
        var resultDiv = document.createElement('div');
        var wrapperDiv = document.querySelector('.wrapper');
        var resultSelect = document.getElementsByClassName('result');
        resultDiv.classList.add('result', 'timer');
        wrapperDiv.appendChild(resultDiv);
        resultSelect[i].innerHTML =  i + 1 + ' ' + stopOrSplit + ': ' + nowHours + ' : ' + nowMin + ' : ' + nowSec + ' : ' + nowMil;
        i++;
    };

    function addResultStop() {
        var addResultStopFunc = addResult('stop');
    };

    function addResultSplit() {
        var addresultSplitFunc = addResult('split');
    };


start[0].addEventListener('click', startTimerMi);
start[0].addEventListener('click', startTimerSec);
start[0].addEventListener('click', changeButton);
pause[0].addEventListener('click', pauseTimer);
pause[0].addEventListener('click', changeButton2);
pause[0].addEventListener('click', addResultStop);
clear[0].addEventListener('click', stopTimer);
clear[0].addEventListener('click', changeButton2);
splitBtn[0].addEventListener('click', addResultSplit);
