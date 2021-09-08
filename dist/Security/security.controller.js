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
const bcrypt = require("bcrypt");
const localAuthentication_guard_1 = require("../authentication/localAuthentication.guard");
const requestWithUser_interface_1 = require("../authentication/requestWithUser.interface");
let securityController = class securityController {
    constructor(secService) {
        this.secService = secService;
    }
    async addParent(secData) {
        const hashedPassword = await bcrypt.hash(secData.password, 10);
        try {
            const createdUser = await this.secService.createSec(Object.assign(Object.assign({}, secData), { password: hashedPassword }));
            createdUser.password = undefined;
            return createdUser;
        }
        catch (error) {
            return error;
        }
    }
    getSingleSecurity(security_email) {
        return this.secService.getByEmail(security_email);
    }
    getAll() {
        return this.secService.findAll();
    }
    async logIn(request) {
        const user = request.security;
        user.password = undefined;
        return user;
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
], securityController.prototype, "addParent", null);
__decorate([
    common_5.Get(':email'),
    __param(0, common_4.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], securityController.prototype, "getSingleSecurity", null);
__decorate([
    common_5.Get('get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], securityController.prototype, "getAll", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(localAuthentication_guard_1.LocalAuthenticationGuard),
    common_1.Post('log-in'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], securityController.prototype, "logIn", null);
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
    common_5.Controller('security'),
    __metadata("design:paramtypes", [security_services_1.securityServices])
], securityController);
exports.securityController = securityController;
//# sourceMappingURL=security.controller.js.map