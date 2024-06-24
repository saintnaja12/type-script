// การสร้าง Type Alias สำหรับ Array ของ Primitive Types
type StringArray = string[];
type NumberArray = number[];
type BooleanArray = boolean[];

const names: StringArray = ["Teetouch", "John", "Jane"];
const ages: NumberArray = [30, 25, 40];
const flags: BooleanArray = [true, false, true];

// การสร้าง Type Alias สำหรับ Array ของ Objects
type PersonArrayObject = {
    name: string;
    age: number;
  };

  type PeopleArray = PersonArrayObject[];

  const people: PeopleArray = [
    { name: "Teetouch", age: 30 },
    { name: "John", age: 25 },
    { name: "Jane", age: 40 }
  ];

// การสร้าง Type Alias สำหรับ Array ที่มีหลายชนิดข้อมูล (Union Types)
type StringOrNumber = string | number;
type StringOrNumberArray = StringOrNumber[];

const mixedArray: StringOrNumberArray = ["Teetouch", 30, "John", 25];

// การใช้ Type Alias กับ Functions ที่ทำงานกับ Arrays

type PersonFunctions = {
    name: string;
    age: number;
  };

  type PeopleArrayFunctions = PersonFunctions[];

  function getNames(people: PeopleArrayFunctions): string[] {
    return people.map(person => person.name);
  }

  const peoplePersonFunctions: PeopleArrayFunctions = [
    { name: "Teetouch", age: 30 },
    { name: "John", age: 25 },
    { name: "Jane", age: 40 }
  ];

  const namesPersonFunctions: string[] = getNames(peoplePersonFunctions);
  console.log(names); // ผลลัพธ์คือ ["Teetouch", "John", "Jane"]

//   การใช้ Type Alias กับ Arrays ของ Arrays
type Matrix = number[][];

const matrix: Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// การใช้ Type Alias ร่วมกับ Interface

interface AddressAlias {
    street: string;
    city: string;
    country: string;
  }

  type AddressArray = AddressAlias[];

  const addresses: AddressArray = [
    { street: "123 Main St", city: "Bangkok", country: "Thailand" },
    { street: "456 Elm St", city: "Bangkok", country: "Thailand" }
  ];
