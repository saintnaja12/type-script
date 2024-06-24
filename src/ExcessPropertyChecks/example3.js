"use strict";
// วิธีแก้ไขข้อผิดพลาดจาก Excess Property Checks
const personAssertion = {
    name: "Teetouch",
    age: 30,
    gender: "male"
}; // ใช้ type assertion
const tempPerson = {
    name: "Teetouch",
    age: 30,
    gender: "male"
};
const personLiteral = tempPerson; // ไม่มีข้อผิดพลาด
const personIndexSignatures = {
    name: "Teetouch",
    age: 30,
    gender: "male" // ไม่มีข้อผิดพลาด
};
