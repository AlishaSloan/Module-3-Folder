/* 1 . Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/

// console.log(ucFirstLetters("los angeles") ) //Los Angeles


function ucFirstLetters(string) {
    const words = string.split(' ');

    for(i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let word = 'i will capitalize all the words in this string'
console.log(ucFirstLetters(word))


/* 2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat... */

function truncate(str, max) {
    if (str.length > max) { 
        return str.substring(0, max) + '...';
    }
    else {
        return str;
    }
}

function truncateB(str, max) {
    return (str.length > max) ? str.substring(0, max) + '...' : str;
}

console.log(truncate('Lets see if this statement will be too long using this function', 25))
console.log(truncateB('Lets see if this statement will be too long using this function', 32))


/* 3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */


const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Lion', 'Zebra');
console.log(animals)

animals.unshift('Gorilla', 'Rabbit');
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    let middle = animals.length / 2;
    animals[middle] = newValue
}
replaceMiddleAnimal('Dog');

console.log(animals)

function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
console.log(findMatchingAnimals('g'))



/* 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display */

function camelCase(cssProp) {
    let nodashes = cssProp.split('-');
    let newWords = '';
    nodashes.forEach(word => {
        if (newWords.length == 0) {
            newWords = word;
        }
        else {
            newWords += word.charAt(0).toUpperCase() + word.substring(1)
        }

    });

    return newWords;
}

const camelCaseB = (cssProp) => {
    let newWords = '';

    for (let word of cssProp.split('-')) {
        newWords += (newWords.length ==0) ? word : word.charAt(0).toUpperCase() + word.substring(1);
    }
    return newWords;
}

console.log(camelCase('margin-left'))
console.log(camelCaseB('background-image'))
console.log(camelCase('display'))


/* 5.   let fixedTwenty = twentyCents.toFixed(2);
        let fixedTen = tenCents.toFixed(2);
        console.log(fixedTwenty + fixedTen) //why is this not working?
a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true */


function currencyAddition(float1, float2) {
    let NumberOne = float1 * 100;
    let NumberTwo = float2 * 100;

    return (NumberOne + NumberTwo)/ 100

}



/*  6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own. */

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const shapes = ['square', 'circle', 'square', 'rectangle', 'oval', 'diamond', 'oval']

function unique (duplicatesArray) {
    const uniques = [ ];

    duplicatesArray.forEach(element => {
        if (!uniques.includes(element)) {
            uniques.push(element);
        }
    })

    return uniques;
}

console.log(unique(colors));
console.log(unique(testScores));
console.log(unique(shapes))


/* 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. */

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

const getBookTitle = (bookId) => {
    let matchingbook =books.find(book => book.id == bookId);
    return matchingbook.title;
}
console.log(getBookTitle(1))

const getOldBooks = () => {
return books.filter(book => book.year < 1950);
}
console.log(getOldBooks())

const addGenre = () => {
    books.map(book => book.genre = 'classic');
}
addGenre();
console.log(books);

const getTitles = (authorInitial) => {
    return books.filter(book => book.author.startsWith(authorInitial)).map(book => book.title);
    
}
console.log(getTitles('F'))

const latestBook = () => {
    let latestYear = 1920;
    books.forEach(book => {
        if (book.year > latestYear) {
        latestYear = book.year; }
        });

        return books.find(book => book.year == latestYear);
}
console.log(latestBook())


/*  8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers. */

// const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
    ['Dan', '3375550000'],
    ['Emma', '5557879999'],
    ['Frank', '3372985678']
])

phoneBookABC.set('Caroline', '9990004545');

const printPhoneBook = (contacts) => {
    for (let entry of contacts) {
        console.log(entry)
    }
}
printPhoneBook(phoneBookDEF)

const phoneBook = new Map([...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]));
console.log([...phoneBook.keys()])


/* 9. Given the below salaries object, perform the following tasks. */

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

const sumSalaries = (salaries) => {
    let totalSalaries = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        totalSalaries += salary;
    }
    return totalSalaries;
}
console.log(sumSalaries(salaries))

const topEarner = (salaries) => {
    let topSalary = 0;
    let topEarner = "";

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topEarner = name;
        }
    }
    return topEarner;
}
console.log(topEarner(salaries))


/*  10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following: */

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

console.log((today.getHours()*60 + today.getMinutes() + ' minutes have passed today'))
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds())+ ' seconds have passed today')

