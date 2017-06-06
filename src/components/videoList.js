angular.module('video-player')
.controller('videoListController', function($scope) {
  $scope.videos = window.exampleVideoData;
})
.component('videoList', {
  templateUrl: 'src/templates/videoList.html'
});


