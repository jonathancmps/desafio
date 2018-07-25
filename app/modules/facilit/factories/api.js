angular.module('facilit')
    .factory('ApiFactory', function () {
        var factory = {
            getApiToView: _getApiToView,
            apiFilter: _apiFilter
            // valParcCalc: _valParcCalc,
            // totalCalc: _totalCalc
        }
        return factory;

        function _apiFilter(data) {
            return {
                name        : data.name,
                photo       : data.photo,
                department  : data.department,
                role        : data.role
                // valor: data.valor,
                // quantidade: data.quantidade,
                // valorParcial: _valParcCalc(data.valor, data.quantidade)
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

        // function _valParcCalc(valor, quantidade) {
        //     if (angular.isUndefined(valor) || (angular.isUndefined(quantidade)))
        //         var result = 0
        //     result = parseFloat(valor) * parseInt(quantidade);
        //     return result;
        // }

        // function _totalCalc(data) {
        //     if (angular.isUndefined(data))
        //         return 0;
        //     if (!Array.isArray(data))
        //         data = [data];

        //     var result = 0;
        //     angular.forEach(data, function (item) {
        //         result = result + (angular.isDefined(item.valorParcial) ? item.valorParcial : 0);
        //     });
        //     return result;
        // }


    })