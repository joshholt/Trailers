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
  
  contentBinding: 'Trailers.trailersController.selection'
  

});
