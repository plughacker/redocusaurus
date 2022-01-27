"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalData = exports.getRedocThemes = void 0;
const merge_1 = __importDefault(require("lodash/merge"));
const defaultOptions = {
    scrollYOffset: 'nav.navbar',
    hideDownloadButton: true,
    expandSingleSchemaField: true,
    menuToggle: true,
    // @ts-expect-error not available in types
    suppressWarnings: true,
};
const getDefaultTheme = (primaryColor) => ({
    colors: {
        primary: {
            main: primaryColor || '#25c2a0',
        },
    },
});
/**
 * TODO: Update colors from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
const DOCUSAURUS = {
    darkGray: '#303846',
    dark: {
        primaryText: '#f5f6f7',
        secondaryText: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgb(24, 25, 26)',
    },
};
/**
 * NOTE: Variables taken from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
const LIGHT_THEME_OPTIONS = {
    typography: {
        fontFamily: 'var(--ifm-font-family-base)',
        fontSize: 'var(--ifm-font-size-base)',
        lineHeight: 'var(--ifm-line-height-base)',
        fontWeightLight: 'var(--ifm-font-weight-light)',
        fontWeightRegular: 'var(--ifm-font-weight-base)',
        fontWeightBold: 'var(--ifm-font-weight-bold)',
        headings: {
            fontFamily: 'var(--ifm-font-family-base)',
            fontWeight: 'var(--ifm-font-weight-semibold)',
            lineHeight: 'var(--ifm-line-height-base)',
        },
        code: {
            fontFamily: 'var(--ifm-font-family-monospace)',
            lineHeight: 'var(--ifm-pre-line-height)',
        },
    },
    sidebar: {
        /**
         * about the same as the sidebar in the docs area, for consistency
         * @see https://davidgoss.co/blog/api-documentation-redoc-docusaurus/
         */
        width: '300px',
        backgroundColor: '#ffffff',
    },
    rightPanel: {
        backgroundColor: DOCUSAURUS.darkGray,
    },
};
const DARK_THEME_OPTIONS = {
    colors: {
        text: {
            primary: DOCUSAURUS.dark.primaryText,
            secondary: DOCUSAURUS.dark.secondaryText,
        },
        gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
        },
        border: {
            dark: '#ffffff',
            light: 'rgba(0,0,0, 0.1)',
        },
    },
    schema: {
        nestedBackground: DOCUSAURUS.dark.backgroundColor,
        typeNameColor: DOCUSAURUS.dark.secondaryText,
        typeTitleColor: DOCUSAURUS.dark.secondaryText,
    },
    sidebar: {
        backgroundColor: DOCUSAURUS.dark.backgroundColor,
        textColor: DOCUSAURUS.dark.primaryText,
        arrow: {
            color: DOCUSAURUS.dark.primaryText,
        },
    },
};
function getThemeOptions(baseTheme, isDarkMode = false) {
    const mergedTheme = (0, merge_1.default)({}, baseTheme, LIGHT_THEME_OPTIONS);
    if (!isDarkMode)
        return mergedTheme;
    return (0, merge_1.default)(mergedTheme, DARK_THEME_OPTIONS);
}
function getRedocThemes(baseTheme) {
    return {
        lightTheme: getThemeOptions(baseTheme, false),
        darkTheme: getThemeOptions(baseTheme, true),
    };
}
exports.getRedocThemes = getRedocThemes;
function getGlobalData(primaryColor, redocOptions) {
    const { lightTheme, darkTheme } = getRedocThemes(getDefaultTheme(primaryColor));
    return {
        lightTheme,
        darkTheme,
        redocOptions: {
            ...defaultOptions,
            ...redocOptions,
        },
    };
}
exports.getGlobalData = getGlobalData;
//# sourceMappingURL=redocData.js.map