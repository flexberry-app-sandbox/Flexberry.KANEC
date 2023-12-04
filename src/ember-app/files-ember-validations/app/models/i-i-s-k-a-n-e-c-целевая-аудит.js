import {
  defineNamespace,
  defineProjections,
  Model as ЦелеваяАудитMixin
} from '../mixins/regenerated/models/i-i-s-k-a-n-e-c-целевая-аудит';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЦелеваяАудитMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
