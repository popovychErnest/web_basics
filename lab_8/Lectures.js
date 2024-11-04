

// lec_1
console.log("\n\nLECTURE 1:\n")

// TASK 1
console.log("\n\nTASK 1:\n")

let letString = 'Hellow world!';
console.log( "1: ",letString," - ", typeof letString);

let letObject = {
    name:"Ernest"
}
console.log( "\n2: ", letObject," - ", typeof letObject);

let letArray = [1,2,3,4,5];
console.log( "\n3: ",letArray, " - ", typeof letArray);

let letNumber = 10;
console.log( "\n4: ",letNumber," - ", typeof letNumber);

function letFunction () {
    return "call!";
} 
console.log( "\n5: ",letFunction()," - ", typeof letFunction);


//TASK 2
console.log("\n\nTASK 2:\n")
let string = "538";
console.log("String:", string, " - ", typeof string);
let number = 543;
console.log("Number:", number, " - ", typeof number, "\n");


let numberOfString = String(number);
console.log("String (but number in past):", numberOfString," - ",typeof numberOfString);

let stringOfNumber = Number(string);
console.log("Number (but string in past):", stringOfNumber," - ", typeof stringOfNumber);



// TASK 3
console.log("\n\nTASK 3:\n");

let valueOne = "92"; 

let valueTwo = 92;

if (valueOne == valueTwo) {
    console.log("They`re equals!!");

}

if (valueOne === valueTwo) {
    console.log("They`re not equals!!");
}


// TASK 4 (LAST)
console.log("\n\nTASK 4:\n");
let numberio = 678395;
console.log("Number: ", numberio, "\n");
let encrypted = numberio
  .toString()
  .split("")
  .reverse()
  .join("");
  console.log("Encypted value:", encrypted, "");

  let decrypted = encrypted
  .toString()
  .split("")
  .reverse()
  .join("");
  console.log("Decrypted value:", decrypted);




// lec_2
console.log("\n\nLECTURE 2:\n")


//TASK 2
console.log("\n\nTASK 1:")

let foo = 1;
function bar() {
    if(!foo) {
        let foo = 10;
    }
    console.log("Result:",foo)
}
bar();


// TASK 1
console.log("\n\nTASK 2:")

let a = 1;
function b() {
    a = 10;
    return;
    // function a() {}; delete or rename function
}
b();
console.log("Result: ",a);




// lec_3
console.log("\n\nLECTURE 3:\n")

// TASK 1
console.log("\n\nTASK 1:")

let numb = 10;
numb++; 
console.log('\nunary operator: ', numb);

let one = 10;
let two = 15;
let sum = one + two;
console.log('\nbinary operator: ', sum);


let age = 18;

let isGroseAssMan = (age >= 18) ? "realy grose!" : "he is balabol";
console.log('\nternarny operator: ', isGroseAssMan);


// TASK 2
console.log("\n\nTASK 2\n");
let str1 = "Прийшла апатія кінця..\n";
let str2 = "влетіли мрії в бездну дна,\n";
let str3 = "я сам забув той сенс буття - \n";
let str4  = "якби...\n";
let str5 = "якби вернутись до життя!\n";

let  resultString = str1.concat( str2, str3,str4,str5);

console.log(resultString);



// Lec_arrays
console.log("\n\nLECTURE ARRAYS:\n")


//TASK 1
console.log("\n\nTASK 1\n");
 
function Kokade(arr) {
    let max = arr[0];
    let current = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        max = Math.max(max, current);
    }
  
    return max;
}
console.log("Result: ", Kokade([-2, 1, -3, 4, -2, 2, 1, -5, 4]));



//TASK 2 
console.log("\n\nTASK 2\n");

function addLongNumbers(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let carry = 0; 
    let result = ""; 

    
    for (let i = 0; i < Math.max(len1, len2); i++) {
        
        let digit1 = i < len1 ? parseInt(num1[len1 - 1 - i]) : 0;
        let digit2 = i < len2 ? parseInt(num2[len2 - 1 - i]) : 0;

        let sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}
let num1 = "123456789123456789";
let num2 = "987654321987654321";
console.log(addLongNumbers(num1, num2));


console.log("\n\nTASK 3\n");

function arrayDifference(arr1, arr2) {
    let result = [...arr1];
    for (let elem of arr2) {
        const index = result.indexOf(elem);
        if (index !== -1) {
            result.splice(index, 1);
        }
    }
    
    return result;
}

const array1 = [1, 2, 2, 3, 4];
const array2 = [2, 3, 5];
console.log(arrayDifference(array1, array2));



