#!/usr/bin/env node

import { program } from "commander";
import { parse } from 'json2csv';
import axios from 'axios';

program
  .version("1.0.0")
  .description("My Node CLI")
  .option("-c, --ciudad <type>", "Introduce el nombre de la ciudad")
  .option("-p, --pais <type>", "Introduce el nombre del pais")
  .option("--formato <type>", "Introduce el tipo de formato: JSON, CSV o texto plano")
  .action((options) => { // ---> Logica que se ejecuta cuando los parametros son llamados;
    consultarAPI(options.ciudad, options.pais, options.formato)
  });

function consultarAPI(ciudad,pais,formato){
    const appID= '9cd3a9b4f8258188570da64348c66bfa';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    axios.get(url) // ---> Realiza la solicitud 
        .then( response => {  
            consultarFormato(formato, response.data) // Procesar la respuesta
        })
        .catch(error => { // Manejar errores
            console.error('Error fetching data:', error.message); 
            
            if (error.response) {
              if (error.response.status === 404) {
               console.error('Resource not found');
              };
            }
        });
}

function consultarFormato(formato, jsonData){
    switch (formato) {
        case 'JSON':
            console.log(jsonData)
        break;
        case 'CSV':
            try{
                // Convertir JSON a CSV
                const csv = parse(jsonData);
                console.log(csv);
            } 
            catch(error) {
                console.error('Error fetching or converting data:', error);
            }
          break;
        case 'texto plano':
                console.log(JSON.stringify(jsonData, null, 2))
          break;
        default:
          console.log('Opción no válida.');
          break;
    }
}

program.parse(process.argv);