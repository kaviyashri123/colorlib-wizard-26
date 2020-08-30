$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : 'Next',
            finish : 'Confirm',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            var room = $('#room').val();
            var day = $('#day').val();
            var time = $('#time').val();

            $('#fullname-val').text(fullname);
            $('#room-val').text(room);
            $('#day-val').text(day);
            $('#time-val').text(time);

            return true;
        }
    });
    $("#day").datepicker({
        dateFormat: "MM - DD - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//variable that will increment through the images
var step = 1;

function slideit() {
    //if browser does not support the image object, exit.
    var img = document.getElementById('slide');
    img.src = "image" + step + ".src";
    console.log(img.src);
    if (step < 3) step++;
    else step = 1;
    //call function "slideit()" every 1.5 seconds
    setTimeout(slideit, 1500);
}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function myFunction1(){
  var pop = document.getElementById("myPop");
  pop.classList.toggle("show");
}
function myFunction2() {
  var pup = document.getElementById("myPup");
  pup.classList.toggle("show");
}
function myFunction3() {
  var up = document.getElementById("up");
  up.classList.toggle("show");
}

window.onload = slideit();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var coll = document.getElementsByClassName("collapsible");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


