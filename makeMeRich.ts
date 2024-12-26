function ganharNaMegaSena() {
    const numerosMaximos = 60;
    const numerosPorBilhete = 6;
    const meusNumerosDaSorte: Array<number> = [];
    const numerosJaSorteados: Array<number> = [];

    for (let i = 0; i < numerosPorBilhete; i++) {
        let numeroDaSorte = Math.floor(Math.random() * numerosMaximos);

        if (!numerosJaSorteados.includes(numeroDaSorte)) {
            meusNumerosDaSorte.push(numeroDaSorte);
            numerosJaSorteados.push(numeroDaSorte);
        } else {
            i--;
        }
    }
    return meusNumerosDaSorte;
}

const novosMilionarios = 2;
const quantidadeDeBilhetes = 2;
const bilhetesDaFortuna = [];

for (let i = 0; i < novosMilionarios * quantidadeDeBilhetes; i++) {
    bilhetesDaFortuna.push(ganharNaMegaSena());
}

console.log(bilhetesDaFortuna);