





function getnavlist(filter){
  const navlists=document.querySelectorAll('.navlist')


  navlists.forEach((navlist)=>{
    if(navlist.classList.contains(filter)){
      navlist.style.display='block';
    }else{
      navlist.style.display='none'
    }
  })
}



const filterbtns=document.querySelectorAll('.filter-btn')
// const filtericons=document.querySelectorAll('.filter-icon')

const defaultfilter="";
getnavlist(defaultfilter)

let filter="";
filterbtns.forEach(btn => {
  btn.addEventListener('mouseover',(e)=>{
    filter=e.target.dataset.filter;
    getnavlist(filter)
  })
 
});


const mainNavlists=document.querySelector('.navlists')
mainNavlists.addEventListener('mouseleave',()=>{
  getnavlist(defaultfilter)
})






// menu open& close seciton here


const filtermenu=document.querySelector('.filter-menu');
const menumobilelist=document.querySelector('.menu-mobile-list')

filtermenu.addEventListener('click',()=>{
  
  menumobilelist.classList.remove('hidden')
  filtermenu.classList.add('invisible')
  searchmobilelist.classList.add('hidden')
  cartmobilelist.classList.add('hidden')
})

const closemenu=document.querySelector('.close-menu');

closemenu.addEventListener('click',()=>{
  menumobilelist.classList.add('hidden')
  filtermenu.classList.remove('invisible')
  
})

// search
const filtersearch=document.querySelector('.filter-search');
const searchmobilelist=document.querySelector('.search-mobile-list')

filtersearch.addEventListener('click',()=>{
  
  searchmobilelist.classList.toggle('hidden')
  cartmobilelist.classList.add('hidden')
  menumobilelist.classList.add('hidden')
  filtermenu.classList.remove('invisible')
  getnavlist(defaultfilter)
  
})

// cart

const filtercart=document.querySelector('.filter-cart');
const cartmobilelist=document.querySelector('.cart-mobile-list')

filtercart.addEventListener('click',()=>{
  
  cartmobilelist.classList.toggle('hidden')
  searchmobilelist.classList.add('hidden')
  menumobilelist.classList.add('hidden')
  filtermenu.classList.remove('invisible')
  getnavlist(defaultfilter)
  
})



// search cart mouseleve automatically close


cartmobilelist.addEventListener('mouseleave',()=>{
  cartmobilelist.classList.add('hidden')
})


searchmobilelist.addEventListener('mouseleave',()=>{
  searchmobilelist.classList.add('hidden')
})


menumobilelist.addEventListener('mouseleave',()=>{
  menumobilelist.classList.add('hidden')
  filtermenu.classList.remove('invisible')
})


// slider js action section start here

let currentslide=1;
const sliderel=document.getElementById('slider');
let totalSlides=sliderel.childElementCount;

function next(){
  if(currentslide<totalSlides){
    currentslide++;
    show();
  }
}

function prev(){
  if(currentslide>1){
    currentslide--;
    show()
  }
}
function show(){
 
  const slides=document.getElementById('slider').getElementsByTagName('li')
for(let i=0;i<totalSlides;i++){
  let element=slides[i]
  if(currentslide===i+1){
    element.classList.remove('hidden');
  }else{
    element.classList.add('hidden');
  }
}

}

let defaultplay=true;
function autoplay(){

 if(defaultplay===true){
  next();
  if(currentslide>=totalSlides){
    currentslide=0;
  }

  setTimeout(()=>{
    autoplay()
  },3000)
 }
}

// 


const prevBtn=document.querySelector('.prev-btn');
const nxtBtn=document.querySelector('.nxt-btn');

prevBtn.addEventListener('click',()=>{
  prev();
  
})
nxtBtn.addEventListener('click',()=>{
 
  next();
})



// play pause btn slide

const playPauseEl=document.querySelector('.play-pause');
// ul icon

const playPauseMain=document.createElement('ul')
playPauseMain.setAttribute('class','play-pause-main flex flex-row justify-end mr-4 relative')

playPauseEl.appendChild(playPauseMain)


// play icon
const playSlide=document.createElement('li')
playSlide.setAttribute('class','play-slide absolute p-1  rounded-full mt-2 ')

playPauseMain.appendChild(playSlide)

const playIcon=document.createElement('i')
playIcon.setAttribute('class','fa-solid fa-play border-double border-4 border-applenav rounded-full p-1')
playSlide.appendChild(playIcon)

// pause icon

const pauseSlide=document.createElement('li')
pauseSlide.setAttribute('class','pause-slide absolute  p-1 rounded-full mt-2 hidden')

playPauseMain.appendChild(pauseSlide)

const pauseIcon=document.createElement('i')
pauseIcon.setAttribute('class','fa-solid fa-pause border-double border-4 border-applenav rounded-full p-1')
pauseSlide.appendChild(pauseIcon)

playSlide.addEventListener('click',()=>{
  defaultplay=true;
  playSlide.setAttribute('class','play-slide absolute border-2 p-1 rounded-full mt-2 hidden');
  pauseSlide.setAttribute('class','pause-slide absolute border-2 p-1 rounded-full mt-2 block');
  // slide img two btn display none
  slideBtns.style.display="none";

  autoplay()
  
})

pauseSlide.addEventListener('click',()=>{
  pauseSlide.setAttribute('class','pause-slide absolute border-2 p-1 rounded-full mt-2 hidden');
  playSlide.setAttribute('class','play-slide absolute border-2 p-1 rounded-full mt-2 block');
  // slide img two btns display block
  slideBtns.style.display="block";
  defaultplay=false;
  
  
})


// slide two btn invisbile while autoplay

const slideBtns=document.querySelector('.slide-btns')




// footer list mobile and tab section action

const footerlists=document.querySelectorAll('.footer-list')
function getfooterlist(filter){
    footerlists.forEach((footerlist)=>{
      if(footerlist.classList.contains(filter)){
        
        footerlist.style.display='block'
       
      }else{
        footerlist.style.display='none'
      }
    })
}

const defaultlist="";
getfooterlist(defaultlist)

const filterHeads=document.querySelectorAll('.footer-list-head')
const footerWrapper=document.querySelector('.footer-list-wrapper')
// close btn

filterHeads.forEach((filterhead)=>{
  filterhead.addEventListener('click',(e)=>{
      let filter=e.target.dataset.filter;
   
      getfooterlist(filter)
  })

})

const listWrappers=document.querySelectorAll('.list-wrapper')
listWrappers.forEach((listwrapper)=>{
  listwrapper.addEventListener('mouseleave',(e)=>{
      let filter=e.target.dataset.filter;
   
      getfooterlist(defaultlist)
  })

})








