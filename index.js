let numOrStr = prompt('input number or string:');
console.log(numOrStr)

// switch...case structure

switch (Number.isNaN(+numOrStr) || String(numOrStr).trim()) {
    case "null":
        alert("Your action canceled!");
        break;
    case "":
        alert("EMPTY  STRING!");
        break;
    case true:
        alert("THIS IS THE STRING TYPE!");
        break;
    default: alert("OK! This is NNaN!");
}


// if...else structure

// if(numOrStr === null) {
//     console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }