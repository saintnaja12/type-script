interface Admin {
    name: string;
    privileges: string[];
  }

  interface User {
    name: string;
    startDate: Date;
  }

  type ElevatedUser2 = Admin & User;

  const elevatedUser: ElevatedUser2 = {
    name: "Teetouch",
    privileges: ["create-server"],
    startDate: new Date()
  };
