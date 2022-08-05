//TRAER CARRITO
let carrito=JSON.parse(localStorage.getItem("carrito"))
console.log(carrito)


loadTableData(carrito);


function createSelectElement(values, name){
    var select = document.createElement("select");
    select.name = name;
    select.id = name;
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    return select;
}

function dolaresPesos(valNum) {
  document.getElementById("inputPesos").value= valNum*4306;   
}
  
function pesosDolares(valNum) {
    document.getElementById("inputDolares").value=valNum/4306;
    return Math.round((valNum/4306));
  }

  function calcularCantidades(items) {
    var valorTotalPesos = 0;
    var valorTotalDolares = 0;
    items.forEach( item => {
      let cantidad = parseInt(item.cantidad);
      let valor = (item.precio.split("$")[1].split("COP")[0]);
      valorTotalPesos = valorTotalPesos + (valor*cantidad);
      valorTotalDolares = valorTotalDolares + pesosDolares(valorTotalPesos);
    });
    dolaresPesos(valorTotalDolares);
    pesosDolares(valorTotalPesos);
  }

  function loadTableData(items) {

    const table = document.getElementById("tableBody");
    items.forEach( item => {
      let row = table.insertRow();
      let name = row.insertCell(0);
      name.innerHTML = item.nombre;
      let imageCell = row.insertCell(1);
      let image = document.createElement('img');
      image.src = item.foto;
      image.width = '200';
      image.height = '200';
      imageCell.appendChild(image);
      let description = row.insertCell(2);
      description.innerHTML = item.descripcion;
      let price = row.insertCell(3);
      price.innerHTML = item.precio;
      let quantityCell = row.insertCell(4);
      let quantity = createSelectElement([0,1,2,3,4,5,6,7,8,9,10], item.nombre);
      quantity.onchange = function () {
        
        item.cantidad = quantity.value.toString();
        console.log("oe")
        calcularCantidades(items);
      };
      quantityCell.appendChild(quantity);
    });
  }

  function clearProducts() {
    dolaresPesos(0);
    pesosDolares(0);
  }

  
//Rutina para limpiar resumen de la compra

let botonLimpiar = document.getElementById('botonLimpiar')
botonLimpiar.addEventListener("click", function(){
    clearProducts();
})
