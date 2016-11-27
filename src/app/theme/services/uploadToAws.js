/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('uploadToAWS', uploadToAWS);

  /** @ngInject */
  function uploadToAWS($q,$rootScope,$http) {
   	
   	 uploadToAWS = {};
   	 
 var  uniqueID = function(){
      function chr4(){
        return Math.random().toString(16).slice(-4);
    }
    return chr4() + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() +
    '-' + chr4() + chr4() + chr4();
}

uploadToAWS.getS3Credentials =function(file,uniqueID){
    var extension = file.name.split('.').pop();
    var name = uniqueID()+"."+extension;
    var description = (file.description ? file.description : "file");
    var query =$rootScope.serviceURL+"auth/getSignedURL/"+name;

    return $http.get(query).then(function(response){
        return {url: response.data.url, file: file,name:name,description:description,contentType:response.data.contentType}
    });

}

	uploadToAWS.uploadFiles = function(files){
	  var q = $q.defer();   
	  var uploads = [];
	  var names = [];
	  if (files && files.length) {

	        for (var i = files.length - 1; i >= 0; i--) {         
	            var p = uploadToAWS.getS3Credentials(files[i],uniqueID).then(function(signed){
	            			if(localStorage.getItem("arcaToken")){// eliminar en produccion
	            				delete $http.defaults.headers.common.Authorization;// eliminar en produccion
	            			}// eliminar en produccion
	                         names.push({ endPoint:$rootScope.s3bucketURL+signed.name});
	                         return $http.put(signed.url,signed.file,{headers: {'Content-Type':signed.contentType}})         
	                })
	            uploads.push(p);
	        }    

	      return $q.all(uploads).then(function(){
	      	$rootScope.setAuthorizationToken()// eliminar en produccion
	        return names;
	      },function(err){
	      		$rootScope.setAuthorizationToken()// eliminar en produccion
	      		console.dir(err)
	      })
	    }
	    else{
	        q.resolve();
	    }

	return q.promise;
	}
	  

	    
	 return uploadToAWS;
   }
   
})();