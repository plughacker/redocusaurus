import * as Joi from 'joi';
declare type LayoutProps = {
    title?: string;
    noFooter?: boolean;
    description?: string;
    image?: string;
    keywords?: string[];
    permalink?: string;
    wrapperClassName?: string;
    searchMetadatas?: {
        version?: string;
        tag?: string;
    };
};
export declare type Spec = {
    specUrl?: string;
} & ({
    type: 'url';
    content: string;
} | {
    type: 'object';
    content: Record<string, unknown>;
});
export interface PluginOptions {
    id?: string;
    spec?: string;
    specUrl?: string;
    layout?: LayoutProps;
    debug?: boolean;
    routePath?: string;
    apiDocComponent?: string;
}
export interface PluginOptionsWithDefault extends PluginOptions {
    debug: boolean;
    routePath: string;
    apiDocComponent: string;
}
export declare const DEFAULT_OPTIONS: PluginOptionsWithDefault;
export declare const PluginOptionSchema: Joi.ObjectSchema<any>;
export {};
//# sourceMappingURL=options.d.ts.map