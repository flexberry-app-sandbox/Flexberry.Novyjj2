import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата: DS.attr('date'),
  сумма: DS.attr('decimal'),
  типПрихода: DS.attr('i-i-s-novyjj-2-тип-прихода'),
  клиенты: DS.belongsTo('i-i-s-novyjj-2-клиенты', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-novyjj-2-финансисты', { inverse: null, async: false }),
  переченьУслуг: DS.hasMany('i-i-s-novyjj-2-перечень-услуг', { inverse: 'приходДенег', async: false }),
  переченьТоваров: DS.hasMany('i-i-s-novyjj-2-перечень-товаров', { inverse: 'приходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типПрихода: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.типПрихода.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  переченьТоваров: {
    descriptionKey: 'models.i-i-s-novyjj-2-приход-денег.validations.переченьТоваров.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриходДенегE', 'i-i-s-novyjj-2-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типПрихода: attr('Тип прихода', { index: 2 }),
    клиенты: belongsTo('i-i-s-novyjj-2-клиенты', 'Клиенты', {
      фИО: attr('Клиент ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    финансисты: belongsTo('i-i-s-novyjj-2-финансисты', 'Финансисты', {
      фИО: attr('Финансист ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    сумма: attr('Сумма', { index: 7 }),
    переченьУслуг: hasMany('i-i-s-novyjj-2-перечень-услуг', 'Перечень услуг', {
      услуги: belongsTo('i-i-s-novyjj-2-услуги', 'Услуги', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    }),
    переченьТоваров: hasMany('i-i-s-novyjj-2-перечень-товаров', 'Перечень товаров', {
      товары: belongsTo('i-i-s-novyjj-2-товары', 'Товары', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        стоимость: attr('Стоимость', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ПриходДенегL', 'i-i-s-novyjj-2-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типПрихода: attr('Тип прихода', { index: 2 }),
    клиенты: belongsTo('i-i-s-novyjj-2-клиенты', 'Клиент ФИО', {
      фИО: attr('Клиент ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    финансисты: belongsTo('i-i-s-novyjj-2-финансисты', 'Финансист ФИО', {
      фИО: attr('Финансист ФИО', { index: 4 })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма', { index: 5 })
  });
};
