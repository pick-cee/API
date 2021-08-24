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
exports.Class = void 0;
const student_entities_1 = require("../Student/student.entities");
const typeorm_1 = require("typeorm");
const JoinColumn_1 = require("typeorm/decorator/relations/JoinColumn");
let Class = class Class extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Class.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Class.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => student_entities_1.Student, (student) => student.id),
    JoinColumn_1.JoinColumn({ name: 'student_id' }),
    __metadata("design:type", student_entities_1.Student)
], Class.prototype, "student", void 0);
Class = __decorate([
    typeorm_1.Entity()
], Class);
exports.Class = Class;
//# sourceMappingURL=class.entity.js.map