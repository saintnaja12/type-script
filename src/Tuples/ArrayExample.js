"use strict";
// การประกาศ array ของตัวเลข
let numbersArray = [1, 2, 3, 4, 5];
// การประกาศ array ของสตริง
let namesArray = ["Teetouch", "John", "Jane"];
// การประกาศ array ที่มีหลายชนิดข้อมูล (Union Types)
let mixed = [1, "two", 3, "four"];
// การเพิ่มค่าเข้าไปใน array
numbersArray.push(6);
// การเข้าถึงค่าด้วยดัชนี
console.log(numbersArray[0]); // ผลลัพธ์คือ 1
// การวน loop ผ่านค่าทั้งหมดใน array
for (let name of namesArray) {
    console.log(name);
}
// การใช้ฟังก์ชัน array เช่น map, filter, reduce
let doubledNumbers = numbersArray.map(n => n * 2);
console.log(doubledNumbers); // ผลลัพธ์คือ [2, 4, 6, 8, 10, 12]
