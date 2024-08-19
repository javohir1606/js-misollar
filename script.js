// if doir misollar
// 1 - misol
// Uygi-vazifa
// 1 - misol
// let year1 = prompt("Tug`ilgan yilingizni kiriting!");
// let year2 = prompt("Tug`ilgan yilingizni kiriting!");
// let email = prompt("email kiriting!")
// let married = prompt("Oila qurganmisiz! Ha yoki Yo`q");
// function Users(name, year, married, email){
//   this.name = name;
//   this.year = year;
//   this.email = email;
//   this.married = married;
//   this.calc = function() {
//     return 2024 - this.year
//   }
//   this.x = function(){
//     if(married == "Ha"){
//       return true;
//     }else{
//       return false;
//     }
//   }
// }
// const user1 = new Users("Fayruzber", year1, email, married);
// console.log(user1);
// console.log(user1.calc());
// console.log(user1.x());

// 2 - misol
// let userCount = prompt("userlarni soni");
// let result = [];

// for (let i = 0; i < userCount; i++) {
//   let obj = {};
//   let name = prompt("ismingiz");
//   let age = prompt("yoshingiz");
//   let id = prompt("id");
//   obj.name = name;
//   obj.age = age;
//   obj.id = id;
//   result.push(obj);
// }
// console.log(result);

// 3 - misol
// Foydalanuvchi konstruktor funksiyasi
// function User(name, age, location, sum) {
//   this.name = name;
//   this.age = age;
//   this.location = location;
//   this.sum = sum;
// }
// function calculSum(users) {
//   let totalSum = 0;
//   for (const user of users) {
//       totalSum += user.sum;
//   }
//   return totalSum;
// }
// const users = [
//   new User('Ali', 30, 'Tashkent', 50000),
//   new User('Vali', 28, 'Samarkand', 60000),
//   new User('Sami', 35, 'Bukhara', 55000)
// ];
// const totalSum = calculSum(users);
// console.log('Umumiy maosh:', totalSum);


// obyekt
// 1 - misol
// 1-misol   17, 5
// function num(n, m) {
//   let sum = 0;
//   let ren = n;
// //        17    5
//   while (ren >= m) {
//     sum++;
//     ren -= m;
//   }
//   return { sum, ren };
// }
// let n = 17;
// let m = 5;

// let result = num(n, m);
// console.log(`Butun qism: ${result.sum}`);
// console.log(`Qoldiq: ${result.ren}`);



// 2-misol
// function reverseDigits(n) {
//   let reversedNumber = 0;

//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;

//     // Teskari tartibda raqamlarni qo'shish
//     reversedNumber = reversedNumber * 10 + digit;

//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   return reversedNumber;
// }

// // Test qilish
// let n = 345; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let reversed = reverseDigits(n);
// console.log(`Teskari tartibda raqamlar: ${reversed}`);

// 3-misol
// function sumAndCountDigits(n) {
//   let sum = 0;
//   let count = 0;

//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;
    
//     // Raqamlar yig'indisini hisoblash
//     sum += digit;
    
//     // Raqamlar sonini oshirish
//     count++;
    
//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   return { sum, count };
// }

// // Test qilish
// let n = 532; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let result = sumAndCountDigits(n);
// console.log(`Raqamlar yig'indisi: ${result.sum}`);
// console.log(`Raqamlar soni: ${result.count}`);


// 4-misol
// function containsDigitTwo(n) {
//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;

//     // Agar raqam 2 bo'lsa, haqiqatni qaytarish
//     if (digit === 2) {
//       return true;
//     }

//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   // Agar raqam 2 topilmasa, yolg'on qaytarish
//   return false;
// }

// // Test qilish
// let n = 347; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let hasTwo = containsDigitTwo(n);
// console.log(`Raqamlar orasida 2 raqami bor: ${hasTwo}`);


// 5-misol
// function containsOddDigit(n) {
//   while (n > 0) {
//     // Qoldiqni olish (oxirgi raqamni olish)
//     let digit = n % 10;

//     // Agar raqam toq bo'lsa, haqiqatni qaytarish
//     if (digit % 2 !== 0) {
//       return true;
//     }

//     // Butun qismini olish (oxirgi raqamni olib tashlash)
//     n = Math.floor(n / 10);
//   }

//   // Agar toq raqam topilmasa, yolg'on qaytarish
//   return false;
// }

// // Test qilish
// let n = 2468; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let hasOdd = containsOddDigit(n);
// console.log(`Raqamlar orasida toq raqamlar bor: ${hasOdd}`);


// 6-misol
// function isPrime(n) {
//   if (n <= 1) return false; // 1 yoki undan kichik sonlar tub emas
//   if (n === 2) return true; // 2 tub sondir (yagona juft tub son)
//   if (n % 2 === 0) return false; // Juft sonlar (2dan boshqa) tub emas

//   for (let i = 3; i * i <= n; i += 2) {
//     if (n % i === 0) {
//       return false; // Agar n i ga bo'linadigan bo'lsa, tub emas
//     }
//   }
  
//   return true; // Agar hech qanday bo'linuvchi topilmasa, tub
// }

// // Test qilish
// let n = 2; // O'zgaruvchini sinab ko'rish uchun boshqa qiymatni qo'ying
// let result = isPrime(n);
// console.log(`${n} soni tub: ${result}` && `${n} soni tub emas: ${result}`);