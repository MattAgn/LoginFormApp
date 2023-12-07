/** @type {import('@lingui/conf').LinguiConfig} */
import { formatter } from '@lingui/format-json';

module.exports = {
  locales: ['en', 'fr'],
  catalogs: [
    {
      path: 'src/app/i18n/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: formatter({ style: 'minimal' }),
};
