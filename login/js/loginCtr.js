
	var App = angular.module('myApp',['ui.router','ngResource',]);
	App.controller('loginCtr',function($scope,$state,$stateParams,$filter,$interval,$http,$timeout){
	$scope.visible=false;
	//登陆验证
	$scope.login=function(){
		$http.get("http://localhost:9090/ihs/login?id="+$scope.id+"&password="+$scope.password)
  			.success(function (data) {
  				if(data.result=="success1"){
  					location.replace("../../system/pages/superBar.html");
  				}else if (data.result=="success2") {
  					location.replace("../../system/pages/docBar.html");
  				}else if (data.result=="success3") {
  					location.replace("../../system/pages/visBar.html");
  				}else{
  					$scope.visible=true;
  					$timeout(function(){
              			return $scope.visible=false;
          			},3000);
          			document.getElementById("form").reset(); 
  				}
  			})
	}
	
});




