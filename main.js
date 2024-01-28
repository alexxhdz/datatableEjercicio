/* // Funcion para obtener los datos de la API mediante AJAX

// Definimos la funcion
function obtenerUsuarios() {
    // Uso de AJAX para realizar una solicitud asincronica
    $.ajax({
        // Url, de la API a usar
        url: "https://jsonplaceholder.typicode.com/users",

        // type, metodo http de la solicitud
        type:"GET",

        // succes, funcion que se llama si la solicitud es exitosa
        success: function(data){
            //Si la solicitud es exitosa
            console.log("Ejercicio 1: " + data);
            // Iterando a través de cada usuario en los datos
            data.forEach(function(user) {
                // Accediendo a la dirección del usuario
                var address = user.address;
                // Construyendo la dirección completa como un string
                var fullAddress = address.street + ", " + address.suite + ", " + address.city + ", " + address.zipcode;
                // Imprimiendo la dirección completa en la consola
                console.log("Usando for each: " + fullAddress);
            });
        },
        

        // error, es una funcion que se llama si la solicitud falla
        error: function(error){
            console.log("Este fue el error: " + error);
        }
    });
}

obtenerUsuarios();

// Defincion de la funcion
function obtener(){
    // uso de AJAX para realizar una solicitud asincronica
    $.ajax({
        // url de la api
        url: "https://jsonplaceholder.typicode.com/users",

        // tipo de la solicitud
        type: "GET",

        // success es una funcion que se llama si la solicitud fue un exito
        success: function(data){
            console.log(data);
            
            // iterando
            data.forEach(function(user){
                // Accediendo a una propiedad
                console.log("Aqui esta el user: " + user.email);
            });
        },

        // error, es una funcion que se llama si la solicitud falla
        error: function(error){
            console.log("Error: " + error)
        }
    });
}

obtener();

// Ejercicio numero 3

function ejercicioTres(){
    // uso de AJAX para hacer una solicitud asincrona
    $.ajax({
        // url de la API a usar
        url: "https://jsonplaceholder.typicode.com/users",

        // tipo de la solicitud
        type: "GET",

        // success, para cuando la solicitud es exitosa
        success: function(data){
            console.log(data);

            data.forEach(function(user){
                let address = user.address;
                console.log("Esta es la direccion " + address);
            });
        },

        // error, cuando la solicitud falla
        error: function(error){
            console.log("Este es el error: " + error);
        }
    });
}

ejercicioTres();

// Ejercicio 4
function cuatro(){
    $.ajax({
        // url de la API
        url: "https://jsonplaceholder.typicode.com/users",

        // tipo de la url
        type: "GET",

        // success, cuando la solicitud es exitosa
        success: function(data){
            console.log("Conexion exitosa: " + data);
        },

        // error cuando la solicitud falla
        error: function(error){
            console.log("Este fue el error: " + error)
        }
    });
}

cuatro();

// Ejercicio de tipo POST */

/* function crearUsuario() {
    // Datos ficticios del usuario que queremos crear
    var userData = {
        name: "Nuevo Usuario",
        username: "nuevousuario",
        email: "nuevo@usuario.com"
    };

    // Realizando una solicitud POST a JSONPlaceholder
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users', // URL de la API
        type: 'POST', // Tipo de solicitud
        contentType: 'application/json', // Tipo de contenido
        data: JSON.stringify(userData), // Datos a enviar, convertidos a JSON
        success: function(data) {
            // Función a ejecutar si la respuesta es exitosa
            console.log('Usuario creado:', data);
        },
        error: function(error) {
            // Función a ejecutar en caso de error
            console.log('Error:', error);
        }
    });
}

crearUsuario(); */

