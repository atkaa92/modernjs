// function alo(params) {
//     this.p = params
//     this.login = function() {
//         // console.log('login');
//     }
// }

// alo.prototype.logout = function () {
//     // console.log('logout');
// }

// class AAA {
//     constructor(a) {
//         this.a = a
//     }
//     loga() {
//         // console.log(this.a);
//     }
// }
// let a = new alo(12)
// a.login()
// a.logout()
// console.log(a);

// let b = new AAA('sss')
// b.loga()

// let arr = [1, 2, this]
// let obj = { name: 'alo'}

// console.log(Object.prototype === Function.__proto__);
// console.log(b.__proto__ === AAA.prototype);
// console.log(AAA.prototype);
// console.log(AAA.constructor);
// console.log(alo.prototype);
// console.log(alo.__proto__);

// let myObj = {}
// console.log(myObj.constructor);
// console.log(myObj.constructor.prototype);
// console.log();
// console.log(myObj.__proto__);
// console.log(Function.prototype);

// let c = function(){
//     console.log('alo');
// }

// let d = Object.getPrototypeOf(Function)
// console.log(d);

// let f = Object.getOwnPropertyNames(Function.prototype)
// console.log(arr);

// var alo = 'one';
// (() => {
//     console.log(alo);
//     // var alo = 'two'
// })();

// function one() {
//     var alo = 'alo'
//     two()
// }
// function two() {
//     console.log(alo);
// }

// one()
// var i = 10;
// for (var i = 0; i < 4; i++) {}
// console.log(i);

// let a = 7
// var b = 8
// let c = 7

// {
//     let c = 8
// }
// const one = 'one'
//     console.log(one);
//     console.log(this.one);
// function alo() {
// }
// alo()

// class Alo {
//     #privateAlo = 'privateAlo'
//     constructor(alo) {
//         this.alo = alo
//     }
//     sayAlo() {
//         console.log(this.alo);
//         this.#sayPrivateAlo()
//     }
//     #sayPrivateAlo() {
//         console.log(this.#privateAlo);
//     }
// }

// const alo = new Alo('Name')
// alo.sayAlo()
// console.log(alo.privateAlo)

// let a = [1, 2]

// function alo(arr) {
//     console.log(arr)
// }

// alo(a)

// console.log(a)
// const a = 1
// const b = 2
// const c = 3

// console.log(a.toFixed(100)+b.toFixed(10) * 100000000000)

// fn1(fn2(fn3(50)));

// compose(fn1, fn2, fn3)(50) //Right to lext
// pipe(fn3, fn2, fn1)(50)//left to right

// const compose = (f, g) => (a) => f(g(a))
// const pipe = (f, g) => (a) => g(f(a))
// const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
// console.log(multiplyBy3AndAbsolute(-50))

// const compose1 = function(f, g) {
//     return function (data) {
//         return f(g(data))
//     }
// }

// const multiplyBy3AndAbsolute2 = compose1((num) => num*3, Math.abs)
// console.log(multiplyBy3AndAbsolute2(-100))

let alo = 1;
function asa(n) {
  console.log(b);
  var b = 7;
  console.log(n);
}
asa(alo);
