// วิธีแก้ไขข้อผิดพลาดจาก Excess Property Checks

// Type Assertion
interface PersonAssertion {
    name: string;
    age: number;
  }

  const personAssertion = {
    name: "Teetouch",
    age: 30,
    gender: "male"
  } as PersonAssertion; // ใช้ type assertion

// object literal
  interface PersonLiteral {
    name: string;
    age: number;
  }

  const tempPerson = {
    name: "Teetouch",
    age: 30,
    gender: "male"
  };

  const personLiteral: PersonLiteral = tempPerson; // ไม่มีข้อผิดพลาด


//   Index Signatures
interface PersonIndexSignatures {
    name: string;
    age: number;
    [key: string]: any; // อนุญาตให้มี properties ใด ๆ ก็ได้
  }

  const personIndexSignatures: PersonIndexSignatures = {
    name: "Teetouch",
    age: 30,
    gender: "male" // ไม่มีข้อผิดพลาด
  };

