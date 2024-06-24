"use strict";
function showInfo(info) {
    if ("name" in info) {
        console.log(`Name: ${info.name}, Age: ${info.age}`);
    }
    else if ("city" in info) {
        console.log(`City: ${info.city}, Country: ${info.country}`);
    }
}
const personOverloading = { name: "Teetouch", age: 30 };
const addressOverloading = { city: "Bangkok", country: "Thailand" };
showInfo(personOverloading); // ผลลัพธ์คือ "Name: Teetouch, Age: 30"
showInfo(addressOverloading); // ผลลัพธ์คือ "City: Bangkok, Country: Thailand"
