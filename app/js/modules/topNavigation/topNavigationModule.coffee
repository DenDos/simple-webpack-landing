topNavigationModule = ()->
  switchActiveLinks = ()->

  toggleMenu = (button, menu) ->
    $(button).toggleClass("active")
    $(menu).toggleClass("open")

  return api:
    toggleMenu: toggleMenu
    switchActiveLinks: switchActiveLinks

window.topNavigationModule = topNavigationModule().api
