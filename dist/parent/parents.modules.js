"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentsModules = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parents_service_1 = require("./parents.service");
const parents_controller_1 = require("./parents.controller");
const parent_entity_1 = require("./parent.entity");
let ParentsModules = class ParentsModules {
};
ParentsModules = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([parent_entity_1.Parent])],
        providers: [parents_service_1.parentService],
        controllers: [parents_controller_1.ParentsController],
    })
], ParentsModules);
exports.ParentsModules = ParentsModules;
//# sourceMappingURL=parents.modules.js.map