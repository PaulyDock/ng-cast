angular.module('video-player')
.controller('videoCtrlInit', ['$scope', function($scope) {
  $scope.videos = window.exampleVideoData;
}])

.component('app', {
  templateUrl: 'src/templates/app.html'
  // bindings: {
  //   video: '<'
  // }
  
});
