import type { LoadContext } from '@docusaurus/types';
import type { PluginOptions } from 'docusaurus-plugin-redoc-i18n';
import type { ThemeOptions } from 'docusaurus-theme-redoc-i18n';

export interface PresetOptions {
  debug?: boolean;
  specs: PluginOptions[];
  theme?: ThemeOptions;
}

export type PresetEntry = ['redocusaurus-i18n', PresetOptions];

export default function preset(
  context: LoadContext,
  opts: PresetOptions = {
    specs: [],
    theme: {},
  },
) {
  let specsArray: PluginOptions[] = [];
  const { debug = false, specs, theme } = opts;
  if (debug) {
    console.error('[REDOCUSAURUS] Options:', opts);
  }

  if (Array.isArray(specs)) {
    specsArray = specs;
  } else if (specs) {
    specsArray = [specs];
  }

  if (debug) {
    console.error('[REDOCUSAURUS] Specs:', specsArray);
  }

  const config = {
    themes: [[require.resolve('docusaurus-theme-redoc-i18n'), theme]],
    plugins: [
      ...specsArray.map((pluginOpts, index) => [
        require.resolve('docusaurus-plugin-redoc-i18n'),
        {
          id: `plugin-redoc-${index}`,
          ...pluginOpts,
          routePath: pluginOpts.routePath ?? `/api/${index}`,
          debug,
        },
      ]),
    ],
  };

  if (debug) {
    console.error('[REDOCUSAURUS] Final:', JSON.stringify(config, null, 2));
  }

  return config;
}
