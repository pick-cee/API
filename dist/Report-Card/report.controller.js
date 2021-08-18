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
exports.reportController = void 0;
const report_services_1 = require("./report.services");
const common_1 = require("@nestjs/common");
const report_entities_1 = require("./report.entities");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const common_6 = require("@nestjs/common");
const common_7 = require("@nestjs/common");
let reportController = class reportController {
    constructor(reportServices) {
        this.reportServices = reportServices;
    }
    async createReport(report) {
        return await this.reportServices.createReport(report);
    }
    getAll() {
        return this.reportServices.findAll();
    }
    async update(id, reportData) {
        reportData.id = String(id);
        console.log('Update #' + reportData.id);
        return this.reportServices.update(reportData);
    }
    async delete(id) {
        return this.reportServices.delete(id);
    }
};
__decorate([
    common_2.Post('crete'),
    __param(0, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_entities_1.Report]),
    __metadata("design:returntype", Promise)
], reportController.prototype, "createReport", null);
__decorate([
    common_4.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], reportController.prototype, "getAll", null);
__decorate([
    common_5.Put(':id/update'),
    __param(0, common_6.Param('id')),
    __param(1, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, report_entities_1.Report]),
    __metadata("design:returntype", Promise)
], reportController.prototype, "update", null);
__decorate([
    common_7.Delete('id/delete'),
    __param(0, common_6.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], reportController.prototype, "delete", null);
reportController = __decorate([
    common_1.Controller('report'),
    __metadata("design:paramtypes", [report_services_1.reportService])
], reportController);
exports.reportController = reportController;
//# sourceMappingURL=report.controller.js.map