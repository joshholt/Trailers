// ==========================================================================
// Project:   Trailers
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @namespace

  Trailers is an application to fetch and display movie trailers
  near you and allows you to watch them. It will also allow you
  to find where the movie is playing if it has been released
  on a map.
  
  @extends SC.Object
*/
Trailers = SC.Application.create(
  /** @scope Trailers.prototype */ {

  NAMESPACE: 'Trailers',
  VERSION: '0.1.0',

  store: null,
  
  initializeStore: function(dataSource) {
    this.set('store', SC.Store.create().from(dataSource));
  }

});
