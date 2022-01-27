"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @see https://github.com/facebook/docusaurus/issues/3236#issuecomment-788953743
 */
const react_1 = __importDefault(require("react"));
// @ts-ignore
const docusaurusContext_1 = require("@docusaurus/docusaurusContext");
const useDocusaurusContext_1 = __importDefault(require("@docusaurus/useDocusaurusContext"));
// eslint-disable-next-line import/no-extraneous-dependencies
const server_1 = require("react-dom/server");
const styled_components_1 = require("styled-components");
// eslint-disable-next-line import/no-extraneous-dependencies
const react_router_dom_1 = require("react-router-dom");
const ServerStyle = ({ from: children }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let style = null;
    const location = (0, react_router_dom_1.useLocation)();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const context = (0, useDocusaurusContext_1.default)();
    const sheet = new styled_components_1.ServerStyleSheet();
    try {
        (0, server_1.renderToString)(sheet.collectStyles(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: location },
            react_1.default.createElement(docusaurusContext_1.Context.Provider, null, children))));
        style = sheet.getStyleElement();
    }
    catch (error) {
        console.error(error);
    }
    finally {
        sheet.seal();
    }
    return style;
};
function ClientStyle() {
    return null;
}
exports.default = typeof window === 'undefined' ? ServerStyle : ClientStyle;
//# sourceMappingURL=index.js.map