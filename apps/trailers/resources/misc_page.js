// ==========================================================================
// Project:   Trailers - miscPage
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

sc_require('views/simple_video');

Trailers.miscPage = SC.Page.design({
  
  loaderView: SC.ProgressView.design({
    layout: {centerX: 0, centerY: 0, width: 250, height: 24 }
  }),
  
  failureMessageView: SC.LabelView.design({
    layout: { centerX: 0, centerY: 0, width: 300, height: 24 },
    value: 'There was a problem loading the trailers list....',
    fontWeight: SC.BOLD_WEIGHT
  }),
  
  currentVideo: Trailers.SimpleVideoView.design({
    videoURLBinding: 'Trailers.trailerController.preview'
  })
  
});