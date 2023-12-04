import {
  defineNamespace,
  defineProjections,
  Model as МаркетологMixin
} from '../mixins/regenerated/models/i-i-s-k-a-n-e-c-маркетолог';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МаркетологMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
