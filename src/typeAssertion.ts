let someValue: unknown = "this is a string";

// บอก TypeScript ว่า someValue เป็น string
let strLength: number = (someValue as string).length;

console.log(strLength); // ผลลัพธ์คือ 16

// ----------------------------------

let someValue2: unknown = "this is a string";

// บอก TypeScript ว่า someValue2 เป็น string
let strLength2: number = (<string>someValue2).length;

console.log(strLength2); // ผลลัพธ์คือ 16

// ----------------------------------

interface Employee {
    name: string;
    age: number;
    department?: string;
}

let employee = {} as Employee;
employee.name = "John";
employee.age = 30;

console.log(employee); // ผลลัพธ์คือ { name: 'John', age: 30 }

// ----------------------------------

let someValue3: any = "this is a string";
let strLength3: number = (someValue3 as number).toString().length;

console.log(strLength3); // ผลลัพธ์คือ 1 ซึ่งอาจไม่ใช่ผลลัพธ์ที่คุณคาดหวัง


