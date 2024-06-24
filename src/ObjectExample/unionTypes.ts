interface Admin {
    name: string;
    privileges: string[];
  }

  interface User {
    name: string;
    startDate: Date;
  }

  type ElevatedUser = Admin | User;

  const elevatedUser1: ElevatedUser = {
    name: "Teetouch",
    privileges: ["create-server"]
  };

  const elevatedUser2: ElevatedUser = {
    name: "John",
    startDate: new Date()
  };
