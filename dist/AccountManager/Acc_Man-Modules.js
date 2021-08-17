"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccManModules = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Acc_Man_Services_1 = require("./Acc_Man-Services");
const Acc_Man_Controller_1 = require("./Acc_Man-Controller");
const Acc_Man_entity_1 = require("./Acc_Man-entity");
let AccManModules = class AccManModules {
};
AccManModules = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([Acc_Man_entity_1.AccManager])],
        providers: [Acc_Man_Services_1.AccManService],
        controllers: [Acc_Man_Controller_1.AccManController],
    })
], AccManModules);
exports.AccManModules = AccManModules;
//# sourceMappingURL=Acc_Man-Modules.js.map