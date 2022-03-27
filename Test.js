// ------------------------ 1 ------------------------
alo()
function alo() {
    console.log('one');
}
var alo = function () {
    console.log('two');
}
function alo() {
    console.log('three');
}
// What will be output in console?

// ------------------------ 2 ------------------------
alo()
function alo() {
    console.log('one');
}
var alo = function () {
    console.log('two');
}
// What will be output in console?

// ------------------------ 3 ------------------------
var alo = 'one';
(() => {
    console.log(alo);
    var alo = 'two'
})();
// What will be output in console?

// ------------------------ 4 ------------------------
function one() {
    var alo = 'alo'
    two()
}
function two() {
    console.log(alo);
}

one()
// What will be output in console?

// ------------------------ 5 ------------------------
var i = 10;
for (let i = 0; i < 4; i++) {}
console.log(i);
// What will be output in console?

// ------------------------ 6 ------------------------
var i = 10;
for (var i = 0; i < 4; i++) {}
console.log(i);
// What will be output in console?

// ------------------------ 7 ------------------------
let i = 10;
for (let i = 0; i < 4; i++) {}
console.log(i);
// What will be output in console?

// ------------------------ 8 ------------------------
const one = 'one'
function alo() {
    console.log(one);
    console.log(this.one);
}
alo()
// What will be output in console?

// ------------------------ 8 ------------------------
const alo = {
    sayHI() {
        console.log('hi', this) 
        var seyHiAgain = function() {
            console.log('hiAgain', this)
        }
        var seyHiOneMore = () => {
            console.log('hiOneMore', this)
        }
        seyHiAgain()
        seyHiOneMore()
    }
}