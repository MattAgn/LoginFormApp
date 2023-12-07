import '@formatjs/intl-listformat/locale-data/en';
import '@formatjs/intl-listformat/polyfill';
import '@formatjs/intl-locale/polyfill';

import { I18nProvider } from '#app/i18n/locales/I18nProvider';
import { RootNavigationContainer } from '#app/navigation/RootNavigationContainer';
import { RootNavigator } from '#app/navigation/RootNavigator';

import { ThemeProvider } from '@emotion/react';
import { useFonts } from 'expo-font';
import { fontFiles } from './src/shared/view/theme/fonts';
import { theme } from './src/shared/view/theme/theme';

export default function App() {
  const [fontsLoaded] = useFonts(fontFiles);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <I18nProvider>
        <RootNavigationContainer>
          <RootNavigator />
        </RootNavigationContainer>
      </I18nProvider>
    </ThemeProvider>
  );
}
