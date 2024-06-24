// การใช้ Default Values ใน Destructuring
// const personDestructuringDefault = {
//     name: "Teetouch"
//   };

//   const { name, age = 25 } = personDestructuringDefault;

//   console.log(name); // ผลลัพธ์คือ "Teetouch"
//   console.log(age);  // ผลลัพธ์คือ 25 (เนื่องจาก age ไม่ได้ถูกกำหนดใน object)

//   การใช้ Destructuring ใน Function Parameters
function displayPerson({ name, age }: { name: string; age: number }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }

  const personDestructuringFunction = {
    name: "Teetouch",
    age: 30
  };

  displayPerson(personDestructuringFunction); // ผลลัพธ์คือ "Name: Teetouch, Age: 30"

