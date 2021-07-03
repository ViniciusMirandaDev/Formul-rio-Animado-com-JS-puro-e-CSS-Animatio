const btnLogin = document.querySelector(".btn-login");

const form = document.querySelector("form");

//onclick
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  //Chamamos nossa classe do css form-hide
  form.classList.add("form-hide")
});

//Evento para tirar a rolagem quando iniciar o down
form.addEventListener("animationstart", (event) => {
  if(event.animationName =="down")
  document.querySelector("body").style.overflow = "hidden"
})
//Tiramos o form do html quando executamos o down
form.addEventListener("animationend", (event) => {
  if(event.animationName == "down")
  form.style.display= "none";
  //voltamos a nossa rolagem
  document.querySelector("body").style.overflow = "none"
})