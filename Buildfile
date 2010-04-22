# ===========================================================================
# Project:   Trailers
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, :'sproutcore/media']
proxy '/trailers/home/feeds/', :to => 'trailers.apple.com'
proxy '/trailers/home/xml/', :to => 'trailers.apple.com'
