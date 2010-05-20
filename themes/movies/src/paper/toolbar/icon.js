require("src/paper/paper");
/*global Paper Movies*/
Movies.IconTheme = Movies.Paper.subtheme("icon", "icon");
Movies.IconTheme.renderers.Button = Movies.renderers.Button.extend({
  renderContents: function(context) {
    if (!this.imageRenderer) this.imageRenderer = this.theme.image();
    this.imageRenderer.attr('src', this.icon);
    
    context = context.begin("img");
    this.imageRenderer.render(context);
    context = context.end();
  },
  updateContents: function(){
    this.imageRenderer.attr('src', this.icon);
    this.imageRenderer.update();
  },
  didAttachLayer: function(l){ 
    SC.AceTheme.renderers.Button.didAttachLayer.call(this, l);
    this.imageRenderer.attachLayer(this.provide("img")); 
  },
  didDetachLayer: function(){
    SC.AceTheme.renderers.Button.didDetachLayer.call(this);
    this.imageRenderer.detachLayer();
  }
});

Movies.IconTheme.renderers.button = Movies.IconTheme.renderers.Button.create();