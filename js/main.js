//========================1=
alert('hello welcome');
//========================2=

let name = prompt('Whats your name?');

alert(`hello ${name}, welcome:)`);
//========================3=
let answer = confirm('Do you like soccer?');
console.log('========= interest in Soccer ============');
if (!answer) {
  console.log(`${name} hates to play soccer`);
  document.getElementById('soccer').innerHTML = `${name} hates to play soccer`;
} else {
  console.log(`${name} likes to play soccer`);
  document.getElementById('soccer').innerHTML = `${name} likes to play soccer`;
}
console.log('========= old even number list ============');
///==========================================================
// For loop oldEven List
//========================================================

let oldEvenList = ' ';

for (let i = 0; i < 16; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
    oldEvenList += `${i} is even <br><br>`;
  } else {
    console.log(`${i} is odd`);
    oldEvenList += `${i} is odd <br><br>`;
  }
}

document.getElementById('qtn2').innerHTML = oldEvenList;

///==========================================================
// the sum function
//======================================================

function sum() {
  var sumTotal = 0;
  var i = 0;
  while (i < arguments.length) {
    sumTotal += arguments[i];
    i++;
  }
  return sumTotal;
}
console.log('========SUM FUNCTION=================');
console.log(sum(30, 30, 90));

//=======================================
// write a javascript program to delete
//=======================================
var student = {
  name: 'David Rayy',
  sclass: 'v1',
  rollno: 12
};
console.log(
  '=================write a javascript program to delete========================'
);

console.log('=================before deleting the property==============');
console.log(student);
//===============================delete==========
delete student.rollno;

console.log('===========After deleting the property=======');
console.log(student);

//=======================================
// Display the lenth of an object
//=======================================
const breakfast = {
  morning: 'breakfast',
  afternoon: 'Lunch',
  evening: 'Dinner'
};
var lenghtOfObject = Object.keys(breakfast).length;
console.log('=====Lenth of Obect==================');
console.log(lenghtOfObject);

//=======================================
// write a javascript program to sort an
// array of javascript object
//=======================================

var library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 12345 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 12345 },
  { title: 'Hunger games', author: 'Sussane Colline', libraryID: 12345 }
];
console.log('=================Sort through an array===============');
console.log('=================es6===============');
//es6
library.map(list => console.log(list));
console.log('=================es5===============');
for (const key in library) {
  if (library.hasOwnProperty(key)) {
    const element = library[key];
    console.log(element);
  }
}
