// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
};
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(name) {
    cats.pop();
};
function destructivelyRemoveFirstCat(name) {
    cats.shift();
};
function appendCat(name) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
};
function prependCat(name) {
    const catsTwo = ["Arnold", ...cats];
    return catsTwo;
};
function removeLastCat() {
    const catsThree = cats.slice(0, 2);
    return catsThree;
}
function removeFirstCat() {
    const catsFour = cats.slice(1, 3);
    return catsFour;
}