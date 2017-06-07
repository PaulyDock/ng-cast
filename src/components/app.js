angular.module('video-player')
.component('app', {
  controller: function(youTube) {

    this.searchService = youTube;
    this.searchResults = (data) => {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
    };

    this.onClick = (video) => {
      this.currentVideo = video;
      // console.log('this', this);
      // console.log('video', video);
    };
  },
  templateUrl: 'src/templates/app.html'
});

