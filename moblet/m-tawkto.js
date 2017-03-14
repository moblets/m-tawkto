/* eslint no-undef: [0]*/
module.exports = {
  title: "mTawkto",
  style: "m-tawkto.less",
  template: 'm-tawkto.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json",
    es: "lang/es-ES.json"
  },
  link: function(scope, element) {
    scope.div = document.createElement('div');
    scope.div.classList.add("iframe-holder-tawkto");
    scope.iframe = document.createElement('iframe');
    scope.div.appendChild(scope.iframe);
    element[0].appendChild(scope.div);
  },
  controller: function($scope, $timeout, $mAppDef, $mDataLoader) {
    $scope.moblet.isLoading = true;
    $scope.$watch("iframe", function() {
      $scope.info = $mAppDef.info();
      var dataLoadOptions = {
        offset: 0,
        cache: false
      };
      $mDataLoader.load($scope.moblet, dataLoadOptions)
          .then(function(data) {
            console.log(data);
            if (isDefined(data.id)) {
              var url = $scope.info.app_share_url.split("dev").length > 1 ? "http://m.dev.app.vc/id/" : "http://m.app.vc/id/";
              $scope.iframe.src = url + $scope.info.id + "/tawkto/" + data.id;
              $scope.iframe.onload = function() {
                $timeout(function() {
                  $scope.moblet.isLoading = false;
                  $scope.moblet.noContent = false;
                }, 200);
              };
            } else {
              $timeout(function() {
                $scope.moblet.isLoading = false;
                $scope.moblet.noContent = true;
              }, 200);
            }
          }
        );
    });
  }
};
