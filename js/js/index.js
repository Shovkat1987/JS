

const bobWeight = +prompt('Bobning vazni');
const bobHeight = +prompt('Bobning boyi');
const johnWeight = +prompt('Jonning vazni');
const johnHeight = +prompt('Bobning boyi');

const bobBmi = Math.round(bobWeight / bobHeight ** 2);
const jonhBmi = Math.round(johnWeight / johnHeight ** 2);

console.log(bobBmi);
console.log(jonhBmi);

if (bobBmi > jonhBmi) {
    console.log(`Bob BMI kattaroq ${bobBmi} Jonh BMIdan ${jonhBmi}`);
} else if (bobBmi === jonhBmi){
    console.log('Ikkisi teng');
}
else {
    console.log(`Jonh BMI kattaroq ${jonhBmi} Bob BMIdan ${bobBmi}`);
}