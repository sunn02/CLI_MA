const yargs = require("yargs"); //Importar el modulo yargs
// --> http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

const clima = require()

const options = yargs
    .usage(usage) //Metodo usage; se utiliza para personalizar el mensaje de ayuda que se muestra al usuario cuando escribe --help
    .option("n", {alias:"Nombre de ciudad - pais", describe: "Introducir el nombre de la ciudad y su pais", type: "string", demandOption: false })
    .help(true) //Habilita la opcion --help
    .argv //yargs procesa los argumentos de la linea de comandos 


function consultarAPI(ciudad,pais){
    // key: 0cc3953448a2fd9596fd31ccf0933cc0
    const appID= '0cc3953448a2fd9596fd31ccf0933cc0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
    // console.log(url);

    
    Spinner();

    fetch(url)
        .then( resultado =>  resultado.json())
        .then( datos => {
            
            limpiarHTML();
            
            if(datos.cod === '404'){
                mostrarError('Cuidad no encontrada');
                return
            }
            // imprime html
            mostrarClima(datos);
        });

}