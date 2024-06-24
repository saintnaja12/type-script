"use strict";
let someValue = "this is a string";
// บอก TypeScript ว่า someValue เป็น string
let strLength = someValue.length;
console.log(strLength); // ผลลัพธ์คือ 16
// ----------------------------------
let someValue2 = "this is a string";
// บอก TypeScript ว่า someValue2 เป็น string
let strLength2 = someValue2.length;
console.log(strLength2); // ผลลัพธ์คือ 16
let employee = {};
employee.name = "John";
employee.age = 30;
console.log(employee); // ผลลัพธ์คือ { name: 'John', age: 30 }
// ----------------------------------
let someValue3 = "this is a string";
let strLength3 = someValue3.toString().length;
console.log(strLength3); // ผลลัพธ์คือ 1 ซึ่งอาจไม่ใช่ผลลัพธ์ที่คุณคาดหวัง
