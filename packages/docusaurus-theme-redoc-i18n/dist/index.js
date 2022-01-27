"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwizzleComponentList = void 0;
const path_1 = __importDefault(require("path"));
const node_polyfill_webpack_plugin_1 = __importDefault(require("node-polyfill-webpack-plugin"));
const redocData_1 = require("./redocData");
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
const webpack_1 = __importDefault(require("webpack"));
function redocTheme(context, options) {
    return {
        name: 'docusaurus-theme-redoc-i18n',
        configureWebpack() {
            return {
                resolve: {
                    fallback: {
                        fs: false,
                    },
                },
                plugins: [
                    new webpack_1.default.DefinePlugin({
                        'process.versions.node': JSON.stringify(process.versions.node || '0.0.0'),
                    }),
                    new node_polyfill_webpack_plugin_1.default(),
                ],
            };
        },
        async contentLoaded({ actions }) {
            const { setGlobalData } = actions;
            const globalData = (0, redocData_1.getGlobalData)(options.primaryColor, options.redocOptions);
            setGlobalData(globalData);
        },
        getThemePath() {
            return path_1.default.join(__dirname, '..', 'dist-jsx', 'theme');
        },
        getTypeScriptThemePath() {
            return path_1.default.join(__dirname, '..', 'src', 'theme');
        },
        getClientModules() {
            return [path_1.default.join(__dirname, 'custom.css')];
        },
    };
}
exports.default = redocTheme;
const getSwizzleComponentList = () => {
    return ['Redoc', 'ApiDoc'];
};
exports.getSwizzleComponentList = getSwizzleComponentList;
//# sourceMappingURL=index.js.map