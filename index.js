const s = 1400;

document.querySelectorAll('#num').forEach(counter => {

  const counterNumber = +counter.getAttribute('countTo');

  const updateCount = setInterval(() => {

    const divContent = +counter.innerText;
    const increaseBy = counterNumber / s;

    divContent < counterNumber ?
      counter.innerHTML = Math.ceil(divContent + increaseBy) :
      clearInterval(updateCount);

  }, 10);

});


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

  



  
