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
exports.School = void 0;
const Acc_Man_entity_1 = require("../AccountManager/Acc_Man-entity");
const nurse_entities_1 = require("../Nurse/nurse.entities");
const security_entity_1 = require("../Security/security.entity");
const student_entities_1 = require("../Student/student.entities");
const teacher_entity_1 = require("../Teacher/teacher.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const typeorm_4 = require("typeorm");
let School = class School {
};
__decorate([
    typeorm_4.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], School.prototype, "id", void 0);
__decorate([
    typeorm_4.Column(),
    __metadata("design:type", String)
], School.prototype, "login_name", void 0);
__decorate([
    typeorm_4.Column(),
    __metadata("design:type", String)
], School.prototype, "password", void 0);
__decorate([
    typeorm_4.Column(),
    __metadata("design:type", String)
], School.prototype, "name_of_school", void 0);
__decorate([
    typeorm_4.Column(),
    __metadata("design:type", String)
], School.prototype, "logo", void 0);
__decorate([
    typeorm_4.Column(),
    __metadata("design:type", String)
], School.prototype, "social_media", void 0);
__decorate([
    typeorm_3.OneToMany(() => student_entities_1.Student, (student) => student.id),
    typeorm_1.JoinColumn({ name: 'student_id' }),
    __metadata("design:type", student_entities_1.Student)
], School.prototype, "student", void 0);
__decorate([
    typeorm_3.OneToMany(() => teacher_entity_1.Teacher, (teacher) => teacher.id),
    typeorm_1.JoinColumn({ name: 'teacher_id' }),
    __metadata("design:type", teacher_entity_1.Teacher)
], School.prototype, "teacher", void 0);
__decorate([
    typeorm_3.OneToMany(() => Acc_Man_entity_1.AccManager, (accMan) => accMan.id),
    typeorm_1.JoinColumn({ name: 'accMan_id' }),
    __metadata("design:type", Acc_Man_entity_1.AccManager)
], School.prototype, "accMan", void 0);
__decorate([
    typeorm_3.OneToMany(() => nurse_entities_1.Nurse, (nurse) => nurse.id),
    typeorm_1.JoinColumn({ name: 'nurse_id' }),
    __metadata("design:type", nurse_entities_1.Nurse)
], School.prototype, "nurse", void 0);
__decorate([
    typeorm_2.OneToOne(() => security_entity_1.Security, (security) => security.id),
    typeorm_1.JoinColumn({ name: 'security_id' }),
    __metadata("design:type", security_entity_1.Security)
], School.prototype, "security", void 0);
School = __decorate([
    typeorm_4.Entity()
], School);
exports.School = School;
//# sourceMappingURL=school.entities.js.map