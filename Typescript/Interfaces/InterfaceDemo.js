var NumberStack = /** @class */ (function () {
    function NumberStack() {
    }
    NumberStack.prototype.push = function (ele) {
        // own impl
    };
    return NumberStack;
}());
var StringStack = /** @class */ (function () {
    function StringStack() {
    }
    StringStack.prototype.push = function (ele) {
        // own impl
    };
    return StringStack;
}());
function add(a, b, c) {
    if (c != undefined && b != undefined)
        return a + b + c;
    else if (b != undefined)
        return a + b;
    else
        return a;
}
var r1 = add(12, 34, 56);
console.log(r1);
var r2 = add(12, 45);
console.log(r2);
var r3 = add(12);
console.log(r3);
