import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выручЗаГостя: DS.attr('number'),
  выручЗаОдинН: DS.attr('number'),
  выручкаОбщ: DS.attr('number'),
  заполняемость: DS.attr('number'),
  срКолвоГостВНо: DS.attr('number'),
  срЦена: DS.attr('number'),
  маркетолог: DS.belongsTo('i-i-s-k-a-n-e-c-маркетолог', { inverse: null, async: false })
});

export let ValidationRules = {
  выручЗаГостя: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.выручЗаГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  выручЗаОдинН: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.выручЗаОдинН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  выручкаОбщ: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.выручкаОбщ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заполняемость: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.заполняемость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срКолвоГостВНо: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.срКолвоГостВНо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срЦена: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.срЦена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  маркетолог: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-основ-показат.validations.маркетолог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОсновПоказатE', 'i-i-s-k-a-n-e-c-основ-показат', {
    выручкаОбщ: attr('Выручка общ', { index: 0 }),
    заполняемость: attr('Заполняемость', { index: 1 }),
    срЦена: attr('Ср цена', { index: 2 }),
    выручЗаОдинН: attr('Выруч за один Н', { index: 3 }),
    выручЗаГостя: attr('Выруч за гостя', { index: 4 }),
    срКолвоГостВНо: attr('Ср колво гост в но', { index: 5 }),
    маркетолог: belongsTo('i-i-s-k-a-n-e-c-маркетолог', 'Маркетолог', {

    }, { index: 6 })
  });

  modelClass.defineProjection('ОсновПоказатL', 'i-i-s-k-a-n-e-c-основ-показат', {
    выручкаОбщ: attr('Выручка общ', { index: 0 }),
    заполняемость: attr('Заполняемость', { index: 1 }),
    срЦена: attr('Ср цена', { index: 2 }),
    выручЗаОдинН: attr('Выруч за один Н', { index: 3 }),
    выручЗаГостя: attr('Выруч за гостя', { index: 4 }),
    срКолвоГостВНо: attr('Ср колво гост в но', { index: 5 })
  });
};
