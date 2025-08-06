function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1
}

const frutas = ["laranja", "maçã", "uva", "pera", "jabuticaba", "limão"]

// console.log("Posição de uva: ", buscaSequencial(frutas, "uva"))
// console.log("Posição de jabuticaba: ", buscaSequencial(frutas, "jabuticaba"))
// console.log("Posição de mamão: ", buscaSequencial(frutas, "mamão"))


import { nomes } from "./data/vetor-nomes.mjs"

console.time("Buscando ALEXANDRE...")
console.log("Posição de ALEXANDRE:", buscaSequencial(nomes, "ALEXANDRE"))
console.timeEnd("Buscando ALEXANDRE...")