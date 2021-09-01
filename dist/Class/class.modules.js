"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_controllers_1 = require("./class.controllers");
const class_entity_1 = require("./class.entity");
const class_services_1 = require("./class.services");
let ClassModule = class ClassModule {
};
ClassModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([class_entity_1.Class])],
        providers: [class_services_1.classServices],
        controllers: [class_controllers_1.classController],
    })
], ClassModule);
exports.ClassModule = ClassModule;
//# sourceMappingURL=class.modules.js.map