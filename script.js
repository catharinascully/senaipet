function Pet(nome, especie, idade){
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;

// criação dos métodos falar e idadeHumana com this
    this.falar = function(){ return `Oi, eu sou ${this.nome} e sou um ${this.especie}`};
    this.idadeHumana = function(){
        if(this.especie.toLowerCase() == "cachorro"){
            return this.idade * 7
        }
        else if (this.especie.toLowerCase() == "gato"){
            return this.idade * 6
        }
        else{
            return this.idade * 5
        }
    };
}

// cadastros dos pets 
const meusPets = [
    new Pet("Bolt", "Cachorro", 4),
    new Pet("Mittens", "Gato", 4),
    new Pet("Rhino", "Hamster", 2)
];

// listar os animais cadastrados e função anônima atribuída a constante
const listarAnimais = () => {
    meusPets.forEach(pet => console.log(`Nome: ${pet.nome}, Espécie: ${pet.especie}, Idade: ${pet.idade} anos`))
};

// buscar pet pelo nome no array
const buscarPet = function (nome_pet){
    const encontrado = meusPets.find(pet => pet.nome == nome_pet);
    
    if(encontrado){
        console.log(encontrado.falar());
        console.log(`Idade humana de ${encontrado.nome}: ${encontrado.idadeHumana()}`);
        return encontrado
    }
    else{
        console.log(`Pet não encontrado :(`)
    }
}

function executarAcoesNosPets(acao){
    meusPets.forEach(acao)
}

console.log(buscarPet("Bolt"));
listarAnimais();