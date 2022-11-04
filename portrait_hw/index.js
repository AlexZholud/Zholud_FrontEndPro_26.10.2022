const userBirthYear = Number(prompt ('Enter your year of birth:'));
let userCity = prompt('Enter the city where you live:')
let userFavoriteSport = prompt('Enter your favorite kind of sport:');

userCity = userCity.substr(0,1).toUpperCase() + userCity.substr(1).toLowerCase();
userFavoriteSport = userFavoriteSport.toLowerCase();

let thisDay = new Date();
let thisYear = thisDay.getFullYear();
let userAge = thisYear - userBirthYear;

const kyiv = 'Kyiv';
const washington = 'Washington';
const london = 'London';

const liveIn = 'You live in ';
const ukraine = `${liveIn}the capital of Ukraine.\n`;
const england = `${liveIn}the capital of England and the United Kingdom.\n`;
const usa = `${liveIn}the capital of United States of America.\n`;

const likeAChampion = 'Great!Do you want to be like a ';
const football = `${likeAChampion}Lionel Messi?`;
const boxing =  `${likeAChampion}Vasyl Lomachenko?`;
const basketball = `${likeAChampion}LeBron James?`;
const beerMile = `${likeAChampion}Me ?:D`;

const cancelBirthYear = 'Your age is a mystery to me :)\n';
const cancelCity = 'Sorry, i don\'t know where you live, so can\'t visit you with the sweet gifts :(\n';
const cancelSport = 'Don\'t have a favorite kind of sport? I advise you to learn about the Beer Mile :)';

const acceptBirthYear = `You are ${userAge} years old.\n`;
const acceptCity = `${liveIn}the beautiful ${userCity} city.\n`;
const acceptSport = `Your favorite sport is ${userFavoriteSport}. Not bad!:)`;

let finalInfo;

if  (userBirthYear) {
    finalInfo = acceptBirthYear;
 } else {
    finalInfo = cancelBirthYear;
}

if (userCity === kyiv) {
    finalInfo = finalInfo + ukraine;
 } else if (userCity === washington) {
    finalInfo = finalInfo + usa;
 } else if (userCity === london) {
    finalInfo = finalInfo + england;
 } else if (userCity) {
    finalInfo = finalInfo + acceptCity;
 } else {
    finalInfo = finalInfo + cancelCity;
}


if (userFavoriteSport === 'football') {
    finalInfo = finalInfo + football;
 } else if (userFavoriteSport === 'boxing' || userFavoriteSport === 'box') {
    finalInfo = finalInfo + boxing;
 } else if (userFavoriteSport === 'basketball') {
    finalInfo = finalInfo + basketball;
 } else if (userFavoriteSport === 'beer mile') {
    finalInfo = finalInfo + beerMile;
 } else if (userFavoriteSport) {
    finalInfo = finalInfo + acceptSport;
 } else {
    finalInfo = finalInfo + cancelSport;
}

alert(finalInfo);










