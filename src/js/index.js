import "../sass/main.scss";

fetch("https://github.com/myfreecomm/desafio-frontend-api", {
  'Accept': 'application/json'
})
.then(res => {console.log(res)})