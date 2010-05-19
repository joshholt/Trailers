//============================================================================
// Trailers.Default
//============================================================================
/*globals Trailers*/

/**
  This file contains the default states for the application
  @author Josh Holt
*/

Trailers.mixin({
  
  loading: SC.Statechart.registerState({
    
    enterState: function() {
      Trailers.set('activePane', Trailers.getPath('miscPage.loaderView'));
    },
    
    exitState: function() { },
    
    // ..........................................................
    // ACTIONS
    // 
    
    trailersLoaded: function(trailers) {
      if (trailers) {
        this.goState('trailersReady');
      } else {
        this.goState('trailersLoadingFailure');
      }
    }
    
  }),
  
  trailersReady: SC.Statechart.registerState({
    
    initialSubState: 'iPadPageDefault',
    
    enterState: function() {},
    exitState: function() {}
    
    // ..........................................................
    // ACTIONS
    // 
    
  }),
  
  trailersLoadingFailure: SC.Statechart.registerState({
    
    initialSubState: 'failurePageDefault',
    
    enterState: function() {},
    exitState: function() {}
    
    // ..........................................................
    // ACTIONS
    //
    
  }),
  
  iPadPageDefault: SC.Statechart.registerState({
    
    parentState: 'trailersReady',
    
    enterState: function() {
      Trailers.set('activePane', Trailers.getPath('iPadPage.masterDetail'));
    },
    
    exitState: function() {
      
    }
    
  }),
  
  failurePageDefault: SC.Statechart.registerState({
    
    parentState: 'trailersLoadingFailure',
    
    enterState: function() {
      Trailers.set('activePane', Trailers.getPath('miscPage.failureMessageView'));
    },
    
    exitState: function() {
      
    }
    
  })
  
});