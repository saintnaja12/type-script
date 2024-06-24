interface PersonExcess2 {
    name: string;
    age: number;
  }

  const personExcess2: PersonExcess2 = {
    name: "Teetouch",
    age: 30,
    // gender: "male" // จะเกิดข้อผิดพลาดเนื่องจาก gender ไม่ได้ถูกกำหนดไว้ใน interface
  };
