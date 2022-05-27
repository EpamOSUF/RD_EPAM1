const Warior = {
    name : '',
    weapon : '',
    agility : '',
}

function Warrior () {
    Warrior.prototype.getName = function(){
        return this.name
    }

    Warrior.prototype.setName = function(name){
        this.name = name;
    }

    Warrior.prototype.getWeapon = function(){
        return this.weapon
    }

    Warrior.prototype.setWeapon = function(weapon){
        this.weapon = weapon;
    }

    Warrior.prototype.getAgility = function(){
        return this.agility
    }

    Warrior.prototype.setAgility = function(agility){
        this.agility = agility;
    }
}

const samurai = new Warrior();
const ninja = new Warrior();
const fighter = new Warrior();

samurai.setName('Hanzo')
samurai.setWeapon('Katana')
samurai.setAgility('60')

ninja.setName('Ryu Hayabusa')
ninja.setWeapon('Shuriken')
ninja.setAgility('90')

fighter.setName('Ken Masters')
fighter.setWeapon('Shoryuken')
fighter.setAgility('70')


console.log(samurai.getName(), samurai.getWeapon(), samurai.getAgility());
console.log(ninja.getName(), ninja.getWeapon(), ninja.getAgility());
console.log(fighter.getName(), fighter.getWeapon(), fighter.getAgility());