var q = require('q');
window.mCustomMethod = {
  function1: function() {
      console.log("hello world");
      var defer = q.defer();
      console.log(window.customMethodAccessView.getInput());
      window.customMethodsAccessApi
            .getInterfaceUrl('f1').then(function(data) {
              console.log('resolved', data);
              defer.resolve(data);
            });
      return defer.promise;
    }
};
