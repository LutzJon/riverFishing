angular.module('sacReport').controller('reportsCtrl', function( $scope, $firebaseArray, $state, reportsData, reportService){
   $scope.test = 'this is the reports scope';
   console.log('reports');



  $scope.reports = $firebaseArray(reportsData);
   $scope.addReport = function(){
   	     newReportObj = {
   	     	name: $scope.report.name,
   	     	creator: $scope.report.creator,
   	     }
   	     console.log(newReportObj);
   	     $scope.reports.$add(newReportObj);
   };
   $scope.reports.$loaded().then(function(reports){
   	console.log('reports worked');
   });
   });
