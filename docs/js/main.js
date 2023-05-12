





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


const prevBtn=document.querySelector('.prev-btn');
const nxtBtn=document.querySelector('.nxt-btn');

prevBtn.addEventListener('click',()=>{
  prev();
  
})
nxtBtn.addEventListener('click',()=>{
 
  next();
})



