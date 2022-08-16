const listadepecas=['Lanterna','Roda', "parabrisa"]
console.log("--------------------------")
console.log("Início do Processamento")

console.log("--------------------------")

let pesoPeca=99
if (pesoPeca > 100) {console.log ("Peso ok, Pode cadastrar a Peça")}
else {console.log ("Peça recusada")}

console.log("--------------------------")

let qtdPeca=11
if (qtdPeca > 10) {console.log ("Limite da caixa excedido")}
else {console.log ("Limite da caixa dentro dos limites")}

console.log("--------------------------")






for (let index = 0; index < listadepecas.length; index++) {
    const nomePeca = listadepecas[index];
    if (nomePeca.length  < 3) {console.log ("Nome da peça inválido")}
    else {console.log ("Peça com nome válido")}
}
console.log("--------------------------")



console.log ("Fim do processamento.")
