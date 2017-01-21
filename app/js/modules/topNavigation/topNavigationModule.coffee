topNavigationModule = ()->
  toggleMenu = (button, menu) ->
    $(button).toggleClass("active")
    $(menu).toggleClass("open")

  return api:
    toggleMenu: toggleMenu

window.topNavigationModule = topNavigationModule().api
