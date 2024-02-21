// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// function double(arr) {        //My first solution. I thought you couldn't use an arrow function in place of a function declaration?
//     arr.map((val) => val * 2);
// }

const double = arr => arr.map((val) => val * 2); //Second solution


// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// function squareAndFindEvens(numbers){   //my first solution. Which ran into the same problem in question one. I didn't think you could use an arrow function as a function declaration... but we are? So we can... right?
//    const squares = numbers.map((num) => num ** 2);
//    const evens = squares.filter((square) => square % 2 === 0);
//   }

const squareAndfindEvens = numbers => numbers.map((num) => num ** 2).filter((evens) => evens % 2 === 0);

  
