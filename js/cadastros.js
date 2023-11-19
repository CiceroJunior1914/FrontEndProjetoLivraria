
const URL = `http://localhost:8080/cliente`

const token = localStorage.getItem('token')

if(!token){
    window.location.href = './login2.html'

}

function showTable(cliente){
 
    let tabela = ``
    
    for(let clientes of cliente){

        tabela+= `<div class="elemento">
        <p>${clientes.id}</p>
        <p>${clientes.name}</p>
        <p>${clientes.cpf}</p>
        <p>${clientes.telefone}</p>
        <p>${clientes.cep}</p>
        <p>${clientes.endereco}</p>


        </div>`

        console.log(clientes.name)
    }
    document.getElementById("tabela-body").innerHTML = tabela

}


async function getProdutos(URL){
    const token = localStorage.getItem('token')
    const response = await fetch(URL, {
        method: "GET",
        headers: new Headers({
            'Authorization': `${token} `
        }),
    })
    
    let data = await response.json();
    console.log(data)
    showTable(data)
}

getProdutos(URL)


/* btn de cadastrar */

const openModal = document.querySelector("#btn-open-cadastar")
const fecharModalCadastar = document.querySelector("#btn-fechar")
const fadeModal = document.querySelector("#fade-modal")
const btnCadastar = document.querySelector("#btn-cadastar")
const clientesModal = document.querySelector("#clientes-modal")

const toggleModal = () => {
    clientesModal.classList.toggle("hide")
    fadeModal.classList.toggle("hide")
}

[openModal, fecharModalCadastar, fadeModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });


btnCadastar.addEventListener("click", function(){
    
    let nameValue = document.getElementById("name").value
    let cpfValue = document.getElementById("cpf").value
    let telefoneValue = document.getElementById("telefone").value
    let cepValue = document.getElementById("cpf").value
    let enderecoValue = document.getElementById("endereco").value



    
    const response = fetch("http://localhost:8080/cliente",{
        method: "POST",
        headers: new Headers({
            'Authorization': `${token}`,
            "Content-Type": "application/json; charset=utf8",
             Accept: "application/json",
        }),
        body: JSON.stringify({
            name: nameValue,
            cpf: cpfValue,
            telefone: telefoneValue,
            cep: cepValue,
            endereco: enderecoValue
          }),
          
    }).then(response =>{
        document.getElementById("modal-resultado").innerHTML = "Cliente cadastrado com sucesso"
        nameValue = ""
        cpfValue = ""
        telefoneValue =""
        cepValue = ""
        enderecoValue = ""
        console.log("produto cadastrado com sucesso")
    }).catch(error =>{
        console.log("erro ao cadatrar produto")
    })

   

    verificarForm(nameValue, cpfValue, telefoneValue, cepValue, enderecoValue)
})

function verificarForm(nameValue, cpfValue, telefoneValue, cepValue, enderecoValue) {
    console.log(nameValue, cepValue, telefoneValue, cpfValue, enderecoValue);
    let resultadpModal = document.getElementById("modal-resultado")


    if(nameValue === ""){
        resultadpModal.innerHTML = "É necesario prencher o nome"
    }
    if(cpfValue ===""){
        resultadpModal.innerText = "É necessario prencher o CPF"
    }
    if(telefoneValue ===""){
        resultadpModal.innerText = "É necesario prencher o Telefone"
    }
    if(cepValue ===""){
        resultadpModal.innerText = "É necessario prencher o CEP "
    }
    if(enderecoValue ===""){
        resultadpModal.innerText = "É necessario prencher o Endereço"
    }
}

/*btn de buscar cliente */

const btnBuscarCliente = document.querySelector("#btn-buscar-modal")
const fadeBusca = document.querySelector("#fade-busca")
const btnBuscar = document.querySelector("#buscar-cliente")
const modalBusca = document.querySelector("#modal-busca")
const btnFecharBusca = document.querySelector("#btn-fechar-modal-busca")
const toggleModal2 = () => {
    modalBusca.classList.toggle("hide2")
    fadeBusca.classList.toggle("hide2")
}

[btnBuscar, btnFecharBusca, fadeBusca].forEach((el) => {
    el.addEventListener("click", () => toggleModal2());
  });

  btnBuscarCliente.addEventListener("click", async function(){
    const nomeBusca = document.getElementById("textInput").value
    console.log(nomeBusca);

   
   const response  = await fetch(`http://localhost:8080/cliente/buscar/${nomeBusca}`,{
        method: "GET",
        headers: new Headers({
            'Authorization': `${token} `
        }),
    })
    let data = await response.json();
    console.log(data)
    if(data == ""){
        console.log("cliente nãi encontrado")
        document.getElementById("erro-busca").innerHTML = "Cliente não encontrado"
    }else{
        let tabela = `<div id="resultado-busca">
        <p>id</p>
        <p>Nome</p>
        <p>CPF</p>
        <p>Telefone</p>
        <p>CEP</p>
        <p>Endereço</p>
        </div>
        `
        document.getElementById("conteiner-resposta").innerHTML = tabela
    }

    
    
    
    
    /*.then( async res =>{
        let data =  res.json()
        console.log(data)
        console.log(data.cpf)
    })
    */

  })

  





