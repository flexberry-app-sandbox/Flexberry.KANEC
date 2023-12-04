import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  возраст: DS.attr('number'),
  датаРожд: DS.attr('string'),
  национальн: DS.attr('string'),
  образование: DS.attr('string'),
  пол: DS.attr('string'),
  семейнПол: DS.attr('string'),
  фИО: DS.attr('string'),
  маркетолог: DS.belongsTo('i-i-s-k-a-n-e-c-маркетолог', { inverse: null, async: false })
});

export let ValidationRules = {
  возраст: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.возраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРожд: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  национальн: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.национальн.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  семейнПол: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.семейнПол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  маркетолог: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-целевая-аудит.validations.маркетолог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЦелеваяАудитE', 'i-i-s-k-a-n-e-c-целевая-аудит', {
    фИО: attr('ФИО', { index: 0 }),
    датаРожд: attr('Дата рожд', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    возраст: attr('Возраст', { index: 3 }),
    национальн: attr('Национальн', { index: 4 }),
    семейнПол: attr('Семейн пол', { index: 5 }),
    образование: attr('Образование', { index: 6 }),
    маркетолог: belongsTo('i-i-s-k-a-n-e-c-маркетолог', 'Маркетолог', {

    }, { index: 7 })
  });

  modelClass.defineProjection('ЦелеваяАудитL', 'i-i-s-k-a-n-e-c-целевая-аудит', {
    фИО: attr('ФИО', { index: 0 }),
    датаРожд: attr('Дата рожд', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    возраст: attr('Возраст', { index: 3 }),
    национальн: attr('Национальн', { index: 4 }),
    семейнПол: attr('Семейн пол', { index: 5 }),
    образование: attr('Образование', { index: 6 })
  });
};
