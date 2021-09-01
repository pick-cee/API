"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModules = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const report_controller_1 = require("./report.controller");
const report_entities_1 = require("./report.entities");
const report_services_1 = require("./report.services");
let ReportModules = class ReportModules {
};
ReportModules = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([report_entities_1.Report])],
        providers: [report_services_1.reportService],
        controllers: [report_controller_1.reportController],
    })
], ReportModules);
exports.ReportModules = ReportModules;
//# sourceMappingURL=report.modules.js.map