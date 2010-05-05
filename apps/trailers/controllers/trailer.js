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
    var trailerView = SC.View.create();
    var preview = this.get('preview');
    if (this.get('hasContent')) {
      trailerView = SC.VideoView.create({
        //layout: { top: 80, right: 100, height: 400, left: 150 },
        value: preview,
        mediaControl: 'none',
        didCreateLayer: function() {
          sc_super();
          var vo = this.$('video');                
          vo.attr('controls', 'controls');
        },
        didAppendToDocument: function() {
          sc_super();
          var vo = this.$('video');                
          vo.attr('controls', 'controls');
        }
      });
    }
    return trailerView;
  }.property().cacheable(),
  
  playTrailer: function() {
    var trailer = this.get('trailerViewContent');
    if (trailer) {
      trailer.play(); 
    }
  }

});
