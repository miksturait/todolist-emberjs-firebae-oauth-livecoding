import DS from 'ember-data';
import moment from 'moment';
import Ember from 'ember';

export default DS.Model.extend({
  description: DS.attr('string'),
  done: DS.attr('boolean'),
  creator: DS.belongsTo('user'),
  createdAt: DS.attr('number'),

  sinceCreatedAt: Ember.computed('createdAt', function () {
    return moment(this.get('createdAt')).fromNow();
  })
});
