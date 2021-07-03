const btnLogin = document.querySelector(".btn-login");

const form = document.querySelector("form");

//onclick
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  //Fazemos uma validação
  const fields = [...document.querySelectorAll(".input-block input")]

  fields.forEach(field => {
    if(field.value == "")
    form.classList.add("validate-error")
  });

  const formError = document.querySelector(".validate-error");
  if(formError){
    formError.addEventListener(("animationend"), (event) => {
      if (event.animationName == "nono") {
        formError.classList.remove("validate-error")
      }
    })
  }else {
    form.classList.add("form-hide")
  }
});

//Evento para tirar a rolagem quando iniciar o down
form.addEventListener("animationstart", (event) => {
  if(event.animationName =="down")
  document.querySelector("body").style.overflow = "hidden"
})
//Tiramos o form do html quando executamos o down
form.addEventListener("animationend", (event) => {
  if(event.animationName == "down")
  form.style.display = "none";
  //voltamos a nossa rolagem
  document.querySelector("body").style.overflow = "none"
})