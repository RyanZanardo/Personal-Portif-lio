window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky" , window.scrollY > 0);
});


/*======= Wave =========*/
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  wave1.style. backgroundPositionX = 400 + value * 4 +'px';
  wave2.style. backgroundPositionX = 300 + value * -4 +'px';
  wave3.style. backgroundPositionX = 200 + value * 2 +'px';
  wave4.style. backgroundPositionX = 100 + value * -2 +'px';
})
/*======= Final Wave =========*/

/*======= Responsive navigation menu =========*/
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})
/*======= Final Responsive navigation menu =========*/

/*==== barra de skills animaçao =======*/
const skills_wrap = document.querySelector(".about-skills"),
  skills_bar = document.querySelectorAll(".progress-line");
  window.addEventListener("scroll", () => {
    skillsEffect();
  })
  //every time we scrolll checking, we exceeded the about-skills or not
  function checkScroll(el){
    //getting th top position of about-skills relative to view port , in other words we need to get 
    //amount of pixels between about-skills and the top edge of the window
    let rect = el.getBoundingClientRect();
    //after knowing the amount of pixels betwen the top edge of about skills and the top edge of window
    //now we will check we exceeded the bottom edge of about skills or not
      if(window.innerHeight >= rect.top + el.offsetHeight) return true;
      return false;
  }
  function skillsEffect(){
      if(!checkScroll(skills_wrap)) return;
      skills_bar.forEach((skill) =>(skill.style.width = skill.dataset.progress));
  }
  