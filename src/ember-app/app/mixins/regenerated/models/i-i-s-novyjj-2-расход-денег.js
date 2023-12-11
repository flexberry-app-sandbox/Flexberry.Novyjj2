import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банк: DS.attr('i-i-s-novyjj-2-банк'),
  бИК: DS.attr('number'),
  дата: DS.attr('date'),
  иНН: DS.attr('number'),
  сумма: DS.attr('decimal'),
  счет: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-novyjj-2-поставщики', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-novyjj-2-финансисты', { inverse: null, async: false }),
  переченьМат: DS.hasMany('i-i-s-novyjj-2-перечень-мат', { inverse: 'расходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бИК: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.бИК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  счет: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.счет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьМат: {
    descriptionKey: 'models.i-i-s-novyjj-2-расход-денег.validations.переченьМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасходДенегE', 'i-i-s-novyjj-2-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    финансисты: belongsTo('i-i-s-novyjj-2-финансисты', 'Финансисты', {
      фИО: attr('Финансист ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    поставщики: belongsTo('i-i-s-novyjj-2-поставщики', 'Поставщики', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' }),
    сумма: attr('Сумма', { index: 10 }),
    переченьМат: hasMany('i-i-s-novyjj-2-перечень-мат', 'Перечень материалов', {
      материалы: belongsTo('i-i-s-novyjj-2-материалы', 'Материалы', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('РасходДенегL', 'i-i-s-novyjj-2-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    финансисты: belongsTo('i-i-s-novyjj-2-финансисты', 'Финансист ФИО', {
      фИО: attr('Финансист ФИО', { index: 6 })
    }, { index: -1, hidden: true }),
    поставщики: belongsTo('i-i-s-novyjj-2-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма', { index: 8 })
  });
};
