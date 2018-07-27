angular.module('facilit')
.service('ApiService', function($http, $q){
    var uriApi      = 'http://localhost:8085/assets/api';
    var collection  = 'api';

    var service = {
        getApi      :   _getApi,
     }
    return  service;

    function _getApi(){
        var deferred = $q.defer();
        $http.get(uriApi+'/usuarios.json').then(function(response){
            deferred.resolve(response)
        }), function(error){
            deferred.reject(error);
            console.log(error)
        }
    
        return deferred.promise;
    } 
    
    function _listStorage(){
        return storage[collection];
    }
})




   
    
    // function _addStorage(data){
    //     if(!storage[collection])
    //         storage[collection] = [];
    //     storage[collection].push(data);
    // }    
    
    // function _delStorage(data){
    //     var lists = storage[collection];
    //     var _index;
    //     angular.forEach(lists, function(val){
    //         if(parseInt(val.id) === data.id)
    //             _index = val.id;
    //     });
    //     lists.splice(_index, 1);
                    
    // }

    // function totalSum(){
    //     var lists = storage[collection];
    //     var tota;
    //     angular.forEach(lists, function)
    // }