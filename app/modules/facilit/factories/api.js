angular.module('facilit')
    .factory('ApiFactory', function () {
        var factory = {
            getApiToView                    : _getApiToView,
            apiFilter                       : _apiFilter,
            departmentFilter                : _departmentFilter,
            roleFilter                      : _roleFilter,
            servicesFilter                  : _servicesFilter,
            marketingFilter                 : _marketingFilter,
            accountingFilter                : _accountingFilter,
            businessDevelopmentFilter       : _businessDevelopmentFilter,
            humanResourcesFilter            : _humanResourcesFilter,
            productManagementFilter         : _productManagementFilter,
            engineeringFilter               : _engineeringFilter,
            researchAndDevelopmentFilter    : _researchAndDevelopmentFilter,
            salesFilter                     : _salesFilter,
            legalFilter                     : _legalFilter,
            trainingFilter                  : _trainingFilter,
            supportFilter                   : _supportFilter
        }
        return factory;

        function _apiFilter(data) {
            return {
                name        : data.name,
                photo       : data.photo,
                department  : data.department,
                role        : data.role
            };
        }

        function _getApiToView(response){
            var _data = [];
            var result = [];
            if (angular.isUndefined(response.data.users) )
                return;
            if (!Array.isArray(response.data.users))
                _data = [response.data.users];
            else
                _data = response.data.users;    
            angular.forEach( _data, function (val) {
                result.push(_apiFilter(val));
            });
            return result;           
        }

        function _departmentFilter(data){
            var resultado = []
            angular.forEach(data, function(element){ 
                resultado.push(element.department)
            })    
            var teste = resultado.filter( onlyUnique );
            return teste        
        }

        function _roleFilter(data){
            var resultado = []
            angular.forEach(data, function(element){ 
                resultado.push(element.role)
            })    
            var teste = resultado.filter( onlyUnique );
            return teste        
        }
    
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }

        function _servicesFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Services'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _marketingFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Marketing'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _accountingFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Accounting'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _businessDevelopmentFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Business Development'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _humanResourcesFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Human Resources'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _productManagementFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Product Management'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _engineeringFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Engineering'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _researchAndDevelopmentFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Research and Development'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _salesFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Sales'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _legalFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Legal'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _trainingFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Training'){
                    result.push(element)
                }                
            }) 
            return result
        }

        function _supportFilter(data){
            var result = []
            angular.forEach(data, function(element){ 
                if(element.department == 'Support'){
                    result.push(element)
                }                
            }) 
            return result
        }

        

         // function getDepartment(data){
            //     resultado = angular.forEach(data, function(element){                    
            //     })
            //     vm.tes =  resultado.filter( onlyUnique );
            //     console.log(element.department)
            // }

        // function onlyUnique(value, index, self) { 
        //     return self.indexOf(value) === index;
        // }
        
       
        // var unique = a.filter( onlyUnique );

       
    })