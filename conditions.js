// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                                  operators
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let firstVar;
const secondVar = 2;

firstVar = 10;

// firstVar -= secondVar;
// console.log(`firstVar -= secondVar equil : ${firstVar}`);

// firstVar += secondVar;
// console.log(`firstVar += secondVar equil : ${firstVar}`);

// firstVar *= secondVar;
// console.log(`firstVar *= secondVar equil : ${firstVar}`);

// firstVar /= secondVar;
// console.log(`firstVar /= secondVar equil : ${firstVar}`);

// firstVar %= secondVar;
// console.log(`firstVar %= secondVar equil : ${firstVar}`);

firstVar **= secondVar;
console.log(`firstVar **= secondVar equil : ${firstVar}`);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const cats = "cats";
const dogs = "dogs";

const idiom = "rain as " + cats + " and " + dogs;
console.log(idiom);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                                  operators
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const num1 = 12;
const num2 = 120;
const text = "shot text";

// comparison
console.log(num1 === 45);

console.log(text === "looooooooong text");
console.log(text == "looooooooong text");

// numbers comparison
console.log(num2, " > ", num1, "\nResult: ", num2 > num1);
console.log(num2, " >= ", num1, "\nResult: ", num2 >= num1);
console.log(num2, " < ", num1, "\nResult: ", num2 < num1);
console.log(num2, " !== ", num1, "\nResult: ", num2 !== num1);


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                                  ternary
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const morningTime = 7;
const eveningTime = 23;

const today = new Date();
const currentTime = today.getHours();

// Current time value for testing purpose
// const currentTime = 15;

const result = (currentTime >= morningTime && currentTime <= eveningTime)
	? "Wake up!"
	: "Go to bed!";

console.log(`\n${result} It's ${currentTime} o'clock`);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const timeForBreakfast = 9;
const timeForLunch = 12;
const timeForDinner = 16;

//Option with || and '=='
const result1 = currentTime == timeForBreakfast || currentTime == timeForLunch || currentTime == timeForDinner
    ? "FUFF! Time to take a break and eat something!"
    : "Be strong! Wait for the right time" ;

console.log(`Option with || and '=='\nIt's ${currentTime} o'clock. ${result1}.`);


// Option with &&| and '!=='
const result2 = currentTime !== timeForBreakfast && currentTime !== timeForLunch && currentTime !== timeForDinner
    ? "Be strong! Wait for the right time" 
    : "FUFF! Time to take a break and eat something!";

console.log(`Option with &&| and '!=='\nIt's ${currentTime} o'clock. ${result2}.`);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                                  if ... else if ... if
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = weekdays[today.getDay()];

// currentDay = "Friday";

// if ... else
if (currentDay == "Monday"){
    console.log("Hooray! It's Monday! I can go to my favorite office and work again!");
}

// if ... else
if (currentDay === "Friday" || currentDay ==="Saturday") {
    console.log("Yeah! Beer party in the evening!");
} else {
    console.log("Not today bro... not today!");
}

// if ... else if ... else
if (currentDay === "Friday" || currentDay ==="Saturday") {
    console.log("Yeah! Beer party in the evening!");
} else if (currentDay === "Sunday") {
    console.log("Sorry bro, but tommorow is Monday... maybe next time...");
} else {
    console.log("Not today bro... not today!");
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//                                  switch ... case
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const currentMonth = today.getMonth();

currentMonth = '';


switch (currentMonth) {
    case 11:
    case 0:
    case 1: 
        console.log("It's winter!");
        break;
    case 2:
    case 3:
    case 4:
        console.log("It's spring!");
        break;
    case 5:
    case 6:
    case 7:
        console.log("It's summer!");
        break;
    case 8:
    case 9:
    case 10:
        console.log("It's autumn!");
        break;
    default:
        console.log("What month is it now?");
}


