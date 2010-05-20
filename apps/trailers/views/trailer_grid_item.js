// ==========================================================================
// Project:   Trailers.TrailerGridItem
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @class

  Represents a Trailer Poster and maybe a title.

  @extends SC.View
  @author Josh Holt
*/
Trailers.TrailerGridItem = SC.View.extend(SC.Control,
/** @scope Trailers.TrailerGridItem.prototype */ {
  
  content: null,
  
  layout: { centerX: 0, centerY: 0, height: 193, width: 134},
  
  createChildViews: function() {
     var content = this.get('content'), view, childViews = [], self = this;
     view = this.createChildView(SC.ImageView.extend({
       valueBinding: SC.binding('.content.poster', self),
       layout: {width: 134, height:193, centerX: 0, centerY: 0}
     }));
     childViews.push(view);
     
     view = this.createChildView(SC.LabelView.extend({
       layout: { height: 50 , centerX: 0, bottom: 10 , width: 134 },
       valueBinding: SC.binding('.content.title', self),
       render: function(context, firstTime){
         context.css({color:'#FFF', 'background-color': '#2d2d2d', 'text-align':'center'});
         sc_super();
       },
       isVisible: NO
     }));
     childViews.push(view);
     
     this.set('childViews',childViews);
  },
  
  mouseEntered: function(evt) {
    this.setPath('childViews.1.isVisible', YES);
    return YES;
  },
  
  mouseExited: function(evt) {
    this.setPath('childViews.1.isVisible', NO);
    return YES;
  }

});
