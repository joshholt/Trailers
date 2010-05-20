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
      Trailers.trailerController.set('nowShowing','front');
      if (this._currentVideo) {
       return; // short circut 
      }
      var videoPanel = Trailers.VideoPanel.generateWithView();
      videoPanel.append();
      
      this._currentVideo = videoPanel;
    },
    exitState: function() {
      if (this._currentVideo) {
        this._currentVideo.remove();
        this._currentVideo = null;
      }
    },
    
    // ..........................................................
    // ACTIONS
    // 
    closeVideo: function() {
      this.goState('ready');
    },
    
    showDetails: function() {
      Trailers.trailerController.set('nowShowing','back');
    },
    
    closeDetails: function() {
      this.goState('ready');
    }
    
  })
  
});