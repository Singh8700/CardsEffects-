
function cardEffects(){
  const card = document.querySelectorAll(".card-container");
  const media = 
  card.forEach((item)=>{
    item.addEventListener("mousemove",(e)=>{
  let x= window.innerHeight/2 - e.clientX;
  let y=window.innerWidth/2- e.clientY;
  //console.log(card.scrollHeight,card.scrollWidth);
  //item.style.transform=`scale(5)`;
  
  item.style.backgroundSize=`calc(20% + ${item.clientWidth*5}px) calc(20% + ${item.clientHeight*4}px)`;
  
  item.style.transform=`perspective(400px) rotateX(${y/50}deg) rotateY(${x/50}deg)`;
  
  item.style.backgroundPosition = `calc(50% + ${x/2}px) calc(50% + ${y/2}px)`;
  
  })
  })
}
cardEffects();



