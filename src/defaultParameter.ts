function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
  }

  console.log(greet()); // ผลลัพธ์คือ "Hello, Guest!"
  console.log(greet("Teetouch")); // ผลลัพธ์คือ "Hello, Teetouch!"

// ----------------------------------

  function calculateArea2(width: number, height: number = 10): number {
    return width * height;
  }

  console.log(calculateArea2(5)); // ผลลัพธ์คือ 50 (ใช้ค่าเริ่มต้นของ height)
  console.log(calculateArea2(5, 20)); // ผลลัพธ์คือ 100 (ใช้ค่า height ที่ส่งมา)

  // ----------------------------------

  function createUser(name: string, age: number, isActive: boolean = true): string {
    return `Name: ${name}, Age: ${age}, Active: ${isActive}`;
  }

  console.log(createUser("Teetouch", 30)); // ผลลัพธ์คือ "Name: Teetouch, Age: 30, Active: true"
  console.log(createUser("John", 25, false)); // ผลลัพธ์คือ "Name: John, Age: 25, Active: false"
