const imgs = document.querySelectorAll(".HEADER-IMG");
const prev = document.querySelector(".previous"); 
const next = document.querySelector(".next"); 

let n = 0;

function changeSlider() { 
   for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
   }
   imgs[n].style.display = 'block';
}

changeSlider(); 

prev.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlider(); 
});

next.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlider(); 
});


const scrollContainers = document.querySelectorAll(".product");

for (const container of scrollContainers) {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    });
}