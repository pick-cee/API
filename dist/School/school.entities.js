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
const typeorm_1 = require("typeorm");
let School = class School {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], School.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], School.prototype, "login_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], School.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], School.prototype, "name_of_school", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], School.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], School.prototype, "social_media", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], School.prototype, "student_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], School.prototype, "teacher_id", void 0);
School = __decorate([
    typeorm_1.Entity()
], School);
exports.School = School;
//# sourceMappingURL=school.entities.js.map