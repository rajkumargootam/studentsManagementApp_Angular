(function() {
  'use strict';

  angular
    .module('studentsManagementApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
