require("movies");
/*global Movies*/
Movies.ChromelessTheme = Movies.subtheme("chromeless", "chromeless");
Movies.ChromelessTheme.renderers.Button = SC.AceTheme.renderers.Button.extend({
  renderContents: function(context) {
    context = context.begin("label");
    this._titleRenderer.render(context);
    context = context.end();
  },
  updateContents: function(){
    this._titleRenderer.update();
  }
});

Movies.ChromelessTheme.renderers.button = Movies.ChromelessTheme.renderers.Button.create();