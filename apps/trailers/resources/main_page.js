// ==========================================================================
// Project:   Trailers - mainPage
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

Trailers.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'container'.w(),
    theme: 'movies',
    defaultResponder: Trailers,
    container: SC.ContainerView.design({
      layout: { top:0, right: 0, bottom: 0, left: 0 },
      nowShowingBinding: 'Trailers.activePane'
    })
    
  })
    
});
