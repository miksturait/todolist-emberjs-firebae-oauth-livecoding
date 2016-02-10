import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  open(authentication) {
    return Ember.RSVP.hash({
      provider: authentication.provider,
      uid: authentication.uid,
      currentUser: this._findOrCreateUser(authentication.uid, authentication[authentication.provider])
    });
  },

  _findOrCreateUser(uid, {displayName: name, profileImageURL: imageUrl}) {
    let store = this.get('store');

    return store.findRecord('user', uid)
    .then( function(user) {
      user.set('name', name);
      user.set('imageUrl', imageUrl);
      return user.save();
    })
    .catch( function() {
      let user = store.createRecord('user', {id: uid, name: name, imageUrl: imageUrl});
      return user.save();
    });
  }
});
