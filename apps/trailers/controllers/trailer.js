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
        value: preview,
        mediaControl: 'none',
        didCreateLayer: function() {
          sc_super();
          var vo = this.$('video');                
          vo.attr('controls', 'controls');
          this.set('layerLocationNeedsUpdate',YES);
          this.updateLayerIfNeeded();
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
