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
const class_entity_1 = require("./class.entity");
const class_services_1 = require("./class.services");
let securityController = class securityController {
    constructor(classService) {
        this.classService = classService;
    }
    async addSecurity(classData) {
        return this.classService.createClass(classData);
    }
    getAll() {
        return this.classService.findAll();
    }
    async update(id, classData) {
        classData.id = String(id);
        console.log('Update #' + classData.id);
        return this.classService.update(classData);
    }
    async delete(id) {
        return this.classService.delete(id);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [class_entity_1.Class]),
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
    __metadata("design:paramtypes", [Object, class_entity_1.Class]),
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
    common_5.Controller('class'),
    __metadata("design:paramtypes", [class_services_1.classServices])
], securityController);
exports.securityController = securityController;
//# sourceMappingURL=class.controllers.js.map