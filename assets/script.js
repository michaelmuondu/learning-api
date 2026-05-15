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
        //emails
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                document.getElementById("emails").innerHTML += `<p>${user.email}</p>`
            });
        });
        // user adress
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => { 
            data.forEach(user => {
                document.getElementById("address").innerHTML += `<p>${user.address} </p>`
            });
        });
        //street
          fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      document.getElementById("street").innerHTML += 
        `<p>${user.address.street}</p>`;
    });
  });
  //suite
    fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      document.getElementById("suite").innerHTML += 
        `<p>${user. address.suite}</p>`;
    });
  });
//city
 fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      document.getElementById("city").innerHTML += 
        `<p>${user. address.city}</p>`;
    });
  });
