// -------------------------------------- Single Responsibility Principle --------------------------------------
// WRONG
// class FindPerson {
//     constructor(name) {
//         this.name = name
//     }

//     check(personName) {
//         if(personName === this.name) this.logResult(personName)
//     }
    
//     logResult(personName) {
//         console.log(`${personName} found`)
//     }
// }

// RIGHT
// class FindPerson {
//     constructor(name) {
//         this.name = name
//     }

//     check(personName) {
//         if(personName === this.name) logResult(personName)
//     }
// }

// function logResult(personName) {
//     console.log(`${personName} found`)
//     //or send notitication
// }

// const findPerson = new FindPerson('Arthur')
// findPerson.check('Ani')
// findPerson.check('Karen')
// findPerson.check('Arthur')

// -------------------------------------- Open/Closed Principle --------------------------------------
// WRONG
// function printInput(inputs) {
//     let output
//     inputs.forEach(input => {
//         switch (input.type) {
//             case 'input':
//                 output = `
//                     <label>${input.label}</label>
//                     <input type="text" class="form-control">
//                 `
//                 console.log(output)
//                 break
//             case 'textarea':
//                 output = `
//                     <label>${input.label}</label>
//                     <textarea class="form-control"></textarea>
//                 `
//                 console.log(output)
//                 break
//         }
//     })
// }

// const inputs = [
//     {
//         type: 'input',
//         label: 'Name'
//     },
//     {
//         type: 'textarea',
//         label: 'Description'
//     }
// ]

// RIGHT
// class InputTypeInput {
//     constructor(data) {
//         this.label = data.label
//     }

//     logInput() {
//         console.log(
//             `<label>${this.label}</label>
//             <input type="text" class="form-control">`
//         )
//     }
// }
// class TextareaTypeInput {
//     constructor(data) {
//         this.label = data.label
//     }

//     logInput() {
//         console.log(
//             `<label>${this.label}</label>
//             <textarea class="form-control"></textarea>`
//         )
//     }
// }
// function printInput(inputs) {
//     inputs.forEach(input => input.logInput())
// }

// const inputs = [
//     new InputTypeInput({label: 'Name'}),
//     new TextareaTypeInput({label: 'Description'})
// ]

// printInput(inputs)

// -------------------------------------- Liskov Substitution Principle --------------------------------------
// // WRONG
// class Sport {
//     win() {
//         console.log('Win')
//     }
//     lose() {
//         console.log('Lose')
//     }
//     draw() {
//         console.log('Draw')
//     }
// }

// class Football extends Sport { // Passing Liskov principle
//     ball() {
//         console.log('ball')
//     }
// }
// class Tennis extends Sport { // Not passing Liskov principle, as draw function works different for purent and child class
//     draw() {
//         throw new Error('Can\'t end with draw')
//     }
//     racket() {
//         console.log('racket')
//     }
// }

// function makeDraw(sport) {
//     sport.draw()
// }

// const football = new Football()
// const tennis = new Tennis()

// makeDraw(football)
// makeDraw(tennis)

// RIGHT

// class Sport {
//     win() {
//         console.log('Win')
//     }
//     lose() {
//         console.log('Lose')
//     }
// }

// class MustWinSport extends Sport {
  
// }

// class CanDrawSport extends Sport {
//     draw() {
//         console.log('Draw')
//     }
// }

// class Football extends CanDrawSport {
//     ball() {
//         console.log('ball')
//     }
// }
// class Tennis extends MustWinSport {
//     racket() {
//         console.log('racket')
//     }
// }

// function makeDraw(sport) {
//     sport.draw()
// }

// function makeWin(sport) {
//     sport.win()
// }

// const football = new Football()
// const tennis = new Tennis()

// makeDraw(football)
// makeDraw(tennis)
// makeWin(tennis)
// proble with OOP, what if there is a sport where wou cant lose `CantLoseClass` we will need another class with just win and draw functions
// in this case we will need Composition  instead of Inheritance, which will allow us to add functionality to clalss instead of inheriting 
// 3 hoganoc chingachung :)

