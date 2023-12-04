import {
  defineNamespace,
  defineProjections,
  Model as СпросMixin
} from '../mixins/regenerated/models/i-i-s-k-a-n-e-c-спрос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпросMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
