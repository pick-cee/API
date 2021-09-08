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
exports.AccManController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const Acc_Man_entity_1 = require("./Acc_Man-entity");
const Acc_Man_Services_1 = require("./Acc_Man-Services");
const bcrypt = require("bcrypt");
const platform_express_1 = require("@nestjs/platform-express");
const localAuthentication_guard_1 = require("../authentication/localAuthentication.guard");
const requestWithUser_interface_1 = require("../authentication/requestWithUser.interface");
let AccManController = class AccManController {
    constructor(accManService) {
        this.accManService = accManService;
    }
    async uploadedFile(accManData, profile_pic) {
        const hashedPassword = await bcrypt.hash(accManData.password, 10);
        const createdUser = await this.accManService.createaccMan(Object.assign(Object.assign({}, accManData), { password: hashedPassword }));
        createdUser.password = undefined;
        return {
            accManData,
            file: profile_pic.buffer.toString(),
            createdUser,
        };
    }
    getSingleAccMan(accMan_email) {
        return this.accManService.getByEmail(accMan_email);
    }
    ggetAll() {
        return this.accManService.findAll();
    }
    async logIn(request) {
        const user = request.accMan;
        user.password = undefined;
        return user;
    }
    async update(id, accManData) {
        accManData.id = String(id);
        console.log('Update #' + accManData.id);
        return this.accManService.update(accManData);
    }
    removeParent(accMan_id) {
        this.accManService.delete(accMan_id);
        return null;
    }
};
__decorate([
    common_1.Post('create'),
    common_3.UseInterceptors(platform_express_1.FileInterceptor('profile_pic')),
    __param(0, common_2.Body()),
    __param(1, common_3.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acc_Man_entity_1.AccManager, Object]),
    __metadata("design:returntype", Promise)
], AccManController.prototype, "uploadedFile", null);
__decorate([
    common_5.Get(':email'),
    __param(0, common_4.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccManController.prototype, "getSingleAccMan", null);
__decorate([
    common_5.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccManController.prototype, "ggetAll", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(localAuthentication_guard_1.LocalAuthenticationGuard),
    common_1.Post('log-in'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccManController.prototype, "logIn", null);
__decorate([
    common_3.Put(':id/update'),
    __param(0, common_4.Param('id')),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Acc_Man_entity_1.AccManager]),
    __metadata("design:returntype", Promise)
], AccManController.prototype, "update", null);
__decorate([
    common_5.Delete(':id'),
    __param(0, common_4.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccManController.prototype, "removeParent", null);
AccManController = __decorate([
    common_5.Controller('accMan'),
    __metadata("design:paramtypes", [Acc_Man_Services_1.AccManService])
], AccManController);
exports.AccManController = AccManController;
//# sourceMappingURL=Acc_Man-Controller.js.map