const birthday = new Date('1988-05-03')
let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();
if (days < 0) {
    months--;
    days += birthday.getDate(); 
}
if (months <0) {
    years -=1;
    months += 12;
}
console.log(`I am ${years} years, ${months} months and ${days} days old`)


function daysInBetween(date1, date2) {
    let differenceMS = date2 - date1;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
    return Math.abs(differenceDays);
}

console.log(`Days between 2024-01-01 and 2023-09-05: ${daysInBetween(new Date('2023-09-05'), new Date('2024-01-01'))}`)



//CLASS WORK ****

const n = 1.23456;
console.log(n.toFixed(2))
console.log(n.toPrecision(10))

const hello = "hello world"
console.log(hello.toUpperCase())
console.log(hello.toLowerCase())
console.log(hello.endsWith('world'))

const user = {
    name: 'john',
    toString() {
        return this.name
    }
}

console.log("user: " + user);

const apple = {
    name: 'Apple',
    category: 'Granny Smith',
    price: 1.2,
    valueOf () {
        return this.price;
    }
}

console.log(apple * 2)

const billion1 = 1000000000
const billion2 = 1_000_000_000
const billion3 = 1e9

console.log(billion1 === billion2)
console.log(billion2 === billion3)

const microSecs1 = 0.000001
const microSecs2 = 0.000_001
const microSecs3 = 1.e-6

console.log(microSecs1 === microSecs2)
console.log(microSecs2 === microSecs3)

const r = 0xff;
const g = 0xff;
const b = 0xff;

const white = `rgb(${r}, ${g}, ${b})`
console.log(white)

const arr1 = new Array(1,2,3);
const arr2 = [1, 2, 3];

console.log(arr1);

console.log(arr2);

const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop()
console.log(lastFruit);
console.log(fruits);

fruits.push('banana')
console.log(fruits);

const firstFruit = fruits.shift()
console.log(firstFruit);
console.log(fruits);

fruits.unshift('banana')
console.log(fruits)

const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1

fruits1.push('banana')
console.log(fruits2)

console.log('fruit at index 0: '+fruits1[1])

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][1])

const numbers = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []

console.log('numbers:' + numbers)
console.log('strings: ' + strings)
console.log('Empty: ' + empty)

const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Lets", "dance")

console.log(removed)
console.log(spliceArray)

const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items

console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]

const combined = array1.concat(array2, array3)

console.log(combined)

const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
console.log(`#${index}: ${hobbit}`) // runs once for every item in array
})

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-', 'E']
let bIndex = marks.indexOf('B-')
let eIndex = marks.indexOf('E')
// first index is always 0

console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since not found

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = marks.indexOf('B-')
let bIndexLast = marks.lastIndexOf('B-')
console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
    ]
    // we usually use an arrow function - runs once for each array element until condition is true
    let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
    let shirt = products.find(product => product.category == 'Shirts') // returns matching item
    console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
    console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }

    const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
    ]
    // we usually use an arrow function - runs once for each element, returns array of matches
    let shirts = products.filter(product => product.category == 'Shirts')
    let under50 = products.filter(product => product.price < 50)
    console.log(shirts) // 2 matching items in shirts array
    console.log(under50) // 3 matching items in under50 array

    let titles = products.map(product => product.title)
    let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
    let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
    console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
    console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>DenimJeans</h2>', '<h2>Ladies Tee</h2>' ]
    console.log(raisedPrices) // all prices increased by $5

const now = new Date()

console.log(now)

const epoch = new Date(0)

const jan2_1970 = new Date(1000 * 60 * 60 *24)

const christmas = new Date('2024-12-25')
console.log(christmas)

const nyeUTC = new Date('2024-12-31 23:59:59+00:00')
console.log(nyeUTC)

const boxingDay = new Date(2024, 12, 25)
console.log(boxingDay)

const rememberanceDay = new Date( 2024, 10, 11, 11, 11)
// console.log(rememberanceDay)

console.log(rememberanceDay.getFullYear())
console.log(rememberanceDay.getMonth())
console.log(rememberanceDay.getHours())
console.log(rememberanceDay.getMilliseconds())

const students = {

    name: 'Json',
    
    age: 28,

    courses: ['HTML', 'CSS', 'Javascript'],

    occupations: null

}

// console.log(students)

console.log(JSON.stringify(students))

const book = {

title: "Gone with the wind",
printTitle(){

    console.log(this.title)
},
 releaseDate: undefined

}

console.log(JSON.stringify(book))






