import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  приходДенег: DS.belongsTo('i-i-s-novyjj-2-приход-денег', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-novyjj-2-расход-денег', { inverse: null, async: false })
});

export let ValidationRules = {
  приходДенег: {
    descriptionKey: 'models.i-i-s-novyjj-2-регистр-оборот.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-novyjj-2-регистр-оборот.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрОборотE', 'i-i-s-novyjj-2-регистр-оборот', {
    приходДенег: belongsTo('i-i-s-novyjj-2-приход-денег', 'Приход денег', {
      iD: attr('ID прихода', { index: 1, hidden: true }),
      дата: attr('Дата', { index: 2 }),
      сумма: attr('Сумма', { index: 3 })
    }, { index: 0, displayMemberPath: 'iD' }),
    расходДенег: belongsTo('i-i-s-novyjj-2-расход-денег', 'Расход денег', {
      iD: attr('ID расхода', { index: 5, hidden: true }),
      дата: attr('Дата', { index: 6 }),
      сумма: attr('Сумма', { index: 7 })
    }, { index: 4, displayMemberPath: 'iD' })
  });

  modelClass.defineProjection('РегистрОборотL', 'i-i-s-novyjj-2-регистр-оборот', {
    приходДенег: belongsTo('i-i-s-novyjj-2-приход-денег', 'ID прихода', {
      iD: attr('ID прихода', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      сумма: attr('Сумма', { index: 2 })
    }, { index: -1, hidden: true }),
    расходДенег: belongsTo('i-i-s-novyjj-2-расход-денег', 'ID расхода', {
      iD: attr('ID расхода', { index: 3 }),
      дата: attr('Дата', { index: 4 }),
      сумма: attr('Сумма', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
