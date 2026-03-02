/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *  - Addition (+)       : add two numbers
 *  - Subtraction (-)    : subtract one number from another
 *  - Multiplication (x) : multiply two numbers
 *  - Division (÷)       : divide one number by another (throws on division by zero)
 */

// Returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Returns the quotient of a divided by b; throws an error if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entry point: node calculator.js <num1> <operator> <num2>
if (require.main === module) {
  const [,, a, operator, b] = process.argv;

  if (!a || !operator || !b) {
    console.error('Usage: node calculator.js <num1> <operator> <num2>');
    console.error('Operators: + - x ÷');
    process.exit(1);
  }

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case 'x':
    case '*':
      result = multiply(num1, num2);
      break;
    case '÷':
    case '/':
      result = divide(num1, num2);
      break;
    default:
      console.error(`Error: Unknown operator '${operator}'. Use +, -, x, or ÷`);
      process.exit(1);
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}
