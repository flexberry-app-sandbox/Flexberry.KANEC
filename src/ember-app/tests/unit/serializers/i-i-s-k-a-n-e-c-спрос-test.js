import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-a-n-e-c-спрос', 'Unit | Serializer | i-i-s-k-a-n-e-c-спрос', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-a-n-e-c-спрос',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-k-a-n-e-c-должность',
    'model:i-i-s-k-a-n-e-c-маркетолог',
    'model:i-i-s-k-a-n-e-c-основ-показат',
    'model:i-i-s-k-a-n-e-c-персонал',
    'model:i-i-s-k-a-n-e-c-спрос',
    'model:i-i-s-k-a-n-e-c-целевая-аудит',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
