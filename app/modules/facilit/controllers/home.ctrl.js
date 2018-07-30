(function () {
    "use strict"

    function HomeController(ApiService, ApiFactory){
        var vm      = this
         vm.apiList  =  []         
         vm.categories = []
         vm.teste = []

        _init()
        function _init(){
            ApiService.getApi().then(_sucessApi, _errorApi)           
        }

        function _sucessApi(response){
            vm.apiList = ApiFactory.getApiToView(response)

            vm.department = ApiFactory.departmentFilter(vm.apiList)

            vm.role = ApiFactory.roleFilter(vm.apiList)

            vm.depServices = ApiFactory.servicesFilter(vm.apiList)
            console.log(vm.depServices)

            vm.depMarketing = ApiFactory.marketingFilter(vm.apiList)

            vm.depAccounting = ApiFactory.accountingFilter(vm.apiList)

            vm.depBusinessDevelopment = ApiFactory.businessDevelopmentFilter(vm.apiList)

            vm.depHumanResources = ApiFactory.humanResourcesFilter(vm.apiList)

            vm.depProductManagement = ApiFactory.productManagementFilter(vm.apiList)

            vm.depEngineering = ApiFactory.engineeringFilter(vm.apiList)

            vm.depResearchAndDevelopment = ApiFactory.researchAndDevelopmentFilter(vm.apiList)
            
            vm.depSales = ApiFactory.salesFilter(vm.apiList)

            vm.depLegal = ApiFactory.legalFilter(vm.apiList)
            
            vm.depTraining = ApiFactory.trainingFilter(vm.apiList)
            
            vm.depSupport = ApiFactory.supportFilter(vm.apiList)
        }         
    
        function _errorApi(error){
            console.log(error)
        }

        vm.checkCategory = function(data){
            switch(data){
                case "Services":
                    vm.categories.push(vm.depServices)
                    // console.log(vm.categories)
                    break;
                case "Marketing":
                    vm.categories.push(vm.depMarketing)
                    // console.log(vm.categories)
                    break;
                case "Accounting":
                    vm.categories.push(vm.depAccounting)
                    // console.log(vm.categories)
                    break;    
                case "Business Development":
                    vm.categories.push(vm.depBusinessDevelopment)
                    // console.log(vm.categories)
                    break;    
                case "Human Resources":
                    vm.categories.push(vm.depHumanResources)
                    // console.log(vm.categories)
                    break;    
                case "Product Management":
                    vm.categories.push(vm.depProductManagement)
                    // console.log(vm.categories)
                    break;    
                case "Engineering":
                    vm.categories.push(vm.depEngineering)
                    // console.log(vm.categories)
                    break;    
                case "Research and Development":
                    vm.categories.push(vm.depResearchAndDevelopment)
                    // console.log(vm.categories)
                    break;
            }                       
        }               

        vm.filtred = function organize(data){
            var arr = []
            for (var i =0; i<data.length; i++){
                data.forEach(function(element){
                    vm.teste.push(element[i])
                }) 
            } console.log(vm.teste)
        
        }       
    }
    angular.module("facilit").controller("HomeController", HomeController);
})();