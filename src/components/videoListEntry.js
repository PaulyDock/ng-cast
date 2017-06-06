angular.module('video-player')
.controller('videoDataHolderController', videoDataHolderController)
.component('videoListEntry', {
  bindings: {
    video: '<',
    title: '<',
    description: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});

// var videoFeederController = function() {
//   this.video = window.exampleVideoData.map((video) => {
//     let obj = {};
//     obj.image = video.snippet.thumbnails.default;
//     obj.title = video.snippet.title;
//     obj.description = video.snippet.title;
//   });
//   console.log('this.videos', this.videos);

//   templateUrl: 'src/templates/videoListEntry.html';
  

// };


var videoDataHolderController = function() {
  video = window.exampleVideoData[0];
  console.log('videos', videos);
};