interface Address {
    street: string;
    city: string;
    country: string;
  }

  interface Person7 {
    name: string;
    age: number;
    address: Address;
  }

  const person7: Person7 = {
    name: "Teetouch",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Bangkok",
      country: "Thailand"
    }
  };
