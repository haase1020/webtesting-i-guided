module.exports = {
  add,
};

function add(args) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both arguments need to be numbers");
  }
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
