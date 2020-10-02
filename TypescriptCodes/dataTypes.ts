export { }

let a: number;
let b: boolean;
let c: string;

a = 10
b = true
c = `hello, this is number ${a} and boolean value ${b}`
console.log(a + "\n" + b + "\n" + c)

let myArr: number[];
myArr = [10, 20, 2]

//multi-type Array
let valuesOne: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or 
let valuesTwo: Array<string | number> = ['name', 24, 'age'];

//tuple
let tupleOne: [string, boolean];
tupleOne = ['Nidhu', true]

