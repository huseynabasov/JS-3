// 1. Obyekt yaradin.

// let human = {
//     name: "Huseyn",
//     surname: "Abbasov",
//     age: 25,
// }
// console.log(human)

// ######################################################################
// 2. Array icinde coxlu obyektler yaradin

// const telebe = [
//     {
//         name: "Huseyn",
//         surname: "Abbasov",
//         age: 25,
//     },
//     {
//         name: "Eli",
//         surname: "Heyderov",
//         age: 18,
//     },
//     {
//         name: "Lale",
//         surname: "Eliyeva",
//         age: 23,
//     },
//     {
//         name: "Sevinc",
//         surname: "Qurbanova",
//         age: 37,
//     },

// ]

// console.log(telebe)

// ######################################################################
// 3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
// let student = [
//     {
//         name: "Huseyn",
//         surname: "Abbasov",
//         hobbi: ["tennis", "futbol"],
//         xususiyyet: ["sevimli", "guleruz"],
//     },
//     {
//         name: "Eli",
//         surname: "Heyderov",
//         hobbi: ["tennis", "futbol"],
//         xususiyyet: ["sevimli", "guleruz"],
//     },
//     {
//         name: "Lale",
//         surname: "Eliyeva",
//         hobbi: ["tennis", "futbol"],
//         xususiyyet: ["sevimli", "guleruz"],
//     },
//     {
//         name: "Sevinc",
//         surname: "Qurbanova",
//         hobbi: ["tennis", "futbol"],
//         xususiyyet: ["sevimli", "guleruz"],
//     },

// ]

// console.log(student)

// ######################################################################
// 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)

// let students = [
//     {
//         name: "Huseyn",
//         surname: "Abbasov",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 75,
//     },
//     {
//         name: "Eli",
//         surname: "Heyderov",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 96,
//     },
//     {
//         name: "Lale",
//         surname: "Eliyeva",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 83,
//     },
//     {
//         name: "Sevinc",
//         surname: "Qurbanova",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 79,
//     },

// ]


//************** Varinat 1 ***************


// let sum = 0;
// students.forEach(element => {
//     sum += element.qiymet / students.length;
// });
// console.log(sum);


//************** Varinat 2 ***************
// const sum = students.reduce((accumulator, object) => {
//     return accumulator + object.qiymet  / students.length;
// }, 0);
// console.log(sum);


//************** Varinat 3 ***************
// let sum = 0;

// for (let index = 0; index < students.length; index++) {
//   sum += students[index].qiymet / students.length;
// }

// console.log(sum);



// ######################################################################
// 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.

// let mektebli = [
//     {
//         name: "Huseyn",
//         surname: "Abbasov",
//         qiymet: 75,
//     },
//     {
//         name: "Eli",
//         surname: "Heyderov",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 96,
//     },
//     {
//         name: "Lale",
//         surname: "Eliyeva",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 83,
//     },
//     {
//         name: "Sevinc",
//         surname: "Qurbanova",
//         hobbi: ["tennis", "futbol"],
//         qiymet: 79,
//     },

// ]

// const mekteb = mektebli.map((sagird) => {
//     if (sagird.qiymet <= 90) {
//         console.log(`Sagird: ${sagird.name} ${sagird.surname} ortalamaniz ${sagird.qiymet}. Daha cox calismaginizi tovsiye edirik`)
//         return sagird;
//     }
// });
 

// ######################################################################