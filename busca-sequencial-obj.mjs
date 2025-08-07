function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])) return i
    }
    return -1
}

import {objNomes} from "./data/vetor-obj-nomes.mjs"


function comparaNome(obj){
    return obj.first_name === "ALEXANDRE"
}

console.time("Buscando ALEXANDRE")
console.log("Posição de ALEXANDRE (no objeto):", 
    buscaSequencial(objNomes,comparaNome))
console.timeEnd("Buscando ALEXANDRE")