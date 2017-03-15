
	var App = angular.module('myApp',[]);
	App.controller('loginCtr',function($scope,$http,$timeout){
/*	$scope.visible=false;*/
	//登陆验证
	$scope.mylogin=function(){
		$http.get("http://localhost:9090/ihs/login?identity="+$scope.identity+"&password="+$scope.password)
  			.success(function (data) {
  				if(data.result.authority=="1"){
  					location.replace("../../system/pages/superBar.html?user="+data.result.id);
  				}else if (data.result.authority=="2") {
  					location.replace("../../system/pages/docBar.html?user="+data.result.id);
  				}else if (data.result.authority=="3") {
  					location.replace("../../system/pages/patientBar.html?user="+data.result.identity);
  				}else{
          			document.getElementById("form").reset(); 
  				}
  			})
	}
	
});




