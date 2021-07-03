const btnLogin = document.querySelector(".btn-login");

const form = document.querySelector("form");

//onclick
btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  //Fazemos uma validação
  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach((field) => {
    if (field.value == "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", (event) => {
      if (event.animationName == "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

//Evento para tirar a rolagem quando iniciar o down
form.addEventListener("animationstart", (event) => {
  if (event.animationName == "down")
    document.querySelector("body").style.overflow = "hidden";
});
//Tiramos o form do html quando executamos o down
form.addEventListener("animationend", (event) => {
  if (event.animationName == "down") form.style.display = "none";
  //voltamos a nossa rolagem
  document.querySelector("body").style.overflow = "none";
});

/* background squares */
const ulSquares = document.querySelector("ul.squares");

/* para fazermos 12 quadrados */
for (let i = 0; i < 13; i++) {
  //criamos as li
  const li = document.createElement("li");

  //Min e máx com math random
  const random = (min, max) => Math.random() * (max - min) + min;

  //Tamanho e posições
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12)

  //Definimos isso para o Li
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  //Posição dos quadrados
  li.style.left = `${position}%`;

  //Animações
  li.style.animationDelay = `${delay}s`;
  li.style.animationDirection = `${duration}s`;
  li.style.animationTimingFunction = `cubic-brezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

  //Ul pega os li
  ulSquares.appendChild(li);
}
