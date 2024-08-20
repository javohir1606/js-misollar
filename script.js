// string orasidagi probellarni yoq qilish

// let str = "salom salom salom";
// const x = (value) => {
//     new_str = [];
//     for (let i of value) {
//         if (i != " ") {
//             new_str += i;
//         }
//     }

//     return new_str;
// }

// console.log(x(str));


// let arr = [1,3,2,44,8];

// const x =(value) => {
//     for (let i = 0; i < value.length; i++){
//         if (value[i] % 2 == 0){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(x(arr));    


// let arr = [1, 3, 2, 44, 8];

// const new_arr = arr.some(value => value % 2 === 0);

// console.log(new_arr);


// let str = "hello";

// let result = str[str.length -2] + str[str.length -1];

// console.log(result + result + result);

// let s = "heldctfvgbhnjbg";
// let a = prompt("sonni kirit");
// let b = prompt("sonni kirit");
// if (s.length != a + b) {
//     console.log("hato");
    
// }
// let new_1 = s.slice(0, a);
// let new_2 = s.slice(s.length - b);
// let result = new_1 + new_2;

// console.log(result);





// let str = "salom";
// let result = ''

//  for (let i = 0; i < str.length; i++){
//     if (str.length % 2 != 0){

//         console.log(str.split("")[2]);
        
//     }else{
//         // console.log(res_1)
        
//     }
//  }

//  console.log(result);
 



// uy ishi object
// misol_1
// function extra(obj) {
//     let result = [];
    
//     function reverse(value) {
//         if (typeof value === 'object' && value !== null) {
//             result.push(value);
            
//             for (let key in value) {
//                 if (value.hasOwnProperty(key)) {
//                     reverse(value[key]);
//                 }
//             }
//         }
//     }
    
//     reverse(obj);
    
//     return result;
// }

// const exampleObject = {
//     name: "John",
//     details: {
//         age: 30,
//         address: {
//             city: "New York",
//             zip: "10001"
//         }
//     },
//     hobbies: ["reading", "hiking"],
//     friends: [
//         { name: "Jane", age: 28 },
//         { name: "Doe", age: 35 }
//     ]
// };




// const nestedObjects = extra(exampleObject);
// console.log(nestedObjects);


// misol_2
// function extra(arr) {
//     let result = [];
    
//     arr.forEach(item => {
//         if (typeof item === 'object' && item !== null) {
//             result.push(item);
//         }
//     });
    
//     return result;
// }

// const arrays = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     "string", 123, [1, 2, 3],
//     { name: "Charlie", age: 35 },
//     null,
//     { name: "Diana", age: 28 }
// ];

// const obb_arr = extra(arrays);
// console.log(obb_arr);



// misol_3
// const arrays = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Diana", age: 28 }
// ];

// function extra(arr, key) {
//     return arr
//         .map(item => item[key])     
//         .filter(value => value !== undefined); 
// }

// const ages = extra(arrays, 'age');
// console.log(ages); 

// const names = extra(arrays, 'name');
// console.log(names); 


// misol_4
// const nes_arr = [
//     [
//         { name: "Alice", age: 25 },
//         { name: "Bob", age: 18 }
//     ],
//     [
//         { name: "Charlie", age: 30 },
//         { name: "Diana", age: 22 }
//     ],
//     [
//         { name: "Eve", age: 19 },
//         { name: "Frank", age: 35 }
//     ]
// ];

// function extra(arr, min_arr) {
//     return arr
//         .flatMap(in_arr => in_arr)
//         .filter(user => user.age > min_arr);
// }

// const user_20 = extra(nes_arr, 20);
// console.log(user_20);


// const matn = "   qonday   ";
// const clear = matn.trim();

// console.log(clear);

// function arr(str) {
//     let result = '';
//     let res = false;

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (res && char >= 'a' && char <= 'z') {
//             result += char.toUpperCase();
//             res = false;
//         } else {
//             result += char;
//         }
        
//         if (char >= 'A' && char <= 'Z') {
//             res = true;
//         }
//     }

//     return result;
// }

// console.log(arr('hello World! This is A test.'));


// uy ishi string
// misol_1
// let arr = [2, 3, 5, 6, 1, 8, 12];
// let min = arr[0];
// let max = arr[0];

// function x (value) {
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] > max) {
//             max = value[i];
//         }

//         if (value[i] < min) {
//             min = value[i];
//         }
//     }
//     return { max , min }
// }

// console.log(x(arr));



// misol_2
// let arr = [1,2,4,4,5,2,4,7,8,9];
// const count = [];

// const x = (value) => {
//     for (let i = 0; i < value.length; i++){
//         if (value[i] > 2){
//             count.push(value[i])

//         }
//     }
//     return count;
// }

// console.log(x(arr));

// misol_3
// let arr = [2,3,6,6,7,7,88,31,9];
// let even_number = 0;
// let add_number = 0;

// const x = (value) => {
//     for (let i = 0; i < value.length; i++){
//         if (value[i] % 2 == 0){
//             even_number +=1;
//         }else{
//             add_number +=1;
//         }
//     }
//     return {even_number,add_number};
// }

// console.log(x(arr));


// misol_4
// const x = (number) => {
//     let count = 0;
//     for (let i = 0; i < number.length; i++){
//         count += number[i];
//     }

//     return count;
// }

// let arr = [2,4,7,8,99,9];
// console.log(x(arr));


// misol_5
// function value(obj) {
//     return Object.values(obj)
// }

// function keys(obj) {
//     return Object.keys(obj)
// }

// let obj = { name: 'Muhammadali', age: 20, id: 3 }

// console.log(value(obj));
// console.log(keys(obj));

