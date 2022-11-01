// let obj = {
//   name: "Zaha",
//   age: 16,
// };
// let obj2 = obj;

// obj2.age = 18;

// console.log(obj.age);
// let num = new Number(12);  Dasturni ishlashini sekinlashtiradi BUILD IN CANSTRUCTOR ; shunchaki let num = 12
//-----------------------------------------------------------\\
// CAnstructor funksiya
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const user = new User("Zaha", 15);
// const user1 = new User("ZIKI", 13);

// console.log(user);
// console.log(user1);

//Recursive funksiya

// function recur(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * recur(x - 1); // x 5 teng edi  shu x ni ayirib chaqiruradi toki qiymat qaytmaguncha
// }
// console.log(recur(5));
//------------------------------------------------------------------\\
//Max sonni topish arraydan   :   constructor funksiya bilan

// let arr = [45, 26, 548, 154, 4628, 7102, 23, 12];

// function max(arr) {
//   let maxSon = 0;
//   let minSon;
//   for (let i = 0; i < arrlength; i++) {
//     if (arr[i] > maxSon) {
//       maxSon = arr[i];
//     }
//   }
//   minSon = maxSon;
//   for (let i = 0; i < arrlength; i++) {
//     if (arr[i] < minSon) {
//       minSon = arr[i];
//     }
//   }
//   return {
//     minSon,
//     maxSon,
//   };
// }

// const result = max(arr);
// console.log(result);
//------------------------------------------\\

//Clogure bu o'yindan chiqib ketgan funksiyadan qiymat sug'urib olish

// const a = () => {
//   var b = 20;
//   return function x() {
//     console.log(b);
//   };
//   x();
// };

// const z = a();
// z();
//------------------------------------------------------\\

//Array metodlari
//1: -----.at(i) arrayning i-da turgan sonini ko'rsatib beradi
// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(-1));
//-----\\
//2: -----.fil(a,b,c)
// a-qiymat beramz ixtiyoriy;
// b- nechinchi index dan so'ng olish kerakligini a qiymatni;
// c - a qiymatni nechanchi indexgacha qabul qilish kerakligini yozamz

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.fill("salom", 2, 4));
//------------\\
//3: ------.filter()      callback funksiya yoziladi

// const array1 = [5, 12, 8, 130, 44];

// const result = array1.filter(function (item, index) {
//     // index ilteratsiya qilib beradi array1 dagi sonlarni; item esa array1 dagi qiymatlar nimaligini ko'rsatadi
//     if (item % 2 == 1) {
//         return item;
//     }
// });
// console.log(result);



//custom .filter()   funksiya
// const array1 = [22, 23, 8, 130, 44];

// function customFilter(arr, func) {
//     let newArr = [];
//     for (let i = 0; i < arrlength; i++) {
//         if (func(arr[i])) {
//             newArr[newArr.length] = func(arr[i]);
//         }
//     }
//     return newArr;
// }
// const result = customFilter(array1, (item) => {
//     if (item % 2 == 1) {
//         return item;
//     }
// });

// console.log(result);
//---------------\\
//4 : -----.flat() yangi qiymat qaytaradi ichki arrayni yoyib beradi
// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2)); //agar ichma ich kirgan bo'lsa qavslar ichiga qancha irish kerakligi aytiladi
// expected output: [0, 1, 2, [3, 4]]

//----------------------------\\

//5: ------.forEch solishtiradi
// const arr1 = [74, 1, 22, [3, 4],15,16];
// arr1.forEach((item,index)=> { 
//     if(typeof item === 'number'){
//         if(item > 18){

//             console.log(item);
//         }
//     }
// })
//------------------\\

//6: -----.find(f); f - bu callback funksiya  find f ning shartiga to'gri keladigan qiymat topishi bilanoq f tugaydi 
// const array1 = [5, 12, 8, 130, 44];

// const son = array1.find((item)=> {
// if(item > 10){
//     return item;//yozmasa undefined qaytaradi:)
// }
// })

// console.log(son);
//-----------------\\
//7: ----.join(o) stringlarni qo'shib beradi o - bu orasiga ixtiyoriy qiymat qo'yish

// const elements = ['Fire', 'Air', 'Water'];


// let result = elements.join("_")

// console.log(elements.join());
// expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// expected output: "FireAirWater"

// console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
// console.log(result);
//------------------------------------\\
//8: -----.map(f)  f dagi shartni tekshiradi shartga loyiq qiymat bo'lsa qiymat qaytaradi  : agar shartga to'g'ri keladigan qiymat yo'q bo'lsa uning
// o'rniga FALSE qiymat qaytaradi!!

// const elements = ['Fire', 'Air', 'Water'];


// let newArr = elements.map(function(item,index){
//     return item + "23"
// });
// console.log(newArr);

// let arr = [
//     {
//         age:45,
//         name:"Zaha",
//     },
//     {
//         age:23,
//         name:"Diyor",
//     },
//     {
//         age:54,
//         name:"G'ldre",
//     },
//     {
//         age:17,
//         name:"Lagan",
//     },
//     {
//         age:15,
//         name:"Lagan",
//     }
    
// ]

// let newUsers = arr.map((user) => {// .map(f{}) o'ringa .filter(f{}) bo'lsa shartga loyiq qiymatni olib beradi
//     if(user.age > 18){
//         return user;
//     }
  
// });

// for(let i of arr){
//     if(i.age > 18){
//         newUsers.push(i)
//     }

// };
// console.log(newUsers);


//9: for(  in   )

// let obj = {
//     age:15,
//     name:"Lagan",
// };
// for (const i in obj) {
//     console.log(obj[i]);
// }

//10: ----.reduce()


// let books = [
//     {
//      name: "Jinoyat va Jazo",
//      author: "Dostoyevskiy",
//      price: 500,
//     },
//     {
//      name: "Shaytanat",
//      author: "Tohir Malik",
//      price: 300,
//     },
//     {
//      name: "If qalasi maxbusi",
//      author: "Aleksandr Duma",
//      price: 800,
//     }
// ];
// let sum = books.reduce((a,b)=>{
//     return a + b.price;
// },0);
// // console.log(sum);
// //custom reduce
// function customReduce (arr,func,num){
//     let price = 0;
//     for(let i of arr){
//         price += func(num,i)
//     }
// return price;
// }

// const result = customReduce(books,(a,b)=>{
//     return a + b.price; 
// },0)
// console.log(result);

// console.log(books.reverse());
//----------------------------\\

//11: -----.every(f) f shartiga 1 ta noto'g'ri qiymat kelsa qolganlarini ko'rib o'tirmaydi.

//12: ----.some(f) f shartiga tog'ri keladigan qiymatni arrayni ohirigacha aylanib olib keladi.


// const array1 = [1, 30, 39, 29, 50, 13];

// const result = array1.every((currentValue) => {
//     console.log(currentValue);
//     if(currentValue > 40){
//         return currentValue;
//     }
// });
// console.log(result);

//13: -----.slice(a,b); a- arrayning nechinchi index dan boshlab olishi; b - esa nechinchi index gacha olish kerakligi


// const array1 = [1, 30, 39, 29, 50, 13];

// console.log(array1.slice(1,5));


