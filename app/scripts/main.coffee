BB = BB or {}

BB.app = do ->

  _initSignUpTransition = ->

  initTokenInput = ->


  init: ->
    ($ document).on 'click', 'js_show_signup', _initSignUpTransition


$(BB.app.init)