/* // Practica: 1
function practicaUno() {
  // Datos que se van a enviar
  let agregado = {
    name: "Prueba",
    username: "pruebaUsuario",
    email: "nuevo@usuario.com",
  };

  // Solicitud de tipo post
  $.ajax({
    // url de la api
    url: "https://jsonplaceholder.typicode.com/users",

    // tipo de la solicitud
    type: "POST",

    // tipo de contenido
    contentType: "application/json",

    // datos a enviar, convertidos a JSON
    data: JSON.stringify(agregado),

    // success, cuando la solicitud es exitosa
    success: function (data) {
      console.log("Coneccion exitosa: ", data);
    },

    // error si la solicitud fue fallida
    error: function (error) {
      console.log("Este fue el error: " + error);
    },
  });
}

practicaUno(); */

// practica dos

/* function practicaDos() {
  // ejemplo de agregado uno
  let agrega = {
    name: "Ejemplo",
    username: "EjemploUser",
    email: "ejemplo@ejemplo.com",
  };

  $.ajax({
    // conexxion de tipo post a la API

    url: "https://jsonplaceholder.typicode.com/users",

    // tipo de la solicitud
    type: "POST",

    // tipo de contenido
    contentType: "application/json",

    // datos a enviar, convertidos a JSON
    data: JSON.stringify(agrega),

    // success si la coneccion fue exitosa
    success: function(data){
        console.log("usuario agregado", data);
    },

    // error si la coneccion fallo
    error: function(error){
        console.log("Error: ", error)
    }

  });
}

practicaDos(); */


// Ejercicio de tipo PUT 

/* function actualizarUsuario() {
    var userId = 1; // Identificador del usuario a actualizar
    var updatedData = {
        name: "Nombre Actualizado",
        email: "emailactualizado@ejemplo.com"
        // otros campos que desees actualizar
    };

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/' + userId, // URL específica del recurso
        type: 'PUT', // Tipo de solicitud PUT
        contentType: 'application/json', // Tipo de contenido
        data: JSON.stringify(updatedData), // Datos actualizados en formato JSON
        success: function(data) {
            // Función a ejecutar cuando la respuesta es exitosa
            console.log('Usuario actualizado:', data);
        },
        error: function(error) {
            // Función a ejecutar en caso de error
            console.log('Error:', error);
        }
    });
}

actualizarUsuario(); */


/* function act(){
    // identificador del usuario que se va a actualizar
    let userId = 2;

    // datos que se van a actualizar
    let updatedData = {
        name: "nuevo nombre",
        email: "nuevoEmail"
    }

    $.ajax({
        // url de la API
        url: "https://jsonplaceholder.typicode.com/users/" + userId,

        // Metodo a usar
        type: "PUT",

        // tipo de datos que se van a subir
        contentType: "application/json",

        // datos se pasan a tipo JSON
        data: JSON.stringify(updatedData),

        // success si la respuesta es exitosa
        success: function(data){
            console.log("Usuario modificado", data);
        },

        // error si la respuesta es fallida
        error: function(error){
            console.log("Error de la coneccion: ", error)
        }
    });
}

act(); */

/* function eliminarUsuario() {
    var userId = 1; // Identificador del usuario a eliminar

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/' + userId, // URL específica del recurso
        type: 'DELETE', // Tipo de solicitud DELETE
        success: function(data) {
            // Función a ejecutar cuando la respuesta es exitosa
            console.log('Usuario eliminado', data);
        },
        error: function(error) {
            // Función a ejecutar en caso de error
            console.log('Error:', error);
        }
    });
}

eliminarUsuario();

// Eliminar a un usuario

function deletse(){
    // Identificar el usuario a eliminar
    let userId = 3;

    $.ajax({
        // url de la api que vamos a usar
        url: "https://jsonplaceholder.typicode.com/users/" + userId, // url mas user ID

        // tipo de la solicitud http
        type: "DELETE",
 
        // success si la respuesta es exitosa
        success: function(data){
            console.log("Usaurio eliminado tres: ", data);
        },

        // error si la solicitud fue fallida
        error: function(error){
            console.log("Este fue el error: ", error);
        }
    });
}

deletse(); */