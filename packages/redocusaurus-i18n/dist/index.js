"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function preset(context, opts = {
    specs: [],
    theme: {},
}) {
    let specsArray = [];
    const { debug = false, specs, theme } = opts;
    if (debug) {
        console.error('[REDOCUSAURUS] Options:', opts);
    }
    if (Array.isArray(specs)) {
        specsArray = specs;
    }
    else if (specs) {
        specsArray = [specs];
    }
    if (debug) {
        console.error('[REDOCUSAURUS] Specs:', specsArray);
    }
    const config = {
        themes: [[require.resolve('docusaurus-theme-redoc-i18n'), theme]],
        plugins: [
            ...specsArray.map((pluginOpts, index) => {
                var _a;
                return [
                    require.resolve('docusaurus-plugin-redoc-i18n'),
                    {
                        id: `plugin-redoc-${index}`,
                        ...pluginOpts,
                        routePath: (_a = pluginOpts.routePath) !== null && _a !== void 0 ? _a : `/api/${index}`,
                        debug,
                    },
                ];
            }),
        ],
    };
    if (debug) {
        console.error('[REDOCUSAURUS] Final:', JSON.stringify(config, null, 2));
    }
    return config;
}
exports.default = preset;
//# sourceMappingURL=index.js.map