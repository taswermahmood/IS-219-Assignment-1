const Calculator = require('./MathOperations');
a = 1;
b = 2;
//baal
sum = Calculator.sum(a,b);
product = Calculator.product(a,b);
quotient = Calculator.quotient(a,b);

console.log("The sum is: " + sum);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);

const CSVReader = require("./CSVReader")
const City = require("./city")


let reader = new CSVReader("./data/worldcities.csv", City);

const test = async () => {
    try {
        let {output, size} = await reader.parse();
        let record = output[0]  
        // console.log(record)  
    } catch (error) {
        console.log(error)
    }
}

test();