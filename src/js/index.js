import "../sass/main.scss";

let clientsContainer = [];

// fetch("https://github.com/myfreecomm/desafio-frontend-api", {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// })
// .then(res => {console.log(res)})
//CORS error

fetch("./fake-json/clients.json")
.then(res => res.json())
.then(data => {clientsContainer = data.clientes; generateHTML(data.clientes)})

function generateHTML(arr){
	let html = "";
	for(let i = 0; i < arr.length; i++){
		html = html + 
			`<div class="grid--client">
		    <img 
		      height="48" 
		      width="48"
		      class="round"
		      src=${arr[i].avatar} 
		      alt=${arr[i].nome} 
		      title=${arr[i].nome}  
		    />
		    <span>${arr[i].nome} </span>
		    <span>${arr[i].email} </span>
		    <span>${arr[i].tel}</span>
		    ${arr[i].adimplente 
		    	? '<span>Adimplente</span>' : '<span class="red">Inadimplente</span>'}
		  </div>`
	}
	let el = document.querySelector('#js-content');
	el.innerHTML = html;
	return html;
}


// document.getElementById('search').addEventListener("change", searchFor)

// function searchFor(){
// 	console.log(document.getElementById('search').value);
// }

document.addEventListener("input", function(){
  let query = window.event.target.value;
 	console.log(query);
 	generateHTML(
 		clientsContainer.filter(client => client.nome.includes(query))
 	);
});
