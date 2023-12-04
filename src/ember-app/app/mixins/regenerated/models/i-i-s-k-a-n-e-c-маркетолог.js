import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  персонал: DS.belongsTo('i-i-s-k-a-n-e-c-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  персонал: {
    descriptionKey: 'models.i-i-s-k-a-n-e-c-маркетолог.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МаркетологE', 'i-i-s-k-a-n-e-c-маркетолог', {
    персонал: belongsTo('i-i-s-k-a-n-e-c-персонал', 'Персонал', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('МаркетологL', 'i-i-s-k-a-n-e-c-маркетолог', {
    персонал: belongsTo('i-i-s-k-a-n-e-c-персонал', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
