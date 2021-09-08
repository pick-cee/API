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
exports.nurseController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const nurse_entities_1 = require("./nurse.entities");
const nurse_services_1 = require("./nurse.services");
const bcrypt = require("bcrypt");
const localAuthentication_guard_1 = require("../authentication/localAuthentication.guard");
const requestWithUser_interface_1 = require("../authentication/requestWithUser.interface");
const platform_express_1 = require("@nestjs/platform-express");
let nurseController = class nurseController {
    constructor(nurseService) {
        this.nurseService = nurseService;
    }
    async uploadedFile(nurseData, profile_pic) {
        const hashedPassword = await bcrypt.hash(nurseData.password, 10);
        const createdUser = await this.nurseService.createNurse(Object.assign(Object.assign({}, nurseData), { password: hashedPassword }));
        createdUser.password = undefined;
        return {
            nurseData,
            file: profile_pic.buffer.toString(),
            createdUser,
        };
    }
    async logIn(request) {
        const user = request.nurse;
        user.password = undefined;
        return user;
    }
    getSingleNurse(nurse_email) {
        return this.nurseService.getByEmail(nurse_email);
    }
    getAll() {
        return this.nurseService.findAll();
    }
    async update(id, nurseData) {
        nurseData.id = String(id);
        console.log('Update #' + nurseData.id);
        return this.nurseService.update(nurseData);
    }
    async delete(id) {
        return this.nurseService.delete(id);
    }
};
__decorate([
    common_1.Post('create'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('profile_pic')),
    __param(0, common_2.Body()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nurse_entities_1.Nurse, Object]),
    __metadata("design:returntype", Promise)
], nurseController.prototype, "uploadedFile", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(localAuthentication_guard_1.LocalAuthenticationGuard),
    common_1.Post('log-in'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], nurseController.prototype, "logIn", null);
__decorate([
    common_5.Get(':email'),
    __param(0, common_4.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], nurseController.prototype, "getSingleNurse", null);
__decorate([
    common_5.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], nurseController.prototype, "getAll", null);
__decorate([
    common_3.Put(':id/update'),
    __param(0, common_4.Param('id')),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, nurse_entities_1.Nurse]),
    __metadata("design:returntype", Promise)
], nurseController.prototype, "update", null);
__decorate([
    common_5.Delete(':id/delete'),
    __param(0, common_4.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], nurseController.prototype, "delete", null);
nurseController = __decorate([
    common_5.Controller('nurse'),
    __metadata("design:paramtypes", [nurse_services_1.nurseServices])
], nurseController);
exports.nurseController = nurseController;
//# sourceMappingURL=nurse.controller.js.map