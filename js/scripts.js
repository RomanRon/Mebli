var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
 items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
 pos = Math.max(pos - 1, 0);
 setTransform();
}
function next() {
 pos = Math.min(pos + 1 , itemCount - 1);
 setTransform();
 if (pos == 3) {
  pos -= 4;
 }
}
window.addEventListener('resize', setTransform);﻿


        // Timer Timer Timer Timer Timer Timer Timer Timer Timer

var a = new Date(); // Це потрібно щоб вирахувати скільки залишилося часу
var curtime = new Date('2019/04/17 18:00:00'); // Сюди вводити дату :)
var time = curtime.getTime()/1000-a.getTime()/1000; // тут ми беремо нашу дату і дату 1970 року здається і віднімаємо
                                                    // але перед тим ділими на 1000 щоб получити секунди
                                                    // У результаті получимо час в секундан який нам потрібно
var counter = 0; // Відлік часу.
setInterval(timerstart, 1000); // Запускаєм таймер кожну секунду
function timerstart(){ // фукнція яка запускає таймер
  var timeleft = time - counter; // Вираховуємо скільки ще лишилося часу
  if(timeleft >= 0){ // якащо лишилося більше чим 1 секунда
  convert(timeleft); // Конвертувати данні в потрібні
  counter++; // Додає до відліку часу
} else {
  Array.prototype.forEach.call(document.getElementsByClassName("CDT"), function(el) {
    el.innerHTML = '<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>';
  });
}
}
function convert(time){ // Функція яка перетворює час
  var tday = document.getElementsByClassName("timer_day"); // Беремо з таймера дні
  var thr = document.getElementsByClassName("timer_hr"); // години
  var tmin = document.getElementsByClassName("timer_min"); // мінути
  var tsec = document.getElementsByClassName("timer_sec"); // секунди
  var days = Math.floor(time/60/60/24); //вираховуємо скільки лишилося днів
  var hour = Math.floor(time/60/60-days*24); //вираховуємо скільки лишилося годин
  var min = Math.floor((((time/60)-hour*60)-days*24*60)); //вираховуємо скільки лишилося мінут
  var sec = Math.floor(time % 60); //вираховуємо скільки лишилося секунд
  if(days <= 9) days = "0"+days; // Додаємо 0 якщо потрібно
  if(hour <= 9) hour = "0"+hour;
  if(min <= 9) min = "0"+min;
  if(sec <= 9) sec = "0"+sec;
    Array.prototype.forEach.call(tday, function(el) {
    el.textContent = days; //Присвоюємо дні
  });
    Array.prototype.forEach.call(thr, function(el) {
    el.textContent = hour;
  });
    Array.prototype.forEach.call(tmin, function(el) {
    el.textContent = min;
  });
    Array.prototype.forEach.call(tsec, function(el) {
    el.textContent = sec;
    });
}