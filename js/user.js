const btnCadatrar = document.getElementById("btn-cadastar")

btnCadatrar.addEventListener("click", function(){
    console.log("test")
    const userValue = document.getElementById("userLogin").value
    const passwordValue = document.getElementById("passwordLogin").value
    const roleValue = document.getElementById("roleLogin").value
    verificarInput(userValue, passwordValue, roleValue)


    console.log(userValue, passwordValue, roleValue);


    const data = {
        login: userValue,
        password: passwordValue,
        role: roleValue
    };

    fetch("http://localhost:8080/auth/register",{
        mode:"cors",
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            document.getElementById("respostaCadastro").innerHTML = "ERRO AO CADASTRAR"
            throw new Error('Erro ao cadastrar');
        }
        document.getElementById("respostaCadastro").innerHTML = "Usuario Cadastrado com sucesso"
        return response.json(); 
    })
    .then(data => {
        // Faça algo com a resposta do servidor, se necessário
        document.getElementById("respostaCadastro").innerHTML = "Usuario Cadastrado com sucesso"
        console.log(data);
    })
    .catch(error => {
        // Trate erros aqui
        console.error(error);
    });
}

)



function verificarInput(userValue, passwordValue, roleValue) {

    if(userValue ==="" && passwordValue ===""){
        document.getElementById("respostaCadastro").innerText = "É Necessario prencher os campos"

    }

    if(userValue === ""){
        document.getElementById("respostaCadastro").innerText = "É Necessario prencher o usuario"
    }
    if(passwordValue ===""){
        document.getElementById("respostaCadastro").innerText = "É Necessario prencher a senha"

    }
}










const btnSair = document.getElementById("btn-sair")

btnSair.addEventListener("click", function(){
    localStorage.removeItem('token')
    window.location.href = './login2.html'
})


