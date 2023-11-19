const URL = `http://localhost:8080/product`


function showTable(produto){
 

let tabela = `
`
for (let produtos of produto) {
    
    tabela+= `<div class = "tabela-e">
    
        <p>${produtos.cod}</p>
        <p>${produtos.titulo}</p>
        <p>${produtos.name}</p>
        <p>${produtos.genero}</p>
        <p>${produtos.autor}</p>
        <p>${produtos.preco}</p>
        
        <span class="icone" onclick="obterIdLinha(${produtos.cod})">
        <i class="bi bi-trash-fill" onckick="ueuu id="tt></i>
        </span>
        </div>
    `   	
  

        console.log(produtos.name)

  }

  
  document.getElementById("elementos-tabela").innerHTML = tabela


  


}




const token = localStorage.getItem('token')

async function getProdutos(URL){
    let key = "Authorization";
    const response = await fetch(URL, {
        method: "GET",
        headers: new Headers({
            'Authorization': `${token}`
        }),
    })
    console.log(key)
    let data = await response.json();
    console.log(data)
    showTable(data)
}


getProdutos(URL)

function obterIdLinha(elementoIcone) {
    let cod = elementoIcone
    alert("ID da linha clicada: " + cod)
    console.log("ID da linha clicada: " + cod);
    
  }