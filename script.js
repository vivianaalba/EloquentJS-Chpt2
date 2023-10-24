// Looping a Triangle
let hashtag = "#";
let hashtag2 = "#"
while (hashtag.length <= 7) {
  console.log(hashtag);
  hashtag = hashtag + hashtag2;
};

// FizzBuzz
let number = 0;
while (number < 100) {
  number = number + 1;
  // if we start with numbers only divisible by 5 or 3 and end with numbers divisible by 5 AND 3, numbers that are divisible by both 3 and 5 would not be passed through the loop, because a true if statement breaks the loop
    if (number % 3 === 0 && number % 5 === 0)
      console.log ("FizzBuzz");
    else if (number % 3 === 0)
      console.log("Fizz");
    else if (number % 5 === 0)
      console.log("Buzz");
    else
      console.log(number);
}

// Chessboard

// make empty string to store chess board
let chess = "";

// Loop - make chessboard with i is rows and j is columns
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      // if i plus j modulo 2 equals 0 - ensures that it does not add hashtag back to back
        if ((i + j) % 2 === 0) {
            chess += " ";
        // adds the hashtag on the board
          } else {
            chess += "#";
          }
        // adds the space on the board
      chess += " ";
      }
    chess += "\n";
};

console.log(chess);