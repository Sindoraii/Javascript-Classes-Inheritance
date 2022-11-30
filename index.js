import IntBuilder from "./Builders/IntBuilder.js";
import StringBuilder from "./Builders/StringBuilder.js";

/* test IntBuilder with static number that equals 10 */
let intBuilder = new IntBuilder(10);
intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get();
console.log('Result of IntBuilder with static number', intBuilder);

/* test IntBuilder with random number */
let testNumber = IntBuilder.random(10,100);
let intBuilderWithRandom = new IntBuilder(testNumber)
intBuilderWithRandom
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get();
console.log('Random number:',testNumber);
console.log('Result of IntBuilder with random number:',intBuilderWithRandom);

/* test StringBuilder */
let strBuilder = new StringBuilder('Hello');
strBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1,1)
    .get();
console.log('Result of StringBuilder:',strBuilder);
