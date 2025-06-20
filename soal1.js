// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne;

// ANSWER 1
for (let index = 0; index < numbers.length; index++) {
  resultOne = numbers[index] + (resultOne || 0);
}

console.log("ANSWER 1: ", resultOne);

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo;

// ANSWER 2
for (let index = 0; index < numbersTwo.length; index++) {
  if (numbersTwo[index] % 2 !== 0) {
    resultTwo = numbersTwo[index] + (resultTwo || 0);
  }
}

console.log("ANSWER 2: ", resultTwo);

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"];
let resultThree;

// ANSWER 3
resultThree = students.map((student) => {
  return student.toUpperCase();
});

console.log("ANSWER 3: ", resultThree);

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
  { name: "Andi", age: 17 },
  { name: "Tito Alexsta", age: 20 },
  { name: "Bostang", age: 22 },
  { name: "Cici", age: 17 },
];

// ANSWER 4
let resultFour = [];

for (let index = 0; index < people.length; index++) {
  if (people[index].age > 18 && people[index].name.length > 5) {
    resultFour.push(people[index].name);
  }
}

console.log("ANSWER 4: ", resultFour);

// Hitung total harga semua barang
const items = [
  { name: "Book", price: 10000 },
  { name: "Pen", price: 5000 },
  { name: "Pencil", price: 3000 },
];

// ANSWER 5
let resultFive = 0;

for (let index = 0; index < items.length; index++) {
  resultFive += items[index].price;
}

console.log("ANSWER 5: ", resultFive);

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

// ANSWER 6
let resultSix = [];

for (let index = 0; index < numbersThree.length; index++) {
  if (resultSix.includes(numbersThree[index]) === false) {
    resultSix.push(numbersThree[index]);
  }
}

console.log("ANSWER 6: ", resultSix);

// Ambil nama produk dengan harga tertinggi
const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Phone", price: 8000000 },
  { name: "Monitor", price: 3000000 },
];

// ANSWER 7
let resultSeven;

for (let index = 0; index < products.length; index++) {
  if (typeof resultSeven !== "number" || products[index].price > resultSeven) {
    resultSeven = products[index].price;
  }
}

console.log("ANSWER 7: ", resultSeven);

// Buat kalimat dari array kata.
const words = ["Belajar", "array", "itu", "menyenangkan"];

// ANSWER 8
let answerEight = words.join(" ");
console.log("ANSWER 8: ", answerEight);

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ["Aldo", "Budi", "Caca", "Dinda", "Eka", "Fajar"];

// ANSWER 9
let answerNine = [];
for (let index = 0; index < names.length; index++) {
  const lowerCaseName = names[index].toLocaleLowerCase();

  if (lowerCaseName.includes("a") && answerNine.length < 3) {
    answerNine.push(names[index]);
  }
}

console.log("ANSWER 9: ", answerNine);

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ["Ani", "Budi", "Citra"]; // 12 karakter

// ANSWER 10
let resultTen = 0;

for (let index = 0; index < namesTwo.length; index++) {
  resultTen += namesTwo[index].length;
}

console.log("ANSWER 10: ", resultTen);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
  { name: "Tono", age: 22 },
  { name: "Tini", age: 19 },
  { name: "Tara", age: 25 },
];

// ANSWER 11
let resultEleven = [];

peopleTwo.forEach((person) => {
  if (person.age > 21) {
    resultEleven.push(`${person.name} (${person.age})`);
  }
});

console.log("ANSWER 11: ", resultEleven);
