const button = document.querySelector("button");
const p = document.querySelector("p");
const id = document.querySelector(".id");

const generateAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then(({ slip }) => {
      p.innerHTML = `"${slip.advice}"`;
      id.innerHTML = slip.id;
    });
};

window.onload = generateAdvice();

button.addEventListener("click", generateAdvice);
