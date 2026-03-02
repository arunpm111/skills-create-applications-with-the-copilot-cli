/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *  - Addition (+)       : add two numbers
 *  - Subtraction (-)    : subtract one number from another
 *  - Multiplication (x) : multiply two numbers
 *  - Division (÷)       : divide one number by another (throws on division by zero)
 *  - Modulo (%)         : remainder of a divided by b (throws on division by zero)
 *  - Exponentiation (**): base raised to the exponent
 *  - Square Root (sqrt) : square root of n (throws on negative input)
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

// Returns the remainder of a divided by b; throws an error if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Returns the square root of n; throws an error if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point: node calculator.js <num1> <operator> <num2>
//                  node calculator.js sqrt <num>
if (require.main === module) {
  const args = process.argv.slice(2);

  // Handle single-operand sqrt
  if (args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    if (isNaN(n)) { console.error('Error: Operand must be a valid number.'); process.exit(1); }
    try { console.log(`sqrt(${n}) = ${squareRoot(n)}`); } catch (e) { console.error(`Error: ${e.message}`); process.exit(1); }
    process.exit(0);
  }

  const [a, operator, b] = args;

  if (!a || !operator || !b) {
    console.error('Usage: node calculator.js <num1> <operator> <num2>');
    console.error('       node calculator.js sqrt <num>');
    console.error('Operators: + - x ÷ % **');
    process.exit(1);
  }

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (operator) {
      case '+':  result = add(num1, num2); break;
      case '-':  result = subtract(num1, num2); break;
      case 'x':
      case '*':  result = multiply(num1, num2); break;
      case '÷':
      case '/':  result = divide(num1, num2); break;
      case '%':  result = modulo(num1, num2); break;
      case '**': result = power(num1, num2); break;
      default:
        console.error(`Error: Unknown operator '${operator}'. Use +, -, x, ÷, %, or **`);
        process.exit(1);
    }
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}
