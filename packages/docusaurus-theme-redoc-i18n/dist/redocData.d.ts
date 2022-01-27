import { RedocRawOptions } from 'redoc';
import { GlobalData, RedocThemeOverrides } from './types/common';
export declare function getRedocThemes(baseTheme: RedocThemeOverrides): {
    darkTheme: RedocThemeOverrides;
    lightTheme: RedocThemeOverrides;
};
export declare function getGlobalData(primaryColor?: string, redocOptions?: Partial<RedocRawOptions>): GlobalData;
//# sourceMappingURL=redocData.d.ts.map