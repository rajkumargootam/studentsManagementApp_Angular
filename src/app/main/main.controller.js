(function() {
  'use strict';

  angular
    .module('studentsManagementApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($resource) {
    var vm = this;

    function init(){
      vm.klassList = [];
      var resourceObj = $resource('http://pure-retreat-73401.herokuapp.com/api/v1/klasses.json',{
        access_token:'TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4'
      });
      vm.klassResp = resourceObj.get();
    }
   
     vm.showSections = function(klassId){
      var resourceObj = $resource('http://pure-retreat-73401.herokuapp.com/api/v1/klasses/'+klassId+'/sections.json',{
        access_token:'TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4'
      });
      vm.sectionResp = resourceObj.get();
     }
    init();
  }
})();
