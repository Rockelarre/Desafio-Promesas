
// Función asíncrona
const getAlbumes = async () => {

    // URL guardada en una variable
    const url = 'https://jsonplaceholder.typicode.com/photos';

    // Bloque try/catch para conectarse a la URL con método fetch
    try {
        const response = await fetch(url);

        // Guardar respuesta del arreglo de datos JSON e una variable
        const data = await response.json();

        // Recorrer el arreglo con ForEach e imprimir por consola los
        // títulos de los álbumes, sólo si su id es menor o igual a 20
        data.forEach((elemento)=>{
            if(elemento.id <= 20){
                console.log(elemento.title);
            }
        });

    } 
    // Método catch() para atrapar errores
    catch(err) {
        console.log(err);
    }
    
}


// Función que retorna una promesa con un mensaje de éxito, después de tres 
// segundos utilizando setTimeout()
const mostrarMensaje = () => {
    
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('Información Enviada.') ;
        },3000);
    }) 
};
 
// Función asíncrona que llama a las dos funciones, y recibe el mensaje
// de forma directa con await y lo muestra en la consola del navegador
const Main = async () => {

    getAlbumes();

    let msj = await mostrarMensaje();

    console.log(msj);
}

// Se lanza la aplicación llamando a la función Main()
Main();