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
let AccManController = class AccManController {
    constructor(accManService) {
        this.accManService = accManService;
    }
    async addAccMan(accManData) {
        return this.accManService.createaccMan(accManData);
    }
    ggetAll() {
        return this.accManService.findAll();
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
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Acc_Man_entity_1.AccManager]),
    __metadata("design:returntype", Promise)
], AccManController.prototype, "addAccMan", null);
__decorate([
    common_5.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccManController.prototype, "ggetAll", null);
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