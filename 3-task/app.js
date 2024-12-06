let btn = document.getElementById('btn');
let p = document.getElementById('p');
let data = document.getElementById('data');

btn.addEventListener('click', function() {
  let res = data.value;
  
  if (!res) {
    p.innerHTML = 'Iltimos, tug\'ilgan kuningizni kiriting!';
    return;
  }
  
  let [year, month, day] = res.split('-');
  
  fetch(`http://numbersapi.com/${day}/date?month=${month}&year=${year}`)
    .then(response => response.text()) 
    .then(data => {
      p.innerHTML = data
    })
    .catch(err => {
      console.error(err);
      p.innerHTML = 'Xatolik yuz berdi, iltimos qayta urinib koring';
    });
});
