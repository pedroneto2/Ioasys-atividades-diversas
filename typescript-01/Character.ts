interface Iparams {
    name:string;
    energy:number;
    life:number;
    attack: number;
    defense?: number;
}

class Character{
    name:string;
    private energy:number;
    life:number;
    attack: number;
    defense?: number;

    constructor({name,energy,life,attack, defense=50}:Iparams){
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }

    status():void {
        console.log(`
        Name: ${this.name},
        Energy: ${this.energy},
        Life: ${this.life},
        Ataque: ${this.attack},
        Defense: ${this.defense}
        `)
    }

    attackAction(): string {
        const result = 'Aataaque do personagem comum';
        return result
    }

    trainAttack(): void {
        this.attack += this.randomize(25);
        this.energy -= this.randomize(25);
    }

    randomize(salt:number):number {
        return Math.round(salt * Math.random());
    }
}

export default Character;