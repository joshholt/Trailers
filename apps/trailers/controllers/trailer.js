// ==========================================================================
// Project:   Trailers.trailerController
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @class

  This controller represents the currently select
  trailer in the trailers collection. This is fed
  by the record array held by the trailersController.

  @extends SC.ObjectController
*/
Trailers.trailerController = SC.ObjectController.create(
/** @scope Trailers.trailerController.prototype */ {

  contentBinding: 'Trailers.trailersController.selection',
  
  trailerViewContent: function() {
    var preview = this.get('preview');
    var trailerView = SC.VideoView.create({
      layout: { top: 80, right: 100, height: 400, left: 150 },
      mediaControl: 'normal',
      value: preview
    });
    return trailerView;
  }.property('content').cacheable(),
  
  playTrailer: function() {
    var trailer = this.get('trailerViewContent');
    if (trailer) {
      trailer.play(); 
    }
  }

});
