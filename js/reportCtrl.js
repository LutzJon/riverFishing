angular.module('sacReport').controller('reportCtrl',function($scope, $firebaseObject, $firebaseArray, $state, commentData, reportData, reportService){
$scope.test = 'this is the scope on reportCtrl';

 var report = $firebaseObject(reportData);

 report.$bindTo($scope,'report');

 $scope.comments = $firebaseArray(commentData);

 $scope.addComment = function(){

 	 $scope.comments.$add($scope.newComment);
 };
});