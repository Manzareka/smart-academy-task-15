// 1. დაწერეთ for ციკლი, 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i

console.log("Task 1");
for (a = 0; a <= 50; a++) {
  console.log(a);
}

// 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i

console.log("Task 2");
let b = 0;
while (b <= 20) {
  console.log(b);
  b++;
}

// 3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i

console.log("Task 3");
let c = 0;
do {
  c += 1;
  console.log(c);
} while (c < 30);

// 4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];

console.log("Task 4");
for (d = 0; d < numbers.length; d++) {
  if (numbers[d] % 2 === 0) {
    console.log(numbers[d]);
  }
}

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.

console.log("Task 5");
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;

  case 1:
    console.log("ორშაბათი");
    break;

  case 2:
    console.log("სამშაბათი");
    break;

  case 3:
    console.log("ოთხშაბათი");
    break;

  case 4:
    console.log("ხუთშაბათი");
    break;

  case 5:
    console.log("პარასკევი");
    break;

  case 6:
    console.log("შაბათი");
    break;
}
