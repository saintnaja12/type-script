interface PersonOverloading {
    name: string;
    age: number;
  }

  interface AddressOverloading {
    city: string;
    country: string;
  }

  function showInfo(info: PersonOverloading): void;
  function showInfo(info: AddressOverloading): void;

  function showInfo(info: any): void {
    if ("name" in info) {
      console.log(`Name: ${info.name}, Age: ${info.age}`);
    } else if ("city" in info) {
      console.log(`City: ${info.city}, Country: ${info.country}`);
    }
  }

  const personOverloading: PersonOverloading = { name: "Teetouch", age: 30 };
  const addressOverloading: AddressOverloading = { city: "Bangkok", country: "Thailand" };

  showInfo(personOverloading); // ผลลัพธ์คือ "Name: Teetouch, Age: 30"
  showInfo(addressOverloading); // ผลลัพธ์คือ "City: Bangkok, Country: Thailand"
