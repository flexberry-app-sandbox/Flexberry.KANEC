import {
  defineNamespace,
  defineProjections,
  Model as ОсновПоказатMixin
} from '../mixins/regenerated/models/i-i-s-k-a-n-e-c-основ-показат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОсновПоказатMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
