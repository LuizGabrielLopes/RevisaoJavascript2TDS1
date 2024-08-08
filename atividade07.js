let metaLivros = 100;

livrosLidos = ["God of war", "Apologia de Sócrates", "A República", "Os elementos", "Viagem ao centro da terra"];

let livrosFaltando = metaLivros - livrosLidos.length;

for (let i = 0; i < livrosLidos.length;i++) {
    console.log(livrosLidos[i]);
}

if(livrosLidos => metaLivros){
    console.log("Você está progredindo! Faltam", livrosFaltando, "livros para atingir sua meta.");
} else {
    console.log("Parabéns! Você atingiu sua meta de leitura!")
}