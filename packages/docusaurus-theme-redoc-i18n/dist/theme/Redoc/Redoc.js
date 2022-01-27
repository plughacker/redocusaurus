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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const useGlobalData_1 = require("@docusaurus/useGlobalData");
const useThemeContext_1 = __importDefault(require("@theme/hooks/useThemeContext"));
const redoc_1 = require("redoc");
require("./styles.css");
/*!
 * Redocusaurus
 * https://rohit-gohri.github.io/redocusaurus/
 * (c) 2021 Rohit Gohri
 * Released under the MIT License
 */
function Redoc(props) {
    const { isDarkTheme } = (0, useThemeContext_1.default)();
    const { lightTheme, darkTheme, redocOptions } = (0, useGlobalData_1.usePluginData)('docusaurus-theme-redoc-i18n');
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { spec, specUrl } = props;
    const store = (0, react_1.useMemo)(() => {
        if (!spec)
            return null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new redoc_1.AppStore(spec, specUrl, {
            ...redocOptions,
            theme,
        });
    }, [spec, specUrl, redocOptions, theme]);
    return (react_1.default.createElement("div", { className: "redocusaurus" }, store ? (react_1.default.createElement(redoc_1.Redoc, { store: store })) : (react_1.default.createElement(redoc_1.RedocStandalone, { spec: spec, specUrl: specUrl, options: {
            ...redocOptions,
            theme,
        } }))));
}
exports.default = Redoc;
//# sourceMappingURL=Redoc.js.map