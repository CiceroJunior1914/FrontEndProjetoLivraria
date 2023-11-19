async function login(){
    let usernameValue = document.getElementById("user").value
    let passwordValue = document.getElementById("password").value

    console.log("user " + usernameValue)

    const response = await fetch("http://localhost:8080/auth/login",{
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json; charset=utf8",
             Accept: "application/json",
        }),
        body: JSON.stringify({
            login: usernameValue,
            password: passwordValue,
          }),
          
    }).then(response => response.json())
    .then(data => {
      // Armazenar o token no localStorage
     
     localStorage.setItem('token', data.token);
     console.log(data.token)
      if(token){
        window.location = "teste.html"
      }
    })
    .catch(error => {
        console.log()
    });
    
    

  
}