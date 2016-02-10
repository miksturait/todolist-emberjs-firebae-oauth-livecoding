import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    addTodo() {
      if (this.get('session.isAuthenticated')) {
        let description = this.get('description'),
          store = this.get('store'),
          user = this.get('session.currentUser');

        store.createRecord('todo', {description: description, creator: user, done: false}).save();

        this.set('description', '');
      } else {
        alert('please sign in first');
      }
    },
    deleteTodo(todo) {
      if (this.get('session.isAuthenticated')) {
        todo.deleteRecord();
        todo.save();
      } else {
        alert('please sign in first');
      }
    }
  }
});
