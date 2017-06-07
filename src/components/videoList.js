angular.module('video-player')
.component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  // controller: function() {
  //   // console.log('videoList this', this);
  //   // console.log('stringify this', JSON.stringify(this));
  // },
  bindings: {
    videos: '<',
    onClick: '<'
  }
});




// <!--  <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>
//   <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry> -->

