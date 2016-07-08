const playerMuted = false; // set to false if you want to hear BWONG sound effect

window.player = {};

// can extend yt player class
window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('player', {
    height: '0',
    width: '1',
    videoId: '1khghXRGb6k',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

}

window.onPlayerReady = (event) => {
  $('#menu-cast').addClass('wait');
  $('#menu-director').addClass('wait');
  $('#menu-about').addClass('wait');
  if(playerMuted)
    event.target.mute();
  // event.target.seekTo(1);
  event.target.playVideo(); 
}

window.onPlayerStateChange = (event) => {
  if (event.data == YT.PlayerState.PLAYING) {
    loadingScreen.finish();
    $('#menu-cast').addClass('wait');
    $('#menu-director').addClass('wait');
    $('#menu-about').addClass('wait');
  }
  else if(event.data == YT.PlayerState.ENDED) {
    $('#menu-cast').removeClass('wait');
    $('#menu-director').removeClass('wait');
    $('#menu-about').removeClass('wait');
  }
}
