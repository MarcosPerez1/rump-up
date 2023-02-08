let frase = prompt("Escribe una frase:");
let letra = prompt("Escribe una letra:");
console.log(frase.length);
let cantidadVeces;
for (let i = 0; i = frase.length; i=i+1) {
    if (frase[i] == letra) {
        cantidadVeces = cantidadVeces + 1;
    }
}
/*console.log(`${cantidadVeces} que aparece la letra ${letra}`);*/
console.log(cantidadVeces);