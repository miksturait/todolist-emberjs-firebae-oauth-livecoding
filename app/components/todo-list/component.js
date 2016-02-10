import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    addTodo() {
      let description = this.get('description'),
        store = this.get('store');

      store.createRecord('todo', {description: description}).save();

      this.set('description', '');
    },
    deleteTodo(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
});
