/**
 * Created by alexandrupetru on 31/05/2017.
 */
//stick the nav
jQuery(function ($) {
    $(document).ready(function () {

        $('#smart-navbar').stickUp();

    });
});

$('.nav a').on('click', function(){
    $('.navbar-toggle').click()
});//toggle nav when opened.close it and move to desired section



/*rotate the picture
var circle = document.getElementById("circle");
var angle = 0;

setInterval(function(){
    angle = (angle+5)%360;
    circle.style.transform = "rotate(" + angle + "deg)"
},6000/6)*/



//display time
//var time = document.getElementById("time");
    setInterval(function displayTime() {
        var greeting;
        var dateNow = new Date();
        var hourNow = dateNow.getHours();
        var minutesNow = dateNow.getMinutes();
        var secondsNow = dateNow.getSeconds();

        if (minutesNow < 10) {
            minutesNow = "0" + minutesNow
        }
        if (secondsNow < 10) {
            secondsNow = "0" + secondsNow
        }

        if (hourNow < 12) {
            greeting = "un inceput de zi placut!"
        }
        else if (hourNow < 17) {
            greeting = "o zi frumoasa!"
        }
        else {
            greeting = "o seara buna!"
        }
        document.getElementById("time").innerHTML = "Calculatorul dvs. ne informeaza ca este ora " + hourNow + ":" + minutesNow + ":" + secondsNow + " ,deci va dorim " + greeting
    },10)