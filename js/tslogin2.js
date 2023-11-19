

const btn = document.getElementById("btn-login")

btn.addEventListener("click", function(){
  const user = document.getElementById("user").value
const password = document.getElementById("password").value
    console.log("btn ok")
    console.log(user, password)
 fetch('http://localhost:8080/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    login: user,
    password: password,
  }),
})
.then(response => response.json())
.then(data => {
  // Armazenar o token no localStorage
 
 localStorage.setItem('token', data.token);
  if(token){
    window.location = "./home.html"
    console.log("ok oko k")
  }
})
.catch(error => {

  document.getElementById("login-erro").innerHTML = "Impossivel logar, usuario ou senha estão incorreto"

});
})

 const token = localStorage.getItem('token')

 if(token){
  console.log("LOGADO")
 }else{
  console.error("nao foi posssive logar")
 }

 const headers = {
  'Authorization': `Bearer ${token}`
};

fetch('http//localhost:8080/product', {
  method: 'GET',
  headers: headers,
})
.then(response => {
  // Lidere com a resposta da solicitação
  let dados = response.json()
  console.log(dados.cod)
  console.log("acesso liberado")
})
.catch(error => {
  // Lidere com erros
});






