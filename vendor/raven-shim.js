define('raven', [], function() {
  "use strict";

  var Raven = window.Raven.noConflict();

  return { 'default': Raven };
});
