"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.updateUserZodSchema = zod_1.default.object({
    title: zod_1.default.string().max(100).optional(),
    bio: zod_1.default.string().max(500).optional(),
    github: zod_1.default.string().url().optional(),
    linkedin: zod_1.default.string().url().optional(),
    skills: zod_1.default.array(zod_1.default.string()).optional(),
});
