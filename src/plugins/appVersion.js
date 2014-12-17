// install   :     cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
// link      :     https://github.com/whiteoctober/cordova-plugin-app-version

angular.module('ngCordova.plugins.device', [])

  .factory('$cordovaDevice', ['$q', function ($q) {

    return {
      getAppVersion: function () {
        var q = $q.defer();
        cordova.getAppVersion(function (version) {
          q.resolve(version);
        });

        return q.promise;
      }
    };
  }]);
