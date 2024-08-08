let armas = ["Canhão de plasma", "Canhão a Laser", "Mísseis Hipersônicos", "Espada do Poder", "Flash do KAY/O"];
let robô = [];

robô.push("Phantom do Champions");
robô.push(armas[1]);
robô.push(armas[2]);
robô.push(armas[3]);
robô.push(armas[4]);
robô.push(armas[5]);


for (let i = 0; i < robô.length; i++) {
    if (i == 0) {
        console.log('Nome do robô:', robô[i]);
    } else {
        console.log("Ataque", i, robô[i]);
    }
}