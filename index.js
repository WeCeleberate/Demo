let wishbg=document.getElementById("wishbg")
// console.log(wishbg);
function openbg(){
    wishbg.style.width="70%"
    wishbg.style.transitionDuration="3s"
    wishbg.style.transitionTimingFunction="ease-out"
}
openbg()
console.log(document.getElementById("wish").childNodes);

let wish=document.getElementById("wish")

function wishdisplay(){
    setTimeout(()=>{
        wish.style.display="block"
   
        wish.style.transitionDuration="3s"
    },5000)
 
}

function wishDisplayStyle(){
    setTimeout(()=>{
        wish.style.color="black"
   
    wish.style.transitionDuration="3s"
    },6000)
    
}
wishdisplay()
wishDisplayStyle()