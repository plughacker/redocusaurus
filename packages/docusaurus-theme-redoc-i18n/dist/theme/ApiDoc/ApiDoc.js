"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("@theme/Layout"));
const Redoc_1 = __importDefault(require("@theme/Redoc"));
function ApiDoc({ layoutProps, spec: propSpec }) {
    const { title = 'API Docs', description = 'Open API Reference Docs for the API', } = layoutProps || {};
    const spec = propSpec.type === 'object' ? propSpec.content : undefined;
    const specUrl = propSpec.type === 'url' ? propSpec.content : undefined;
    return (react_1.default.createElement(Layout_1.default, { ...layoutProps, title: title, description: description },
        react_1.default.createElement(Redoc_1.default, { spec: spec, specUrl: specUrl || propSpec.specUrl })));
}
exports.default = ApiDoc;
//# sourceMappingURL=ApiDoc.js.map