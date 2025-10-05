"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const project_model_1 = require("./project.model");
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.Project.create(payload);
    return project;
});
const updateProject = (projectId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const ifProjectExist = yield project_model_1.Project.findById(projectId);
    if (!ifProjectExist) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Projects Not Found");
    }
    const newUpdatedProject = yield project_model_1.Project.findByIdAndUpdate(projectId, payload, { new: true, runValidators: true });
    return newUpdatedProject;
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.Project.find({});
    const totalProjects = yield project_model_1.Project.countDocuments();
    return {
        data: project,
        meta: {
            total: totalProjects
        }
    };
});
const getSingleProject = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.Project.findById(projectId);
    return {
        data: project
    };
});
const deleteProject = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield project_model_1.Project.findByIdAndDelete(projectId);
    return {
        data: null
    };
});
exports.ProjectService = {
    createProject,
    updateProject,
    getAllProject,
    getSingleProject,
    deleteProject
};
