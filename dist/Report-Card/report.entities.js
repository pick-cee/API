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
exports.Report = void 0;
const student_entities_1 = require("../Student/student.entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let Report = class Report extends typeorm_2.BaseEntity {
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Report.prototype, "id", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], Report.prototype, "subject", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], Report.prototype, "grade", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], Report.prototype, "comment", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", Number)
], Report.prototype, "student_id", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", Number)
], Report.prototype, "teacher_id", void 0);
__decorate([
    typeorm_2.OneToOne(() => student_entities_1.Student, (student) => student.id),
    __metadata("design:type", student_entities_1.Student)
], Report.prototype, "student", void 0);
__decorate([
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], Report.prototype, "student1", void 0);
Report = __decorate([
    typeorm_2.Entity()
], Report);
exports.Report = Report;
//# sourceMappingURL=report.entities.js.map