let quantidadePalmas = 10;

let aplausos = '';
for (let i = 0; i < quantidadePalmas; i++) {
    aplausos += '👏';
    if ((i + 1) % 5 === 0) {
        aplausos += '🎉'
    }
}
console.log(aplausos);