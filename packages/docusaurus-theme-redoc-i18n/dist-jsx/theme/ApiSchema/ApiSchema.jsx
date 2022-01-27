import React, { useMemo } from 'react';
import { usePluginData, useAllPluginInstancesData, } from '@docusaurus/useGlobalData';
import useThemeContext from '@theme/hooks/useThemeContext';
import clsx from 'clsx';
import { ThemeProvider } from 'styled-components';
import { SchemaDefinition, AppStore } from 'redoc';
import '../Redoc/styles.css';
import './styles.css';
const ApiSchema = ({ id, example, pointer, ...rest }) => {
    const { isDarkTheme } = useThemeContext();
    const allData = useAllPluginInstancesData('docusaurus-plugin-redoc');
    const { lightTheme, darkTheme, redocOptions } = usePluginData('docusaurus-theme-redoc');
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const store = useMemo(() => {
        const { specUrl, content, type } = allData[id] ||
            Object.values(allData).filter(({ type: dataType }) => dataType === 'object')?.[0];
        if (type !== 'object' || !content) {
            console.warn({ allData }, '[Redocusaurus] ApiSchems needs a spec file to render');
            return null;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new AppStore(content, specUrl, {
            ...redocOptions,
            theme,
        });
    }, [id, allData, redocOptions, theme]);
    if (!store) {
        // @ts-expect-error fix return type
        return null;
    }
    return (<ThemeProvider theme={store.options.theme}>
      <div className={clsx([
            'redocusaurus',
            'redocusaurus-schema',
            example ? null : 'hide-example',
        ])}>
        <SchemaDefinition parser={store.spec.parser} options={store.options} schemaRef={pointer} {...rest}/>
      </div>
    </ThemeProvider>);
};
ApiSchema.defaultProps = {
    example: false,
};
export default ApiSchema;
