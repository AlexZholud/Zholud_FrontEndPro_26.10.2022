const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let result = '';

function generateKey (lengthOfKey) {
    for ( let i = 0; i < lengthOfKey; i++ )  {
        result = result + characters.charAt(Math.random() * characters.length);
    }
        return result;
}

console.log(generateKey(16));
