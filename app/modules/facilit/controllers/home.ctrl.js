(function () {
    "use strict"

    function HomeController(ApiService, ApiFactory){
        var vm      = this
        vm.title = 'Home Controller'
        var vm      = this; 
         vm.apiList  = [];

        // vm.checkCategory = (data) =>{
        //     var arr = []
        //     if(data == 'Services'){
        //         arr.push(data)
        //     }return(arr)
        // }

        vm.checkCategory = (data) =>{
            if(data == 'Services'){
                vm.apiList = vm.depServices;
            }
        }

        _init()
        function _init(){
            ApiService.getApi().then(_sucessApi, _errorApi);           
        }

        function _sucessApi(response){

            vm.apiList = ApiFactory.getApiToView(response);
            console.log(vm.apiList)

           

            vm.department = ApiFactory.departmentFilter(vm.apiList) 
            console.log(vm.department)

            vm.role = ApiFactory.roleFilter(vm.apiList)

             vm.depServices = ApiFactory.servicesFilter(vm.apiList)
             

            // vm

            //vm.department
           // searchQuery={}
    
        }         
    
        function _errorApi(error){
            console.log(error)
        }
    }
    angular.module("facilit").controller("HomeController", HomeController);
})();