'use strict'
const matrix = [
	[0, 1],
	[2, 3],
	[4, 5],
];

const myReduceRigth = (array, callback, result) => {
	if (typeof callback !== 'function') {
		throw new Error (callback + 'is not a function')
	}
	let index = array.length-1;
	if (typeof result === 'undefined' || result === null) {
		index = array.length-2;
		result = array[array.length-1];
	}
	for (; index >= 0; index--) {
		result = callback(result, array[index], index, array)
	}
	return result;
}

console.log(myReduceRigth(matrix, (a, b) => a.concat(b))); // [7, 8, 4, 5, 2, 3, 0, 1]

const arr = ['1','2','3','4','5','6','7','8'];
console.log(myReduceRigth(arr, (a, b) => +a + +b, 7)); // 43
console.log(myReduceRigth(arr, (a, b) => a + b, 7)); // 787654321
console.log(myReduceRigth(arr, (a, b) => a + b)); // 87654321