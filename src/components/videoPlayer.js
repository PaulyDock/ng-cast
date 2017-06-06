angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    console.log('videoPlayer this', this);
    console.log('this.video', this.video);
  },
  bindings: {
    video: '<'
    // currentTitle: '<',
    // currentDescription: '<',
    // currentImage: '<',
  },
  controller: function() {
    this.videoUrl = () => {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`; //ternary oper. ??
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
