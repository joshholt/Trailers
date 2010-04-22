// ==========================================================================
// Project:   Trailers.Trailer
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Trailers */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Trailers.Trailer = SC.Record.extend(
/** @scope Trailers.Trailer.prototype */ {
  
  title:        SC.Record.attr(String),
  directors:    SC.Record.attr(String),
  poster:       SC.Record.attr(String),
  rating:       SC.Record.attr(String),
  // releasedate:  SC.Record.attr(SC.DateTime, {format: '%a, %d %b %Y'}), from the json feed
  releasedate:  SC.Record.attr(SC.DateTime, {format: '%Y-%m-%d'}),
  description:  SC.Record.attr(String),
  preview:      SC.Record.attr(String)

});
