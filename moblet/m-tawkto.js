/* eslint no-undef: [0]*/
module.exports = {
  title: "mTawkto",
  style: "m-tawkto.less",
  template: 'm-tawkto.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function(scope) {
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/588b2e1163b0fb7e39a76aaa/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
    scope.TawkAPI = Tawk_API || {};
  },
  controller: function(
    $scope
    // $sanitize
  ) {
    $scope.TawkAPI.onLoad = function() {
      console.log('foiiii');
    };
  }
};
