
const openModal = document.querySelector("#btn-open")
const fecharModalCadastar = document.querySelector("#close-modal")
const modalCadastra = document.querySelector("#cadastrar-modal")
const fadeModal = document.querySelector("#fade-modal")

const toggleModal = () => {
    modalCadastra.classList.toggle("hide");
    fadeModal.classList.toggle("hide");
}

[openModal, fecharModalCadastar, fadeModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });

  const btnCadastar = document.querySelector("#cadastar-cliente")

  btnCadastar.addEventListener("click", async function(){
    const modelStatus = document.querySelector("#modelSatus")
    const codValue = document.querySelector("#cod").value
    const tituloValue = document.querySelector("#titulo").value
    const nameValue = document.querySelector("#name").value
    const generoValue = document.querySelector("#genero").value
    const autorValue = document.querySelector("#autor").value
    const precoValue = document.querySelector("#preco").value

    console.log(codValue, tituloValue, nameValue, generoValue, autorValue, precoValue)

    const response = await fetch("http://localhost:8080/product",{
        method: "POST",
        headers: new Headers({
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJMaXZyYXJpYSIsInN1YiI6Imtpa28iLCJleHAiOjE2OTc4NDc5ODN9.UjU2JYfmrdpBTqX43u5uhjzvnqE4LckHdSvJOw2BL34`,
            "Content-Type": "application/json; charset=utf8",
             Accept: "application/json",
        }),
        body: JSON.stringify({
            cod: codValue,
            titulo: tituloValue,
            name: nameValue,
            genero: generoValue,
            autor: autorValue,
            preco: precoValue
          }),
          
    }).then(response =>{
        console.log("produto cadastrado com sucesso")
    }).catch(error =>{
        console.log("erro ao cadatrar produto")
    })

    let key = "Authorization";
    let token = response.headers.get(key);
    window.localStorage.setItem(key, token);
    console.log(key)


  })