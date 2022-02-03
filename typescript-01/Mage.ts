import Character from './Character';

interface Iparams {
    name:string;
    inteligency?:number;
    speed: number;
    energy:number;
    life:number;
    attack: number;
    defense?: number;
}

class Mage extends Character{
    speed: number;
    inteligency?: number;
    
    constructor({name, speed, inteligency = 200, energy,life,attack, defense}:Iparams){
        super({name,energy,life,attack, defense})
        this.speed = speed;
        this.inteligency = inteligency;
    }

    attackAction(): string {
        const result = 'Aataaque do personagem mago';
        return result
    }

}

export default Mage;