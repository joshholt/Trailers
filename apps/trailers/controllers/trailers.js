// ==========================================================================
// Project:   Trailers.trailersController
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @class

  This controller holds the main trailers collection.
  It is driven by a SC.Query.

  @extends SC.ArrayController
*/
Trailers.trailersController = SC.ArrayController.create({
  
  allowsEmptySelection: NO,
  allowsMultipleSelection: NO,
  
  hasContentObserver: function() {
    var content = this.get('content');
    
    if (content && content.get('length') > 0) {
      Trailers.sendAction('trailersLoaded', content);
    }
  }.observes('*content.[]')
  
});
