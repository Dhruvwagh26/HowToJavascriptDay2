// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function CheckNumber(no) {
  if (no > 0) {
    console.log("Positive");
  } else if (no < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
console.log("\nAssignment 1: Finding Positive, Negative, or Zero.");
CheckNumber(5);
CheckNumber(0);
CheckNumber(-2);

// Assignment 2:
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

factorial = (n) => {
  let temp = 1;
  for (let i = n; i > 0; i--) {
    temp = temp * i;
  }
  console.log(temp);
};
console.log("\nAssignment 2: Finding factorial");
factorial(5);

// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.
max = (n1, n2) => {
  if (n1 > n2) {
    console.log(n1 + " is large here as compared to " + n2);
  } else {
    console.log(n2 + " is large here as compared to " + n1);
  }
};
console.log("\nAssignment 3: Largest Between 2 numbers");
max(2, 4);
// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log("\nAssignment 4: Check Palindrome");
console.log(isPalindrome("level"));
console.log(isPalindrome("Hello"));
// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function printPrimesUpTo(number) {
  for (let i = 2; i <= number; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}

console.log("\nAssignment 5: Print Prime Numbers");
printPrimesUpTo(20);

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
simplecalculator = (n, n2, op) => {
  switch (op) {
    case "+":
      return n + n2;
    case "-":
      return n + n2;
    case "*":
      return n * n2;
    case "/":
      return n / n2;
    default:
      return "Invalid Operator. Choose correct from[+,-,*,/]";
  }
};

console.log("\nAssignment 6 : Simple Calculatora.");
console.log(simplecalculator(2, 3, "/"));
console.log(simplecalculator(2, 3, "+"));
console.log(simplecalculator(2, 3, "-"));
console.log(simplecalculator(2, 3, "*"));
// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log("\nAssignment 7: Counting Vowels[a,e,i,o,u]");
console.log("Total vowels are-" + countVowels("Hello World"));

// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function isPerfectNumber(number) {
  if (number <= 1) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
    return sum === number;
  }
}

console.log("\nAssignment 8: Check Perfect Number");
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(10));
// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function Fibonacci(num) {
  let prev = 0,
    current = 1,
    temp;
  console.log("\nAssignment 9: Print Fibonacci Series");
  console.log(prev);
  while (current <= num) {
    console.log(current);
    temp = current;
    current += prev;
    prev = temp;
  }
}
Fibonacci(20);
// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function multiplicationTable(number) {
  console.log("\nAssignment 10: Print Multiplication Table");
  for (let i = 1; i <= 10; i++) console.log(`${number} * ${i} = ${number * i}`);
}

multiplicationTable(5);
