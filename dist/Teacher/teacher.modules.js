"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
const common_1 = require("@nestjs/common");
const teacher_entity_1 = require("./teacher.entity");
const typeorm_1 = require("@nestjs/typeorm");
const teacher_services_1 = require("./teacher.services");
const teacher_controller_1 = require("./teacher.controller");
let TeacherModule = class TeacherModule {
};
TeacherModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([teacher_entity_1.Teacher])],
        providers: [teacher_services_1.teacherServices],
        controllers: [teacher_controller_1.teacherController],
    })
], TeacherModule);
exports.TeacherModule = TeacherModule;
//# sourceMappingURL=teacher.modules.js.map