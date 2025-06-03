function Pet(nome, especie, idade){
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    this.falar = function(){ return `O meu nome é ${nome} e sou um ${especie}`};
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

const meusPets = [
    new Pet("Bolt", "cachorro", 4),
    new Pet("Mittens", "gato", 4),
    new Pet("Rhino", "hamster", 2)
];

const listarAnimais = () => {
    meusPets.forEach(pet => console.log(`Nome: ${pet.nome}, Espécie: ${pet.especie}, Idade: ${pet.idade} anos`))
};

listarAnimais();