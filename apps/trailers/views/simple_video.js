// ==========================================================================
// Project:   Trailers.SimpleVideoView
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @class

  This soul purpose of this view is to hack around the fact the you can't 
  just swap out the value (video URL) to make the video change in a 
  SC.VideoView

  @extends SC.View
*/
Trailers.SimpleVideoView = SC.View.extend(
/** @scope Trailers.VideoHackView.prototype */ {
  
  videoURL: null,
  
  displayProperties: ['videoURL'],
  
  render: function(context, firstTime) {
    var url = this.get('videoURL');
    var videoStyle = {
      'position':'absolute', 
      'top':'50%', 
      'left':'50%', 
      'margin-left': '-320px', 
      'margin-top':'-240px', 
      'width':'640px', 
      'height':'480px',
      'background-color': '#000000'
    };
    context.begin('video').css(videoStyle).attr({'src': url, 'controls':'true'}).end();
    sc_super();
  }

});
