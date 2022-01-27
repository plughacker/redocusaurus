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
const clsx_1 = __importDefault(require("clsx"));
const styled_components_1 = require("styled-components");
const redoc_1 = require("redoc");
require("../Redoc/styles.css");
require("./styles.css");
const ApiSchema = ({ id, example, pointer, ...rest }) => {
    const { isDarkTheme } = (0, useThemeContext_1.default)();
    const allData = (0, useGlobalData_1.useAllPluginInstancesData)('docusaurus-plugin-redoc-i18n');
    const { lightTheme, darkTheme, redocOptions } = (0, useGlobalData_1.usePluginData)('docusaurus-theme-redoc-i18n');
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const store = (0, react_1.useMemo)(() => {
        var _a;
        const { specUrl, content, type } = allData[id] ||
            ((_a = Object.values(allData).filter(({ type: dataType }) => dataType === 'object')) === null || _a === void 0 ? void 0 : _a[0]);
        if (type !== 'object' || !content) {
            console.warn({ allData }, '[Redocusaurus] ApiSchems needs a spec file to render');
            return null;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new redoc_1.AppStore(content, specUrl, {
            ...redocOptions,
            theme,
        });
    }, [id, allData, redocOptions, theme]);
    if (!store) {
        // @ts-expect-error fix return type
        return null;
    }
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: store.options.theme },
        react_1.default.createElement("div", { className: (0, clsx_1.default)([
                'redocusaurus',
                'redocusaurus-schema',
                example ? null : 'hide-example',
            ]) },
            react_1.default.createElement(redoc_1.SchemaDefinition, { parser: store.spec.parser, options: store.options, schemaRef: pointer, ...rest }))));
};
ApiSchema.defaultProps = {
    example: false,
};
exports.default = ApiSchema;
//# sourceMappingURL=ApiSchema.js.map