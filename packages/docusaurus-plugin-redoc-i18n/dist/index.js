"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("@docusaurus/utils");
const yaml_1 = __importDefault(require("yaml"));
const options_1 = require("./options");
function redocPlugin(context, opts) {
    const { baseUrl } = context.siteConfig;
    const options = { ...options_1.DEFAULT_OPTIONS, ...opts };
    const { debug, spec, specUrl } = options;
    if (debug) {
        console.error('[REDOCUSAURUS_PLUGIN] Opts Input:', opts);
        console.error('[REDOCUSAURUS_PLUGIN] Options:', options);
    }
    return {
        name: 'docusaurus-plugin-redoc-i18n',
        getPathsToWatch() {
            if (!spec) {
                return [];
            }
            const contentPath = path_1.default.resolve(context.siteDir, spec);
            return [contentPath];
        },
        translateContent({ content, translationFiles }) {
            if (spec) {
                let spec_locale = path_1.default.resolve("i18n", context.i18n.currentLocale, 'docusaurus-plugin-redoc', spec);
                const file = fs_1.default.readFileSync(spec_locale).toString();
                if (spec_locale.endsWith('.yaml') || spec_locale.endsWith('.yml')) {
                    const parsedSpec = yaml_1.default.parse(file);
                    content = parsedSpec;
                }
                else
                    content = JSON.parse(file);
            }
            if (debug) {
                console.error('[REDOCUSAURUS_PLUGIN] Content:', content);
            }
            return content;
        },
        async contentLoaded({ content, actions }) {
            const { createData, addRoute, setGlobalData } = actions;
            if (!content && !specUrl) {
                console.error('[Redocusaurus] No spec provided');
                return;
            }
            const data = {
                specUrl,
                type: content ? 'object' : 'url',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                content: (content || specUrl),
            };
            setGlobalData(data);
            const specData = await createData(`redocApiSpec-${options.id || '1'}.json`, JSON.stringify(data));
            const layoutData = await createData(`redocApiLayout-${options.id || '1'}.json`, JSON.stringify(options.layout));
            const routePath = options.routePath.startsWith('/')
                ? options.routePath.slice(1)
                : options.routePath;
            const routeOptions = {
                path: (0, utils_1.normalizeUrl)([baseUrl, routePath]),
                component: options.apiDocComponent,
                modules: {
                    spec: specData,
                    layoutProps: layoutData,
                },
                exact: true,
            };
            if (debug) {
                console.error('[REDOCUSAURUS_PLUGIN] Route:', routeOptions);
            }
            addRoute(routeOptions);
        },
    };
}
exports.default = redocPlugin;
function validateOptions({ options, }) {
    const { value, error } = options_1.PluginOptionSchema.validate(options);
    if (error) {
        throw error;
    }
    return value;
}
exports.validateOptions = validateOptions;
//# sourceMappingURL=index.js.map