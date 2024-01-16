window.addEventListener("DOMContentLoaded", () =>{
    let menu = document.querySelector(".material-icons");
    let ulMenu =  document.querySelector(".menu-nav");
    menu.addEventListener("click", () =>{
        ulMenu.classList.toggle("menu-active");
    });
})
 
 /*****************************Consulta api************************************* */
const apiUrl = 'https://randomuser.me/api/?results=50&gender=female';

let datosObtenidos = [];
fetch(apiUrl)
.then(response => {
    if (!response.ok) {
    throw new Error(`No se pudo vincular`);
    }
    return response.json();
})
.then(data => {
    datosObtenidos = data;
    let datos = Object.values(datosObtenidos.results);
    
    for( dato of datos){
        let nombre = dato.name.first;
        let apellido = dato.name.last;
        let foto = dato.picture.large;
        let email = dato.email;
        let numero = dato.cell;

        let contenedorUsuarios = document.querySelector(".ul-usuarios");

        let liUsuario = document.createElement("li");

        let h3Nombre = document.createElement("h3") ;
        h3Nombre.textContent = `${nombre} ${apellido}`;

        let imgUsuario = document.createElement("img");
        imgUsuario.setAttribute("src", foto);
        
        let emailUsuario = document.createElement("span");
        emailUsuario.classList.add("email-span");
        emailUsuario.textContent = email;

        let numeroUsuario = document.createElement("span");
        numeroUsuario.classList.add("numero-usuario");
        numeroUsuario.textContent=numero;

        let btnAmor = document.createElement("a");
        btnAmor.classList.add("btn-amor");
        btnAmor.textContent="Hacer match";

        contenedorUsuarios.appendChild(liUsuario);
        liUsuario.appendChild(imgUsuario);
        liUsuario.appendChild(h3Nombre);
        liUsuario.appendChild(numeroUsuario);
        liUsuario.appendChild(emailUsuario);
        liUsuario.appendChild(btnAmor);
        

    }


})
.catch(error => {
    console.error('Error al realizar la solicitud:', error);
});
  

