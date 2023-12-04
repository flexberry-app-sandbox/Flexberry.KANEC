import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'KANEC',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'KANEC',
          title: 'KANEC'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
