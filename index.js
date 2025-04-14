// Creacion del menu y precios
const productos = ['Té', 'Café', 'Jugo', 'Medialuna', 'Galleta', 'Salir'];
const precios = [1500, 2500, 3000, 1400, 700, 0];

//Mostrando el menu
function mostrarMenu () {
    console.log('Menu de productos');
    for (let i = 0; i < productos.length; i++){
        console.log(`${i + 1}: ${productos[i]} $${precios[i]}`);
    }
}

//Funcion para devolver cantidad a pagar
function calcularTotal (indice, cantidad) {
    return precios[indice] * cantidad;
}

mostrarMenu();

let total = 0;
let bucle = true;

//Bucle para pedir varios productos
while (bucle) {
    const opcionUsuario = parseInt(prompt('Seleccione el número del producto'));

    //En caso de error del usuario
    if (opcionUsuario < 1 || opcionUsuario > productos.length || isNaN(opcionUsuario)) {
        alert('Error, opción inválida');
        continue;
    }

    const indice = opcionUsuario - 1;
    
    switch (indice) {
        case 5: //En caso de Salir
            bucle = false;
            console.log('Gracias por tu tiempo.');  
            break;
    
        default: //En caso de continuar
            const cantidad = parseInt(prompt(`¿Cuántos/as ${productos[indice]}/s desea?`));
            if (cantidad <= 0 || isNaN(cantidad)){
                alert('Error, cantidad no válida.');
            } else {
                const subtotal = calcularTotal(indice, cantidad);
                total = total + subtotal;
                console.log(`Agregaste ${cantidad} ${productos[indice]}/s. Subtotal: $${subtotal}.`);
            }
            break;
    }
}

//Mostramos el total solo si se agrego algun producto
if (total >= 1){
    console.log(`Total a pagar por todos los pedidos: $${total}.`);
}