# ===========================================================================
# Project:   Trailers
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

#config :all, :required => [:sproutcore, :'sproutcore/animation', :'sproutcore/statechart'], :theme => :'sproutcore/ace', :html5_manifest=> true
config :all, :required => [:sproutcore, :'sproutcore/animation', :'sproutcore/statechart'], :theme => :movies, :html5_manifest=> true
       
proxy '/trailers/home/feeds/', :to => 'trailers.apple.com'
proxy '/trailers/home/xml/',   :to => 'trailers.apple.com'

