console.log("" + 1 + 0) //10

console.log("" -1 + 0) //-1

console.log(true + false)  //1

console.log(!true) //false

console.log(6 / "3") //2

console.log("2" * "3") //6

console.log(4 + 5 + "px") //9px

console.log("$" + 4 + 5) //$45

console.log("4" -2) //2

console.log("4px" - 2) // NaN

console.log(" -9 " + 5) //-9 5

console.log(" -9 " -5) // -14

console.log(null +1) //1

console.log(undefined +1) //NaN

console.log(undefined == null) //true

console.log(undefined === null) //false

console.log(" \t \n" -2) //-2

let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four //incorrect b/c it concatenates two strings
let addition2 = number(three) + number(four) //7 correct
let multiplication = three * four //12 correct
let division = three/four //0.75 correct
let subtraction = three - four //-1 correct

let lessThan1 = three < four //true correct
let lessThan2 = thirty < four //true incorrect because they are alphabetical, not numbers
let lessThan2_2 = Number(thirty) < Number(four) //correct, converted strings to numbers

if (0) console.log('#1 zero is true') //doesn't print, zero equivalent to false 
if ("0") console.log('#2 zero is true') //prints, strings equivalent to true
if (null) console.log('null is true') //doesn't print, null equivalent to false
if (-1) console.log('negative is true') //prints, non-zero number equivalent to true
if (1) console.log('positive is true') //prints, non-zero equivalent to true

let a = 2, b = 3;
let result = `${a} + ${b} is `;

result += (a + b <10) ? 'less than 10' : 'greater than 10'; //adds on existing value

function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

const getGreeting1 =function(name) {
    return 'Hello ' + name + '!';
}
console.log(getGreeting1('Alisha Bourque'))

const getGreeting2 = (name) => 'Hello ' + name + '!';
console.log(getGreeting2('Alisha Sloan'))

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers == 6 ?
     'You killed my father. Prepare to die.' : 'Nice to meet you.'
    }

    inigo.greeting(westley)
    inigo.greeting(rugen)

    const basketballGame = {
        score: 0,
        fouls: 0,
        freeThrow() {
        this.score++;
        return this;
        },
        basket() {
        this.score += 2;
        return this;
        },
        threePointer() {
        this.score += 3;
        return this;
        },
        foul() {
            this.fouls++;
            return this;
        },
        halfTime() {
        console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).'); 
        return this;
        },
        fullTime() {
            console.log('Final score is '+this.score+' ('+this.fouls+' fouls).');
            return this;
        }
        }
        basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();    
        

        const sydney = {
            name: 'Sydney',
            population: 5_121_000,
            state: 'NSW',
            founded: '26 January 1788',
            timezone: 'Australia/Sydney'
            }

        const newyork = {
            name: 'New York City',
            population: 8_468_000,
            state: "New York",
            founded: '18 December 1624',
            timezone: 'Eastern',
            country: 'United States'
        }

        function printCityProperties(cityObj) {
            for (cityProperties in cityObj) {
                console.log(cityProperties + ' = ' + cityObj[cityProperties])
            }
        }

        printCityProperties(sydney)
        printCityProperties(newyork)



        let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
        let moreSports = teamSports;
        moreSports.push('Football');
        moreSports.unshift('Basketball');

        let dog1 = 'Bingo';
        let dog2 = dog1;
        dog2 = 'Spot';

        let cat1 = { name: 'Fluffy', breed: 'Siberian' };
        let cat2 = cat1;
        cat2.name = 'Kitty'

        console.log(teamSports) //yes changed,because we added new values to array
        console.log(dog1) //no change, because it is a primative
        console.log(cat1) //yes changed

       let moreSports2 = [...teamSports]
       moreSports2.push('Tennis')
       console.log(teamSports)

       let cat3 = {...cat1}
       cat3.name = 'Zoe'
       console.log(cat1)



       function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = () => this.age >=16
        }

        let person1 = new Person('Ryan', 40)
        let person2 = new Person('Amanda', 29)

        class PersonClass {
            constructor(name, age) {
                this.name = name;
                this.age = age;
                this.human = true;
            }

            canDrive () {
                return this.age >=16;
            }
        }

        let person3 = new Person('Sam', 8)

        console.log(person1)
        console.log(person2)
        console.log(person3)

        if (person1.canDrive()) console.log(person1.name + ' is ' +person1.age+ ' and is old enough to drive.')
        if (person1.canDrive()) console.log(person2.name + ' is ' +person2.age+ ' and is old enough to drive.')
        if (person1.canDrive()) console.log(person3.name + ' is ' +person3.age+ ' and is not old enough to drive.')
        
    








//function check age returns a value when called
// function checkAge(age) {
//     if (age >= 18) {
//         return 'adult';
//     }
//     return 'non-adult';
// }
// console.log( checkAge(21))
// console.log( checkAge(13))

//const sayHiArrow = () => console.log('Hi')

// const phone = {
//     model: 'iphone 11' ,
//     color: 'black' ,
//     storage: 64 
    
// }

// if (phone.color) console.log(`My ${phone.model}`)
// if (phone.storage) {
//     console.log(`My ${phone.make} has ${phone.storage}GB`);
// }

// let goal = 5;
// for (let i=0; i < goal; i++) {
//     console.log( `Iteration ${i} of ${goal}`)
// }

// for (let key in phone) {
//     console.log('key: ' + key)
//     console.log('value:' + phone[key]);
// }

