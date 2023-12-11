import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISNovyjj_2КлиентыLForm from './forms/i-i-s-novyjj-2-клиенты-l';
import IISNovyjj_2МатериалыLForm from './forms/i-i-s-novyjj-2-материалы-l';
import IISNovyjj_2ПоставщикиLForm from './forms/i-i-s-novyjj-2-поставщики-l';
import IISNovyjj_2ПриходДенегLForm from './forms/i-i-s-novyjj-2-приход-денег-l';
import IISNovyjj_2РасходДенегLForm from './forms/i-i-s-novyjj-2-расход-денег-l';
import IISNovyjj_2РегистрОборотLForm from './forms/i-i-s-novyjj-2-регистр-оборот-l';
import IISNovyjj_2ТоварыLForm from './forms/i-i-s-novyjj-2-товары-l';
import IISNovyjj_2УслугиLForm from './forms/i-i-s-novyjj-2-услуги-l';
import IISNovyjj_2ФинансистыLForm from './forms/i-i-s-novyjj-2-финансисты-l';
import IISNovyjj_2КлиентыEForm from './forms/i-i-s-novyjj-2-клиенты-e';
import IISNovyjj_2МатериалыEForm from './forms/i-i-s-novyjj-2-материалы-e';
import IISNovyjj_2ПоставщикиEForm from './forms/i-i-s-novyjj-2-поставщики-e';
import IISNovyjj_2ПриходДенегEForm from './forms/i-i-s-novyjj-2-приход-денег-e';
import IISNovyjj_2РасходДенегEForm from './forms/i-i-s-novyjj-2-расход-денег-e';
import IISNovyjj_2РегистрОборотEForm from './forms/i-i-s-novyjj-2-регистр-оборот-e';
import IISNovyjj_2ТоварыEForm from './forms/i-i-s-novyjj-2-товары-e';
import IISNovyjj_2УслугиEForm from './forms/i-i-s-novyjj-2-услуги-e';
import IISNovyjj_2ФинансистыEForm from './forms/i-i-s-novyjj-2-финансисты-e';
import IISNovyjj_2КлиентыModel from './models/i-i-s-novyjj-2-клиенты';
import IISNovyjj_2МатериалыModel from './models/i-i-s-novyjj-2-материалы';
import IISNovyjj_2ПереченьМатModel from './models/i-i-s-novyjj-2-перечень-мат';
import IISNovyjj_2ПереченьТоваровModel from './models/i-i-s-novyjj-2-перечень-товаров';
import IISNovyjj_2ПереченьУслугModel from './models/i-i-s-novyjj-2-перечень-услуг';
import IISNovyjj_2ПоставщикиModel from './models/i-i-s-novyjj-2-поставщики';
import IISNovyjj_2ПриходДенегModel from './models/i-i-s-novyjj-2-приход-денег';
import IISNovyjj_2РасходДенегModel from './models/i-i-s-novyjj-2-расход-денег';
import IISNovyjj_2РегистрОборотModel from './models/i-i-s-novyjj-2-регистр-оборот';
import IISNovyjj_2СоставТовараModel from './models/i-i-s-novyjj-2-состав-товара';
import IISNovyjj_2ТоварыModel from './models/i-i-s-novyjj-2-товары';
import IISNovyjj_2УслугиModel from './models/i-i-s-novyjj-2-услуги';
import IISNovyjj_2ФинансистыModel from './models/i-i-s-novyjj-2-финансисты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj-2-клиенты': IISNovyjj_2КлиентыModel,
    'i-i-s-novyjj-2-материалы': IISNovyjj_2МатериалыModel,
    'i-i-s-novyjj-2-перечень-мат': IISNovyjj_2ПереченьМатModel,
    'i-i-s-novyjj-2-перечень-товаров': IISNovyjj_2ПереченьТоваровModel,
    'i-i-s-novyjj-2-перечень-услуг': IISNovyjj_2ПереченьУслугModel,
    'i-i-s-novyjj-2-поставщики': IISNovyjj_2ПоставщикиModel,
    'i-i-s-novyjj-2-приход-денег': IISNovyjj_2ПриходДенегModel,
    'i-i-s-novyjj-2-расход-денег': IISNovyjj_2РасходДенегModel,
    'i-i-s-novyjj-2-регистр-оборот': IISNovyjj_2РегистрОборотModel,
    'i-i-s-novyjj-2-состав-товара': IISNovyjj_2СоставТовараModel,
    'i-i-s-novyjj-2-товары': IISNovyjj_2ТоварыModel,
    'i-i-s-novyjj-2-услуги': IISNovyjj_2УслугиModel,
    'i-i-s-novyjj-2-финансисты': IISNovyjj_2ФинансистыModel
  },

  'application-name': 'Novyjj_2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Novyjj_2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_2',
          title: 'Novyjj_2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        главная: {
          caption: 'Главная',
          title: 'Главная',
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-novyjj-2-расход-денег-l': {
              caption: 'Расход денег',
              title: 'Расход денег'
            },
            'i-i-s-novyjj-2-приход-денег-l': {
              caption: 'Приход денег',
              title: 'Приход денег'
            }
          },
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-novyjj-2-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            },
            'i-i-s-novyjj-2-услуги-l': {
              caption: 'Услуги',
              title: 'Услуги'
            },
            'i-i-s-novyjj-2-материалы-l': {
              caption: 'Материалы',
              title: 'Материалы'
            }
          },
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-novyjj-2-финансисты-l': {
              caption: 'Финансисты',
              title: 'Финансисты'
            }
          },
          контрагенты: {
            caption: 'Контрагенты',
            title: 'Контрагенты',
            'i-i-s-novyjj-2-клиенты-l': {
              caption: 'Клиенты',
              title: 'Клиенты'
            },
            'i-i-s-novyjj-2-поставщики-l': {
              caption: 'Поставщики',
              title: 'Поставщики'
            }
          },
          регистры: {
            caption: 'Регистры',
            title: 'Регистры',
            'i-i-s-novyjj-2-регистр-оборот-l': {
              caption: 'Регистр оборотов',
              title: 'Регистр оборот'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-novyjj-2-клиенты-l': IISNovyjj_2КлиентыLForm,
    'i-i-s-novyjj-2-материалы-l': IISNovyjj_2МатериалыLForm,
    'i-i-s-novyjj-2-поставщики-l': IISNovyjj_2ПоставщикиLForm,
    'i-i-s-novyjj-2-приход-денег-l': IISNovyjj_2ПриходДенегLForm,
    'i-i-s-novyjj-2-расход-денег-l': IISNovyjj_2РасходДенегLForm,
    'i-i-s-novyjj-2-регистр-оборот-l': IISNovyjj_2РегистрОборотLForm,
    'i-i-s-novyjj-2-товары-l': IISNovyjj_2ТоварыLForm,
    'i-i-s-novyjj-2-услуги-l': IISNovyjj_2УслугиLForm,
    'i-i-s-novyjj-2-финансисты-l': IISNovyjj_2ФинансистыLForm,
    'i-i-s-novyjj-2-клиенты-e': IISNovyjj_2КлиентыEForm,
    'i-i-s-novyjj-2-материалы-e': IISNovyjj_2МатериалыEForm,
    'i-i-s-novyjj-2-поставщики-e': IISNovyjj_2ПоставщикиEForm,
    'i-i-s-novyjj-2-приход-денег-e': IISNovyjj_2ПриходДенегEForm,
    'i-i-s-novyjj-2-расход-денег-e': IISNovyjj_2РасходДенегEForm,
    'i-i-s-novyjj-2-регистр-оборот-e': IISNovyjj_2РегистрОборотEForm,
    'i-i-s-novyjj-2-товары-e': IISNovyjj_2ТоварыEForm,
    'i-i-s-novyjj-2-услуги-e': IISNovyjj_2УслугиEForm,
    'i-i-s-novyjj-2-финансисты-e': IISNovyjj_2ФинансистыEForm
  },

});

export default translations;
