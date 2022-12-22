var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(id, name, salary) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "aaa"; }
        if (salary === void 0) { salary = 0; }
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
        console.log(this.empId);
        console.log(NeoEmployee.companyName);
        NeoEmployee.counter++;
    }
    NeoEmployee.prototype.showDetails = function () {
        return "id: ".concat(this.empId, ", name: ").concat(this.empName, ", salary: ").concat(this.empSalary);
    };
    NeoEmployee.counter = 0;
    return NeoEmployee;
}());
NeoEmployee.companyName = "Neosoft";
console.log(NeoEmployee.counter);
var emp1 = new NeoEmployee(45, "hari", 67000);
var emp2 = new NeoEmployee(12, "Rupa", 56000);
var emp3 = new NeoEmployee(67, "kiran", 56000);
console.log(NeoEmployee.counter);
