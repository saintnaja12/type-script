import { greet } from "./utils";

console.log(greet("World"));

let name: string = "Teetouch";
let age: number = 30;
let isStudent: boolean = true;

name = "John"; // สามารถเปลี่ยนค่าได้
age = 25;
isStudent = false;

const pi: number = 3.14;
const greeting: string = "Hello, World!";

// pi = 3.14159; // จะเกิดข้อผิดพลาดเนื่องจากไม่สามารถเปลี่ยนค่าได้
// greeting = "Hi"; // จะเกิดข้อผิดพลาดเนื่องจากไม่สามารถเปลี่ยนค่าได้

let country = "Thailand"; // TypeScript จะอนุมานว่าเป็น string
let population = 69; // TypeScript จะอนุมานว่าเป็น number

// country = 123; // จะเกิดข้อผิดพลาดเนื่องจาก country ถูกอนุมานว่าเป็น string
// population = "69 million"; // จะเกิดข้อผิดพลาดเนื่องจาก population ถูกอนุมานว่าเป็น number

