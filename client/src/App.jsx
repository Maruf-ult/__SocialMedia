import React from 'react'
import VideoPlayer from './components/VedioPlayer'

function App() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/path/to/video.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
     VideoPlayer.log('player is waiting');
    });

    player.on('dispose', () => {
      VideoPlayer.log('player will dispose');
    });
  };

  return (
      <>
     <div>Rest of app here</div>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
      </>
  )
}

export default App