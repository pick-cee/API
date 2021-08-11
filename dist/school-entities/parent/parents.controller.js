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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const parents_service_1 = require("./parents.service");
let ParentsController = class ParentsController {
    constructor(parentsService) {
        this.parentsService = parentsService;
    }
    addParents(parent_id, parent_name, parent_age, parent_pic, parent_num, parent_email, parent_address, parent_gender) {
        const genParent = this.parentsService.addParents(parent_id, parent_name, parent_age, parent_pic, parent_num, parent_email, parent_address, parent_gender);
        return { par: genParent };
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_2.Body('id')),
    __param(1, common_2.Body('full_name')),
    __param(2, common_2.Body('age')),
    __param(3, common_2.Body('profile_pic')),
    __param(4, common_2.Body('phone_number')),
    __param(5, common_2.Body('email')),
    __param(6, common_2.Body('address')),
    __param(7, common_2.Body('gender')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, String, Number, String, String, String]),
    __metadata("design:returntype", void 0)
], ParentsController.prototype, "addParents", null);
ParentsController = __decorate([
    common_3.Controller('parent'),
    __metadata("design:paramtypes", [typeof (_a = typeof parents_service_1.parentService !== "undefined" && parents_service_1.parentService) === "function" ? _a : Object])
], ParentsController);
exports.ParentsController = ParentsController;
//# sourceMappingURL=parents.controller.js.map