import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  броньЧерСайт: DS.attr('boolean'),
  занятВМесяц: DS.attr('number'),
  категорНомера: DS.attr('number'),
  номер: DS.attr('number'),
  скВторНомер: DS.attr('boolean'),
  скДР: DS.attr('boolean'),
  скПриДлитПрожив: DS.attr('boolean'),
  суммСоСкид: DS.attr('number'),
  цена: DS.attr('number'),
  юридич: DS.attr('boolean'),
  маркетолог: DS.belongsTo('i-i-s-k-a-n-e-c-маркетолог', { inverse: null, async: false })
});

export let ValidationRules = {
  броньЧерСайт: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.броньЧерСайт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  занятВМесяц: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.занятВМесяц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  категорНомера: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.категорНомера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  скВторНомер: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.скВторНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скДР: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.скДР.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скПриДлитПрожив: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.скПриДлитПрожив.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммСоСкид: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.суммСоСкид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юридич: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.юридич.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  маркетолог: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-спрос.validations.маркетолог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпросE', 'i-i-s-k-a-n-e-c-спрос', {
    номер: attr('Номер', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    категорНомера: attr('Категор номера', { index: 2 }),
    занятВМесяц: attr('Занят в месяц', { index: 3 }),
    юридич: attr('Юридич', { index: 4 }),
    броньЧерСайт: attr('Бронь чер сайт', { index: 5 }),
    скПриДлитПрожив: attr('Ск при длит прожив', { index: 6 }),
    скДР: attr('Ск ДР', { index: 7 }),
    скВторНомер: attr('Ск втор номер', { index: 8 }),
    суммСоСкид: attr('Сумм со скид', { index: 9 }),
    маркетолог: belongsTo('i-i-s-k-a-n-e-c-маркетолог', 'Маркетолог', {

    }, { index: 10 })
  });

  modelClass.defineProjection('СпросL', 'i-i-s-k-a-n-e-c-спрос', {
    номер: attr('Номер', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    категорНомера: attr('Категор номера', { index: 2 }),
    занятВМесяц: attr('Занят в месяц', { index: 3 }),
    юридич: attr('Юридич', { index: 4 }),
    броньЧерСайт: attr('Бронь чер сайт', { index: 5 }),
    скПриДлитПрожив: attr('Ск при длит прожив', { index: 6 }),
    скДР: attr('Ск ДР', { index: 7 }),
    скВторНомер: attr('Ск втор номер', { index: 8 }),
    суммСоСкид: attr('Сумм со скид', { index: 9 })
  });
};
