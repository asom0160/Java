// const arr = [1, 3, 5, 7, 9];

//엄청 중요함!!
//요소들을 바꿔주는 함수
// const double = (x) => x * 2;
// const newArr = arr.map(double);
// console.log(newArr);

// const add = (x) => x + 10;
// const newadd = arr.map(add);
// console.log(newadd);

// const a = (x) => (x ** 2 < 10 ? "짜장면" : "탕수육");
// const newArr1 = arr.map(a);
// console.log(newArr1);

// const b = (x) => (x ** 3 < 100 ? "커피" : "붕어빵");
// const newArr2 = arr.map(b);
// console.log(newArr2);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "persommon",
//   "fig",
// ];
// const a = (word) => (word.length >= 6 ? word + "💙" : word + "💔");
// const newArr3 = fruits.map(a);
// console.log(newArr3);

// const d = (word) => (word.length * 2 < 15 ? "과일이름 짧음" : "과일이름 김");
// const newArr4 = arr.map(d);
// console.log(newArr4);

//some: 요소중에 조건(함수)에 맞는 요소가 하나라도 있으면
// const arr = [1, 3, 5, 7, 9];
// // const three = (x) => x == 3;
// // const hasthree = arr.some(three);
// // console.log(hasthree);
// const double = (x) => x % 2 == 0;
// const hasdouble = arr.some(double);
// console.log(hasdouble);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "persommon",
//   "fig",
// ];
// const a = (word) =>
//   word.startsWith("k") || word.startsWith("b") || word.startsWith("s");
// const hasa = fruits.some(a);
// console.log(hasa);

// const b = (word) => word.length > 4 && word.length < 12;
// const hasb = fruits.every(b);
// console.log(hasb);

// const c = (heart) =>
//   heart.include("i") || heart.include("o") || heart.include("u")
//     ? heart + "💛"
//     : heart + "🧨";
// const hasc = fruits.map(b);
// console.log(hasc);

// const sing = `Ooh
// I, I just woke up from a dream
// Where you and I had to say goodbye
// And I don't know what it all means
// But since I survived, I realized
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// Ooh
// Oh, lost, lost in the words that we scream
// I don't even wanna do this anymore
// 'Cause you already know what you mean to me
// And our love's the only war worth fighting for
// Wherever you go, that's where I'll follow
// Nobody's promised tomorrow
// So I'ma love you every night like it's the last night
// Like it's the last night
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// Right next to you
// Next to you
// Right next to you
// Oh-oh, oh
// If the world was ending, I'd wanna be next to you
// If the party was over and our time on Earth was through
// I'd wanna hold you just for a while and die with a smile
// If the world was ending, I'd wanna be next to you
// If the world was ending, I'd wanna be next to you
// Ooh
// I'd wanna be next to you`;
// const result = sing
//   .split(" ")
//   .map((word) => (word.length > 6 ? "💛" : word))
//   .join(" ");
// console.log(result);

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //filter[거른다]
// const numArr1 = numArr.filter((x) => (x ** 2 < 100).map((x) => x + 10));
