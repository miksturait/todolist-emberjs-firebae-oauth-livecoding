import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    addTodo() {
      let description = this.get('description'),
        store = this.get('store'),
        user = this.get('session.currentUser');

      store.createRecord('todo', {description: description, creator: user, done: false}).save();

      this.set('description', '');
    },
    deleteTodo(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
});
