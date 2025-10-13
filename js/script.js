const erorEl=document.querySelector(".eror");
const inputEl=document.querySelector(".input-el");
const formEl=document.querySelector(".form-el");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (email) => {
  return email.match(emailRegex);
};

// real-time validation
inputEl.addEventListener('input', () => {
        if (emailRegex.test(inputEl.value.trim())) {
                erorEl.style.display="none";
                inputEl.style.outline="none";
        } else {
               erorEl.style.display="block";
               inputEl.style.outline="1px solid red" ;
  }
});

// validation after form submit
formEl.addEventListener("submit",function(e){
                e.preventDefault();
        if(validateEmail(inputEl.value)){
                erorEl.style.display="none";
                inputEl.style.outline="none";
                formEl.submit();
        }else{
               erorEl.style.display="block";
               inputEl.style.outline="1px solid red" ;
        }
})