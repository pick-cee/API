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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const class_entity_1 = require("./class.entity");
let classServices = class classServices {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createClass(class1) {
        return await this.usersRepository.save(class1);
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async update(class1) {
        return await this.usersRepository.update(class1.id, class1);
    }
    async delete(id) {
        return await this.usersRepository.delete(id);
    }
};
classServices = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(class_entity_1.Class)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], classServices);
exports.classServices = classServices;
//# sourceMappingURL=class.services.js.map