

/*animation for appear on scroll */
// window.addEventListener('scroll',function(){
//     var navBar = document.querySelector(".navi-container");
//     navBar.classList.toggle("sticky, window.scrollY > 0");
// })


window.addEventListener('scroll', reveal);
function reveal(){
var reveals = document.querySelectorAll('.reveal');


for(var i = 0; i < reveals.length ;i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint  = 150;
    if(revealtop < windowheight - revealpoint){

    reveals[i].classList.add("active");
    

   

}
else{
    reveals[i].classList.remove("active");
}
}};


var increment = document.querySelectorAll('.increase');
var value = increment.innerHTML;

console.log(increment);
  increment.forEach(e => {
    incNumber(e);
  });
    function incNumber(ele){
let text = +ele.innerText;
 const val = +ele.getAttribute('data-val');
 const inc = val+1;
 console.log(inc);
 if(text<val){
  ele.innerText = inc+text;
 }
 else{
  ele.innerText = val;
 }
    }

    setTimeout(function(){
      incNumber(ele);
    },200);
  
  
  


/*consiler buttons */
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides');
const imgBtn = document.querySelectorAll('.service-btn');
var slideIndex = 0 ;
var btnIndex = 0
slides[slideIndex].classList.add('bactive');
imgBtn[btnIndex].classList.add('focused');
console.log(slideIndex);
imgBtn[0].addEventListener('click',nextSlide);
imgBtn[1].addEventListener('click',nextSlide);
imgBtn[2].addEventListener('click',nextSlide);
imgBtn[3].addEventListener('click',nextSlide);

function nextSlide(){
  slides[slideIndex].classList.remove('bactive');
  slideIndex = (slideIndex === slides.length -1)? 0 : slideIndex + 1;
  slides[slideIndex].classList.add('bactive');
  slider.style.transform=`translateX(-${slideIndex * 100}%)`;

  imgBtn[btnIndex].classList.remove('focused');
  btnIndex = (btnIndex === imgBtn.length -1)? 0 : btnIndex + 1;
  imgBtn[btnIndex].classList.add('focused');
}
/**button focused* */

setInterval(function(){
  var counter = 0;
    imgBtn[counter].click();
    counter++;
    

},2000);
/*Testimonial carousel*/
const leftArrow = document.querySelector('.t-left');
const rightArrow = document.querySelector('.t-right');
const tSlider = document.querySelector('.t-slider');
const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');
const tCarousel = document.querySelector('.t-carousel');

var direction;
radio1.addEventListener('click',rightMove);
radio2.addEventListener('click',leftMove);

leftArrow.addEventListener('click', leftMove);
rightArrow.addEventListener('click',rightMove);
var sectionIndex = 0;
function rightMove() {
 
tSlider.style.transform = 'translate(25%)';
tCarousel.style.justifyContent = 'flex-start';
direction = 1;
}
function leftMove() {
  if(direction === -1){
    tSlider.appendChild(tSlider.firstElementChild);
    direction = 1;
  }
tSlider.style.transform = 'translate(-25%)';
tCarousel.style.justifyContent = 'flexend';
direction = -1;
}


tSlider.addEventListener('transitionend', slidF);
function slidF(){
 if (direction === -1){
 
 } else if (direction === 1){
  tSlider.prepend(tSlider.lastElementChild);
 }
   
    tSlider.style.transition = 'none';
    tSlider.style.transform = 'translate(0)';
    setTimeout(function(){
      tSlider.style.transition = 'all 0.5s';
    })
   
  
  };

  setInterval(function(){
    leftArrow.click();

  },5000);

 

