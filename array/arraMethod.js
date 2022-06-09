// // function sortArray(array) {
// //     array.sort(function (prev, next) {
// //         return prev - next;
// //     });
// //     return array;
// // }

// // console.log(sortArray([7, 101, 3, 1, 9, 11, 100, 111]));

// // function filterStringsArray(array) {
// //     const filteredArray = array.filter((num) => !num.includes('test'));
// //     return filteredArray;
// // }


// // const stringsArray = [
// //     'one-test', 'cat', 'parrot',
// //     'banana', 'test-dog', 'dog'
// // ]

// // console.log(filterStringsArray(stringsArray));


// // function sumNumbersInArray(array) {
// //     const sum = array.reduce((acc, current) => acc += current, 0);
// //     return sum;
// // }

// // const numsArray = [
// //   1, 3, 5, 10, 19, 100, 200, 33,
// // ]

// // console.log(sumNumbersInArray(numsArray));

// // const nums = [
// //     { a: 1, b: 3 },
// //     { a: 3, b: 3 },
// //     { a: 6, b: 3 },
// //     { a: 10, b: 10 },
// //   ];

// //   // filter objects and keep only, if a is >= 3 
// //   // and add new field sum = a + b
// //   const filtered = nums.reduce((acc, num) => {
// //     if (num.a >= 3) {
// //       acc.push({
// //         a: num.a,
// //         b: num.b,
// //         sum: num.a + num.b,
// //       })
// //     }
// //     return acc;
// //   }, []);

// //   console.log('filtered array ', filtered);


// const nums = [
//     { a: 1, b: 3 },
//     { a: 3, b: 3 },
//     { a: 6, b: 3 },
//     { a: 10, b: 10 },
// ];

// // filter objects and keep only, if a is >= 3 
// // and add new field sum = a + b
// const filtered = nums.reduce((acc, num) => {
//     if (num.a >= 5) {
//         acc.push({
//             ...num,
//             sum: num.a + num.b,
//         })
//     }
//     return acc;
// }, []);

// console.log('filtered array ', filtered);


// function mergeArraysWithoutDuplicates(array1, array2) {
//     const withoutDuplicates = [];

//     array1.concat(array2).forEach((element) => {
//         if (!withoutDuplicates.includes(element)) {
//             withoutDuplicates.push(element);
//         }
//     });

//     return withoutDuplicates;
// }

// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];

// console.log(mergeArraysWithoutDuplicates(arNum, arNum2));


// const arrayNums1 = [7, 101, 3, 1, 9, 11, 100, 111] // 343
// const arrayNums2 = [90, 101, 3, 1, 69, 11, 10, 111] // 396
// // 343 + 396

// function sumNumsInArrays(array1, array2) {
//     let sum = 0;
//     const array3 = array1.concat(array2);
//     for (let i = 0; i < array3.length; i++) {
//         sum += array3[i];
//     }

//     return sum;
// }

// console.log(sumNumsInArrays(arrayNums1, arrayNums2));



// function convertToUppercase(array) {
//     array = array.map((element) => {
//         return element.toUpperCase();
//     });

//     return array;
// }

// console.log(convertToUppercase(["banana", "apple", "pineapple"]));

function calculateLetters(string, letter) {
    console.log(string.split(letter));
    return string.split(letter).length -1;
}

console.log(calculateLetters("letters", "t"));