"use strict";
// Any
let valueAny;
valueAny = 5; // number
valueAny = "hello"; // string
valueAny = true; // boolean
// เนื่องจาก `valueAny` มีประเภทเป็น `any` เราสามารถทำอะไรก็ได้โดยไม่เกิดข้อผิดพลาด
valueAny.someMethod(); // ไม่มีการตรวจสอบความถูกต้องของเมธอด
// Unknown
let valueUnknown;
valueUnknown = 5; // number
valueUnknown = "hello"; // string
valueUnknown = true; // boolean
// TypeScript จะไม่ยอมให้เรียกใช้เมธอดหรือดำเนินการใด ๆ โดยไม่ตรวจสอบประเภทข้อมูลก่อน
if (typeof valueUnknown === "string") {
    console.log(valueUnknown.toUpperCase()); // ถูกต้อง เนื่องจากเราได้ตรวจสอบแล้วว่า `valueUnknown` เป็น string
}
// การใช้ type assertion
let strValue = valueUnknown; // บังคับให้ TypeScript เชื่อว่า valueUnknown เป็น string
