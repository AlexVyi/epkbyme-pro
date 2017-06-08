/**
 * Created by alexandrupetru on 31/05/2017.
 */
//stick the nav

jQuery(function ($) {
    $(document).ready(function () {

        $('#smart-navbar').stickUp();

    });
});


//toggle nav when opened.close it and move to desired section

$('.nav a').on('click', function(){
    $('.navbar-toggle').click()
});



//rotate the picture

 var circle = document.getElementsByClassName("landingImg")
 var angle = 0;
    setInterval(function () {
        for(var z = 0;z < circle.length;z++) {
            angle = (angle + 5) % 360;
            circle[z].style.transform = "rotate(" + angle + "deg)"

        }
    }, 6000 / 6)



//display time

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
        document.getElementById("time").innerHTML = "Este ora " + hourNow + ":" + minutesNow + ":" + secondsNow + " ,deci va dorim " + greeting + " Echipa Europack Wrapping Solutions"
    },10)

//start the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('landingImg');

var modalImg = document.getElementsByClassName('modal-content');

var captionText = document.getElementById("caption");

  for (var j=0;j<img.length;j++){

       img[j].onclick = function() {
           modal.style.display = "block";
           for (var i = 0; i < modalImg.length; i++) {
               modalImg[i].src = this.src;
               captionText.innerHTML = this.alt;
           }
       }

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}