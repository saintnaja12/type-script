// การประกาศ tuple ที่มีสองค่า: string และ number
let personTuples: [string, number] = ["Teetouch", 30];

// การประกาศ tuple ที่มีหลายค่า: string, number, boolean
let data: [string, number, boolean] = ["Data", 42, true];

// การเข้าถึงค่าด้วยดัชนี
console.log(personTuples[0]); // ผลลัพธ์คือ "Teetouch"
console.log(personTuples[1]); // ผลลัพธ์คือ 30

// การเปลี่ยนค่าที่กำหนด
personTuples[1] = 31;
console.log(personTuples); // ผลลัพธ์คือ ["Teetouch", 31]

// ข้อควรระวัง: การเข้าถึงดัชนีที่เกินขอบเขตจะทำให้เกิดข้อผิดพลาด
// console.log(personTuples[2]); // ข้อผิดพลาด: Tuple type '[string, number]' of length '2' has no element at index '2'
