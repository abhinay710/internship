angular.module("MyApp",[]).controller("MyController",function($scope){
    $scope.count=0;
    $scope.onClick=function(){
       $scope.count+=1;
    };
    $scope.list=['hello','world','this'];
});