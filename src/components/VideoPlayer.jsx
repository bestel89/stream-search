import YouTube, {YouTubeProps} from 'react-youtube'

export default function VideoPlayer({videoId}) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo()
    }


    const opts: YouTubeProps['opts'] = {
        // height: '390',
        // width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          origin: window.location.origin,
        },
    };


    return (
        <YouTube
            className="ratio ratio-16x9"
            videoId={videoId}
            opts={opts}
            onReady={onPlayerReady}
            allowFullScreen
        />
    )
}