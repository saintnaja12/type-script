"use strict";
// การใช้ Destructuring กับ Arrays
const numbersDestructuring = [1, 2, 3, 4, 5];
const [first, second, third] = numbersDestructuring;
console.log(first); // ผลลัพธ์คือ 1
console.log(second); // ผลลัพธ์คือ 2
console.log(third); // ผลลัพธ์คือ 3
const [, , third3, , fifth] = numbersDestructuring;
console.log(third3); // ผลลัพธ์คือ 3
console.log(fifth); // ผลลัพธ์คือ 5
// การใช้ Destructuring กับ Objects
const personDestructuring = {
    nameDestructuring: "Teetouch",
    ageDestructuring: 30,
    address: {
        city: "Bangkok",
        country: "Thailand"
    }
};
const { nameDestructuring, ageDestructuring } = personDestructuring;
//   alias
const { nameDestructuring: fullName, ageDestructuring: years } = personDestructuring;
console.log(nameDestructuring); // ผลลัพธ์คือ "Teetouch"
console.log(ageDestructuring); // ผลลัพธ์คือ 30
console.log(fullName); // ผลลัพธ์คือ "Teetouch"
console.log(years); // ผลลัพธ์คือ 30
//   destructure nested objects
const { address: { city, country } } = personDestructuring;
console.log(city); // ผลลัพธ์คือ "Bangkok"
console.log(country); // ผลลัพธ์คือ "Thailand"
