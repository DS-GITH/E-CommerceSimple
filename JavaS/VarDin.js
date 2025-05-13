const local = "Fortaleza";
let temp = 38.89;
const clima = "Ensolarado";

let weathertext = 'Em ${local} está fazendo ${temp} e o clima ${clima.toFixed(1)}';

document.querySelector("div#weather").innerHTML = weathertext;