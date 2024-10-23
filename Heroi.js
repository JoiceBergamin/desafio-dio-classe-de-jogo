
//inicio da classe heroi
class Heroi{
    constructor(nomeHeroi, idadeHeroi = undefined, indiceTipoHeroi, indiceAtaqueHeroi){
    this.nomeHeroi = nomeHeroi
    this.idadeHeroi = idadeHeroi
    this.tipoHeroi = ["Guerreiro", "Mago", "Monge", "Ninja"] //vetor guardando infos nas posições 0 1 2 3 - números que serão usados para o indiceTipoHeroi apontar para a info correspondente
    this.indiceTipoHeroi = indiceTipoHeroi //espécie de ponteiro que apontará para um valor determinado dentro do vetor tipoHeroi para resgatar o valor correspondente ao numero que está guardando a informação
    this.ataqueHeroi = ["Espada", "Magia", "Artes Marciais", "Shuriken"] //vetor guardando infos nas posições 0 1 2 3 - números que serão usados para o indiceAtaqueHeroi apontar para a info correspondente
    this.indiceAtaqueHeroi = indiceAtaqueHeroi //espécie de ponteiro que apontará para um valor determinado dentro do vetor ataqueHeroi
}
atacar(){ //metodo da classe heroi

    if (this.indiceTipoHeroi === 0){ //no método estou importando os valores definidos na instância do objeto para corresponderem os valores usados nas condições if/else
        console.log(`O Herói ${this.nomeHeroi} do tipo ${this.tipoHeroi[this.indiceTipoHeroi]} atacou usando ${this.ataqueHeroi[this.indiceAtaqueHeroi]}`)
                                                       //declarei o vetor criado na classe e a posição que quero é o valor do indice que será definido na instância do objeto
    } else if (this.indiceTipoHeroi === 1){
        console.log(`O Herói ${this.nomeHeroi} do tipo ${this.tipoHeroi[this.indiceTipoHeroi]} atacou usando ${this.ataqueHeroi[this.indiceAtaqueHeroi]}`)
    
    } else if (this.indiceTipoHeroi === 2){
        console.log(`O Herói ${this.nomeHeroi} do tipo ${this.tipoHeroi[this.indiceTipoHeroi]} atacou usando ${this.ataqueHeroi[this.indiceAtaqueHeroi]}`)
    
    }else if (this.indiceTipoHeroi === 3){
        console.log(`O Herói ${this.nomeHeroi} do tipo ${this.tipoHeroi[this.indiceTipoHeroi]} atacou usando ${this.ataqueHeroi[this.indiceAtaqueHeroi]}`)
    
    } else {
        console.log("Informações de Herói fora do padrão!")
        console.log("Tente novamente!")
    }
} //fim do método atacar()

}// fim da classe heroi

let heroi01 = new Heroi("Thor", 1500, 0, 0)
let heroi02 = new Heroi("Merlin", undefined, 1, 1)
let heroi03 = new Heroi("Mestre Oogway", undefined, 2,2)
let heroi04 = new Heroi("Naruto", 17, 3,3)

heroi01.atacar()
heroi02.atacar()
heroi03.atacar()
heroi04.atacar()