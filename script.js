$(document).ready(function () {
  var table = $("#miTabla").DataTable({
    ajax: {
      url: "https://jsonplaceholder.typicode.com/users",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "email" },
      {
        data: null,
        defaultContent:
          "<button id='btnEliminar' class='btn btn-danger btnEliminar'>Eliminar</button>" +
          "<button id='btnActualizar' class='btn btn-primary btnActualizar'>Actualizar</button>" +
          "<button id='btnVer' class='btn btn-info btnVer'>Ver</button>",
      },
    ],
  });

  // Evento click para el botón 'Guardar Usuario'
  $("#btnGuardarUsuario").on("click", function () {
    // Recoger los datos del formulario
    var usuarioData = {
      name: $("#nombreUsuario").val(),
      email: $("#emailUsuario").val(),
      // Agrega aquí más campos si tienes más datos que recoger
    };

    // Realizar una solicitud POST a la API
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users", // Cambia esto por la URL de tu API
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(usuarioData),
      success: function (data) {
        // Aquí manejas una respuesta exitosa
        console.log("Usuario añadido:", data);
        $("#modalAgregarUsuario").modal("hide"); // Ocultar el modal
        // Aquí podrías también actualizar tu DataTable o mostrar un mensaje de éxito
        // Añadir la nueva fila
        var table = $("#miTabla").DataTable();
        table.row
          .add({
            id: data.id, // Asegúrate de que estos campos coincidan con los de tu API
            name: data.name,
            email: data.email,
            // Añade aquí otras columnas si son necesarias
          })
          .draw();
      },
      error: function (error) {
        // Aquí manejas un error
        console.log("Error:", error);
        // Aquí podrías mostrar un mensaje de error
      },
    });
  });

  // Evento para abrir el modal al hacer clic en el botón 'Agregar'
  $("#btnAgregar").on("click", function () {
    $("#modalAgregarUsuario").modal("show");
  });

  // Evento para abrir el modal de eliminación
  $("#miTabla tbody").on("click", ".btnEliminar", function () {
    var data = table.row($(this).parents("tr")).data();
    // Guardar la referencia a la fila para usarla más tarde
    var rowToDelete = $(this).parents("tr");

    $("#confirmarEliminar")
      .off("click")
      .on("click", function () {
        var userId = data.id;

        $.ajax({
          url: "https://jsonplaceholder.typicode.com/users/" + userId, // URL de API
          type: "DELETE",
          success: function (result) {
            // Eliminar la fila de DataTable
            table.row(rowToDelete).remove().draw();
            $("#modalEliminarUsuario").modal("hide"); // Ocultar el modal
          },
          error: function (error) {
            console.log("Error:", error);
            // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje
          },
        });
      });

    $("#modalEliminarUsuario").modal("show");
  });

  // Evento para abrir el modal de actualización
  $("#miTabla tbody").on("click", ".btnActualizar", function () {
    var data = table.row($(this).parents("tr")).data();
    var rowToUpdate = $(this).parents("tr");

    // Poblar los campos del modal con los datos existentes
    $("#actualizarNombreUsuario").val(data.name);
    $("#actualizarEmailUsuario").val(data.email);

    // Manejar el evento click del botón 'Actualizar Usuario'
    $("#btnActualizarUsuario")
      .off("click")
      .on("click", function () {
        var usuarioDataAct = {
          name: $("#actualizarNombreUsuario").val(),
          email: $("#actualizarEmailUsuario").val(),
        };

        $.ajax({
          url: "https://jsonplaceholder.typicode.com/users/" + data.id,
          type: "PUT",
          contentType: "application/json",
          data: JSON.stringify(usuarioDataAct),
          success: function (updatedData) {
            // Actualizar la fila en la DataTable
            table
              .row(rowToUpdate)
              .data({
                id: updatedData.id,
                name: updatedData.name,
                email: updatedData.email,
                null:
                  "<button class='btn btn-danger btnEliminar'>Eliminar</button>" +
                  "<button class='btn btn-primary btnActualizar'>Actualizar</button>" +
                  "<button class='btn btn-info btnVer'>Ver</button>",
              })
              .draw(false);

            $("#modalActualizarUsuario").modal("hide"); // Ocultar el modal
          },
          error: function (error) {
            console.log("Error:", error);
          },
        });
      });

    $("#modalActualizarUsuario").modal("show");
  });

  // Evento para abrir el modal al hacer clic en el botón 'Ver'
  $("#miTabla tbody").on("click", ".btnVer", function () {
    var data = table.row($(this).parents("tr")).data();

    // Rellenar los campos del modal con los datos del usuario
    $("#verNombreUsuario").val(data.name);
    $("#verEmailUsuario").val(data.email);

    // Mostrar el modal
    $("#modalVerUsuario").modal("show");
  });
});
