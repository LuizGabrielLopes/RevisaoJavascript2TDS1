let quantidadeIngressos = 30;

let quantidadeBatatas = 0;

for (let i = 1; i <= quantidadeIngressos; i++) {
    if (i % 3 === 0) {
        quantidadeBatatas++;
    }
}

console.log("A quantidade de batatas grátis recebidas é " + quantidadeBatatas);