require './topNavigationModule.coffee'

$ ->
  $('.menu-btn').click ()->
    topNavigationModule.toggleMenu(this, '.mobile-menu')

  $("a[rel='m_PageScroll2id']").click (e)->
    $('li.active').removeClass('active')
    $(this).parent().addClass('active')

  $(document).on 'scroll', ->
    scrollTop = $(this).scrollTop()
    if scrollTop <= 0
      $('li.active').removeClass('active')
      $('#home').addClass('active')
