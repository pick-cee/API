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
exports.Parent = void 0;
const typeorm_1 = require("typeorm");
const student_entities_1 = require("../Student/student.entities");
const typeorm_2 = require("typeorm");
let Parent = class Parent extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Parent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Parent.prototype, "full_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Parent.prototype, "age", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Parent.prototype, "profile_pic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Parent.prototype, "phone_number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Parent.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Parent.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Parent.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Parent.prototype, "student_id", void 0);
__decorate([
    typeorm_1.OneToMany(() => student_entities_1.Student, (student) => student.id),
    typeorm_2.JoinColumn({ name: 'student_id' }),
    __metadata("design:type", Array)
], Parent.prototype, "student", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Parent.prototype, "isActive", void 0);
Parent = __decorate([
    typeorm_1.Entity()
], Parent);
exports.Parent = Parent;
//# sourceMappingURL=parent.entity.js.map