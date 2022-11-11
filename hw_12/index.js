// Creating variables:
const elementsAmount = Number(prompt('How many elements do you want to enter?'));
const elementsArrStr = [];
const elementsArrNum = [];

let element;

//adding data:

for (let i=0; i<elementsAmount; i++) {
    element = prompt('Enter the element:');
    if (isNaN(element)) {
        elementsArrStr.push(element);
        console.log(elementsArrStr);
    } else {
        elementsArrNum.push(element);
        console.log(elementsArrNum);
    }
}

//sorting and deleting data:
elementsArrStr.sort().splice(1,3);
elementsArrNum.sort((a, b) => a - b).splice(1,3);
console.log(elementsArrNum,elementsArrStr);

//result:

alert(`Type number: ${elementsArrNum}\n
Type string: ${elementsArrStr}` );

//since I divided the array into types for a more aesthetic look, I decided to remove elements from 2 to 4 for each of the types
