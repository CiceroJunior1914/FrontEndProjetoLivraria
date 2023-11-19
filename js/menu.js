let menuItem = document.querySelectorAll('.item-menu')


function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo') 
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


// expandir menu

let btnExp = document.querySelector('#btn-exp')
let menuS = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    
    menuS.classList.toggle('expandir')
})

// busca

const btnBusca = document.getElementById("btn-busca")

btnBusca.addEventListener("click",function(){

    let inputBusca = document.getElementById("inputBusca").value
    alert(inputBusca)
})

