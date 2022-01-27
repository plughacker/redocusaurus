import path from 'path';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { getGlobalData } from './redocData';
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import webpack from 'webpack';
export default function redocTheme(context, options) {
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
                    new webpack.DefinePlugin({
                        'process.versions.node': JSON.stringify(process.versions.node || '0.0.0'),
                    }),
                    new NodePolyfillPlugin(),
                ],
            };
        },
        async contentLoaded({ actions }) {
            const { setGlobalData } = actions;
            const globalData = getGlobalData(options.primaryColor, options.redocOptions);
            setGlobalData(globalData);
        },
        getThemePath() {
            return path.join(__dirname, '..', 'dist-jsx', 'theme');
        },
        getTypeScriptThemePath() {
            return path.join(__dirname, '..', 'src', 'theme');
        },
        getClientModules() {
            return [path.join(__dirname, 'custom.css')];
        },
    };
}
const getSwizzleComponentList = () => {
    return ['Redoc', 'ApiDoc'];
};
export { getSwizzleComponentList };
