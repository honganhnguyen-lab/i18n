import { addLocale, useLocale as localize } from 'ttag';

     

const locale = localStorage.getItem('LOCALE_COOKIE'); // fetch locale code from cookies, url, localStorage e.t.c


if (locale !== 'en') {
    // load json file with translations

    const translationsObj = require(`../i18n/${locale}.po.json`);
    addLocale(locale, translationsObj);
    localize(locale);
}