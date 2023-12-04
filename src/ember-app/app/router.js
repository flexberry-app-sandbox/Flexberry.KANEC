import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-a-n-e-c-должность-l');
  this.route('i-i-s-k-a-n-e-c-должность-e',
  { path: 'i-i-s-k-a-n-e-c-должность-e/:id' });
  this.route('i-i-s-k-a-n-e-c-должность-e.new',
  { path: 'i-i-s-k-a-n-e-c-должность-e/new' });
  this.route('i-i-s-k-a-n-e-c-маркетолог-l');
  this.route('i-i-s-k-a-n-e-c-маркетолог-e',
  { path: 'i-i-s-k-a-n-e-c-маркетолог-e/:id' });
  this.route('i-i-s-k-a-n-e-c-маркетолог-e.new',
  { path: 'i-i-s-k-a-n-e-c-маркетолог-e/new' });
  this.route('i-i-s-k-a-n-e-c-основ-показат-l');
  this.route('i-i-s-k-a-n-e-c-основ-показат-e',
  { path: 'i-i-s-k-a-n-e-c-основ-показат-e/:id' });
  this.route('i-i-s-k-a-n-e-c-основ-показат-e.new',
  { path: 'i-i-s-k-a-n-e-c-основ-показат-e/new' });
  this.route('i-i-s-k-a-n-e-c-персонал-l');
  this.route('i-i-s-k-a-n-e-c-персонал-e',
  { path: 'i-i-s-k-a-n-e-c-персонал-e/:id' });
  this.route('i-i-s-k-a-n-e-c-персонал-e.new',
  { path: 'i-i-s-k-a-n-e-c-персонал-e/new' });
  this.route('i-i-s-k-a-n-e-c-спрос-l');
  this.route('i-i-s-k-a-n-e-c-спрос-e',
  { path: 'i-i-s-k-a-n-e-c-спрос-e/:id' });
  this.route('i-i-s-k-a-n-e-c-спрос-e.new',
  { path: 'i-i-s-k-a-n-e-c-спрос-e/new' });
  this.route('i-i-s-k-a-n-e-c-целевая-аудит-l');
  this.route('i-i-s-k-a-n-e-c-целевая-аудит-e',
  { path: 'i-i-s-k-a-n-e-c-целевая-аудит-e/:id' });
  this.route('i-i-s-k-a-n-e-c-целевая-аудит-e.new',
  { path: 'i-i-s-k-a-n-e-c-целевая-аудит-e/new' });
});

export default Router;
