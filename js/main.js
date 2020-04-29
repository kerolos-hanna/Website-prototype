const backToTop = document.querySelector('.top');
const header = document.querySelector('.header');
const navContent = document.querySelectorAll('.nav li a');
const logo = document.querySelector('.logo img');
const sliders = document.querySelectorAll('.service-bollets li');
const img = document.querySelector('.service-item-img img');

localStorage.img = sliders[0].dataset.number;
let currentImg = localStorage.img;

/*default color for li of img 1 */
sliders[currentImg - 1].style.backgroundColor = "#6195ff";
/* handle the slider every 5 seconds */
setInterval(function () {
  sliders[currentImg - 1].style.backgroundColor = "#e8e8e8";
  currentImg++;
  if (currentImg == 4) {
    currentImg = 1;
  }
  localStorage.img = currentImg;
  if (currentImg == 1) {
    img.src = "../images/blog/blog3.webp";
    sliders[currentImg - 1].style.backgroundColor = "#6195ff";
  } else if (currentImg == 2) {
    img.src = "../images/blog/blog2.webp";
    sliders[currentImg - 1].style.backgroundColor = "#6195ff";
  } else {
    img.src = "../images/blog/blog1.webp";
    sliders[currentImg - 1].style.backgroundColor = "#6195ff";
  }
}, 5000)

/* handle sliders click */
sliders.forEach(item => {
  item.addEventListener('click', function (e) {
    sliders[currentImg - 1].style.backgroundColor = "#e8e8e8";
    console.log(e.target.dataset.number);
    localStorage.img = e.target.dataset.number;
    currentImg = localStorage.img;
    if (currentImg == 1) {
      img.src = "../images/blog/blog3.webp";
      item.style.backgroundColor = "#6195ff";
    } else if (currentImg == 2) {
      img.src = "../images/blog/blog2.webp";
      item.style.backgroundColor = "#6195ff";
    } else {
      img.src = "../images/blog/blog1.webp";
      item.style.backgroundColor = "#6195ff";
    }
  })
})

/*handle the display of back to top icon */
window.addEventListener('scroll', function () {
  if (this.pageYOffset > 100) {
    backToTop.style.display = "block";
    // header.style.backgroundColor = "#e8e8e8";
    header.style.backgroundColor = "#fff";
    logo.src = './images/logo.webp';
    navContent.forEach(item => {
      item.style.color = "black";
    })
  } else {
    backToTop.style.display = "none";
    header.style.backgroundColor = "";
    logo.src = './images/logo-alt.webp';
    navContent.forEach(item => {
      item.style.color = "white";
    })
  }
})

/*handle the back to top event */
backToTop.addEventListener('click', function (e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})