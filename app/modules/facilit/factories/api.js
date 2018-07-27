angular.module('facilit')
    .factory('ApiFactory', function () {
        var factory = {
            getApiToView       : _getApiToView,
            apiFilter          : _apiFilter,
            departmentFilter   :_departmentFilter,
            roleFilter         :_roleFilter
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
            if (angular.isUndefined(response.data.users) ) // || angular.isUndefined(response.data))
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