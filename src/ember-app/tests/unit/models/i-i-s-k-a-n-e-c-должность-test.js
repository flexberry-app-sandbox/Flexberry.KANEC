import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-a-n-e-c-должность', 'Unit | Model | i-i-s-k-a-n-e-c-должность', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
