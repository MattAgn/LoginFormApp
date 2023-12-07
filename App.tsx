// import '@formatjs/intl-listformat/locale-data/en';
// import '@formatjs/intl-listformat/polyfill';
// import '@formatjs/intl-locale/polyfill';

import { RootNavigationContainer } from '#app/navigation/RootNavigationContainer';
import { RootNavigator } from '#app/navigation/RootNavigator';

import { ThemeProvider } from '@emotion/react';
import { theme } from './src/shared/view/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigationContainer>
        <RootNavigator />
      </RootNavigationContainer>
    </ThemeProvider>
  );
}
