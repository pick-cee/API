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
exports.Nurse = void 0;
const class_validator_1 = require("class-validator");
const school_entities_1 = require("../School/school.entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
let Nurse = class Nurse {
};
__decorate([
    typeorm_3.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Nurse.prototype, "id", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Nurse.prototype, "first_name", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Nurse.prototype, "last_name", void 0);
__decorate([
    typeorm_3.Column(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], Nurse.prototype, "email", void 0);
__decorate([
    typeorm_3.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Nurse.prototype, "password", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Nurse.prototype, "qualification", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Nurse.prototype, "photo", void 0);
__decorate([
    typeorm_3.Column(),
    __metadata("design:type", String)
], Nurse.prototype, "other_docs", void 0);
__decorate([
    typeorm_2.ManyToOne(() => school_entities_1.School, (school) => school.id),
    typeorm_1.JoinColumn({ name: 'school_id' }),
    __metadata("design:type", school_entities_1.School)
], Nurse.prototype, "school", void 0);
Nurse = __decorate([
    typeorm_3.Entity()
], Nurse);
exports.Nurse = Nurse;
//# sourceMappingURL=nurse.entities.js.map