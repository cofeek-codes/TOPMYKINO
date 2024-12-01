var myVideo = document.getElementById('video');
if (typeof myVideo.loop == 'boolean') { // loop supported
  myVideo.loop = true;
} else { // loop property not supported
  myVideo.on('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
myVideo.play();
