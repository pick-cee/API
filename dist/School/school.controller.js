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
exports.schoolController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const localAuthentication_guard_1 = require("../authentication/localAuthentication.guard");
const requestWithUser_interface_1 = require("../authentication/requestWithUser.interface");
const school_entities_1 = require("./school.entities");
const school_services_1 = require("./school.services");
const bcrypt = require("bcrypt");
let schoolController = class schoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    async uploadedFile(schoolData, profile_pic) {
        const hashedPassword = await bcrypt.hash(schoolData.password, 10);
        const createdUser = await this.schoolService.createSchool(Object.assign(Object.assign({}, schoolData), { password: hashedPassword }));
        createdUser.password = undefined;
        return {
            schoolData,
            file: profile_pic.buffer.toString(),
            createdUser,
        };
    }
    getAll() {
        return this.schoolService.findAll();
    }
    async logIn(request) {
        const user = request.school;
        user.password = undefined;
        return user;
    }
    async update(id, schoolData) {
        schoolData.id = String(id);
        console.log('Update #' + schoolData.id);
        return this.schoolService.update(schoolData);
    }
    async delete(id) {
        return this.schoolService.delete(id);
    }
};
__decorate([
    common_1.Post('create'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('profile_pic')),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [school_entities_1.School, Object]),
    __metadata("design:returntype", Promise)
], schoolController.prototype, "uploadedFile", null);
__decorate([
    common_4.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], schoolController.prototype, "getAll", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(localAuthentication_guard_1.LocalAuthenticationGuard),
    common_1.Post('log-in'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], schoolController.prototype, "logIn", null);
__decorate([
    common_2.Put(':id/update'),
    __param(0, common_3.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, school_entities_1.School]),
    __metadata("design:returntype", Promise)
], schoolController.prototype, "update", null);
__decorate([
    common_4.Delete(':id/delete'),
    __param(0, common_3.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], schoolController.prototype, "delete", null);
schoolController = __decorate([
    common_4.Controller('school'),
    __metadata("design:paramtypes", [school_services_1.schoolServices])
], schoolController);
exports.schoolController = schoolController;
//# sourceMappingURL=school.controller.js.map