const warrior = {
    heroClass: "Ninja",
    name: "Shinotoka",
    agility: 80
};

let warrior3 = "Viking";

const warrior4 = {
    ...warrior,
    name: "Hao",
    agility: 85
}

const warriors = [
warrior,
warrior3,
warrior4

]

const screamWarrior = () => {
    let warrior2 = "Samurai";

    return {
        shootWarrior: () => {
            return console.log(warrior, warrior2);
        }
    }
}

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warriors);