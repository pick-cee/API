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
exports.parentService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const parent_entity_1 = require("./parent.entity");
let parentService = class parentService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createPar(parent) {
        return await this.usersRepository.save(parent);
    }
    async getByEmail(email) {
        const user = await this.usersRepository.findOne({ email });
        if (user) {
            return user;
        }
        throw new common_2.HttpException('User with this email does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async update(parent) {
        return await this.usersRepository.update(parent.id, parent);
    }
    async delete(parent_id) {
        return this.usersRepository.delete(parent_id);
    }
};
parentService = __decorate([
    common_3.Injectable(),
    __param(0, typeorm_1.InjectRepository(parent_entity_1.Parent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], parentService);
exports.parentService = parentService;
//# sourceMappingURL=parents.service.js.map