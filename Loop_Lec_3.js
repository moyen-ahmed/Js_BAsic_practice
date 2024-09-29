// for (initialization; condition; increment/decrement) {
//     // code to be executed
//   }
  
  for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
  }
  

  //While loop
  let i = 0;

while (i < 5) {
  console.log("Iteration number: " + i);
  i++; // Incrementing i to avoid an
}
// For in loop
// for (key in object) {
    // code to be executed
//   }


  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  


  //string 

  // Template literals 
//`string text ${expression} string text`
const name = "Alice";
const age = 25;
const city = "Paris";

// Using template literals
const introduction = `Hello, my name is ${name}, I'm ${age} years old and I live in ${city}.`;

console.log(introduction);


//Array
// 1. Array creation
const fruits = ["Apple", "Banana", "Orange", "Mango"];

// 2. Accessing elements
console.log("First fruit:", fruits[0]); // Access the first element
console.log("Last fruit:", fruits[fruits.length - 1]); // Access the last element

// 3. Modifying arrays
fruits[1] = "Pineapple"; // Update the second element
console.log("Updated fruits:", fruits);

fruits.push("Grapes"); // Add a new element at the end
console.log("After push:", fruits);

fruits.pop(); // Remove the last element
console.log("After pop:", fruits);

fruits.unshift("Strawberry"); // Add an element to the beginning
console.log("After unshift:", fruits);

fruits.shift(); // Remove the first element
console.log("After shift:", fruits);

// 4. Looping through arrays (using a `for` loop)
console.log("Looping through the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// 5. Looping through arrays (using `for...of`)
console.log("Looping using for...of:");
for (let fruit of fruits) {
  console.log(fruit);
}

// 6. Using Array methods
console.log("Array length:", fruits.length); // Check array length

const index = fruits.indexOf("Mango"); // Find the index of "Mango"
console.log("Index of Mango:", index);

fruits.splice(2, 0, "Kiwi", "Peach"); // Add elements at specific index (2)
console.log("After splice (add):", fruits);

fruits.splice(3, 1); // Remove 1 element starting from index 3
console.log("After splice (remove):", fruits);

const slicedFruits = fruits.slice(1, 3); // Create a subarray
console.log("Sliced fruits:", slicedFruits);

// 7. Array sorting and reversing
fruits.sort(); // Sort the array alphabetically
console.log("Sorted fruits:", fruits);

fruits.reverse(); // Reverse the sorted array
console.log("Reversed fruits:", fruits);

//push()>>> add to end
 //Delet from end to return 

 //push()
 const fruits = ["Apple", "Banana"];

// Using push() to add elements to the array
const newLength = fruits.push("Orange", "Mango");

console.log(fruits); // Output the updated array
console.log("New length of the array:", newLength); // Output the new length
//Function

const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(5, 3)); // Output: 8
  

  // For each loop
  Syntax
  array.forEach(function(currentValue, index, array) {
    // code to execute on each element
  });

  //Example
  
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
