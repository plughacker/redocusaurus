import type { Props as LayoutProps } from '@theme/Layout';
import type { RedocRawOptions, ObjectDescriptionProps } from 'redoc';
import type { RecursivePartial } from './util';
export declare type RedocProps = {
    spec?: Record<string, unknown>;
    specUrl?: string;
};
export declare type ApiSchemaProps = Omit<ObjectDescriptionProps, 'parser' | 'options' | 'schemaRef'> & {
    /**
     * If you have multiple apis, then add a `id` field in the specs array
     * And pass the same here
     */
    id?: string;
    pointer: ObjectDescriptionProps['schemaRef'];
    /**
     * Show the example or not
     */
    example?: boolean;
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
export declare type ApiDocProps = {
    layoutProps?: Omit<LayoutProps, 'children'>;
    spec: Spec;
};
export declare type RedocThemeOverrides = RecursivePartial<NonNullable<RedocRawOptions['theme']>>;
export interface ThemeOptions {
    primaryColor?: string;
    redocOptions?: Partial<Omit<RedocRawOptions, 'theme'>>;
}
export declare type GlobalData = {
    redocOptions: NonNullable<ThemeOptions['redocOptions']>;
    darkTheme: Partial<RedocRawOptions['theme']>;
    lightTheme: Partial<RedocRawOptions['theme']>;
};
//# sourceMappingURL=common.d.ts.map