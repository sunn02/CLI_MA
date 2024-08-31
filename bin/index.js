const yargs = require("yargs"); //Importar el modulo yargs

const clima = require()

const options = yargs
    .usage(usage) //Metodo usage; se utiliza para personalizar el mensaje de ayuda que se muestra al usuario cuando escribe --help
    .option("ciudad", {alias:"Nombre de ciudad", describe: "Introduce el nombre de la ciudad", type: "string", demandOption: true })
    .option("pais", {alias:"Nombre de pais", describe: "Introduce el nombre del pais", type: "string", demandOption: true })
    .option("format", {alias:"Formato de archivo", describe: "Introduce el tipo de formato: JSON, CSV o texto plano", type: "string", demandOption: true })

    .help(true) //Habilita la opcion --help
    .argv; //yargs procesa los argumentos de la linea de comandos 


const ciudad =  argv.ciudad;
const pais =  argv.pais;

function consultarAPI(ciudad,pais){
    // key: 9cd3a9b4f8258188570da64348c66bfa
    const appID= '9cd3a9b4f8258188570da64348c66bfa';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
    // console.log(url); --> Imprimir la URL para verificar

    fetch(url)
        .then( resultado =>  resultado.json())
        .then( datos => {
            
            if(datos.cod === '404'){
                mostrarError('Ciudad no encontrada');
                return
            }
    
            mostrarClima(datos);
        });
}

// OJO!! AVERIGUAR EN COMO TOMAR LOS ARGUMENTOS DE CIUDAD Y PAIS, FUERA O DENTRO DE LA FUNCION


function mostrarClima(datos){
}

function consultarFormato(){    
}