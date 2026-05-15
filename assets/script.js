// api
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    } ) ;
    //fetching 
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(data => {
        data.forEach(user => {
            document.getElementById("users").innerHTML +=`<p>${user.name}</p>`
        });
        } ) ;