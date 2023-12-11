import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная.caption'),
          title: i18n.t('forms.application.sitemap.главная.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.документы.caption'),
            title: i18n.t('forms.application.sitemap.главная.документы.title'),
            children: [{
              link: 'i-i-s-novyjj-2-расход-денег-l',
              caption: i18n.t('forms.application.sitemap.главная.документы.i-i-s-novyjj-2-расход-денег-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.документы.i-i-s-novyjj-2-расход-денег-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-novyjj-2-приход-денег-l',
              caption: i18n.t('forms.application.sitemap.главная.документы.i-i-s-novyjj-2-приход-денег-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.документы.i-i-s-novyjj-2-приход-денег-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.главная.номенклатура.title'),
            children: [{
              link: 'i-i-s-novyjj-2-товары-l',
              caption: i18n.t('forms.application.sitemap.главная.номенклатура.i-i-s-novyjj-2-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.номенклатура.i-i-s-novyjj-2-товары-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-novyjj-2-услуги-l',
              caption: i18n.t('forms.application.sitemap.главная.номенклатура.i-i-s-novyjj-2-услуги-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.номенклатура.i-i-s-novyjj-2-услуги-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-novyjj-2-материалы-l',
              caption: i18n.t('forms.application.sitemap.главная.номенклатура.i-i-s-novyjj-2-материалы-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.номенклатура.i-i-s-novyjj-2-материалы-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.главная.сотрудники.title'),
            children: [{
              link: 'i-i-s-novyjj-2-финансисты-l',
              caption: i18n.t('forms.application.sitemap.главная.сотрудники.i-i-s-novyjj-2-финансисты-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.сотрудники.i-i-s-novyjj-2-финансисты-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.контрагенты.caption'),
            title: i18n.t('forms.application.sitemap.главная.контрагенты.title'),
            children: [{
              link: 'i-i-s-novyjj-2-клиенты-l',
              caption: i18n.t('forms.application.sitemap.главная.контрагенты.i-i-s-novyjj-2-клиенты-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.контрагенты.i-i-s-novyjj-2-клиенты-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-novyjj-2-поставщики-l',
              caption: i18n.t('forms.application.sitemap.главная.контрагенты.i-i-s-novyjj-2-поставщики-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.контрагенты.i-i-s-novyjj-2-поставщики-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.регистры.caption'),
            title: i18n.t('forms.application.sitemap.главная.регистры.title'),
            children: [{
              link: 'i-i-s-novyjj-2-регистр-оборот-l',
              caption: i18n.t('forms.application.sitemap.главная.регистры.i-i-s-novyjj-2-регистр-оборот-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.регистры.i-i-s-novyjj-2-регистр-оборот-l.title'),
              icon: 'calendar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})