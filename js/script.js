const erorEl=document.querySelector(".eror");
const inputEl=document.querySelector(".input-el");
console.log(inputEl);
console.log(erorEl);
inputEl.addEventListener("click",function(){
        erorEl.style.display="block";
        this.style.outline=" 1px solid red";
})