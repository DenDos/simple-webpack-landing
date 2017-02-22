topNavigationModule = ()->
  switchActiveLinks = ()->

  toggleMenu = (button, menu) ->
    $(button).toggleClass("active")
    $(menu).toggleClass("open")
    $('.overlay').toggleClass("open")
    toogleWrap(button)

  toogleWrap = (button) ->
    active = $(button).hasClass('active')
    marginRight = if active then 200 else 0
    marginLeft = if active then -200 else 0
    $('.wrap').toggleClass("slided")

  return api:
    toggleMenu: toggleMenu
    switchActiveLinks: switchActiveLinks

window.topNavigationModule = topNavigationModule().api
