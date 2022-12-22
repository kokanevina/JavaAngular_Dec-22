var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//multiple inh not allowed
var Employee = /** @class */ (function () {
    function Employee() {
    }
    // add constr,
    // add some methods
    Employee.prototype.showDetails = function () {
        return "id: ".concat(this.empId, ", name: ").concat(this.empName, ", salary: ").concat(this.empSalary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.test = function () {
        console.log(this.empId); // property
        this.showDetails(); // method call
    };
    Manager.prototype.showDetails = function () {
        return _super.prototype.showDetails.call(this) + "branch: ".concat(this.brachName, ", extra pay: ").concat(this.extraPay);
    };
    return Manager;
}(Employee));
var manager1 = new Manager();
manager1.empId = 444;
manager1.empName = "Vina";
manager1.empSalary = 96000;
manager1.brachName = "HR";
manager1.extraPay = 20000;
console.log(manager1.showDetails());
console.log(manager1.showDetails());
var emp;
emp = new Employee();
emp.empId = 11;
emp.empName = "hari", emp.empSalary = 56000;
console.log(emp.showDetails()); // super class method
emp = new Manager(); // upcasting
emp.empId = 333;
emp.empName = "Priya", emp.empSalary = 89000;
console.log(emp.showDetails()); // overriding method
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.demo = function () {
        var emp = new Employee();
        // empId : protected: accessible only in subclasses
        emp.empId = 234;
    };
    return Animal;
}());
