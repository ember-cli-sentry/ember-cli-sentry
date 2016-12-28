define('raven', [], function() {
  "use strict";

  var isFastBoot = typeof FastBoot !== 'undefined';
  var Raven;

  if (isFastBoot) {
    Raven = FastBoot.require('raven');
    var _install = Raven.install;
    var isSetup = false;
    Raven.isSetup = function() {
      return isSetup;
    };
    Raven.install = function() {
      isSetup = true;
      return _install.call(Raven);
    };
    Raven.setUserContext = function(user) {
      Raven.setContext({ user: user });
    };
  } else {
    Raven = window.Raven.noConflict();
  }

  return { 'default': Raven };
});
