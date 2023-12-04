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
          caption: i18n.t('forms.application.sitemap.k-a-n-e-c.caption'),
          title: i18n.t('forms.application.sitemap.k-a-n-e-c.title'),
          children: [{
            link: 'i-i-s-k-a-n-e-c-спрос-l',
            caption: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-спрос-l.caption'),
            title: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-спрос-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-k-a-n-e-c-персонал-l',
            caption: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-персонал-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-k-a-n-e-c-маркетолог-l',
            caption: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-маркетолог-l.caption'),
            title: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-маркетолог-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-k-a-n-e-c-основ-показат-l',
            caption: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-основ-показат-l.caption'),
            title: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-основ-показат-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-k-a-n-e-c-должность-l',
            caption: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-должность-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-k-a-n-e-c-целевая-аудит-l',
            caption: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-целевая-аудит-l.caption'),
            title: i18n.t('forms.application.sitemap.k-a-n-e-c.i-i-s-k-a-n-e-c-целевая-аудит-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})