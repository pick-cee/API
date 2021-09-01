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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const parent_entity_1 = require("./parent/parent.entity");
const parents_modules_1 = require("./parent/parents.modules");
const student_entities_1 = require("./Student/student.entities");
const Acc_Man_entity_1 = require("./AccountManager/Acc_Man-entity");
const class_entity_1 = require("./Class/class.entity");
const nurse_entities_1 = require("./Nurse/nurse.entities");
const report_entities_1 = require("./Report-Card/report.entities");
const school_entities_1 = require("./School/school.entities");
const security_entity_1 = require("./Security/security.entity");
const teacher_entity_1 = require("./Teacher/teacher.entity");
const security_modules_1 = require("./Security/security.modules");
const Acc_Man_Modules_1 = require("./AccountManager/Acc_Man-Modules");
const class_modules_1 = require("./Class/class.modules");
const nurse_modules_1 = require("./Nurse/nurse.modules");
const report_modules_1 = require("./Report-Card/report.modules");
const school_modules_1 = require("./School/school.modules");
const student_modules_1 = require("./Student/student.modules");
const teacher_modules_1 = require("./Teacher/teacher.modules");
const authentication_module_1 = require("./authentication/authentication.module");
const user_entity_1 = require("./User/user.entity");
const user_module_1 = require("./User/user.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'ROOT',
                database: 'havissm',
                entities: [
                    parent_entity_1.Parent,
                    report_entities_1.Report,
                    student_entities_1.Student,
                    class_entity_1.Class,
                    security_entity_1.Security,
                    nurse_entities_1.Nurse,
                    school_entities_1.School,
                    teacher_entity_1.Teacher,
                    Acc_Man_entity_1.AccManager,
                    user_entity_1.User,
                ],
                synchronize: true,
            }),
            security_modules_1.SecurityModule,
            Acc_Man_Modules_1.AccManModules,
            class_modules_1.ClassModule,
            nurse_modules_1.NurseModules,
            parents_modules_1.ParentsModules,
            report_modules_1.ReportModules,
            school_modules_1.SchoolModule,
            student_modules_1.StudentModule,
            teacher_modules_1.TeacherModule,
            authentication_module_1.AuthenticationModule,
            user_module_1.UserModules,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map