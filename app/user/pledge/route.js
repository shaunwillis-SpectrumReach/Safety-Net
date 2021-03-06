import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model() {
    return this.store.query('pledge', {
      mine: true,
    });
  },

  actions: {
    reloadData() {
      this.refresh();
    }
  }
});
