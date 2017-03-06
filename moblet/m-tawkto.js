/* eslint no-undef: [0]*/
module.exports = {
  title: "mTawkto",
  style: "m-tawkto.less",
  template: 'm-tawkto.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function(scope, element) {
    // var iframe = document.createElement('iframe');

    // var body = document.createElement("body");

    // var script = "window.Tawk_API = window.Tawk_API || {};";
    // script += "window.Tawk_API.onLoad = function() {window.Tawk_API.maximize();};";

    // var s0 = document.createElement("script");
    // s0.innerHTML = script;

    // var s1 = document.createElement("script");
    // s1.async = true;
    // s1.src = 'https://embed.tawk.to/588b2e1163b0fb7e39a76aaa/default';
    // s1.charset = 'UTF-8';
    // s1.setAttribute('crossorigin', '*');

    // body.appendChild(s0);
    // body.appendChild(s1);

    // var fakeBody = "<body>" + body.innerHTML + "</body>";

    // iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(fakeBody);

    // element.append(iframe);


    scope.div = document.createElement('div');

    scope.div.classList.add("iframe-holder-tawkto");
    scope.iframe = document.createElement('iframe');
    scope.div.appendChild(scope.iframe);
    element[0].appendChild(scope.div);

  },
  controller: function($scope, $timeout, $mAppDef, $mDataLoader) {
    $scope.moblet.isLoading = true;
    $scope.$watch("iframe", function() {
      console.log($mAppDef.info());
      console.log($scope.moblet);

      var dataLoadOptions = {
        offset: 0,
        cache: false
      };
      $mDataLoader.load($scope.moblet, dataLoadOptions)
          .then(function(data) {
            console.log(data);
            $scope.iframe.src = "http://m.dev.app.vc/id/777118/tawkto/588b2e1163b0fb7e39a76aaa";
          }
        );
    });


    // $scope.moblet.isLoading = true;


    // window.Tawk_API = window.Tawk_API || {};
    // window.Tawk_API.disableMobileBackHistory = true;
    // window.Tawk_API.onChatStarted = function() { window.Tawk_API.maximize(); }
    //  ;
    // };
    // var s1 = document.createElement("script");
    // var s0 = document.getElementsByTagName("script")[0];
    // s1.async = true;
    // s1.src = 'https://embed.tawk.to/588b2e1163b0fb7e39a76aaa/default';
    // s1.charset = 'UTF-8';
    // s1.setAttribute('crossorigin', '*');
    // s0.parentNode.insertBefore(s1, s0);
    // function layout() {
    //   $timeout(function() {
    //     document.querySelector("#tawkchat-container").style.top = "43px";
    //     document.querySelector("#tawkchat-container").style.bottom = "43px";
    //     layout();
    //   }, 1500);
    // }

    // window.Tawk_API = window.Tawk_API || {};
    // window.Tawk_API.disableMobileBackHistory = true;



    // window.Tawk_API.onLoad = function() {
    //   layout();
    //   window.Tawk_API.maximize();
    // };
    // var s1 = document.createElement("script");
    // var s0 = document.getElementsByTagName("script")[0];
    // s1.async = true;
    // s1.src = 'https://embed.tawk.to/588b2e1163b0fb7e39a76aaa/default';
    // s1.charset = 'UTF-8';
    // s1.setAttribute('crossorigin', '*');
    // s0.parentNode.insertBefore(s1, s0);
  }
};
