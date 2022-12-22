"use strict";
exports.__esModule = true;
exports.Circle = exports.Trainer = void 0;
var Trainer = /** @class */ (function () {
    function Trainer(trainerId, subject, experience) {
        if (trainerId === void 0) { trainerId = 44; }
        if (subject === void 0) { subject = "java"; }
        if (experience === void 0) { experience = 0; }
        this.trainerId = trainerId;
        this.subject = subject;
        this.experience = experience;
    }
    Trainer.prototype.getDetails = function () {
        return "Id: ".concat(this.trainerId, ", Subject : ").concat(this.subject, ", Experince: ").concat(this.experience, " years");
    };
    return Trainer;
}());
exports.Trainer = Trainer;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    return Circle;
}());
exports.Circle = Circle;
var pie = 3.142;
exports["default"] = pie;
// Module Name : Utility
