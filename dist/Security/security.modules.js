"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const security_controller_1 = require("./security.controller");
const security_entity_1 = require("./security.entity");
const security_services_1 = require("./security.services");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([security_entity_1.Security])],
        providers: [security_services_1.securityServices],
        controllers: [security_controller_1.securityController],
        exports: [security_services_1.securityServices],
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.modules.js.map