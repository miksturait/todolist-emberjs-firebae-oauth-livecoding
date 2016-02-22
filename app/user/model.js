import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  todos: DS.hasMany('todo', {inverse: 'creator'})
});
