"use strict";
// การใช้ Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // ผลลัพธ์คือ 6
console.log(sum(1, 2, 3, 4, 5)); // ผลลัพธ์คือ 15
console.log(sum()); // ผลลัพธ์คือ 0
// การใช้ Rest Parameters ร่วมกับพารามิเตอร์ปกติ
function greetRest(greeting, ...names) {
    return `${greeting}, ${names.join(", ")}!`;
}
console.log(greetRest("Hello", "Teetouch", "John", "Jane")); // ผลลัพธ์คือ "Hello, Teetouch, John, Jane!"
console.log(greetRest("Hi")); // ผลลัพธ์คือ "Hi, !"
// ข้อควรระวังในการใช้ Rest Parameters
function buildName(firstName, lastName = "Smith", ...middleNames) {
    return `${firstName} ${middleNames.join(" ")} ${lastName}`;
}
console.log(buildName("John")); // ผลลัพธ์คือ "John  Smith"
console.log(buildName("John", "Doe")); // ผลลัพธ์คือ "John  Doe"
console.log(buildName("John", "Doe", "Michael", "Anthony")); // ผลลัพธ์คือ "John Michael Anthony Doe"
