// ==========================================================================
// Project:   Trailers
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Trailers */

Trailers.main = function main() {
  Trailers.getPath('mainPage.mainPane').append();
  Trailers.trailersController.set('content',Trailers.store.find(Trailers.TRAILERS_QUERY_XML));
};

function main() { Trailers.main(); }
