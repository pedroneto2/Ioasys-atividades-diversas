import Character from './Character';
import Warrior from './Warrior';
import Mage from './Mage'

const human: Character = new Character({
    name:'Pedro', life: 80, attack:100, energy: 80
});
const guerreiro: Warrior = new Warrior({
     armor: 20, strenght: 10, name:'John', life: 100, attack: 120, energy: 100 
})
const mago: Mage = new Mage({
    name: 'Josefina', speed: 5, energy: 30, life: 25, attack: 1, inteligency: 210
})


console.log(human.attackAction())
console.log(guerreiro.attackAction())
console.log(mago.attackAction()) 
console.log('\n')
console.log(human.status())
console.log(guerreiro.status())