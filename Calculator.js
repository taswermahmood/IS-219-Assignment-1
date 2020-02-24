const MathOperations = require('./MathOperations');

class Calculator {
    Add(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.sum(a);

        } else {
            return this.Result = MathOperations.sum(a, b);
        }
    }
    Divide(a,b) {
        return this.Result = MathOperations.quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOperations.product(a,b);
    }
	Square(a) {
        return this.Result = MathOperations.pow(a, 2);
    }
	SquareRoot(a) {
        return this.Result = MathOperations.pow(a, 0.5);
    }
}
module.exports = Calculator;