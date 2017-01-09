
	var App = angular.module('myApp',['ui.router','ngResource',]);
	App.controller('loginCtr',function($scope,$state,$stateParams,$filter,$interval){
	
    function fadeIn(e) {
        e.className = "bg fadein"
    }

    function fadeOut(e) {
        e.className = "bg"
    }

    //申明图片数组中当前的轮播图片
    var cur_img = document.getElementById("imgs").children.length - 1;

    //图片轮播函数
    function turnImgs(imgs) {
    	var temp = document.getElementById("imgs");
    	if(temp == null)
    	{
    		$interval.cancel($scope.timer);
    		return;
    	}
        var imgs = temp.children;
        if (cur_img == 0) {
            fadeOut(imgs[cur_img]);
            cur_img = imgs.length - 1;
            fadeIn(imgs[cur_img]);
        } else {
            fadeOut(imgs[cur_img]);
            fadeIn(imgs[cur_img - 1]);
            cur_img--;
        }
    }
	
   /* $scope.$on('$viewContentLoaded', function() {
        //设置轮播间隔*/
        $scope.timer = $interval(function(imgs) {
    	var temp = document.getElementById("imgs");
    	if(temp == null)
    	{
    		$interval.cancel($scope.timer);
    		return;
    	}
        var imgs = temp.children;
        if (cur_img == 0) {
            fadeOut(imgs[cur_img]);
            cur_img = imgs.length - 1;
            fadeIn(imgs[cur_img]);
        } else {
            fadeOut(imgs[cur_img]);
            fadeIn(imgs[cur_img - 1]);
            cur_img--;
        }
    }, 6000);
/*    });*/
	

});




