(function() {
  'use strict';

  angular
    .module('studentsManagementApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
