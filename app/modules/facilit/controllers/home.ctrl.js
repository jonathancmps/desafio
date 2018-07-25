(function () {
    "use strict"

    function HomeController(ApiService, ApiFactory){
        var vm      = this
        vm.title = 'Home Controller'
        var vm      = this; 
        vm.apiList  = [];

        _init()
        function _init(){
            ApiService.getApi().then(_sucessApi, _errorApi);
        }

        function _sucessApi(response){
            vm.apiList = ApiFactory.getApiToView(response);
            // vm.apiList = 'teste'
            // vm.apiList = ApiFactory.apiFilter(response)
            console.log(vm.apiList);
    
        }
    
        function _errorApi(error){
            console.log(error)
        }
    }
    angular.module("facilit").controller("HomeController", HomeController);
})();



// angular.module('mySales')
// .controller('HomeCtrl', function(ApiService, ApiFactory){
//     var vm      = this;
//     vm.title    = 'Página Home';
//     vm.apiList  = [];
    
//     _init();

//     function _init(){
//         ApiService.getApi().then(_sucessApi, _errorApi);
//     }

//     function _sucessApi(response){
//         vm.apiList = ApiFactory.getApiToView(response);
//         console.log(vm.apiList);

//     }

//     function _errorApi(error){
//         console.log(error)
//     }

//      function _addItem(data){
//          ApiService.addStorage(ApiFactory.apiFilter(data));
//      }



        
// })