//============================================================================
// Trailers.Modals
//============================================================================
/*globals Trailers*/

/**
  This file contains the modal states for the application
  @author Josh Holt
*/

Trailers.mixin({
  
  ready: SC.Statechart.registerState({
    
    parallelStatechart: 'modals',
    
    enterState: function() {},
    
    exitState: function() {},
    
    // ..........................................................
    // ACTIONS
    // 
    showVideo: function() {
      this.goState('videoPopup');
    }
    
  }),
  
  videoPopup: SC.Statechart.registerState({
    
    parallelStatechart: 'modals',
    
    enterState: function() {
      // 1.) set a state var to be a ref to the modal
      // 2.) popup up the modal
    },
    exitState: function() {
      // 1.) get the state ref to the poped up modal
      // 2.) remove the modal
    },
    
    // ..........................................................
    // ACTIONS
    // 
    closeVideo: function() {
      this.goState('ready');
    }
    
  })
  
});