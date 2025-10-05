"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/blog/blog.route");
const project_route_1 = require("../modules/project/project.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "/blog",
        route: blog_route_1.BlogRoutes
    },
    {
        path: "/project",
        route: project_route_1.ProjectRoutes
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
