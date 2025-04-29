$(document).ready(function() {
  // let products = [];
  let products = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      cantidad: 10,
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 350,
      cantidad: 50,
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 200,
      cantidad: 5,
    },
  ];

  function mostrarProductos() {
    const listaProductos = $("#productTableBody");
    listaProductos.empty(); // Limpiar la lista antes de agregar los productos 👈

    if (products.length === 0) {
      listaProductos.append("<tr><td colspan='4'>No hay productos disponibles</td></tr>");
      return;
    }

    products.forEach((producto) => {
      const fila = $("<tr></tr>");
      fila.append($("<td></td>").text(producto.id));
      fila.append($("<td></td>").text(producto.nombre));
      fila.append($("<td></td>").text(producto.precio));
      fila.append($("<td></td>").text(producto.cantidad));
      fila.append(
        $("<td></td>").append(
          $("<button></button>")
            .text("Eliminar")
            .addClass("btn btn-danger btn-sm")
            .click(() => {
              products = products.filter((p) => p.id !== producto.id);
              
              mostrarProductos();
            })
        )
      );

      // Agregar btn ver detalles
      fila.append(
        $("<td></td>").append(
          $(`<button class="btn btn-info" data-id="${producto.id}"> Ver Producto </button>`)
            
        )
        // const tdVer =
      );


      listaProductos.append(fila);
    });
  }

  // btn ver detalles
  $('verProducto').on('click', function() {
    const id = $(this).data('id');
    mostrarDetalles(id);

  });


  function mostrarDetalles(id) {
    const producto = products.find((p) => p.id === id);
    if (producto) {
      const detalles = `
        <h5>Detalles del Producto</h5>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Nombre:</strong> ${producto.nombre}</p>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
      `;
      $("#verDetalle").html(detalles);
    } else {
      alert("Producto no encontrado");
    }
  }
   


  mostrarProductos();

});