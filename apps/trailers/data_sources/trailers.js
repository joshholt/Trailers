// ==========================================================================
// Project:   Trailers.TrailersDataSource
// Copyright: ©2010 Metal Rooster Design.
// ==========================================================================
/*globals Trailers */

/** @class

  This is the data source for the Trailers application
  Currently it pulls the Trailers from Apple's "current.xml"
  or their "just_added.json" feed

  I hope to find an actual service but for now this is the best 
  that I can come up with

  @extends SC.DataSource
*/
sc_require('models/trailer');

Trailers.TRAILERS_QUERY_JSON = SC.Query.local(Trailers.Trailer, {
  orderBy: 'id DESC',
  url: '/trailers/home/feeds/just_added.json'
});
Trailers.TRAILERS_QUERY_XML = SC.Query.local(Trailers.Trailer, {
  orderBy: 'id ASC',
  url: '/trailers/home/xml/current.xml'
});

Trailers.TrailersDataSource = SC.DataSource.extend(
/** @scope Trailers.TrailersDataSource.prototype */
{

  // ..........................................................
  // QUERY SUPPORT
  // 
  fetch: function(store, query) {
    if (!query) return NO;

    var url = query.get('url');
    if (url && query === Trailers.TRAILERS_QUERY_JSON) {
      SC.Request.getUrl(url).json().notify(this, 'didFetchTrailers', store, query).send();
      return YES;
    } else if (url && query === Trailers.TRAILERS_QUERY_XML) {
      SC.Request.getUrl(url).xml().notify(this, 'didFetchXMLTrailers', store, query).send();
      return YES;
    } else {
      return NO;
    }
  },

  didFetchTrailers: function(response, store, query) {
    if (SC.ok(response)) {
      var recs = response.get('body');
      if (recs) {
        for (var i = 0; i < recs.length; i++) {
          recs[i].guid = recs.length - i;
          recs[i].releasedate = recs[i].releasedate.replace(' 00:00:00 +0000', '');
        }
        store.loadRecords(Trailers.Trailer, recs);
        store.dataSourceDidFetchQuery(query);
      } else {
        store.dataSourceDidErrorQuery(query, response);
      }
    } else store.dataSourceDidErrorQuery(query, response);
  },

  didFetchXMLTrailers: function(response, store, query) {
    if (SC.ok(response)) {

      var xmlDoc = response.get('body'),
      recs = [],
      guid = 0;
      var infoElements = ["title", "rating", "releasedate", "director", "description"];
      var rootElements = ["poster", "preview"];
      if (xmlDoc) {
        SC.$(xmlDoc).find("movieinfo").forEach(function(movie) {
          var currentMovie = {};
          var movieinfo = SC.$(movie),
          info = movieinfo.children('info');
          currentMovie.guid = guid++;

          infoElements.forEach(function(el) {
            currentMovie[el] = info.children(el) ? info.children(el).text() : "";
          });
          rootElements.forEach(function(el) {
            if (el === 'poster') {
              currentMovie[el] = movieinfo.children(el).children('location').text();
            } else if (el === 'preview') {
              currentMovie[el] = movieinfo.children(el).children('large').text();
            }
          });

          recs.push(currentMovie);
        });
        store.loadRecords(Trailers.Trailer, recs);
        store.dataSourceDidFetchQuery(query);
      } else {
        store.dataSourceDidErrorQuery(query, response);
      }
    } else store.dataSourceDidErrorQuery(query, response);
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  retrieveRecord: function(store, storeKey) {

    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    return NO; // return YES if you handled the storeKey
  },

  createRecord: function(store, storeKey) {

    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    return NO; // return YES if you handled the storeKey
  },

  updateRecord: function(store, storeKey) {

    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.
    return NO; // return YES if you handled the storeKey
  },

  destroyRecord: function(store, storeKey) {

    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    return NO; // return YES if you handled the storeKey
  }

});

Trailers.initializeStore(Trailers.TrailersDataSource.create());
