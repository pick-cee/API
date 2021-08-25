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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const parent_entity_1 = require("../parent/parent.entity");
const class_entity_1 = require("../Class/class.entity");
const typeorm_2 = require("typeorm");
const teacher_entity_1 = require("../Teacher/teacher.entity");
const school_entities_1 = require("../School/school.entities");
const typeorm_3 = require("typeorm");
const report_entities_1 = require("../Report-Card/report.entities");
const class_validator_1 = require("class-validator");
let Student = class Student extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Student.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "middle_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "age", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "date_of_birth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "health_issues", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "birth_certificate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "profile_pic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Student.prototype, "address", void 0);
__decorate([
    typeorm_1.ManyToOne(() => parent_entity_1.Parent, (parent) => parent.id),
    typeorm_2.JoinColumn({ name: 'parent_id' }),
    __metadata("design:type", parent_entity_1.Parent)
], Student.prototype, "parent", void 0);
__decorate([
    typeorm_1.ManyToOne(() => class_entity_1.Class, (class1) => class1.id),
    typeorm_2.JoinColumn({ name: 'class_id' }),
    __metadata("design:type", class_entity_1.Class)
], Student.prototype, "class", void 0);
__decorate([
    typeorm_1.ManyToOne(() => teacher_entity_1.Teacher, (teacher) => teacher.id),
    typeorm_2.JoinColumn({ name: 'teacher_id' }),
    __metadata("design:type", teacher_entity_1.Teacher)
], Student.prototype, "teacher", void 0);
__decorate([
    typeorm_1.ManyToOne(() => school_entities_1.School, (school) => school.id),
    typeorm_2.JoinColumn({ name: 'school_id' }),
    __metadata("design:type", school_entities_1.School)
], Student.prototype, "school", void 0);
__decorate([
    typeorm_3.OneToOne(() => report_entities_1.Report, (report) => report.id),
    typeorm_2.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_entities_1.Report)
], Student.prototype, "report", void 0);
Student = __decorate([
    typeorm_1.Entity()
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entities.js.map