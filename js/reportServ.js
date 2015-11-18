angular.module('sacReport').service('reportService', function(fb){
  this.getReports = function() {
  	return new Firebase(fb.url + 'reports');
  };

  this.getReport = function(id) {
  	return new Firebase(fb.url+ 'reports/' + id);
  };
  
  this.getComments = function(id){
	return new Firebase(fb.url + 'reports/'+ id + '/comments');
};

  
});