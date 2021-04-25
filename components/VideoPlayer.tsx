import React, { useEffect, useRef, useState } from "react";
import { Video } from "expo-av";
import { Episode } from "../types";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = ({ episode }: VideoPlayerProps) => {
  const videoRef = useRef<Playback>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(!videoRef) return;
    (async () => {
      await videoRef.current?.unloadAsync();
      await videoRef.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  return (
    <Video
      ref={videoRef}
      style={{ flexGrow: 1, width: "100%", aspectRatio: 16 / 9 }}
      useNativeControls
      resizeMode={Video.RESIZE_MODE_CONTAIN}
      posterSource={{ uri: episode.poster }}
      posterStyle={{ resizeMode: "cover" }}
      
      // onPlaybackStatusUpdate={status => setIsLoaded(status.isLoaded)} 
    />
  );
};

export default VideoPlayer;
