"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
console.log((0, utils_1.greet)("World"));
let name = "Teetouch";
let age = 30;
let isStudent = true;
name = "John"; // สามารถเปลี่ยนค่าได้
age = 25;
isStudent = false;
const pi = 3.14;
const greeting = "Hello, World!";
// pi = 3.14159; // จะเกิดข้อผิดพลาดเนื่องจากไม่สามารถเปลี่ยนค่าได้
// greeting = "Hi"; // จะเกิดข้อผิดพลาดเนื่องจากไม่สามารถเปลี่ยนค่าได้
let country = "Thailand"; // TypeScript จะอนุมานว่าเป็น string
let population = 69; // TypeScript จะอนุมานว่าเป็น number
// country = 123; // จะเกิดข้อผิดพลาดเนื่องจาก country ถูกอนุมานว่าเป็น string
// population = "69 million"; // จะเกิดข้อผิดพลาดเนื่องจาก population ถูกอนุมานว่าเป็น number
