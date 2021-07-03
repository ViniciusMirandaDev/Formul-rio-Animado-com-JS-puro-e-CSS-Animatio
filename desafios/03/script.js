const btnLogin = document.querySelector(".btn-login");

const form = document.querySelector("form");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  //Chamamos nossa classe do css form-hide
  form.classList.add("form-hide")
});