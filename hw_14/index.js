const array = [1,2,3,4,5,6,7];

function removeElement(arr, digit)  {
    return array.filter((num) => num !== digit);
}

console.log(removeElement(array,5));

