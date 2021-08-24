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
exports.Security = void 0;
const school_entities_1 = require("../School/school.entities");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let Security = class Security {
    push(newSecurity) {
        throw new Error('Method not implemented.');
    }
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Security.prototype, "id", void 0);
__decorate([
    typeorm_2.Column(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], Security.prototype, "email", void 0);
__decorate([
    typeorm_2.Column(),
    __metadata("design:type", String)
], Security.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToOne(() => school_entities_1.School, (school) => school.id),
    __metadata("design:type", school_entities_1.School)
], Security.prototype, "school", void 0);
Security = __decorate([
    typeorm_2.Entity()
], Security);
exports.Security = Security;
//# sourceMappingURL=security.entity.js.map