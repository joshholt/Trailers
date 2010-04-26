// ==========================================================================
// Project:   Trailers
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

Trailers.main = function main() {
  //Trailers.getPath('mainPage.mainPane').append();
  Trailers.getPath('mainPageIpad.mainPane').append();
  Trailers.trailersController.set('content',Trailers.store.find(Trailers.TRAILERS_QUERY_XML));
};

function main() { Trailers.main(); }
