angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.onClick = (video) => {
      console.log('this', this);
      console.log('video', video);
    };
  },
  templateUrl: 'src/templates/app.html'
});

