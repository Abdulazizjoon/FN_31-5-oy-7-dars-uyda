let btn = document.querySelector("button");
let wraper = document.querySelector(".wraper");
let test = Math.trunc(Math.random() * 1000)
console.log(test);

btn.addEventListener("click", function () {
  fetch(`https://www.metaweather.com/api/${test}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      throw new Error("Tarmoqdan javob topilmadi");
    })
    .then((data) => {
      console.log(data);
      wraper.innerHTML += data;
    })
    .catch((err) => {
      console.log(err);
      wraper.innerHTML += err;
    });
});
