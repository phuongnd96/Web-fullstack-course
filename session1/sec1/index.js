//named export
import { sum } from "./math.js";
// //default export
import MyMath from "./math.js";
MyMath.sum(1, 2);

const foo = {
  name: "foo",
  age: 12,
};

const bar = {
  ...foo,
  name: "bar",
};
console.log(foo, bar);

//Rest
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(arr, newArr);

//Destructing
const fooDes = {
    name:"foo",
    age: 10,
    address:{
        city:"ha noi"
    }
}
