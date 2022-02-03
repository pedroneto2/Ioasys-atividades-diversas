import Character from './Character';

interface Iparams {
    armor: number;
    strenght: number;
    name:string;
    energy:number;
    life:number;
    attack: number;
    defense?: number;
}

class Warrior extends Character{
    armor: number;
    strenght: number;

    constructor({armor,strenght, name, energy, life, attack, defense}: Iparams){
        super({name, energy, life, attack, defense})
        this.armor = armor;
        this.strenght = strenght;
    }

    attackAction(): string {
        const result = 'Ataque do personagem guerreiro';
        return result
    }

    status():void {
        console.log(`
        ${this.status()}
        Armor: ${this.armor}
        `)
    }

}

export default Warrior;