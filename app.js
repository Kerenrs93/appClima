let pais=document.querySelector("#pais");
let ciudad=document.querySelector("#ciudad");
let buscar=document.querySelector("#buscar");

let paisCiudad=document.querySelector("#paisCiudad");
let temperatura=document.querySelector("#temperatura");
let descripcion=document.querySelector("#descripcion");
let iconoClima=document.querySelector("#iconoClima");

let sensacionTermica=document.querySelector("#sensacionTermica");
let humedad=document.querySelector("#humedad");
let longitud=document.querySelector("#longitud");
let latitud=document.querySelector("#latitud");

buscar.addEventListener('click', ()=>{
    //let llavePropia='ee5d1bac64933632f864b0327afdcc83';
    let llave='bd4ea33ecf905116d12af172e008dbae';
    let url=  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais.value}&APPID=${llave}`;
    fetch(url).then(respuesta =>{
        return respuesta.json();
    }).then(datos=>{
        console.log(datos);
        let celsius= Math.floor(datos.main.temp - 273.15);
        paisCiudad.innerText=`${datos.name}/${datos.sys.country}`;
        temperatura.innerHTML=`${celsius}º<b>C</b>`;
        datos.weather.forEach(items =>{
            let iconos=`https://openweathermap.org/img/wn/${items.icon}.png`;
            iconoClima.src=iconos;
            descripcion.innerText=items.description;
        });

        let sensacionTermicaValor=Math.floor(datos.main.feels_like - 273.15)
        sensacionTermica.innerText=`Sensacion termica: ${sensacionTermicaValor}ºC`;
        humedad.innerText=`Humedad: ${datos.main.humidity}`;
        longitud.innerText=`Longitud: ${datos.coord.lat}`;
        latitud.innerText=`Latitud: ${datos.coord.lon}`;
    })
    pais.value="";
    ciudad.value="";
});