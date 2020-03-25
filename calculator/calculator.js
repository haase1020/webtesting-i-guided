module.exports = {
  add,
};

function add() {
  return null;
}


//function add(a,b) {
  //return a + b;
// --> an example of a pure function --> doesn't rely on any outside functions
//}


//when testing, start with low hanging fruit --> happy path (your basic assumptions)
//check for invalid input
//then move on to edge cases
//regression: code that WAS working stops working
//unit testing is more GRANULAR --> 