import { I18nProvider as LinguiI18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import frMessages from '#app/i18n/locales/fr/messages';
import enMessages from '#app/i18n/locales/en/messages';
import { getLocales } from 'expo-localization';
import React from 'react';

const fallbackLanguageTag = 'en';
const AVAILABLE_LANGUAGES = ['fr', fallbackLanguageTag];
const bestAvailableLanguageConfig = getLocales().find((local) =>
  AVAILABLE_LANGUAGES.includes(local.languageCode),
);
const bestAvailableLanguageTag = bestAvailableLanguageConfig
  ? bestAvailableLanguageConfig.languageCode
  : fallbackLanguageTag;

i18n.load({ fr: frMessages.messages, en: enMessages.messages });
i18n.activate(bestAvailableLanguageTag || fallbackLanguageTag);

type I18nProviderProps = {
  children: React.ReactNode;
};

export const I18nProvider = ({ children }: I18nProviderProps) => {
  return <LinguiI18nProvider i18n={i18n}>{children}</LinguiI18nProvider>;
};
