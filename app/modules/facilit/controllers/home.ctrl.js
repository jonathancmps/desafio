(function () {
    "use strict"

    function HomeController(ApiService, ApiFactory){
        var vm      = this
        vm.title = 'Home Controller'
         vm.apiList  = [];
         
         vm.categoies = []

        // vm.checkCategory = (data) =>{
        //     var arr = []
        //     if(data == 'Services'){
        //         arr.push(data)
        //     }return(arr)
        // }

        // vm.checkCategory = (data) =>{
        //     vm.click = "clicked"
        //     if(data == 'Services'){
                
        //         vm.apiList = vm.depServices;
        //     }
        // } "Services", "Marketing", "Accounting", "Business Development", "Human Resources", "Product Management",
        //  "Engineering", "Research and Development", "Sales", "Legal", "Training", "Support"

        vm.checkCategory = function(data){
            switch(data) {
                case "Services":
                    vm.categoies.push(vm.depServices)
                    break;
                case "Marketing":
                    vm.categoies.push(vm.depMarketing)
                    break;
                case "Accounting":
                    vm.categoies.push(vm.depAccounting)
                    break;    
                case "Business Development":
                    vm.categoies.push(vm.depBusinessDevelopment)
                    break;    
                case "Human Resources":
                    vm.categoies.push(vm.depHumanResources)
                    break;    
                case "Product Management":
                    vm.categoies.push(vm.depProductManagement)
                    break;    
                case "Engineering":
                    vm.categoies.push(vm.depEngineering)
                    break;    
                case "Research and Development":
                    vm.categoies.push(vm.depResearchAndDevelopment)
                    break; 
            }
            
        }

        vm.filtred = function organize(data){
            var arr2 = []
            for (var i =0; i<data.length; i++){
                data.forEach(function(element){
                    arr2.push(element[i])
                }) 
            }return arr2     
        }
            // var result = []
            // angular.forEach(vm.depMarketing, function(element){
                
            //     for(var i; i < element.length; i++){
            //         result.push(element[i])
            //     }
            //     console.log(result)
            // })
            // return result
        





        _init()
        function _init(){
            ApiService.getApi().then(_sucessApi, _errorApi);           
        }

        function _sucessApi(response){
            vm.apiList = ApiFactory.getApiToView(response);
            // console.log(vm.apiList)

            vm.department = ApiFactory.departmentFilter(vm.apiList) 
            // console.log(vm.department)

            vm.role = ApiFactory.roleFilter(vm.apiList)

            vm.depServices = ApiFactory.servicesFilter(vm.apiList)

            vm.depMarkeding = ApiFactory.marketingFilter(vm.apiList)
            // console.log(vm.depMarkeding)

            vm.depAccounting = ApiFactory.accountingFilter(vm.apiList)
            // console.log(vm.depAccounting)

            vm.depBusinessDevelopment = ApiFactory.businessDevelopmentFilter(vm.apiList)
            // console.log(vm.depBusinessDevelopment)

            vm.depHumanResources = ApiFactory.humanResourcesFilter(vm.apiList)
            // console.log(vm.depHumanResources)

            vm.depProductManagement = ApiFactory.productManagementFilter(vm.apiList)
            // console.log(vm.depProductManagement)

            vm.depEngineering = ApiFactory.engineeringFilter(vm.apiList)
            // console.log(vm.depEngineering)

            vm.depResearchAndDevelopment = ApiFactory.researchAndDevelopmentFilter(vm.apiList)
            // console.log(vm.depResearchAndDevelopment)
            
            vm.depSales = ApiFactory.salesFilter(vm.apiList)
            // console.log(vm.depSales) 

            vm.depLegal = ApiFactory.legalFilter(vm.apiList)
            // console.log(vm.depLegal)
            
            vm.depTraining = ApiFactory.trainingFilter(vm.apiList)
            // console.log(vm.depTraining) 
            
            vm.depSupport = ApiFactory.supportFilter(vm.apiList)
            // console.log(vm.depSupport) 
            
    
        }         
    
        function _errorApi(error){
            console.log(error)
        }

       
    }
    angular.module("facilit").controller("HomeController", HomeController);
})();