export class Auto{
    id : number;
    modello : string;
    marca : string;
    prezzo : number;
    velocitaMax : number;


    constructor(id : number, modello : string, marca : string, prezzo : number, velocitaMax : number){
        this.id = id;
        this.modello = modello;
        this.marca = marca;
        this.prezzo = prezzo;
        this.velocitaMax = velocitaMax;
    }
    
}