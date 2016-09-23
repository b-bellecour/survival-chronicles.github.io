function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('video-header', {
    videoId: 'UTtnBfjEWyQ', // YouTube Video ID
 
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      playlist: 'UTtnBfjEWyQ',
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 0,              // Hide the full screen button
      cc_load_policy: 1, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      start: 9,
      autohide: 1         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
 }