"use strict";
const names = ["Teetouch", "John", "Jane"];
const ages = [30, 25, 40];
const flags = [true, false, true];
const people = [
    { name: "Teetouch", age: 30 },
    { name: "John", age: 25 },
    { name: "Jane", age: 40 }
];
const mixedArray = ["Teetouch", 30, "John", 25];
function getNames(people) {
    return people.map(person => person.name);
}
const peoplePersonFunctions = [
    { name: "Teetouch", age: 30 },
    { name: "John", age: 25 },
    { name: "Jane", age: 40 }
];
const namesPersonFunctions = getNames(peoplePersonFunctions);
console.log(names); // ผลลัพธ์คือ ["Teetouch", "John", "Jane"]
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const addresses = [
    { street: "123 Main St", city: "Bangkok", country: "Thailand" },
    { street: "456 Elm St", city: "Bangkok", country: "Thailand" }
];
