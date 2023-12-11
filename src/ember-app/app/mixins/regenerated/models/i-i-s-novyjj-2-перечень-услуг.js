import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  услуги: DS.belongsTo('i-i-s-novyjj-2-услуги', { inverse: null, async: false }),
  приходДенег: DS.belongsTo('i-i-s-novyjj-2-приход-денег', { inverse: 'переченьУслуг', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-novyjj-2-перечень-услуг.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-novyjj-2-перечень-услуг.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  приходДенег: {
    descriptionKey: 'models.i-i-s-novyjj-2-перечень-услуг.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьУслугE', 'i-i-s-novyjj-2-перечень-услуг', {
    услуги: belongsTo('i-i-s-novyjj-2-услуги', 'Услуги', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      стоимость: attr('Стоимость', { index: 3 })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 2 })
  });
};
