import { Serializer as МаркетологSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-a-n-e-c-маркетолог';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МаркетологSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
