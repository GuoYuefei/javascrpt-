// JavaScript Document

$(document).ready(function(){

	//导航的动画
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");	//slideDown()  slideUp()  你懂的这两个函数是干嘛的，只演示Toggle的那个
	});		


});




//在jquery中使用angularJs部分
var myApp = angular.module('myApp',[]);

myApp.controller("reList",function($scope){
	$.ajaxSetup({ 		//设置同步，这是为了让全局变量存储
	    async : false 
	});  
	//返回的是json对象，里面有一个responseJSON的属性里面放了我们读取的json数据
	json1=$.get("./json/navigationList.json",function(res){},dataType="json");
	
	console.log("JSON:"+JSON.stringify(json1));
	$scope.list = json1.responseJSON.naviList;			//这个存储了导航条的json对象
	
	$.ajaxSetup({ 		//再次设置异步请求
	    async : true
	});  
	$scope.toLink = function(a){
		console.log(a.x);
		event.preventDefault();
		$("#main").load(a.x.link);
	}
	
	
});



