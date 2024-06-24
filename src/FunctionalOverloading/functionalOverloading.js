"use strict";
// ฟังก์ชันจริงที่ครอบคลุมทุกกรณี
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else if (typeof x === "number" && typeof y === "string") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "number") {
        return x + y;
    }
}
console.log(add(1, 2)); // ผลลัพธ์คือ 3
console.log(add("Hello, ", "world!")); // ผลลัพธ์คือ "Hello, world!"
console.log(add(1, "apple")); // ผลลัพธ์คือ "1apple"
console.log(add("apple", 2)); // ผลลัพธ์คือ "apple2"
