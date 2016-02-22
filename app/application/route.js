import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      todos: this.store.findAll('todo')
    });
  },

  beforeModel: function () {
    return this.get("session").fetch().catch(function () {} );
  },

  actions: {
    signIn: function (provider = "google") {
      this.get("session").open("firebase", {provider: provider});
    },
    signOut: function () {
      this.get("session").close();
    }
  }
});
