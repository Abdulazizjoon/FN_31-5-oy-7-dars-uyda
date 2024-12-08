let btn = document.querySelector("button");
let wraper = document.querySelector(".wraper");
let test = Math.trunc(Math.random() * 1000);
let img=document.querySelector('img')
console.log(test);

btn.addEventListener("click", function () {
  fetch(`https://picsum.photos/800/600`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.blob(); 
      }
      throw new Error("Tarmoqdan javob topilmadi");
    })
    .then((data) => {
      const url = URL.createObjectURL(data); 
      img.setAttribute('src',url)
    })
    .catch((err) => {
      console.log(err);
    });
});
