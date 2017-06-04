/**
 * 
 */
//jQuery("#b1").click(function(){
//	alert("I'm running!");
//	jQuery("#showc").text("I'm running!");
//	console.log("I'm running!");
//});
//<button type="button" id = "b1">实验</button>

//var myApp = angular.module('codeApp',[]);

myApp.controller("showCode",function($scope){

//	$http.get('./public/code/linear_list/LinearList.h').then(function(){
//		console.log(response.data);
//		$scope.codes = response.data;
//	});
	
//	jQuery("#showc").load("./public/code/linear_list/LinearList.h");
	jQuery.ajaxSetup({ 		//设置同步，这是为了让全局变量存储
	    async : false 
	});  
	temp = jQuery.get("./public/code/linear_list/LinearList.h",function(data,status){
	});
	
	$scope.codes = temp.responseText;
//	console.log(temp.responseXML);
	console.log(temp);
//	console.log($scope.codes);
	
});

