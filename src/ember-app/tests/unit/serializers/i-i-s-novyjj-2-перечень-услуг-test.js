import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-2-перечень-услуг', 'Unit | Serializer | i-i-s-novyjj-2-перечень-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-novyjj-2-перечень-услуг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-novyjj-2-банк',
    'transform:i-i-s-novyjj-2-единицы',
    'transform:i-i-s-novyjj-2-тип-прихода',

    'model:i-i-s-novyjj-2-клиенты',
    'model:i-i-s-novyjj-2-материалы',
    'model:i-i-s-novyjj-2-перечень-мат',
    'model:i-i-s-novyjj-2-перечень-товаров',
    'model:i-i-s-novyjj-2-перечень-услуг',
    'model:i-i-s-novyjj-2-поставщики',
    'model:i-i-s-novyjj-2-приход-денег',
    'model:i-i-s-novyjj-2-расход-денег',
    'model:i-i-s-novyjj-2-регистр-оборот',
    'model:i-i-s-novyjj-2-состав-товара',
    'model:i-i-s-novyjj-2-товары',
    'model:i-i-s-novyjj-2-услуги',
    'model:i-i-s-novyjj-2-финансисты',
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
