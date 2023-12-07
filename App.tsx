import '@formatjs/intl-listformat/locale-data/en';
import '@formatjs/intl-listformat/polyfill';
import '@formatjs/intl-locale/polyfill';

import { I18nProvider } from '#app/i18n/locales/I18nProvider';
import { RootNavigationContainer } from '#app/navigation/RootNavigationContainer';
import { RootNavigator } from '#app/navigation/RootNavigator';

export default function App() {
  return (
    <I18nProvider>
      <RootNavigationContainer>
        <RootNavigator />
      </RootNavigationContainer>
    </I18nProvider>
  );
}
