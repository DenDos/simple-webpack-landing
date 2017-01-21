require './topNavigationModule.coffee'

$ ->
  $('.menu-btn').click ()->
    topNavigationModule.toggleMenu(this, '.mobile-menu')

