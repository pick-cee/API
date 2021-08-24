"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const report_entities_1 = require("../Report-Card/report.entities");
const school_entities_1 = require("../School/school.entities");
const student_entities_1 = require("../Student/student.entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
let Teacher = class Teacher {
};
__decorate([
    typeorm_3.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Teacher.prototype, "id", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "first_name", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "last_name", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "age", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "email", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "profile_pic", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "qualifications", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "address", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Teacher.prototype, "other_docs", void 0);
__decorate([
    typeorm_2.OneToMany(() => student_entities_1.Student, (student) => student.id),
    __metadata("design:type", student_entities_1.Student)
], Teacher.prototype, "student", void 0);
__decorate([
    typeorm_1.ManyToOne(() => school_entities_1.School, (school) => school.id),
    __metadata("design:type", school_entities_1.School)
], Teacher.prototype, "school", void 0);
__decorate([
    typeorm_1.ManyToOne(() => report_entities_1.Report, (report) => report.id),
    __metadata("design:type", report_entities_1.Report)
], Teacher.prototype, "report", void 0);
Teacher = __decorate([
    typeorm_3.Entity()
], Teacher);
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.entity.js.map