// ==========================================================================
// Project:   Trailers - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Trailers */

// This page describes the main user interface for your application.  
Trailers.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'master detail'.w(),
    
    master: SC.View.design({
      layout: { top: 0, width: 230, bottom: 0, left: 0 },
      childViews: 'trailerList'.w(),
      backgroundColor: '#dedede',
      
      trailerList: SC.ScrollView.design({
        layout: { top: 0, right: 0, bottom: 0, left: 0 },
        contentView: SC.ListView.design({
          layout: { top: 0, right: 0, bottom: 0, left: 0 },
          contentBinding: 'Trailers.trailersController',
          selectionBinding: 'Trailers.trailersController.selection',
          contentValueKey: 'title',
          rowHeight: 40
        })
      })
    }),
    
    detail: SC.View.design({
      layout: { top: 0, right: 0, bottom: 0, left: 230 },
      childViews: 'detailWrapper trailerWrapper'.w(),
      backgroundColor: '#000',
      detailWrapper: SC.WellView.design({
        layout: { top: 10, left: 10, bottom: 418, right: 10},
        isVisibleBinding: 'Trailers.trailerController.hasContent',
        contentView: SC.View.design({
          childViews: ['titleView',  'releaseDateView', 'ratingView', 
                       'posterView', 'descriptionView'],
          
          titleView: SC.LabelView.design({
            layout: { top: 0, right: 0, height: 18, left: 150 },
            valueBinding: 'Trailers.trailerController.title'
          }),
          
          releaseDateView: SC.LabelView.design({
            layout: { top: 26, left: 150, height: 18, width: 240},
            valueBinding: SC.binding('Trailers.trailerController.releasedate')
              .transform(function(value,binding) { 
                return value.toFormattedString('%b %d, %Y'); 
              })
          }),
          
          ratingView: SC.LabelView.design({
            layout: { top: 54, width: 100, height: 18, left: 150 },
            valueBinding: 'Trailers.trailerController.rating'
          }),
          
          descriptionView: SC.LabelView.design({
            layout: { top: 80, right: 0, height: 115, left: 150 },
            valueBinding: 'Trailers.trailerController.description'
          }),
          
          posterView: SC.ImageView.design({
            layout: { top: 0, width: 134, height: 193, left: 0 },
            valueBinding: 'Trailers.trailerController.poster'
          })
          
        })
      }),
      
      trailerWrapper: SC.View.design({
        layout: {bottom: 10, height: 400, width: 600, centerX: 0},
        childViews: 'trailerView'.w(),
        
        trailerView: SC.VideoView.design({
          valueBinding: 'Trailers.trailerController.preview',
          isVisibleBinding: 'Trailers.trailerController.hasContent'
        })
      })
    })
  })

});
