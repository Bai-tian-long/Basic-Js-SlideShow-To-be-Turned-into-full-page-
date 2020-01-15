var slideCount = 0;
showSlide(slideCount);

//autosliding
var auto = setInterval(plusSlides, 5000 , 1)



//auto fading
function init() {
  // setup event handlers
  let $prev = document.getElementById("prevBtn")
  $prev.addEventListener('click', function() {
   plusSlides(-1)
  })

  let $next = document.getElementsByClassName("next")
  $next[0].addEventListener('click', function() {
    plusSlides(1)
  })
}

function plusSlides(n)
{
  slideCount += n;
  var slideIndex
  // reduce current number to range: 0 - 2
  var slides = document.getElementsByClassName("slides");
  
  if (slideCount >= slides.length){
    slideIndex = slideCount % slides.length;
  } else if (slideCount < 0){
    slideCount = slideCount % slides.length;
    if (slideCount != 0){
      slideIndex = slideCount + slides.length;
    } else {
      slideIndex = slideCount;
    }
  } else {
    slideIndex = slideCount;
  }
 
  
  
  showSlide(slideIndex);
}

function showSlide(n)
{
  var i;
  var slides = document.getElementsByClassName("slides");
  
  for(i = 0; i < slides.length; i++ )
  {
    slides[i].style.opacity = 0;
  }
  
  var opCount = 0;
  var myVar = setInterval(function() {
    
    if(slides[n].style.opacity == 1)
    {
      clearInterval(myVar);  
    } else
    {
      slides[n].style.opacity = opCount;
      opCount += 0.1
    }


  }, 100);
  

}


function fadeAndShow(n)
{
  var i = 0;
  var slides = document.getElementsByClassName("slides");
  
  

} 


