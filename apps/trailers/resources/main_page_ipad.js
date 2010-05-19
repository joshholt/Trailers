// ==========================================================================
// Project:   Trailers - mainPage
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

Trailers.mainPageIpad = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'masterDetail'.w(),
    
    masterDetail: SC.MasterDetailView.design({
      masterWidth: 230,
      masterView: SC.WorkspaceView.extend({
        topToolbar: SC.ToolbarView.extend({ }),
        contentView: SC.View.extend({ 
          childViews: 'trailerList'.w(),
          backgroundColor: '#dedede',

          trailerList: SC.ScrollView.design({
            contentView: SC.ListView.design({
              contentBinding: 'Trailers.trailersController',
              selectionBinding: 'Trailers.trailersController.selection',
              contentValueKey: 'title',
              rowHeight: 40
            })
          })
        })
      }),

      detailView: SC.WorkspaceView.extend({
        topToolbar: SC.ToolbarView.extend({
          childViews: "showHidePicker".w(),
          showHidePicker: SC.ButtonView.extend({
            layout: { left: 7, centerY: 0, height: 30, width: 100 },
            controlSize: SC.AUTO_CONTROL_SIZE,
            title: "Trailers",
            action: "toggleMasterPicker",
            isVisible: NO,
            isVisibleBinding: ".parentView.masterIsHidden"
          })
        }),
        
        contentView: SC.View.design({
          childViews: 'detailWrapper trailerWrapper'.w(),
          detailWrapper: SC.WellView.design({
            layout: { top: 10, left: 10, height: 275, right: 10},
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
                    var ret = value ? value.toFormattedString('%b %d, %Y') : 'N/A';
                    return ret;
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
            layout: {top: 293, right: 10, left: 10, bottom: 10},
            childViews: 'trailerView'.w(),
            isVisibleBinding: 'Trailers.trailerController.hasContent',
            trailerView: SC.ContainerView.design({
              nowShowingBinding: 'Trailers.trailerController.trailerViewContent'
            })
          })
        })
      }) // END Detail Content View
    }) // END Detail View
  }) // END MasterDetailView
});
