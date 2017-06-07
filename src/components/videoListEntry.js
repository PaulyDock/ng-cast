angular.module('video-player')
// .controller('videoDataHolderController', videoDataHolderController)
.component('videoListEntry', {
  bindings: {
    image: '<',
    title: '<',
    description: '<',
    onClick: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
  
});