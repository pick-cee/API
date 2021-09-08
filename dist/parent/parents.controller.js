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
exports.ParentsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const parent_entity_1 = require("./parent.entity");
const parents_service_1 = require("./parents.service");
const bcrypt = require("bcrypt");
const localAuthentication_guard_1 = require("../authentication/localAuthentication.guard");
const requestWithUser_interface_1 = require("../authentication/requestWithUser.interface");
const platform_express_1 = require("@nestjs/platform-express");
let ParentsController = class ParentsController {
    constructor(parentsService) {
        this.parentsService = parentsService;
    }
    async uploadedFile(parentData, profile_pic) {
        const hashedPassword = await bcrypt.hash(parentData.password, 10);
        const createdUser = await this.parentsService.createPar(Object.assign(Object.assign({}, parentData), { password: hashedPassword }));
        createdUser.password = undefined;
        return {
            parentData,
            file: profile_pic.buffer.toString(),
            createdUser,
        };
    }
    getSingle(parent_email) {
        return this.parentsService.getByEmail(parent_email);
    }
    getAll() {
        return this.parentsService.findAll();
    }
    async logIn(request) {
        const user = request.parent;
        user.password = undefined;
        return user;
    }
    async update(id, parData) {
        parData.id = String(id);
        console.log('Update #' + parData.id);
        return this.parentsService.update(parData);
    }
    removeParent(parent_id) {
        this.parentsService.delete(parent_id);
        return null;
    }
};
__decorate([
    common_1.Post('create'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('profile_pic')),
    __param(0, common_2.Body()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [parent_entity_1.Parent, Object]),
    __metadata("design:returntype", Promise)
], ParentsController.prototype, "uploadedFile", null);
__decorate([
    common_5.Get(':email'),
    __param(0, common_4.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "getSingle", null);
__decorate([
    common_5.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParentsController.prototype, "getAll", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(localAuthentication_guard_1.LocalAuthenticationGuard),
    common_1.Post('log-in'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParentsController.prototype, "logIn", null);
__decorate([
    common_3.Put(':id/update'),
    __param(0, common_4.Param('id')),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, parent_entity_1.Parent]),
    __metadata("design:returntype", Promise)
], ParentsController.prototype, "update", null);
__decorate([
    common_5.Delete(':id'),
    __param(0, common_4.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "removeParent", null);
ParentsController = __decorate([
    common_5.Controller('parent'),
    __metadata("design:paramtypes", [parents_service_1.parentService])
], ParentsController);
exports.ParentsController = ParentsController;
//# sourceMappingURL=parents.controller.js.map