import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЦелеваяАудитMixin
} from '../mixins/regenerated/models/i-i-s-k-a-n-e-c-целевая-аудит';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЦелеваяАудитMixin, Validations, {
});

defineProjections(Model);

export default Model;
