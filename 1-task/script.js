let input = document.querySelector("input");
let btn = document.querySelector("button");
let wraper = document.querySelector(".wraper");

btn.addEventListener("click", function () {
  let randon = Math.trunc(Math.random() * 100);
console.log(randon);
  fetch(`http://numbersapi.com/${randon}?json`, {
    method: "GET"
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Tarmoqdan javob topilmadi");
    })
    .then((data) => {
      console.log(data);
      wraper.innerHTML += `<p>${data.text}</p>`;
    })
    .catch((err) => {
      console.log(err);
      wraper.innerHTML += `<p>Xatolik: ${err.message}</p>`;
    })
})


