import { Serializer as СпросSerializer } from
  '../mixins/regenerated/serializers/i-i-s-k-a-n-e-c-спрос';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпросSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
