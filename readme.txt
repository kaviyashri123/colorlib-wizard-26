<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Wizard-v6</title>
	<!-- Mobile Specific Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!-- Font-->
	<link rel="stylesheet" type="text/css" href="css/opensans-font.css">
	<link rel="stylesheet" type="text/css" href="fonts/material-design-iconic-font/css/material-design-iconic-font.min.css">
	<!-- datepicker -->
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
	<!-- Main Style Css -->
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
        <div class="row">
  <div class="logo1">
    <img src="images/logo.jpeg" align="left" width="50%" alt="logo" >
  </div>
  <div class="headerDiv">
    <h1 id="mainHeader">RURAL DEVELOPMENT</h1>
  </div>
  <div class="logo3">
    <img src="images/logo.jpeg" alt="logo" width="50%">
  </div>
</div>
 <font size="5px" >
<marquee><p id="date">Welcome to grama panchayat!!</p></marquee>
</font>
<span id="menuContent">
<div class="menu" background-color="pink">
<ul> 
<li>
<a href="index.html">HOME</a></li> 
<li>
<a href="abt.html">ABOUT US</a></li>
<li><a href="e.html" >E-GRAM</a></li>
<li><a href="ek.html" >E-KRUSHI</a></li> 
<li><a href="es.html">E-SCHOOL</a></li> 
<li><a href=" help.html">HELP</a></li>
</ul>
</div>
</span>
   <div class="slideshow-container">
<div class="mySlides fade">
  <img src="images/gram.jpg" style="width:100%"> 
</div>
<div class="mySlides fade">
  <img src="images/m.jpg" style="width:100%">  
</div>
<div class="mySlides fade">  
  <img src="images/mem.jpg" style="width:100%"> 
</div>
</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>


	<div class="row">
  <div class="column" >
    
  </div>
  <div class="column" style="background-color:lightblue">
    <h2 align="center">NOTICE BOARD</h2>
	<button type="button" class="collapsible">Pradhanmantri Aawas Yojana- Gramin</button>
<div class="content">
  <p>Prime minister housing scheme - Rural Centrally Sponsored Scheme will be implemented from 2016-17.
Rs.1.20 lakhs will be given in the general area and Rs.1.30 lakhs per beneficiary for the naxal-affected area for the construction of the house.
 </p>
  </div>
<button type="button" class="collapsible">Saansad Adarsh Gram Yojana (SAGY)</button>
<div class="content">
  <p>
  SAGY popularly known as ‘Saanjhi’ was launched by PM Narendra Modi under the Government of India on 11th October 2014.
 </p>
  </div>
  
<button type="button" class="collapsible"> E-Gram Swaraj & Swamitva Yojana</button>
<div class="content">
  <p>Prime Minister Narendra Modi today introduced e-Gram Swaraj & Swamitva Yojana, two web portals for accelerating the pace of development in India's villages.
  </div>
  
  <div class="column">
  
</div>
</div>
</div>
<br>

	<div class="r">
  <div class="c" >
    <img src="images/op.jpg" style="width:100%"> 
	<div class="popup" onclick="myFunction()" >
	<button type="button">GRAMSEVAK</button>
	<span class="popuptext" id="myPopup" >I am the Gramsevak of this village and my contact number is 57777537 if any issue contact me 
	</span>
  </div>
  </div>
  
  <div class="c">
    <img src="images/sev.webp" style="width:100%"> 
<div class="popup" onclick="myFunction1()" >
<span class="popuptext" id="myPop" >I am the Sarpanch of this village and my contact number is 57777537 if any issue contact me</span>
<button type="button" >SARPANCH</button>
</div>  
  </div>
  
  <div class="c"> 
    <img src="images/s.jpg" style="width:100%">
	
<div class="popup" onclick="myFunction2()" >	
	<button type="button">Krushisevak</button>
  <span class="popuptext" id="myPup" >I am the Krushisevak of this village and my contact number is 57563337 if any issue contact me
  </span>
  </div>
  </div>
  
  <div class="c">
  
    <img src="images/k.jpeg" style="width:100%">
	<div class="popup" onclick="myFunction3()" >	
	<button type="button">ZP TEACHER</button>
  <span class="popuptext" id="up" >I am the ZP teacher of this village and my contact number is 575674566 if any issue contact me
  </span>
  </div> 
  </div>
  
</div>
	<script src="js/main.js"></script>
	<script>
	var curDate= new Date();
	curDate=curDate.toString();
  var res = curDate.replace("GMT+0530 (India Standard Time)", " ");
	document.getElementById("date").innerHTML ="Welcome to Grama Panchayat, "+res;
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
</script>
</body>
</html>

