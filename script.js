const navSlide = () =>{
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav-links')
const navLinks =document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation= `navLink 0.5s ease forwards ${index/5}s`
          
            }
           
       
    })
    burger.classList.toggle('toggle');
 })
}
navSlide()


var oldScrollY = 0;
var div = document.querySelector('.nav');

window.addEventListener('scroll', function(){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 
  var dY = scrolled - oldScrollY;
  
  if ( dY <= 0  ){
    div.classList.add('nav-fixed');
  }
  // } else {
  //   div.classList.remove('nav-fixed');
  // }
  
  oldScrollY = scrolled;
});


//вывод карточек на страницу

const sidebarCard= document.querySelector('.sidebar__cards')
const request =new XMLHttpRequest();
request.open("GET", "./sidebar.json");
request.onload = ()=>{
  cards =JSON.parse(request. response);
  //console.log(cards)
  let html ='';
  cards.forEach(({img, title, text})=>{
  html += `<a href="#">
  <div class="sidebar__card">
  <img src=${img}>
  <h1 class="sidebar__title">${title}</h1>
  <p>${text}</p>
  </div>
  </a>
  `

  sidebarCard.innerHTML =html;
  console.log(html)
  })


};
request.send()
