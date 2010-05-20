/*global Movies*/
require("movies");
Movies.renderers.MasterDetail = SC.EmptyTheme.renderers.MasterDetail.extend({
  BORDER: 0
});

Movies.renderers.masterDetail = Movies.renderers.MasterDetail.create();