const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Iterating through individual words in a string:
// const sentence = "This is a sample sentence";

// // Split the sentence into an array of words
// const words = sentence.split(" ");

// // Iterate through each word
// words.forEach(word => {
//     console.log(word);
// });

// Executing an iteration inside another iteration:
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // Outer iteration
// matrix.forEach(row => {
//     // Inner iteration
//     row.forEach(cell => {
//         console.log(cell);
//     });
// });

// Capitalizing just the first letter in a word:
// function capitalizeFirstLetter(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }

// const exampleWord = "hello";
// const capitalizedWord = capitalizeFirstLetter(exampleWord);
// console.log(capitalizedWord);

function titleCased() {
  return tutorials.map((string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
}

console.log(titleCased());

// const titleCased = () => {
//   return tutorials;
// };
