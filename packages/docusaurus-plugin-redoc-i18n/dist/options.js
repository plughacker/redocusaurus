"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginOptionSchema = exports.DEFAULT_OPTIONS = void 0;
const Joi = __importStar(require("joi"));
exports.DEFAULT_OPTIONS = {
    layout: {},
    debug: false,
    routePath: '/api/',
    apiDocComponent: '@theme/ApiDoc',
};
exports.PluginOptionSchema = Joi.object({
    id: Joi.string(),
    spec: Joi.string(),
    specUrl: Joi.string().uri({ allowRelative: true }),
    layout: Joi.any().default(exports.DEFAULT_OPTIONS.layout),
    debug: Joi.boolean().default(exports.DEFAULT_OPTIONS.debug),
    routePath: Joi.string().default(exports.DEFAULT_OPTIONS.routePath),
    apiDocComponent: Joi.string().default(exports.DEFAULT_OPTIONS.apiDocComponent),
});
//# sourceMappingURL=options.js.map