// ==========================================================================
// Project:   Trailers.VideoPanel
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @class

  This is like the slick panel used in Hedwig for the demos...
  Here it will be used for the videos...

  @extends SC.PanelPane
  @author Josh Holt
*/
Trailers.VideoPanel = SC.PanelPane.extend(SC.Animatable,
/** @scope Trailers.VideoPanel.prototype */ {
  
  modelPane: SC.ModalPane.extend(SC.Animatable,{
    classNames: 'for-sc-panel'.w(),
    
    transitions: {
      opacity: 0.25
    },
    style: {opacity: 0.0 }
  }),
  
  transitions: { 
    transform: { 
      duration: 0.5, 
      timing: SC.Animatable.TRANSITION_EASE_IN_OUT
    },
    opacity: { 
      duration: 0.5, 
      timing: SC.Animatable.TRANSITION_EASE_IN_OUT,
      action: function(){ 
        if (this.style.opacity === 0) this._call_when_done();
      } 
    }
  },
  style: { opacity: 0.0, transform: "scale3d(.1,.1,1)" },
  layout: { width: 250, height: 480 },
  theme: "popover",

  append: function() {
    sc_super();
    this.invokeLater("sizeUp", 1);
  },

  sizeUp: function() {
    this.adjust({
      opacity: 1,
      transform: "scale3d(1,1,1)"
    });
    this.modalPane.adjust("opacity", 0.50);
  },

  remove: function() {
    this._call_when_done = arguments.callee.base;
    this.adjust({
      opacity: 0,
      transform: "scale3d(.1,.1,1)"
    });
    this.modalPane.adjust("opacity", 0);
  },

  classNames: "demo".w(),

  defaultResponder: Trailers,
  layout: { top: 0, bottom: 0, width: 768, centerX: 0 },
  contentView: null,
  theme: "movies"
});

Trailers.VideoPanel.generateWithView = function(view) {
  return Trailers.VideoPanel.create({
    contentView: SC.View.design({
      childViews: "front back".w(),
      init: function() {
        sc_super();
        
        if (SC.Animatable.enableCSS3DTransforms) {
          this.back.flip(180, YES);
        } else {
          this.back.set("isVisible", NO);
        }
      },
      
      nowShowingBinding: "Trailers.trailerController.nowShowing",      
      nowShowing: "front",
      flip: function() {
        if (this.get("nowShowing") == "back") this.set("nowShowing", "front");
        else this.set("nowShowing", "back");
      },
      
      nowShowingDidChange: function() {
        var ns = this.get("nowShowing");
        if (ns == "front") {
          if (SC.Animatable.enableCSS3DTransforms) {
            this.front.flip(0);
            this.back.flip(180);
          } else {
            this.front.set("isVisible", YES);
            this.back.set("isVisible", NO);
          }
        } else {
          if (SC.Animatable.enableCSS3DTransforms) {
            this.front.flip(180);
            this.back.flip(360);
          } else {
            this.back.set("isVisible", YES);
            this.front.set("isVisible", NO);
          }
        }
      }.observes("nowShowing"),
      
      back: SC.WorkspaceView.design(SC.Animatable, {
        classNames: "flippable".w(),
        transitions: {
          "transform": {
            "duration": 0.6, timing: SC.Animatable.TRANSITION_EASE_IN_OUT
          }
        },
        style: {
          "rotateY": "0deg"
        },

        flip: function(rot, d) {
          if (d) this.disableAnimation();
          this.adjust({
            "transform": "rotateY(" + rot + "deg)"
          });
          if (d) this.enableAnimation();
        },
        
        
        topToolbar: SC.ToolbarView.design({
          layout: { top: 0, height: 44, left: 0, right: 0 },
          childViews: "close source".w(),
          close: SC.ButtonView.design({
            layout: { left: 7, centerY: 0, height: 30, width: 100 },
            title: "Close",
            action: "closeDetails",
            controlSize: SC.AUTO_CONTROL_SIZE,
            isCancel: YES
          }),

          source: SC.ButtonView.design({
            layout: { right: 7, centerY: 0, height: 30, width: 100 },
            title: "Trailer",
            action: "showVideo",
            controlSize: SC.AUTO_CONTROL_SIZE,
            isDefault: YES
          })
        }),
        contentView: SC.ScrollView.design({
          classNames: "source".w(),
          borderStyle: SC.BORDER_NONE,
          contentView: SC.StaticContentView.design({
            classNames: "source".w(),
            contentBinding: "Trailers.trailerController.description"
          })

        })
      }),
      
      front: SC.WorkspaceView.design(SC.Animatable, {
        classNames: "flippable".w(),
        transitions: {
          "transform": {
            "duration": 0.5, timing: SC.Animatable.TRANSITION_EASE_IN_OUT
          }
        },
        style: {
          "rotateY": "0deg"
        },

        flip: function(rot) {
          this.adjust({
            "transform": "rotateY(" + rot + "deg)"
          });
        },

        topToolbar: SC.ToolbarView.design({
          layout: { top: 0, height: 44, left: 0, right: 0 },
          childViews: "close source".w(),
          close: SC.ButtonView.design({
            layout: { left: 7, centerY: 0, height: 30, width: 100 },
            title: "Close",
            action: "closeVideo",
            controlSize: SC.AUTO_CONTROL_SIZE,
            isCancel: YES
          }),

          source: SC.ButtonView.design({
            layout: { right: 7, centerY: 0, height: 30, width: 100 },
            title: "Details",
            action: "showDetails",
            controlSize: SC.AUTO_CONTROL_SIZE,
            isDefault: YES
          })
        }),
        contentView:  Trailers.SimpleVideoView.extend({
          layout: {centerX: 0, centerY: 0},
          videoURLBinding: 'Trailers.trailerController.preview'
        })
      })
    })
  });
};