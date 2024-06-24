interface Person3 {
    readonly name: string;
    age: number;
  }

  const person6: Person3 = {
    name: "Teetouch",
    age: 30
  };

  // person.name = "John"; // จะเกิดข้อผิดพลาดเนื่องจาก name เป็น readonly
  person.age = 31; // สามารถเปลี่ยนค่าได้
