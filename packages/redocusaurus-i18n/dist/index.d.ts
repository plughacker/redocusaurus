import type { LoadContext } from '@docusaurus/types';
import type { PluginOptions } from 'docusaurus-plugin-redoc-i18n';
import type { ThemeOptions } from 'docusaurus-theme-redoc-i18n';
export interface PresetOptions {
    debug?: boolean;
    specs: PluginOptions[];
    theme?: ThemeOptions;
}
export declare type PresetEntry = ['redocusaurus-i18n', PresetOptions];
export default function preset(context: LoadContext, opts?: PresetOptions): {
    themes: (string | ThemeOptions | undefined)[][];
    plugins: (string | {
        routePath: string;
        debug: boolean;
        id: string;
        spec?: string | undefined;
        specUrl?: string | undefined;
        layout?: {
            title?: string | undefined;
            noFooter?: boolean | undefined;
            description?: string | undefined;
            image?: string | undefined;
            keywords?: string[] | undefined;
            permalink?: string | undefined;
            wrapperClassName?: string | undefined;
            searchMetadatas?: {
                version?: string | undefined;
                tag?: string | undefined;
            } | undefined;
        } | undefined;
        apiDocComponent?: string | undefined;
    })[][];
};
//# sourceMappingURL=index.d.ts.map