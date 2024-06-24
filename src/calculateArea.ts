function calculateArea(width: number, height: number): number {
    let area: number = width * height;
    return area;
}

const width: number = 5;
const height: number = 10;

const area: number = calculateArea(width, height);
console.log(`The area of the rectangle is ${area}`);