// -------------------------------------- Interface Segregation Principle --------------------------------------
// WRONG
// class Bird {
//     constructor(name) {
//         this.name = name
//     }
//     fly() {
//         console.log('Fly')
//     }
//     swim() {
//         console.log('Swim')
//     }
//     walk() {
//         console.log('Walk')
//     }
// }

// class Puinguin extends Bird {
//     constructor(name) {
//         super(name)
//     }
//     fly() {
//         return null
//     }
// }

// class Gus extends Bird {
//     constructor(name) {
//         super(name)
//     }
// }

// class Chiken extends Bird {
//     constructor(name) {
//         super(name)
//     }
//     fly() {
//         return null
//     }
//     swim() {
//         return null
//     }
// }

// RIGHT
// class Bird {
//     constructor(name) {
//         this.name = name
//     }
// }

// const canFly = {
//     fly() {
//         console.log('Fly')
//     }
// }

// const canSwim = {
//     swim() {
//         console.log('Swim')
//     }
// }

// const canWalk = {
//     walk() {
//         console.log('Walk')
//     }
// }

// class Puinguin extends Bird {
//     constructor(name) {
//         super(name)
//     }
// }

// Object.assign(Puinguin.prototype, canWalk, canSwim)

// class Gus extends Bird {
//     constructor(name) {
//         super(name)
//     }
// }

// Object.assign(Gus.prototype, canWalk, canSwim, canFly)

// class Chiken extends Bird {
//     constructor(name) {
//         super(name)
//     }
// }

// Object.assign(Chiken.prototype, canWalk)

// const puinguin = new Puinguin('John')
// const gus = new Gus('Jane')
// const chiken = new Chiken('Jarry')

// // chiken.fly()
// gus.fly()
// // chiken.fly()

// // -------------------------------------- Dependency Inversion Principle --------------------------------------
// WRONG
// class Delivary {
//     // globbing
//     constructor(user){
//         this.globbing = new Globbing(user)
//     }
//     deliverToUSA(wight){
//         this.globbing.makeDelivary(wight*1000, 'USA')
//     }
//     deliverToRussia(wight){
//         this.globbing.makeDelivary(wight*1000, 'Russia')
//     }
//     // onex
//     // constructor(user){
//     //     this.onex = new Onex()
//     //     this.user = user
//     // }
//     // deliverToUSA(wight){
//     //     this.onex.makeDelivary(this.user, wight, 'USA')
//     // }
//     // deliverToRussia(wight){
//     //     this.onex.makeDelivary(this.user, wight, 'Russia')
//     // }
// }

// class Globbing {
//     constructor(user){
//         this.user = user
//     }
//     makeDelivary(wight, destination) {
//         console.log(`${this.user} delivered ${wight/1000}kg to ${destination} with Globbing`)
//     }
// }

// class Onex {
//     makeDelivary(user, wight, destination) {
//         console.log(`${user} delivered ${wight}kg to ${destination} with Onex`)
//     }
// }

// const delivary = new Delivary('John') 
// delivary.deliverToUSA(12)

//RIGHT
class Delivary {
    constructor(delivaryAgent){
        this.delivaryAgent = delivaryAgent
    }
    deliverToUSA(wight){
        this.delivaryAgent.deliver(wight, 'USA')
    }
    deliverToRussia(wight){
        this.delivaryAgent.deliver(wight, 'Russia')
    }
}

class GlobbingAgent {
    constructor(user) {
        this.globbing = new Globbing(user)
    }
    deliver(wight, destination) {
        this.globbing.makeDelivary(wight*1000, destination)
    }
}

class OnexAgent {
    constructor(user) {
        this.user = user
        this.onex = new Onex()
    }
    deliver(wight, destination) {
        this.onex.makeDelivary(this.user, wight, destination)
    }
}

class Globbing {
    constructor(user){
        this.user = user
    }
    makeDelivary(wight, destination) {
        console.log(`${this.user} delivered ${wight/1000}kg to ${destination} with Globbing`)
    }
}

class Onex {
    makeDelivary(user, wight, destination) {
        console.log(`${user} delivered ${wight}kg to ${destination} with Onex`)
    }
}

const delivary = new Delivary(new OnexAgent('John')) 
delivary.deliverToUSA(12)