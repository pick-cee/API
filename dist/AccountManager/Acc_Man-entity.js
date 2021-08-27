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
exports.AccManager = void 0;
const class_validator_1 = require("class-validator");
const school_entities_1 = require("../School/school.entities");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let AccManager = class AccManager extends typeorm_2.BaseEntity {
    find(_arg0) {
        throw new Error('Method not implemented.');
    }
    push(_newAccManager) {
        throw new Error('Method not implemented.');
    }
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], AccManager.prototype, "id", void 0);
__decorate([
    typeorm_2.Column({ unique: true }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], AccManager.prototype, "email", void 0);
__decorate([
    typeorm_2.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AccManager.prototype, "password", void 0);
__decorate([
    typeorm_2.ManyToOne(() => school_entities_1.School, (school) => school.id),
    typeorm_1.JoinColumn({ name: 'school_id' }),
    __metadata("design:type", school_entities_1.School)
], AccManager.prototype, "school", void 0);
AccManager = __decorate([
    typeorm_2.Entity()
], AccManager);
exports.AccManager = AccManager;
//# sourceMappingURL=Acc_Man-entity.js.map