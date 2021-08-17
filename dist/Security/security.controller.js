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
exports.securityController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const security_entity_1 = require("./security.entity");
const security_services_1 = require("./security.services");
let securityController = class securityController {
    constructor(secService) {
        this.secService = secService;
    }
    async addSecurity(secData) {
        return this.secService.createSec(secData);
    }
    getAll() {
        return this.secService.findAll();
    }
    async update(id, secData) {
        secData.id = String(id);
        console.log('Update #' + secData.id);
        return this.secService.update(secData);
    }
    async delete(id) {
        return this.secService.delete(id);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [security_entity_1.Security]),
    __metadata("design:returntype", Promise)
], securityController.prototype, "addSecurity", null);
__decorate([
    common_5.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], securityController.prototype, "getAll", null);
__decorate([
    common_3.Put(':id/update'),
    __param(0, common_4.Param('id')),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, security_entity_1.Security]),
    __metadata("design:returntype", Promise)
], securityController.prototype, "update", null);
__decorate([
    common_5.Delete(':id/delete'),
    __param(0, common_4.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], securityController.prototype, "delete", null);
securityController = __decorate([
    common_5.Controller('sec'),
    __metadata("design:paramtypes", [security_services_1.securityServices])
], securityController);
exports.securityController = securityController;
//# sourceMappingURL=security.controller.js.map