(function() {
  var BB;

  BB = BB || {};

  BB.app = (function() {
    var initTokenInput, _initSignUpTransition;
    _initSignUpTransition = function() {};
    initTokenInput = function() {};
    return {
      init: function() {
        return ($(document)).on('click', 'js_show_signup', _initSignUpTransition);
      }
    };
  })();

  $(BB.app.init);

}).call(this);
