import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKANECДолжностьLForm from './forms/i-i-s-k-a-n-e-c-должность-l';
import IISKANECМаркетологLForm from './forms/i-i-s-k-a-n-e-c-маркетолог-l';
import IISKANECОсновПоказатLForm from './forms/i-i-s-k-a-n-e-c-основ-показат-l';
import IISKANECПерсоналLForm from './forms/i-i-s-k-a-n-e-c-персонал-l';
import IISKANECСпросLForm from './forms/i-i-s-k-a-n-e-c-спрос-l';
import IISKANECЦелеваяАудитLForm from './forms/i-i-s-k-a-n-e-c-целевая-аудит-l';
import IISKANECДолжностьEForm from './forms/i-i-s-k-a-n-e-c-должность-e';
import IISKANECМаркетологEForm from './forms/i-i-s-k-a-n-e-c-маркетолог-e';
import IISKANECОсновПоказатEForm from './forms/i-i-s-k-a-n-e-c-основ-показат-e';
import IISKANECПерсоналEForm from './forms/i-i-s-k-a-n-e-c-персонал-e';
import IISKANECСпросEForm from './forms/i-i-s-k-a-n-e-c-спрос-e';
import IISKANECЦелеваяАудитEForm from './forms/i-i-s-k-a-n-e-c-целевая-аудит-e';
import IISKANECДолжностьModel from './models/i-i-s-k-a-n-e-c-должность';
import IISKANECМаркетологModel from './models/i-i-s-k-a-n-e-c-маркетолог';
import IISKANECОсновПоказатModel from './models/i-i-s-k-a-n-e-c-основ-показат';
import IISKANECПерсоналModel from './models/i-i-s-k-a-n-e-c-персонал';
import IISKANECСпросModel from './models/i-i-s-k-a-n-e-c-спрос';
import IISKANECЦелеваяАудитModel from './models/i-i-s-k-a-n-e-c-целевая-аудит';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-a-n-e-c-должность': IISKANECДолжностьModel,
    'i-i-s-k-a-n-e-c-маркетолог': IISKANECМаркетологModel,
    'i-i-s-k-a-n-e-c-основ-показат': IISKANECОсновПоказатModel,
    'i-i-s-k-a-n-e-c-персонал': IISKANECПерсоналModel,
    'i-i-s-k-a-n-e-c-спрос': IISKANECСпросModel,
    'i-i-s-k-a-n-e-c-целевая-аудит': IISKANECЦелеваяАудитModel
  },

  'application-name': 'KANEC',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'KANEC',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KANEC',
          title: 'KANEC'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'k-a-n-e-c': {
          caption: 'KANEC',
          title: 'KANEC',
          'i-i-s-k-a-n-e-c-спрос-l': {
            caption: 'Спрос',
            title: ''
          },
          'i-i-s-k-a-n-e-c-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-k-a-n-e-c-маркетолог-l': {
            caption: 'Маркетолог',
            title: ''
          },
          'i-i-s-k-a-n-e-c-основ-показат-l': {
            caption: 'Основ показат',
            title: ''
          },
          'i-i-s-k-a-n-e-c-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-k-a-n-e-c-целевая-аудит-l': {
            caption: 'Целевая аудит',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-a-n-e-c-должность-l': IISKANECДолжностьLForm,
    'i-i-s-k-a-n-e-c-маркетолог-l': IISKANECМаркетологLForm,
    'i-i-s-k-a-n-e-c-основ-показат-l': IISKANECОсновПоказатLForm,
    'i-i-s-k-a-n-e-c-персонал-l': IISKANECПерсоналLForm,
    'i-i-s-k-a-n-e-c-спрос-l': IISKANECСпросLForm,
    'i-i-s-k-a-n-e-c-целевая-аудит-l': IISKANECЦелеваяАудитLForm,
    'i-i-s-k-a-n-e-c-должность-e': IISKANECДолжностьEForm,
    'i-i-s-k-a-n-e-c-маркетолог-e': IISKANECМаркетологEForm,
    'i-i-s-k-a-n-e-c-основ-показат-e': IISKANECОсновПоказатEForm,
    'i-i-s-k-a-n-e-c-персонал-e': IISKANECПерсоналEForm,
    'i-i-s-k-a-n-e-c-спрос-e': IISKANECСпросEForm,
    'i-i-s-k-a-n-e-c-целевая-аудит-e': IISKANECЦелеваяАудитEForm
  },

});

export default translations;
